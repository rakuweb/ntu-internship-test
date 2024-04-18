import type { NextApiRequest, NextApiResponse } from 'next';

import { GetStudentByIdQuery, GetStudentByIdDocument } from 'types/gql/graphql';
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

  const isAfterAprilFirst2024 = (dateString: string): boolean => {
    const date = new Date(dateString);
    // 2024年4月1日の日付を作成
    const targetDate = new Date('2024-04-01T00:00:00Z');

    // 引数で受け取った日付が2024年4月1日以降かどうかを判定
    return date >= targetDate;
  };

  switch (method) {
    case 'GET': {
      try {
        const { id } = req.query;
        if (!id) {
          res.status(200).json({ isUpdated: false });
          return;
        }
        const { data } = await apolloClient.query<GetStudentByIdQuery>({
          query: GetStudentByIdDocument,
          variables: { id },
        });
        if (!data?.student.data) {
          res.status(200).json({ isUpdated: false });
          return;
        }
        const {
          attributes: { name, grade_updated_at, registered_at },
        } = data.student.data;

        res.status(200).json({
          isUpdated: isAfterAprilFirst2024(grade_updated_at),
          name,
          gradeUpdatedAt: grade_updated_at,
          registeredAt: registered_at,
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
