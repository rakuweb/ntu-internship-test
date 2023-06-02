// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Image } from 'components/images/Image';

import { useTargetOfferStore, selectTarget } from 'features/offers';

import 'zenn-content-css';
// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);

  return (
    <Box w={`100%`} fontFamily={`'Noto Sans JP', sans-serif`} {...props}>
      <Flex
        mb={{ base: `${20 / 3.75}vw`, md: `${40 / 19.2}vw` }}
        borderBottom={{
          base: `${2 / 3.75}vw solid #41A4FD`,
          md: `${4 / 19.2}vw solid #41A4FD`,
        }}
      >
        <Image
          ml={{ base: `${10 / 3.75}vw`, md: `${23 / 19.2}vw` }}
          mr={{ base: `${5 / 3.75}vw`, md: `${13 / 19.2}vw` }}
          mb={{
            base: `${5 / 3.75}vw`,
            md: `${2 / 7.68}vw`,
            lg: `${19 / 19.2}vw`,
          }}
          w={{
            base: `${13 / 3.75}vw`,
            md: `${15 / 7.68}vw`,
            lg: `${32 / 19.2}vw`,
          }}
          h={{
            base: `${15 / 3.75}vw`,
            md: `${22 / 7.68}vw`,
            lg: `${32 / 19.2}vw`,
          }}
          image={{
            width: 32,
            height: 42,
            src: `/svg/building-solid.svg`,
            alt: `ビルのアイコン`,
          }}
        />
        <Box
          mt={{ base: ``, md: `${3 / 19.2}vw` }}
          fontSize={{
            base: `${15 / 3.75}vw`,
            md: `${16 / 7.68}vw`,
            lg: `${36 / 19.2}vw`,
          }}
          fontWeight={`bold`}
        >
          職場の雰囲気
        </Box>
      </Flex>
      {offer.atmosphere.map((list) => (
        <Flex
          direction={{ base: `column`, md: `row` }}
          mb={{ base: `${20 / 3.75}vw`, md: `${48 / 19.2}vw` }}
          key={list.title}
        >
          <Image
            w={{
              base: `${173 / 3.75}vw`,
              md: `${120 / 7.68}vw`,
              lg: `${288 / 19.2}vw`,
            }}
            h={{
              base: `${100 / 3.75}vw`,
              md: `${79 / 7.68}vw`,
              lg: `${168 / 19.2}vw`,
            }}
            borderRadius={{ base: `${5 / 3.75}vw`, md: `${5 / 19.2}vw` }}
            overflow={`hidden`}
            ml={{ base: `${75 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            mr={{ base: ``, md: `${47 / 19.2}vw` }}
            mb={{ base: `${12.5 / 3.75}vw`, md: `initial` }}
            image={list.image}
          />
          <Box
            w={{ base: ``, md: `${250 / 7.68}vw`, lg: `${525 / 19.2}vw` }}
            fontWeight={`bold`}
            mx={{ base: `${15 / 3.75}vw`, md: `initial` }}
            fontSize={{
              base: `${10.5 / 3.75}vw`,
              md: `${12 / 7.68}vw`,
              lg: `${22 / 19.2}vw`,
            }}
            lineHeight={`1.18em`}
            whiteSpace={`pre-wrap`}
          >
            {list.title}
            <Box
              fontSize={{
                base: `${10 / 3.75}vw`,
                md: `${10 / 7.68}vw`,
                lg: `${21 / 19.2}vw`,
              }}
              fontWeight={`normal`}
              lineHeight={`1.45em`}
              mt={{ base: `${7.7 / 3.75}vw`, md: `${16 / 19.2}vw` }}
              whiteSpace={`pre-wrap`}
            >
              <Box display={{ base: `none`, md: `block` }}>{list.text}</Box>
              <Box display={{ base: `block`, md: `none` }}>{list.text}</Box>
            </Box>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};
