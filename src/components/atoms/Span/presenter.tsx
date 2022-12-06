// import layer
import { VFC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

// type layer
export type PresenterProps = BoxProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return <Box as={`span`} {...props} />;
};
