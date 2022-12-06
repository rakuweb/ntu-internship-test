// import layer
import { FC } from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState, useRecoilState } from 'recoil';
import axios from 'axios';
import { useFormContext } from 'react-hook-form';

import { Presenter, PresenterProps } from './presenter';
import { formProgressState } from 'features/formProgress/atoms';
import { registerFormState } from 'features/registerForm/atoms';
import { useBoundStore } from 'lib/store';
import { RegisterFormSchema } from '~/features/registerForm/schema';
import { routes } from '~/constants/routes';

// type layer
export type ContainerProps = PresenterProps;

// container
export const Container: FC<ContainerProps> = ({ ...props }) => {
  // const setFormProgress = useSetRecoilState(formProgressState);
  // const [{ isChecked, ...formData }, setRegisterForm] =
  //   useRecoilState(registerFormState);
  const {
    setIsChecked,
    setIsSending,
    startSending,
    finishSending,
    successSending,
    ...remain
  } = useBoundStore((state) => ({
    name: state.name,
    grade: state.grade,
    department: state.department,
    email: state.email,
    phone: state.phone,
    isInterestedInInternship: state.isInterestedInInternship,
    willStartWorking: state.willStartWorking,
    setIsChecked: state.setIsChecked,
    setIsSending: state.setIsSending,
    startSending: state.startSending,
    finishSending: state.finishSending,
    successSending: state.successSending,
  }));
  const { reset } = useFormContext<RegisterFormSchema>();
  const router = useRouter();

  const handleClick = async () => {
    // if (!executeRecaptcha) {
    //   alert('reCAPTCHAでエラーが発生しました。もう一度やり直してください。');
    // }
    // const token = await executeRecaptcha?.('homepage');

    startSending();

    try {
      const registerData = {
        ...remain,
      };
      await axios.post('/api/contact', {
        ...registerData,
        // recaptcha: token,
      });

      reset();
      successSending();

      router.push(routes.thanks);
      window.scroll({ top: 0 });
    } catch (err) {
      console.error(err);
      alert('正常に送信できませんでした。時間をおいてもう一度お試しください。');
    } finally {
      setIsChecked(false);
      setIsSending(false);
    }
  };

  return <Presenter onClick={handleClick} {...props} />;
};
