import type { NextApiRequest, NextApiResponse } from 'next';

import {
  GetStudents2023sByLineIdQuery,
  GetStudents2023sByLineIdDocument,
} from 'types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';

type Data = {
  isUpdated: boolean;
  name?: string;
  gradeUpdatedAt?: string;
  registeredAt?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const method = req.method;
  const apolloClient = initializeApollo();

  switch (method) {
    case 'GET': {
      try {
        const { lineId } = req.query;
        if (!lineId) {
          res.status(200).json({ isUpdated: false });
          return;
        }
        const { data } =
          await apolloClient.query<GetStudents2023sByLineIdQuery>({
            query: GetStudents2023sByLineIdDocument,
            variables: { lineId },
          });
        if (
          !data?.students2023S?.data ||
          data?.students2023S?.data.length !== 1
        ) {
          res.status(200).json({ isUpdated: false });
          return;
        }
        const {
          attributes: { name, grade_updated_at, createdAt },
        } = data.students2023S.data[0];

        res.status(200).json({
          isUpdated: true,
          name,
          gradeUpdatedAt: grade_updated_at,
          registeredAt: createdAt,
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
