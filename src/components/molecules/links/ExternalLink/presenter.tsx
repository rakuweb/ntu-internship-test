// import layer
import { VFC } from 'react';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

// type layer
export type PresenterProps = ChakraLinkProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ children, ...props }) => {
  return (
    <ChakraLink _hover={{ textDecoration: 'none' }} {...props}>
      {children}
    </ChakraLink>
  );
};
