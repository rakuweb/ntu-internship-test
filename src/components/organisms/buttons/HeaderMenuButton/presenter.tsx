// import layer
import { VFC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

// type layer
export type StyleProps = ButtonProps;
export type PresenterProps = StyleProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
