// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';
import axios from 'axios';
import { useRouter } from 'next/router';

import { ORIGIN_URL } from 'constants/env';
import { useLiff } from 'contexts/LineAuthContextInternship';
import { routes } from 'constants/routes';
import { useAccountStore } from 'features/account/hooks';
import {
  selectSetAccount,
  selectPrevPath,
  selectSetPrevPath,
  selectSetLineId,
} from 'features/account/selectors';
import {
  useStudentStore,
  selectSetStudent,
  selectStudent,
} from 'features/student';
import { Index as Authenticating } from 'components/templates/Register/Authenticating';

// type layer

// component layer
export const Index: NextPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [connected, setConnected] = useState<boolean>(false);
  const { liff } = useLiff();
  const router = useRouter();
  const setAccount = useAccountStore(selectSetAccount);
  const setLineId = useAccountStore(selectSetLineId);
  const setStudent = useStudentStore(selectSetStudent);
  const student = useStudentStore(selectStudent);
  const prevPath = useAccountStore(selectPrevPath);
  const setPrevPath = useAccountStore(selectSetPrevPath);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      liff.login(); //{ redirectUri: redirectUri });
    }
  }, [liff]);

  useEffect(() => {
    if (!liff || !liff.isLoggedIn()) return;
    const url = `${ORIGIN_URL}${routes.apiAccount}`;

    const handler = async () => {
      try {
        const profile = await liff.getProfile();

        const res = await axios.get(url, {
          params: {
            lineId: profile.userId,
          },
        });
        setLineId(profile.userId);

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
        router.push(routes.signinFailed);
        window.scroll({ top: 0 });
      }
    };

    handler();
  }, [liff, liff?.isLoggedIn()]); // eslint-disable-line

  useEffect(() => {
    // api接続が完了したら
    if (!connected) return;

    if (student?.id && !student?.gradeUpdatedAt) {
      router.push(`${routes.accountGrade}`);
    }

    const nextPath = prevPath.slice();
    setPrevPath('');
    const lsNextPath = window.localStorage.getItem('prevUrl')?.slice();
    window.localStorage.removeItem('prevUrl');

    if (lsNextPath?.startsWith('https')) {
      // 下のページへ移動
      window.location.href = lsNextPath;
    } else {
      if (nextPath) {
        nextPath ? router.push(nextPath) : router.push(lsNextPath);
        window.scroll({ top: 0 });
      } else {
        // それ以外はカードへ
        router.push(routes.signinMembercard);
      }
    }
  }, [liff, liff?.isLoggedIn(), connected]); // eslint-disable-line

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
