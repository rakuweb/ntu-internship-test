// import layer
import { VFC } from 'react';
import { Box, BoxProps, Flex } from '@chakra-ui/react';

// type layer
export type PresenterProps = BoxProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <Box
      w={`fit-content`}
      mx={`auto`}
      _hover={{
        cursor: 'pointer',
        filter: `opacity(50%)`,
        textDecoration: 'none',
        transition: ` 0.3s`,
      }}
      {...props}
    >
      <Flex
        alignItems={`center`}
        justify={`center`}
        w={{ base: `${250 / 3.75}vw`, lg: `${527 / 19.2}vw` }}
        h={{ base: `${45 / 3.75}vw`, lg: `${71 / 19.2}vw` }}
        background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
        fontWeight={`bold`}
        fontFamily={"'Noto Sans JP', sans-serif"}
        fontSize={{ base: `${20 / 3.75}vw`, lg: `${31 / 19.2}vw` }}
        color={`white`}
        borderRadius={{ base: `${8 / 3.75}vw`, lg: `${15 / 19.2}vw` }}
      >
        {`求人を探す`}
      </Flex>
    </Box>
  );
};
