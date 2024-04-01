import { initializeApollo } from 'lib/apollo/client';
import {
  GetUsersByLineIdQuery,
  GetUsersByLineIdDocument,
} from 'types/gql/graphql';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  exist: boolean;
  email?: string;
  username?: string;
  grade?: string;
  studentId?: string;
  gradeUpdatedAt?: string;
  registeredAt?: string;
  department?: string;
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
          student: {
            data: {
              id,
              attributes: {
                grade_jp,
                grade_updated_at,
                registered_at,
                department_jp,
              },
            },
          },
        } = data.usersPermissionsUsers.data[0].attributes;

        if (!data?.usersPermissionsUsers?.data?.[0].attributes?.confirmed) {
          return res.status(200).json({
            exist: false,
            email,
            username,
            grade: grade_jp,
            studentId: id,
            gradeUpdatedAt: grade_updated_at,
            registeredAt: registered_at,
            department: department_jp,
          });
        }
        res.status(200).json({
          exist: true,
          email,
          username,
          grade: grade_jp,
          studentId: id,
          gradeUpdatedAt: grade_updated_at,
          registeredAt: registered_at,
          department: department_jp,
        });
      } catch (err) {
        console.error(err);
        res.status(403).end();
      }
      break;
    }
  }
};

export default handler;
