// import layer
import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import {
  RequestSchema,
  requestSchema,
  useRequestStore,
} from 'features/requests';
import { RequestCompanyForm } from 'features/requests/RequestCompanyForm';
import { StepBar } from 'features/requests/StepBar';
import { RequestRecruitmentForm } from 'new-components/forms/request/RequestRecruitmentForm';
import { Header } from 'new-components/headers/Header';
import { Footer } from '~/components/footers/Footer';
import { RequestConfirm } from '~/features/requests/RequestConfirm';
import { RequestPRForm } from '~/features/requests/RequestPRForm';

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
    window.scroll({ top: 0 });
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
