import fetch from 'node-fetch';

import { API_URL } from 'constants/env';
import { apiRoutes } from 'constants/routes';
import { initializeApollo } from 'lib/apollo/client';
import { PostStudentMutation, PostStudentDocument } from 'types/gql/graphql';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const method = req.method;
  const url = `${API_URL}${apiRoutes.register}`;
  const apolloClient = initializeApollo();

  switch (method) {
    case 'POST': {
      try {
        const { recaptcha: _recaptcha, ...data } = req.body;

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
            username: data.name,
            email: data.email,
            grade: data.grade,
            phone: data.phone,
            will_start_working: data.willStartWorking,
            is_interested_in_internship: data.isInterestedInInternship,
            line_id: data.lineId,
            department: data.department,
            password: data.lineId,
          },
        };
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(body.data),
          headers: {
            'Content-type': 'application/json',
            // Authorization: parseAuthorization(WRITE_API_KEY),
          },
        });
        const result = await response.json();

        // for student
        if (result?.user?.id) {
          const date = new Date(result.user.createdAt);
          const createdAt = `${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
          const { data: _studentData } =
            await apolloClient.mutate<PostStudentMutation>({
              mutation: PostStudentDocument,
              variables: {
                name: data.name,
                user_id: result.user.id,
                phone: data.phone,
                will_start_working: data.willStartWorking,
                is_interested_in_internship: data.isInterestedInInternship,
                line_id: data.lineId,
                grade_jp: data.grade,
                department_jp: data.department,
                registered_at: result.user.createdAt,
                grade_updated_at: createdAt,
                to_receive_job_info: data.toReceiveJobInfo,
                birthplace: data.birthplace,
                corse: data.corse,
              },
            });
        }

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
