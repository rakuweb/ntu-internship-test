// import layer
import { useState, useEffect } from 'react';
import { NextPage, InferGetStaticPropsType } from 'next/types';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
import { useLiff } from 'contexts/LineAuthContext';
import { routes } from 'constants/routes';

// type layer
// type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const redirectUri = `${ORIGIN_URL}${routes.register}`;
  const methods = useForm<RegisterFormSchema>({
    defaultValues: { willStartWorking: false, isInterestedInInternship: false },
    resolver: yupResolver(registerFormSchema),
  });
  const progress = useFormProgressStore((state) => state.progress);
  const [isClient, setIsClient] = useState(false);
  const { liff } = useLiff();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
    liff.login() //{ redirectUri: redirectUri });
      const profile = liff.getProfile();
    }
  }, [liff]);

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
