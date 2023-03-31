import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { parseAuthorization } from 'lib/apollo/parse';
import { API_URL, WRITE_API_KEY } from 'constants/env';
import { apiRoutes } from 'constants/routes';

// type Data = {
//   name?: string;
//   email?: string;
//   kind?: string;
//   grade?: string;
//   phone?: string;
//   department?: string;
//   willStartWorking: boolean;
//   isInterestedInIntership: boolean;
//   lineId?: string;
// };

type Data = {
  message?: string;
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const method = req.method;
  const url = `${API_URL}${apiRoutes.register}`;

  switch (method) {
    case 'POST': {
      try {
        const { recaptcha, ...data } = req.body;

        // const recaptchaRes = await fetch(RECAPTCHA_URL, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        //   body: `secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${recaptcha}`,
        // });
        // const recaptchaResult = await recaptchaRes.json();

        // if (!recaptchaResult.success || recaptchaResult < 0.5) {
        //   console.log(`ng`);
        //   res.status(403).end();
        //   return;
        // }

        const body = {
          data: {
            username: data.name,
            email: data.email,
            // confirmed: false,
            // blocked: false,
            grade: data.grade,
            phone: data.phone,
            will_start_working: data.willStartWorking,
            is_interested_in_internship: data.isInterestedInInternship,
            line_id: data.lineId,
            department: data.department,
            password: data.lineId,
          },
        };
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(body.data),
          headers: {
            'Content-type': 'application/json',
            // Authorization: parseAuthorization(WRITE_API_KEY),
          },
        });
        const result = await response.json();

        if (result?.error?.status === 403) {
          res.status(403).json({ error: result?.error?.message });
          return;
        } else if (result?.error?.status === 500) {
          res.status(500).json({ error: result?.error?.message });
          return;
        } else if (result?.data === null) {
          res.status(result?.error?.status ?? 403).end();
          return;
        }

        res.status(200).json({ message: 'POST', ...result });
      } catch (err: any) {
        console.error(err);
        res.status(403).end();
      }
      break;
    }
  }
};

export default handler;
