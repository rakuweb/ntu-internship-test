// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import { Index as Form } from 'templates/Register/Grade';
import { Index as Check } from 'templates/Register/RegisterGradeCheck';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { parseSeo } from '~/lib';
import { useFormProgressStore } from 'features/formProgress/hooks';
import {
  RegisterGradeFormSchema,
  registerGradeFormSchema,
} from '~/features/registerForm/schema';
import { routes } from 'constants/routes';
import { useAccountStore } from 'features/account';
import { useStudentStore, selectStudent } from 'features/student';

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
  const router = useRouter();
  const { lineId } = useAccountStore();
  const student = useStudentStore(selectStudent);
  console.log(lineId);
  console.log(student);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!lineId || !student?.id) router.push(routes.signinCafeonly);
  }, []);

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
