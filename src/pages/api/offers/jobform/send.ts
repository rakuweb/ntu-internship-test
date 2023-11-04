import fetch from 'node-fetch';

import { API_URL_OFFER } from 'constants/env';
import { apiRoutes } from '~/constants';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const url = `${API_URL_OFFER}${apiRoutes.submissions}`;

  switch (method) {
    case 'POST': {
      try {
        const { ...data } = req.body;

        // const recaptchaRes = await fetch(RECAPTCHA_URL, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        //   body: `secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${recaptcha}`,
        // });
        // const recaptchaResult = await recaptchaRes.json();
        //
        // if (!recaptchaResult.success || recaptchaResult < 0.5) {
        //   console.log(`ng`);
        //   res.status(403).end();
        //   return;
        // }

        const body = { data: { ...data } };
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
          res.status(403).end();
          return;
        } else if (result?.error?.status === 500) {
          res.status(500).end();
          return;
        } else if (result?.data === null) {
          res.status(result?.error?.status ?? 403).end();
          return;
        }

        res.status(200).json({ message: 'POST' });
      } catch (err) {
        console.error(err);
        res.status(403).end();
      }
      break;
    }
  }
};

export default handler;
