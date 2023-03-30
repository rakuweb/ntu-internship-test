// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';
import axios from 'axios';
import { useRouter } from 'next/router';

import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { ORIGIN_URL } from 'constants/env';
import { parseSeo } from '~/lib';
import { useLiff } from 'contexts/LineAuthContextInternship';
import { routes } from 'constants/routes';
import { useAccountStore } from 'features/account/hooks';
import { selectSetAccount, selectSetLineId } from 'features/account/selectors';
import { Index as Authenticating } from 'components/templates/Register/Authenticating';
import {
  useStudentStore,
  selectSetStudent,
  selectStudent,
} from 'features/student';

// type layer

const CAFE_ENTRY_QUERY = 'admissionapplication';
// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const [isClient, setIsClient] = useState(false);
  const { liff } = useLiff();
  const router = useRouter();
  const setAccount = useAccountStore(selectSetAccount);
  const setLineId = useAccountStore(selectSetLineId);
  const setStudent = useStudentStore(selectSetStudent);
  const student = useStudentStore(selectStudent);
  const [connected, setConnected] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(null);

  useEffect(() => {
    if (!router?.query) return;

    setQuery(router.query.cafeonly as string);
    setIsClient(true);
  }, [router, router?.query?.cafeonly]);

  useEffect(() => {
    if (query === null) return;

    if (query === '' || typeof query === undefined) {
      router.push(routes.signin);
      return;
    }

    const signin = async () => {
      if (!liff) return;
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    };

    signin();
  }, [isClient, liff, query]);

  // アカウント確認
  useEffect(() => {
    // line ログイン
    if (!liff || !liff.isLoggedIn()) return;
    if (query === null) return;
    if (!query) router.push(routes.signin);

    const url = `${ORIGIN_URL}${routes.apiAccount}`;
    // 非同期関数 useEffect対策
    const handler = async () => {
      try {
        const profile = await liff.getProfile();
        // strapiへユーザアカウント確認
        const res = await axios.get(url, {
          params: {
            lineId: profile.userId,
          },
        });

        const { exist } = res.data;
        if (exist) {
          const {
            email,
            username,
            grade,
            studentId,
            gradeUpdatedAt,
            registeredAt,
          } = res.data;
          console.log(res.data);
          setLineId(profile.userId);
          setAccount({
            email: email as string,
            username: username as string,
            grade: grade as string,
            studentId: studentId as string,
          });
          setStudent({
            id: studentId,
            username: username,
            grade: grade,
            gradeUpdatedAt: gradeUpdatedAt ? new Date(gradeUpdatedAt) : null,
            registeredAt: registeredAt ? new Date(registeredAt) : null,
          });

          setConnected(true);
        } else {
          router.push(routes.register);
        }
      } catch (err) {
        console.error(err);
      }
    };

    handler();
  }, [liff, liff?.isLoggedIn()]);

  useEffect(() => {
    if (!connected) return;
    // 学年更新をしているか確認
    if (student?.id && !student?.gradeUpdatedAt) {
      router.push(routes.accountGrade);
    } else if (student?.id && student?.gradeUpdatedAt) {
      if (query === CAFE_ENTRY_QUERY) {
        router.push(routes.accountCard);
      } else {
        router.push(routes.signinMembercard);
      }
    }
  }, [liff, liff?.isLoggedIn(), connected]);

  const message = () => {
    if (isClient) {
      return (
        <>
          <Authenticating />
        </>
      );
    } else {
      return <></>;
    }
  };

  return <>{message()}</>;
};

export default Index;
