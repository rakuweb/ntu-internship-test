// import layer
import { VFC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Presenter, PresenterProps } from './presenter';
import { JobFormSchema } from '~/lib/jobForm/schema';
import { useJobFormStore } from '~/lib/jobForm/hooks';

// type layer
export type ContainerProps = PresenterProps;

// container
export const Container: VFC<ContainerProps> = ({ ...props }) => {
  // const { handleSubmit } = useFormContext<JobFormSchema>();
  const updateFormData = useJobFormStore((state) => state.updateFormData);

  // const onClick = handleSubmit(async (data) => {
  //   updateFormData(data);
  // });

  return <Presenter {...props} />;
};
