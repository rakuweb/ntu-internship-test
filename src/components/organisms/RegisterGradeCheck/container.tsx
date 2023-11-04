// import layer
import { FC } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import {
  useRegisterGradeFormStore,
  selectRegisterGradeFormFunctions,
  selectRegisterGradeFormItem,
  RegisterGradeFormSchema,
} from 'features/registerForm';
import { useStudentStore } from 'features/student';
import { CAFE_ENTRY_QUERY } from '~/constants';
import { ORIGIN_URL } from '~/constants/env';
import { routes } from '~/constants/routes';
import { selectAccount, useAccountStore } from '~/features/account';
import { Presenter, PresenterProps } from './presenter';

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
  const { studentId, lineId } = useAccountStore(selectAccount);
  const { reset } = useFormContext<RegisterGradeFormSchema>();
  const router = useRouter();
  const { setStudent } = useStudentStore();

  const handleClick = async () => {
    startSending();
    try {
      const registerData = {
        grade,
        to_receive_job_info: toReceiveJobInfo,
        lineId: lineId,
        id: studentId,
      };
      const response = await axios.post(apiUrl, {
        ...registerData,
        // recaptcha: token,
      });
      const studentData = response.data;
      setStudent({
        grade: studentData.grade,
        id: studentData.id,
        gradeUpdatedAt: new Date(studentData.gradeUpdatedAt),
        username: studentData.username,
      });

      reset();
      successSending();

      const query = router?.query?.cafeonly ?? null;
      if (query === CAFE_ENTRY_QUERY) {
        router.push(`${routes.updateComplete}?cafeonly=${CAFE_ENTRY_QUERY}`);
      } else {
        router.push(`${routes.updateComplete}`);
      }
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
