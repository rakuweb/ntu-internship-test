import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { parseAuthorization } from 'lib/apollo/parse';
import { API_URL, WRITE_API_KEY } from 'constants/env';
import { apiRoutes } from 'constants/routes';
import {
  GetUsersByLineIdQuery,
  GetUsersByLineIdDocument,
} from 'types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';

type Data = {
  exist: boolean;
  email?: string;
  username?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const method = req.method;
  const apolloClient = initializeApollo();

  switch (method) {
    case 'GET': {
      try {
        const { lineId } = req.query;
        const { data } = await apolloClient.query<GetUsersByLineIdQuery>({
          query: GetUsersByLineIdDocument,
          variables: { lineId },
        });
        if (
          !data?.usersPermissionsUsers?.data ||
          data?.usersPermissionsUsers?.data.length !== 1
        ) {
          res.status(200).json({ exist: false });
          return;
        }
        const { email, username } =
          data.usersPermissionsUsers.data[0].attributes;

        res.status(200).json({ exist: true, email, username });
      } catch (err: any) {
        console.error(err);
        res.status(403).end();
      }
      break;
    }
  }
};

export default handler;
