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
import {
  selectSetAccount,
  selectPrevPath,
  selectSetPrevPath,
} from 'features/account/selectors';
import { Index as Authenticating } from 'components/templates/Register/Authenticating';

// type layer
// type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const [isClient, setIsClient] = useState(false);
  const { liff } = useLiff();
  const router = useRouter();
  const setAccount = useAccountStore(selectSetAccount);
  const prevPath = useAccountStore(selectPrevPath);
  const setPrevPath = useAccountStore(selectSetPrevPath);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // useEffect(() => {
  //   if (!liff) return;
  //   if (!liff.isLoggedIn()) {
  //     liff.login(); //{ redirectUri: redirectUri });
  //   }
  // }, [liff]);

  useEffect(() => {
    if (!liff || !liff.isLoggedIn()) return;
    const url = `${ORIGIN_URL}${routes.apiAccount}`;

    const handler = async () => {
      const profile = await liff.getProfile();

      const res = await axios.get(url, {
        params: {
          lineId: profile.userId,
        },
      });

      const { exist, username, email } = res.data;
      if (exist) {
        const { email, username } = res.data;
        setAccount({ email: email as string, username: username as string });
        const nextPath = prevPath.slice();
        setPrevPath('');
        const lsNextPath = window.localStorage.getItem('prevUrl');

        console.log('aaaaa', lsNextPath);
        if (lsNextPath.startsWith('https')) {
          window.location.href = lsNextPath;
        } else {
          nextPath ? router.push(nextPath) : router.push(lsNextPath);
          window.scroll({ top: 0 });
        }
      } else {
        router.push(routes.signinFailed);
        window.scroll({ top: 0 });
      }
      // else if (email) {
      //   setAccount({ email: email as string, username: username as string });
      //   router.push(routes.confirm);
      // }
    };

    handler();
  }, [liff, liff?.isLoggedIn]);

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
