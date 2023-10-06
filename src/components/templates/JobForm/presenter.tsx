// import layer
import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/router';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { FormProvider, useForm } from 'react-hook-form';

import { Header } from 'components/headers/Header';
import { GOOGLE_RECAPTCHA_SITE_KEY } from 'constants/env';
import {
  genderList,
  JobFormSchema,
  jobFormSchema,
} from 'features/jobForm/schema';
import { JobForm } from '~/components/JobForm';
import { Footer } from '~/components/footers/Footer';
import { routes } from '~/constants';
import { selectJobFormFunctions, useJobFormStore } from '~/features/jobForm';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const router = useRouter()
  const { setIsSending, setIsChecked } = useJobFormStore(
    selectJobFormFunctions
  );
  const methods = useForm<JobFormSchema>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: { gender: genderList[0] },
  });

  const submitHandler = async (data: JobFormSchema) => {
    const { ...remain } = data;
    setIsSending(true);

    try {
      const _res = await axios.post(routes.apiJobform, { ...remain });
      methods.reset();

      const id = router.query.id as string;
      router.push(routes.offersJobFormComplete(id));
    } catch (e) {
      console.error(e);
    } finally {
      setIsSending(false);
      setIsChecked(false);
    }
  };
  return (
    <>
      <Header />
      <GoogleReCaptchaProvider
        reCaptchaKey={GOOGLE_RECAPTCHA_SITE_KEY}
        language={`ja`}
      >
        <FormProvider {...methods}>
          <JobForm submitHandler={submitHandler} />
        </FormProvider>
      </GoogleReCaptchaProvider>
      <Footer />
    </>
  );
};
