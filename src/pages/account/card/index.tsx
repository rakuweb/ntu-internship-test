import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

import { routes } from 'constants/routes';
import {
  useStudentStore,
  selectStudent,
  selectSetVisitCounts,
} from 'features/student';
import { SeoComponent } from 'organisms/SeoComponent';
import { Index as Template } from '~/components/templates/Member';
import { CANONICAL_URL } from '~/constants';
import { ORIGIN_URL } from '~/constants/env';

// type layer

// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
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
      // 卒業生は使用不可
      router.push(routes.accountGraduation);
    }

    // すでにvisit countしていたら
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
  }, [student, counted, isClient]); // eslint-disable-line

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
  }, [isClient, counted, student, connected]); // eslint-disable-line

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
        <SeoComponent
          canonical={CANONICAL_URL}
          title={title}
          description={description}
        />
      );
    }
  };

  return <>{message()}</>;
};

export default Index;
