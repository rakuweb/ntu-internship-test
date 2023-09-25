// import layer
import { FC } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { useLiff } from 'contexts/LineAuthContextInternship';
import { useRegisterFormStore } from 'features/registerForm/hooks';
import {
  selectRegisterFormItem,
  selectRegisterFormFunctions,
} from 'features/registerForm/selectors';
import { ORIGIN_URL } from '~/constants/env';
import { routes } from '~/constants/routes';
import { RegisterFormSchema } from '~/features/registerForm/schema';
import { Presenter, PresenterProps } from './presenter';

// type layer
export type ContainerProps = PresenterProps;

// container
export const Container: FC<ContainerProps> = ({ ...props }) => {
  const apiUrl = `${ORIGIN_URL}${routes.apiRegister}`;
  const { setIsChecked, setIsSending, startSending, successSending } =
    useRegisterFormStore(selectRegisterFormFunctions);
  const formItem = useRegisterFormStore(selectRegisterFormItem);
  const { reset } = useFormContext<RegisterFormSchema>();
  const router = useRouter();
  const { liff } = useLiff();

  const handleClick = async () => {
    startSending();

    try {
      const profile = await liff.getProfile();
      const registerData = {
        ...formItem,
        lineId: profile.userId,
      };
      const _res = await axios.post(apiUrl, {
        ...registerData,
        // recaptcha: token,
      });

      reset();
      successSending();

      router.push(routes.registerComplete);
      window.scroll({ top: 0 });
    } catch (err) {
      console.error(err);
      if (err.response.status === 500) {
        alert(`登録済みのメールアドレスが使用されています。`);
      } else {
        alert(
          '正常に送信できませんでした。時間をおいてもう一度お試しください。'
        );
      }
    } finally {
      setIsChecked(false);
      setIsSending(false);
    }
  };

  return <Presenter onClick={handleClick} {...props} />;
};
