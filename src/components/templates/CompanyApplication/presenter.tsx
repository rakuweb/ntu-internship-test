// import layer
import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';

import { Header } from 'components/headers/Header';
import { ApplicationSchema, applicationSchema } from 'features/application';
import { useApplicationStore } from 'features/application';
import { ApplicationForm } from 'features/application/ApplicationForm';
import { Footer } from '~/components/footers/Footer';
import { routes } from '~/constants';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const methods = useForm<ApplicationSchema>({
    resolver: zodResolver(applicationSchema),
  });
  const { setIsSending, setIsChecking } = useApplicationStore();

  const submitHandler = async (data: ApplicationSchema) => {
    const { ...remain } = data;
    setIsSending(true);

    try {
      const res = await axios.post(routes.apiApplication, { ...remain });
      alert('送信が完了しました。');
      methods.reset();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSending(false);
      setIsChecking(false);
    }
  };

  return (
    <>
      <Header />
      {/*
      <GoogleReCaptchaProvider
        reCaptchaKey={GOOGLE_RECAPTCHA_SITE_KEY}
        language={`ja`}
      >
      */}
      <FormProvider {...methods}>
        <ApplicationForm submitHandler={submitHandler} />
      </FormProvider>
      {/*
      </GoogleReCaptchaProvider>
        */}
      <Footer />
    </>
  );
};
