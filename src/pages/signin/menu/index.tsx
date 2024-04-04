// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';
import axios from 'axios';
import { useRouter } from 'next/router';

import { ORIGIN_URL } from 'constants/env';
import { useLiff } from 'contexts/LineAuthContextInternship';
import { routes } from 'constants/routes';
import { useAccountStore } from 'features/account/hooks';
import { selectSetAccount, selectSetLineId } from 'features/account/selectors';
import { Index as Authenticating } from 'components/templates/Register/Authenticating';
import { useStudentStore, selectSetStudent } from 'features/student';
import { CAFE_ENTRY_QUERY } from '~/constants';

// type layer

// component layer
export const Index: NextPage = () => {
  const [isClient, setIsClient] = useState(false);
  const { liff } = useLiff();
  const router = useRouter();
  const setAccount = useAccountStore(selectSetAccount);
  const account = useAccountStore((state) => ({ lineId: state.lineId }));
  const setLineId = useAccountStore(selectSetLineId);
  const setStudent = useStudentStore(selectSetStudent);
  const [connected, setConnected] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(null);

  useEffect(() => {
    if (!router?.query) return;

    setQuery((router?.query?.cafeonly as string) ?? '');
    setIsClient(true);
  }, [router, router?.query?.cafeonly]);

  useEffect(() => {
    if (!isClient) return;
    if (query === null) return;

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
    if (!isClient) return;
    // if (query === null) return;
    // if (!query) router.push(routes.signin);

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
        setLineId(profile.userId);

        const { exist } = res.data;
        // アカウント作成済みか
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
            department: department,
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
  }, [liff, liff?.isLoggedIn(), query]); // eslint-disable-line

  useEffect(() => {
    // api接続が完了したら
    if (!connected) return;
    // 学年更新をしているか確認
    const handler = async () => {
      const url = `${ORIGIN_URL}${routes.apiIsUpdated}`;
      const res = await axios
        .get(url, { params: { lineId: account.lineId } })
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
      } else {
        router.push(routes.signinMembercard);
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
