// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';
import { FormProvider, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import { Index as Form } from 'templates/Register/Grade';
import { Index as Check } from 'templates/Register/RegisterGradeCheck';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { parseSeo } from '~/lib';
import { useFormProgressStore } from 'features/formProgress/hooks';
import {
  RegisterGradeFormSchema,
  // registerGradeFormSchema,
} from '~/features/registerForm/schema';
import { routes } from 'constants/routes';
import { useAccountStore } from 'features/account';
import { useStudentStore, selectStudent } from 'features/student';
import { CAFE_ENTRY_QUERY } from '~/constants';

// type layer

// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const methods = useForm<RegisterGradeFormSchema>({
    // resolver: yupResolver(registerGradeFormSchema),
  });
  const progress = useFormProgressStore((state) => state.progress);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { lineId } = useAccountStore();
  const student = useStudentStore(selectStudent);
  const [query, setQuery] = useState<string>(null);

  useEffect(() => {
    if (!router?.query) return;

    router.query?.cafeonly && setQuery(router.query.cafeonly as string);
    setIsClient(true);
  }, [router, router?.query?.cafeonly]);

  useEffect(() => {
    if (!isClient) return;

    if (!lineId || !student?.id) {
      if (query === CAFE_ENTRY_QUERY) {
        router.push(`${routes.signinCafeonly}?cafeonly=${CAFE_ENTRY_QUERY}`);
      } else {
        router.push(`${routes.signin}`);
      }
    }
  }, [lineId, student, query]); // eslint-disable-line

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
