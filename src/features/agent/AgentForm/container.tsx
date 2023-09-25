// import layer
import { FC } from 'react';
import { Presenter, PresenterProps } from './presenter';

// type layer
export type ContainerProps = PresenterProps;

// container
export const Container: FC<ContainerProps> = ({ ...props }) => {

  return <Presenter {...props} />;
};
