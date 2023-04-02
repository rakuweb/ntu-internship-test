// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';
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
import { selectSetAccount, selectAccount } from 'features/account/selectors';
import { useStudentStore, selectSetStudent } from 'features/student';

// type layer
// type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const methods = useForm<RegisterFormSchema>({
    defaultValues: { willStartWorking: false, isInterestedInInternship: false },
    resolver: yupResolver(registerFormSchema),
  });
  const progress = useFormProgressStore((state) => state.progress);
  const [isClient, setIsClient] = useState(false);
  const { liff } = useLiff();
  const router = useRouter();
  const setAccount = useAccountStore(selectSetAccount);
  const setStudent = useStudentStore(selectSetStudent);
  const { lineId } = useAccountStore();

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
      const _lineId = lineId ?? (await liff.getProfile()).userId;

      const res = await axios.get(url, {
        params: {
          lineId: _lineId,
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

        router.push(routes.signin);
        window.scroll({ top: 0 });
      }
    };

    handler();
  }, [liff, liff?.isLoggedIn, isClient]);

  const message = () => {
    if (isClient) {
      return (
        <>
          <SeoComponent
            canonical={CANONICAL_URL}
            title={title}
            description={description}
          />
          <FormProvider {...methods}>
            <Form isHidden={progress !== 0} />
            <Check isHidden={progress !== 1} />
          </FormProvider>
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
