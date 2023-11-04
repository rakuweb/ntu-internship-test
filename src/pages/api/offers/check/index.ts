import fetch from 'node-fetch';

import { API_URL_OFFER } from 'constants/env';
import { apiRoutes } from '~/constants';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;

  switch (method) {
    case 'PUT': {
      try {
        const { id } = req.body;
        const url = `${API_URL_OFFER}${apiRoutes.offerId(id)}`;

        const body = { data: { check: true } };
        const response = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json',
            // Authorization: parseAuthorization(
            //   WRITE_API_KEY_OFFER
            // ),
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

        res.status(200).json({ message: 'PUT' });
      } catch (err) {
        console.error(err);
        res.status(403).end();
      }
      break;
    }
  }
};

export default handler;
