// import layer
import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { Header } from 'components/headers/Header';
import {
  RequestSchema,
  requestSchema,
  useRequestStore,
} from 'features/requests';
import { RequestCompanyForm } from 'features/requests/RequestCompanyForm';
import { RequestRecruitmentForm } from 'features/requests/RequestRecruitmentForm';
import { StepBar } from 'features/requests/StepBar';
import { Footer } from '~/components/footers/Footer';
import { apiRoutes, routes } from '~/constants';
import { RequestConfirm } from '~/features/requests/RequestConfirm';
import { RequestPRForm } from '~/features/requests/RequestPRForm';
import { API_URL_OFFER } from '~/constants/env';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const methods = useForm<RequestSchema>({
    resolver: zodResolver(requestSchema),
  });
  const { progress, updateFormData, proceedProgress } = useRequestStore();

  const submitHandler = (data: RequestSchema) => {
    updateFormData(data);
    proceedProgress();
  };

  return (
    <>
      <Header />
      {/* <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITEKEY}
      > */}
      <StepBar current={progress} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)}>
          <RequestCompanyForm isHidden={progress !== 0} />
          <RequestRecruitmentForm isHidden={progress !== 1} />
          <RequestPRForm isHidden={progress !== 2} />
          <RequestConfirm isHidden={progress !== 3} />
        </form>
      </FormProvider>
      {/* </GoogleReCaptchaProvider> */}
      <Footer />
    </>
  );
};
