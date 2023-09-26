import fetch from 'node-fetch';

import { API_URL_OFFER } from 'constants/env';
import { apiRoutes } from 'constants/routes';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const method = req.method;
  const url = `${API_URL_OFFER}${apiRoutes.agent}`;

  switch (method) {
    case 'POST': {
      try {
        const { how_to_make: _, ...data } = req.body;
        // const { recaptcha: _recaptcha, ...data } = req.body;

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
            ...data,
          },
        };
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json',
            // Authorization: parseAuthorization(WRITE_API_KEY_OFFER),
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

        return res.status(200).json({ message: 'POST', ...result });
      } catch (err) {
        console.error(err);
        return res.status(403).end();
      }
    }
  }
};

export default handler;
