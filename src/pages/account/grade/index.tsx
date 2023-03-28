// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/router';

import { Index as Form } from 'templates/Register/Grade';
import { Index as Check } from 'templates/Register/RegisterGradeCheck';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { ORIGIN_URL } from 'constants/env';
import { parseSeo } from '~/lib';
import { useFormProgressStore } from 'features/formProgress/hooks';
import {
  RegisterGradeFormSchema,
  registerGradeFormSchema,
} from '~/features/registerForm/schema';
import { useLiff } from 'contexts/LineAuthContext';
import { routes } from 'constants/routes';
import {
  useAccountStore,
  selectSetAccount,
  selectAccount,
} from 'features/account';

// type layer

// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const methods = useForm<RegisterGradeFormSchema>({
    resolver: yupResolver(registerGradeFormSchema),
  });
  const progress = useFormProgressStore((state) => state.progress);
  const [isClient, setIsClient] = useState(false);
  const { liff } = useLiff();
  const router = useRouter();
  const setAccount = useAccountStore(selectSetAccount);
  const account = useAccountStore(selectAccount);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      liff.login();
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
        const { email, username, grade, studentId } = res.data;
        setAccount({
          email: email as string,
          username: username as string,
          grade: grade as string,
          studentId: studentId as string,
        });

        router.push(routes.registered);
        window.scroll({ top: 0 });
      }
    };

    handler();
  }, [liff, liff?.isLoggedIn]);

  // if (!liff?.isLoggedIn() || !account.username) router.push(routes.home);

  const message = () => {
    if (isClient) {
      return (
        <>
          <SeoComponent canonical={CANONICAL_URL} {...seo} />
          <FormProvider {...methods}>
            <Form isHidden={progress !== 0} />
            <Check isHidden={progress !== 1} />
          </FormProvider>
        </>
      );
    } else {
      return <></>;
    }
  };

  return <>{message()}</>;
};

export default Index;
