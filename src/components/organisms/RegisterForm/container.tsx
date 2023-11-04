// import layer
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { useFormProgressStore } from 'features/formProgress/hooks';
import { useRegisterFormStore } from 'features/registerForm/hooks';
import { RegisterFormSchema } from '~/features/registerForm/schema';
import { Presenter, StyleProps } from './presenter';

// type layer
export type ContainerProps = StyleProps;

// container
export const Container: FC<ContainerProps> = ({ ...props }) => {
  const { handleSubmit } = useFormContext<RegisterFormSchema>();
  const updateFormData = useRegisterFormStore((state) => state.updateFormData);
  const proceedProgress = useFormProgressStore(
    (state) => state.proceedProgress
  );

  const onClick = handleSubmit(async (data) => {
    updateFormData(data);
    proceedProgress();
  });

  return <Presenter onClick={onClick} {...props} />;
};
