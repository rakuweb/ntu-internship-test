import { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from 'lib/apollo/client';
import {
  PostVisitCountMutation,
  PostVisitCountDocument,
  GetVisitCountsByStudentIdAndDatesQuery,
  GetVisitCountsByStudentIdAndDatesDocument,
  GetVisitCountsByStudentIdQuery,
  GetVisitCountsByStudentIdDocument,
} from 'types/gql/graphql';

export type RequestProps = {
  id: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const apolloClient = initializeApollo();
  const { id } = body as RequestProps;
  const now = new Date();

  switch (method) {
    case 'POST': {
      try {
        const date = now.toISOString();
        const start_date = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          0,
          0,
          0
        ).toISOString();
        const nextday = new Date();
        nextday.setDate(nextday.getDate() + 1);
        nextday.setHours(0);
        nextday.setMinutes(0);
        nextday.setSeconds(0);
        nextday.setMilliseconds(0);
        const end_date = nextday.toISOString();

        const { data: getData } =
          await apolloClient.query<GetVisitCountsByStudentIdAndDatesQuery>({
            query: GetVisitCountsByStudentIdAndDatesDocument,
            variables: {
              id: id,
              start_date: start_date,
              end_date: end_date,
            },
          });

        // if (getData?.visitCounts?.meta?.pagination?.total > 0) {
        //   res.status(201).end();
        //   return;
        // }

        ///
        const { data } = await apolloClient.mutate<PostVisitCountMutation>({
          mutation: PostVisitCountDocument,
          variables: {
            id,
            date,
          },
        });

        res.status(200).json({
          date: data?.createVisitCount?.data?.attributes?.date,
        });
      } catch (err: any) {
        console.error(err);
        res.status(500).end();
      }
      break;
    }
    case 'GET': {
      try {
        const { id } = req.query;
        const { data } =
          await apolloClient.query<GetVisitCountsByStudentIdQuery>({
            query: GetVisitCountsByStudentIdDocument,
            variables: {
              id: id,
            },
          });

        if (!data?.visitCounts) {
          res.status(400).end();
          return;
        }

        const total = data.visitCounts.meta?.pagination?.total;
        const thisMonthStart = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          0,
          0,
          0
        );
        thisMonthStart.setDate(1);

        const nextMonthStart = new Date(thisMonthStart);
        nextMonthStart.setMonth(nextMonthStart.getMonth() + 1);

        const countsThisMonth = data.visitCounts.data.filter((count) => {
          const date = new Date(count.attributes?.date);
          return (
            thisMonthStart.getTime() <= date.getTime() &&
            date.getTime() < nextMonthStart.getTime()
          );
        }).length;
        res
          .status(200)
          .json({ total: total, countsThisMonth: countsThisMonth });
      } catch (err) {
        res.status(500).end();
      }
    }
  }
};

export default handler;
