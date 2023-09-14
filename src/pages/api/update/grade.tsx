import { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from 'lib/apollo/client';
import { UpdpateGradeMutation, UpdpateGradeDocument } from 'types/gql/graphql';

export type RequestProps = {
  grade: string;
  to_receive_job_info: boolean;
  line_id: string;
  id: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const apolloClient = initializeApollo();

  switch (method) {
    case 'POST': {
      try {
        const { id, grade, to_receive_job_info } = body as RequestProps;
        const now = new Date();
        const updatedAt = `${now.getFullYear()}-${(now.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        // const resp = await axios.put(`${API_URL}${apiRoutes.students}/${id}`, {
        //   id,
        //   grade,
        //   to_receive_job_info,
        //   updated_at: updatedAt,
        // });
        const { data } = await apolloClient.mutate<UpdpateGradeMutation>({
          mutation: UpdpateGradeDocument,
          variables: {
            id,
            grade,
            to_receive_job_info,
            updated_at: updatedAt,
          },
        });

        res.status(200).json({
          exist: true,
          // grade: resp.data.grade_jp,
          grade: data?.updateStudent?.data?.attributes?.grade_jp,
          // studentId: resp.data?.id,
          studentId: data?.updateStudent?.data?.id,
          gradeUpdatedAt:
            data?.updateStudent?.data?.attributes?.grade_updated_at,
          username: data?.updateStudent?.data?.attributes?.name,
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
