import React, { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

export type PresenterProps = { pagenumber: number } & FlexProps;

export const Presenter: FC<PresenterProps> = ({ pagenumber, ...props }) => {
  return (
    <Flex
      fontSize={{
        base: `${16 / 3.75}vw`,
        md: `${12 / 7.68}vw`,
        lg: `${23 / 19.2}vw`,
      }}
      color={`#39414E`}
      bg={`#DEDEDE`}
      w={{ base: `${30 / 3.75}vw`, md: `${25 / 7.68}vw`, lg: `${50 / 19.2}vw` }}
      h={{ base: `${30 / 3.75}vw`, md: `${25 / 7.68}vw`, lg: `${50 / 19.2}vw` }}
      borderRadius={`50%`}
      letterSpacing={`0`}
      alignItems={`center`}
      justify={`center`}
      mr={{
        base: `${10 / 3.75}vw`,
        md: `${10 / 7.68}vw`,
        lg: `${10 / 19.2}vw`,
      }}
      _hover={{
        transition: `0.1s`,
        cursor: `pointer`,
        border: `2px solid #41A4FD`,
      }}
      {...props}
    >
      {pagenumber}
    </Flex>
  );
};
