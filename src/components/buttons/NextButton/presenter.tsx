// import layer
import { FC } from 'react';
import { Button, ButtonProps, Flex } from '@chakra-ui/react';

import { Image } from 'components/images/Image';

// type layer
export type StyleProps = ButtonProps;
export type DataProps = { isSending?: boolean; isChecking?: boolean };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  children,
  isSending,
  isChecking,
  ...props
}) => {
  return (
    <Button
      display={`flex`}
      disabled={isSending || !isChecking}
      w={{
        base: `${220 / 3.75}vw`,
        md: `${230 / 7.68}vw`,
        lg: `${348 / 19.2}vw`,
      }}
      borderRadius={{
        base: `${15 / 3.75}vw`,
        md: `${10 / 7.68}vw`,
        lg: `${15 / 19.2}vw`,
      }}
      overflow={`hidden`}
      py={{
        base: `${15 / 4.28}vw`,
        md: `${35 / 19.2}vw`,
        lg: `${20 / 19.2}vw`,
      }}
      mb={{ base: `${60 / 3.75}vw`, md: `${80 / 19.2}vw` }}
      mx={`auto`}
      background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
      color={`white`}
      fontSize={{
        base: `${16 / 3.75}vw`,
        md: `${16 / 7.68}vw`,
        lg: `${27 / 19.2}vw`,
      }}
      fontWeight={`bold`}
      transition={`all .3s`}
      _hover={{
        cursor: isChecking && !isSending ? `pointer` : `not-allowed`,
        filter: `opacity(50%)`,
      }}
      {...props}
    >
      <Flex alignItems={`center`} justify={`center`}>
        {/*
        <Image // eslint-disable-line
          w={{
            base: `${16 / 3.75}vw`,
            md: `${16 / 7.68}vw`,
            lg: `${27 / 19.2}vw`,
          }}
          h={{
            base: `${16 / 3.75}vw`,
            md: `${16 / 7.68}vw`,
            lg: `${27 / 19.2}vw`,
          }}
          mr={{ base: `${7 / 3.75}vw`, md: `${15 / 19.2}vw` }}
          image={{
            width: 35,
            height: 35,
            src: `/svg/paper-plane-solid.svg`,
            alt: `紙飛行機アイコン`,
          }}
        />
      */}
        {children}
      </Flex>
    </Button>
  );
};
