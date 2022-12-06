// import layer
import { VFC } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

// type layer
export type PresenterProps = TextProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ children, ...props }) => {
  return (
    <Text as={`div`} {...props}>
      {children}
    </Text>
  );
};
