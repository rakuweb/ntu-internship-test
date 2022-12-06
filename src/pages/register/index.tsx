// import layer
import { useState, useEffect } from 'react';
import { NextPage, InferGetStaticPropsType } from 'next/types';
import { useRecoilValue } from 'recoil';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Index as Form } from 'templates/Register';
import { Index as Check } from 'templates/Register/RegisterCheck';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from '~/constants';
import { parseSeo } from '~/lib';
import { formProgressState } from 'features/formProgress/atoms';
import {
  RegisterFormSchema,
  registerFormSchema,
} from '~/features/registerForm/schema';
import { useBoundStore } from 'lib/store';

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
  // const { progress } = useRecoilValue(formProgressState);
  const progress = useBoundStore((state) => state.progress);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
