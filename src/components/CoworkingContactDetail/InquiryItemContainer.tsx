import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import ListTitle from './ListTitle';

export type InquiryItemContainerProps = {
  children?: ReactNode;
  title: string;
  required?: boolean;
};

export function InquiryItemContainer(props: InquiryItemContainerProps) {
  const { children, title, required } = props;
  return (
    <Flex
      borderBottom={{
        base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
        md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
      }}
      fontSize={{
        base: `${12 / 3.75}vw`,
        md: `${13 / 7.68}vw`,
        lg: `${18 / 19.2}vw`,
      }}
      lineHeight={`1.4em`}
    >
      <Flex>
        <ListTitle required={required} title={title} />
        <Flex
          alignItems={`center`}
          pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
          pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
          pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
          ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
          flexWrap={'wrap'}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
