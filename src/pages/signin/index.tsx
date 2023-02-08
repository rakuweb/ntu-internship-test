// import layer
import { useState, useEffect } from 'react';
import { NextPage, InferGetStaticPropsType } from 'next/types';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/router';

import { Index as Form } from 'templates/Register';
import { Index as Check } from 'templates/Register/RegisterCheck';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { ORIGIN_URL } from 'constants/env';
import { parseSeo } from '~/lib';
import { useFormProgressStore } from 'features/formProgress/hooks';
import {
  RegisterFormSchema,
  registerFormSchema,
} from '~/features/registerForm/schema';
import { useLiff } from 'contexts/LineAuthContextInternship';
import { routes } from 'constants/routes';
import { useAccountStore } from 'features/account/hooks';
import { selectSetAccount } from 'features/account/selectors';

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

        // router.push(routes.registered);
        // window.scroll({ top: 0 });
        window.location.href = `https://docs.google.com/forms/d/e/1FAIpQLSfWgORsIK6vVlPVXMSQ5ObZiB46Ih1gmMhgUbdbJDIIJ5iqKg/viewform`;
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
      return <></>;
    } else {
      return <></>;
    }
  };

  return <>{message()}</>;
};

export default Index;
