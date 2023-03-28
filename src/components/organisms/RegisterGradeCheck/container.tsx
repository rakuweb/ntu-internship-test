// import layer
import { FC } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useFormContext } from 'react-hook-form';

import { Presenter, PresenterProps } from './presenter';
import {
  useRegisterGradeFormStore,
  selectRegisterGradeFormFunctions,
  selectRegisterGradeFormItem,
  RegisterGradeFormSchema,
} from 'features/registerForm';
import { routes } from '~/constants/routes';
import { ORIGIN_URL } from '~/constants/env';
import { useLiff } from 'contexts/LineAuthContext';
import { selectAccount, useAccountStore } from '~/features/account';

// type layer
export type ContainerProps = PresenterProps;

// container
export const Container: FC<ContainerProps> = ({ ...props }) => {
  const apiUrl = `${ORIGIN_URL}${routes.apiUpdateGrade}`;
  const { setIsChecked, setIsSending, startSending, successSending } =
    useRegisterGradeFormStore(selectRegisterGradeFormFunctions);
  const { grade, toReceiveJobInfo } = useRegisterGradeFormStore(
    selectRegisterGradeFormItem
  );
  const { studentId } = useAccountStore(selectAccount);
  const { reset } = useFormContext<RegisterGradeFormSchema>();
  const router = useRouter();
  const { liff } = useLiff();

  const handleClick = async () => {
    startSending();
    try {
      // const profile = await liff.getProfile();
      const registerData = {
        grade,
        to_receive_job_info: toReceiveJobInfo,
        lineId: 'aaaaaaa', // profile.userId,
        id: 1,
      };
      await axios.post(apiUrl, {
        ...registerData,
        // recaptcha: token,
      });

      reset();
      successSending();

      router.push(routes.updateComplete);
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
