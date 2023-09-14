// import layer
import { FC } from 'react';

import { JobForm } from '~/components/JobForm';
import { Footer } from '~/components/footers/Footer';
import { Header } from 'components/headers/Header';
import { FormProvider, useForm } from 'react-hook-form';
import { JobFormSchema, jobFormSchema } from '~/lib/jobForm/schema';
import { yupResolver } from '@hookform/resolvers/yup';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  // const methods = useForm<JobFormSchema>({
  //   defaultValues: { agreement: false },
  //   resolver: yupResolver(jobFormSchema),
  // });
  return (
    <>
      <Header />
      {/*
      <FormProvider {...methods}>
       */}
      <JobForm
        onClick={() => {
          console.log('test');
        }}
      />
      {/*
      </FormProvider>
        */}
      <Footer />
    </>
  );
};
