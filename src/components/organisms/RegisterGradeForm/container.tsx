// import layer
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Presenter, StyleProps } from './presenter';
import { RegisterGradeFormSchema } from '~/features/registerForm/schema';
import {
  useRegisterGradeFormStore,
} from 'features/registerForm/hooks';
import { useFormProgressStore } from 'features/formProgress/hooks';

// type layer
export type ContainerProps = StyleProps;

// container
export const Container: FC<ContainerProps> = ({ ...props }) => {
  const { handleSubmit } = useFormContext<RegisterGradeFormSchema>();
  const updateFormData = useRegisterGradeFormStore(
    (state) => state.updateFormData
  );
  const proceedProgress = useFormProgressStore(
    (state) => state.proceedProgress
  );

  const onClick = handleSubmit(async (data) => {
    updateFormData(data);
    proceedProgress();
  });

  return <Presenter onClick={onClick} {...props} />;
};
