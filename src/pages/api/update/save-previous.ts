import { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from 'lib/apollo/client';
import {
  PostPreviousStudentMutation,
  PostPreviousStudentDocument,
} from 'types/gql/graphql';

export type RequestProps = {
  grade: string;
  name: string;
  line_id: string;
  department: string;
  grade_updated_at: string;
  registered_at: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const apolloClient = initializeApollo();

  switch (method) {
    case 'POST': {
      try {
        const {
          grade,
          name,
          line_id,
          department,
          grade_updated_at,
          registered_at,
        } = body as RequestProps;
        const now = new Date(grade_updated_at);
        const updatedAt = `${now.getFullYear()}-${(now.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        const { data } = await apolloClient.mutate<PostPreviousStudentMutation>(
          {
            mutation: PostPreviousStudentDocument,
            variables: {
              grade,
              name,
              line_id,
              department,
              grade_updated_at: updatedAt,
              registered_at: registered_at,
            },
          }
        );

        res.status(200).json({
          exist: true,
          // grade: resp.data.grade_jp,
          grade: data?.createStudents2023?.data?.attributes?.grade_jp,
          // studentId: resp.data?.id,
          studentId: data?.createStudents2023?.data?.id,
          gradeUpdatedAt:
            data?.createStudents2023?.data?.attributes?.grade_updated_at,
          username: data?.createStudents2023?.data?.attributes?.name,
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
