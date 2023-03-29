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
  grade?: string;
  studentId?: string;
  gradeUpdatedAt?: string;
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
          res
            .status(200)
            .json({ exist: false, email: undefined, username: undefined });
          return;
        }
        const {
          email,
          username,
          grade,
          student: {
            data: {
              id,
              attributes: {
                line_id,
                to_receive_job_info,
                grade_jp,
                grade_updated_at,
                name,
              },
            },
          },
        } = data.usersPermissionsUsers.data[0].attributes;

        if (!data?.usersPermissionsUsers?.data?.[0].attributes?.confirmed) {
          res.status(200).json({
            exist: false,
            email,
            username,
            grade: grade_jp,
            studentId: id,
            gradeUpdatedAt: grade_updated_at,
          });
        }
        res.status(200).json({
          exist: true,
          email,
          username,
          grade: grade_jp,
          studentId: id,
          gradeUpdatedAt: grade_updated_at,
        });
      } catch (err: any) {
        console.error(err);
        res.status(403).end();
      }
      break;
    }
  }
};

export default handler;
