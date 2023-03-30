import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';
import { useRouter } from 'next/router';

import { Index as Template } from '~/components/templates/Member';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from '~/constants';
import { parseSeo } from '~/lib';
import { routes } from 'constants/routes';
import {
  useStudentStore,
  selectStudent,
  selectSetVisitCounts,
} from 'features/student';
import { ORIGIN_URL } from '~/constants/env';
import axios from 'axios';

// type layer

// component layer
export const Index: NextPage = () => {
  console.log('account/card');
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const student = useStudentStore(selectStudent);
  const setVisitCounts = useStudentStore(selectSetVisitCounts);
  const [counted, setCounted] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!student?.id || !student?.gradeUpdatedAt) return;
    if (student.grade === '卒業生') {
      router.push(routes.accountGraduation);
    }

    if (counted) return;
    if (!isClient) return;

    const handler = async () => {
      const apiUrl = `${ORIGIN_URL}${routes.apitVisitCount}`;
      try {
        await axios.post(apiUrl, { id: student.id });
        setCounted(true);
      } catch (err) {
        console.error(err);
      }
    };

    handler();
  }, [student, counted, isClient]);

  useEffect(() => {
    if (connected) return;
    if (!student?.id || !student?.gradeUpdatedAt) return;

    if (!isClient) return;

    if (!counted) return;

    const handler = async () => {
      const apiUrl = `${ORIGIN_URL}${routes.apitVisitCount}`;
      try {
        const res = await axios.get(apiUrl, { params: { id: student?.id } });

        const data = res.data;
        if (!data?.total === undefined || !data?.countsThisMonth === undefined)
          return;
        console.log(data);
        setVisitCounts({
          totalVisitCount: data?.total ?? 0,
          visitCountOfMonth: data?.countsThisMonth ?? 0,
        });
        setConnected(true);
      } catch (err) {
        console.error(err);
      }
    };

    handler();
  }, [isClient, counted, student, connected]);

  const message = () => {
    if (isClient) {
      return (
        <>
          <SeoComponent
            canonical={CANONICAL_URL}
            title={title}
            description={description}
          />
          <Template />
        </>
      );
    } else {
      return (
        <>
          {' '}
          <SeoComponent
            canonical={CANONICAL_URL}
            title={title}
            description={description}
          />
        </>
      );
    }
  };

  return <>{message()}</>;
};

export default Index;
