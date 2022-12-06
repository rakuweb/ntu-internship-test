// import layer
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { Presenter, StyleProps } from './presenter';
import { RegisterFormSchema } from '~/features/registerForm/schema';
import { registerFormState } from '~/features/registerForm/atoms';
import { formProgressState } from '~/features/formProgress/atoms';
import { useBoundStore } from 'lib/store';

// type layer
export type ContainerProps = StyleProps;

// container
export const Container: FC<ContainerProps> = ({ ...props }) => {
  const { handleSubmit } = useFormContext<RegisterFormSchema>();
  // const setRegisterFormState = useSetRecoilState(registerFormState);
  // const setformProgressState = useSetRecoilState(formProgressState);
  const { updateFormData, proceedProgress } = useBoundStore((state) => {
    const proceedProgress = state.proceedProgress;
    const updateFormData = state.updateFormData;
  return { proceedProgress, updateFormData };
  });

  const onClick = handleSubmit(async (data) => {
    console.log('test');
    updateFormData(data);
    proceedProgress();
    // setRegisterFormState((prev) => ({
    //   ...prev,
    //   ...data,
    // }));
    // setformProgressState((prev) => {
    //   const next = prev.progress + 1;
    //   const result = { progress: next };
    //
    //   return result;
    // });
  });

  return <Presenter onClick={onClick} {...props} />;
};
