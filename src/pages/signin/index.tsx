// import layer
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

import { Index as Authenticating } from 'components/templates/Register/Authenticating';
import { routes } from 'constants/routes';
import { useLiff } from 'contexts/LineAuthContextInternship';
import { useAccountStore } from 'features/account/hooks';
import {
  selectSetAccount,
  selectPrevPath,
  selectSetPrevPath,
  selectSetLineId,
} from 'features/account/selectors';
import { useStudentStore, selectSetStudent } from 'features/student';
import { ORIGIN_URL } from '~/constants';

// type layer

// component layer
export const Index: NextPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [connected, setConnected] = useState<boolean>(false);
  const { liff } = useLiff();
  const router = useRouter();
  const setAccount = useAccountStore(selectSetAccount);
  const account = useAccountStore((state) => ({
    lineId: state.lineId,
    id: state.studentId,
  }));
  const setLineId = useAccountStore(selectSetLineId);
  const setStudent = useStudentStore(selectSetStudent);
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

    const handler = async () => {
      try {
        const profile = await liff.getProfile();

        const res = await axios.get(routes.apiAccount, {
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
            department,
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
            department,
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

    // 学年更新をしているか確認
    const handler = async () => {
      const url = `${ORIGIN_URL}${routes.apiIsUpdated}`;
      const res = await axios
        .get(url, { params: { id: account.id } })
        .catch((err) => {
          console.error(err);
          return null;
        });
      if (res === null) {
        alert('更新済みアカウントか確認できませんでした。');
        return;
      }
      const resData = res.data;
      if (!resData.isUpdated) {
        router.push(`${routes.accountGrade}`);
        return;
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
          if (window?.location?.href?.includes('liff')) {
            router.push(routes.signinMembercard);
          }
          // それ以外はhomeへ
          router.push(routes.home);
        }
      }
    };
    handler();
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
