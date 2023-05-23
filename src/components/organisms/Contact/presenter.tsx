// import layer
import { FC } from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  textDecoration,
} from '@chakra-ui/react';
import { Image } from 'components/images/Image';
import { useRouter } from 'next/router';
import { InternalLink } from '~/components/links/InternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <Box
      w={{
        base: `${134 / 3.75}vw`,
        md: `${200 / 7.68}vw`,
        lg: `${355 / 19.2}vw`,
      }}
      fontFamily={`'Noto Sans JP', sans-serif`}
      fontWeight={`800`}
      fontSize={{ base: ``, md: `${20 / 7.68}vw`, lg: `${39 / 19.2}vw` }}
      color={`white`}
      {...props}
    >
      <Image
        w={{
          base: `${134 / 3.75}vw`,
          md: `${200 / 7.68}vw`,
          lg: `${355 / 19.2}vw`,
        }}
        mb={{ base: ``, md: `${30 / 19.2}vw` }}
        image={{
          width: 500,
          height: 120,
          src: `/svg/forjob.svg`,
          alt: `forjob`,
        }}
      />
      <InternalLink href={`/`} display={`none`}>
        <Flex
          w={`100%`}
          alignItems={`center`}
          justify={`center`}
          bg={`#39414E`}
          px={{ base: ``, md: `${86 / 7.68}vw`, lg: `${86 / 19.2}vw` }}
          py={{ base: ``, md: `${11 / 7.68}vw`, lg: `${11 / 19.2}vw` }}
        >
          CONTACT
        </Flex>
      </InternalLink>
    </Box>
  );
};
