// import layer
import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { FormProvider, useForm } from 'react-hook-form';

import { JobForm } from '~/components/JobForm';
import { Footer } from '~/components/footers/Footer';
import { Header } from 'components/headers/Header';
import { JobFormSchema, jobFormSchema } from '~/lib/jobForm/schema';
import { GOOGLE_RECAPTCHA_SITE_KEY } from 'constants/env';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const methods = useForm<JobFormSchema>({
    defaultValues: { agreement: false },
    resolver: zodResolver(jobFormSchema),
  });

  const submitHandler = async (data: JobFormSchema) => {
    const { agreement, ...remain } = data;

    console.log(agreement);
    if (!agreement) {
      alert("利用規約に同意してください。");
      return;
    }

    console.log(remain)
  };
  return (
    <>
      <Header />
      <GoogleReCaptchaProvider
        reCaptchaKey={GOOGLE_RECAPTCHA_SITE_KEY}
        language={`ja`}
      >
        <FormProvider {...methods}>
          <JobForm
            submitHandler={submitHandler}
          />
        </FormProvider>
      </GoogleReCaptchaProvider>
      <Footer />
    </>
  );
};
