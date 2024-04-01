// import layer
import { Text, TextProps } from '@chakra-ui/react';

// type layer
export type PresenterProps = TextProps;

// presenter
export function Presenter({ children, ...props }: PresenterProps) {
  return (
    <Text as={`div`} {...props}>
      {children}
    </Text>
  );
}
