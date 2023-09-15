// import layer
import { FC } from 'react';
import { BoxProps, Flex } from '@chakra-ui/react';
import { Image } from '../images/Image';
import { InternalLink } from '../links/InternalLink';

// type layer
export type PresenterProps = BoxProps;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <InternalLink
      href={`/search`}
      w={{ base: `${335 / 3.75}vw`, lg: `${348 / 19.2}vw` }}
      borderRadius={{ base: `${15 / 3.75}vw`, lg: `${15 / 19.2}vw` }}
      overflow={`hidden`}
    >
      <Flex
        alignItems={`center`}
        justify={`center`}
        py={{ base: `${20 / 4.28}vw`, md: `${20 / 19.2}vw` }}
        background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
        color={`white`}
        fontSize={{
          base: `${27 / 3.75}vw`,
          md: `${16 / 7.68}vw`,
          lg: `${27 / 19.2}vw`,
        }}
        fontWeight={`bold`}
        fontFamily={`'Noto Sans JP', sans-serif`}
      >
        <Image // eslint-disable-line
          w={{
            base: `${27 / 3.75}vw`,
            md: `${16 / 7.68}vw`,
            lg: `${27 / 19.2}vw`,
          }}
          h={{
            base: `${27 / 3.75}vw`,
            md: `${16 / 7.68}vw`,
            lg: `${27 / 19.2}vw`,
          }}
          mr={{ base: `${15 / 3.75}vw`, md: `${15 / 19.2}vw` }}
          image={{
            width: 35,
            height: 35,
            src: `/svg/paper-plane-solid.svg`,
            alt: `紙飛行機アイコン`,
          }}
        />
        求人を探す
      </Flex>
    </InternalLink>
  );
};
