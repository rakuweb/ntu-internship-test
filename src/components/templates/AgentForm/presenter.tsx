// import layer
import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';

import { Header } from 'components/headers/Header';
import { AgentSchema, agentSchema } from 'features/agent';
import { useAgentStore } from 'features/agent';
import { Footer } from '~/components/footers/Footer';
import { routes } from '~/constants';
import { AgentForm } from '~/features/agent/AgentForm';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const methods = useForm<AgentSchema>({
    resolver: zodResolver(agentSchema),
  });
  const { setIsSending, setIsChecking } = useAgentStore();

  const submitHandler = async (data: AgentSchema) => {
    const newdata2 = data.contact_request.join(', ');
    const newdata = {
      name: data.name,
      email: data.email,
      manager_phone: data.manager_phone,
      level: data.level,
      contact_request: newdata2,
      job_link: data.job_link,
      remarks: data.remarks,
    };

    const { ...remain } = newdata;
    setIsSending(true);

    try {
      const _res = await axios.post(routes.apiAgent, { ...remain });
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
        <AgentForm submitHandler={submitHandler} />
      </FormProvider>
      {/*
      </GoogleReCaptchaProvider>
        */}
      <Footer />
    </>
  );
};
