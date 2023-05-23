// import layer
import { FC } from 'react';

import { Box, Flex, BoxProps } from '@chakra-ui/react';

import { Image } from '~/components/Image';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <Box display={{ md: `none` }} mt={`${19 / 3.75}vw`}>
      {/* モバイルサイズ */}
      <Flex
        justify={`space-between`}
        fontFamily={`'Noto Sans JP', sans-serif`}
        wrap={`wrap`}
      >
        <Flex
          w={`${181 / 4.28}vw`}
          color={`#39414E`}
          fontWeight={`bold`}
          fontSize={`${10 / 3.75}vw`}
          mb={`${5 / 3.75}vw`}
          py={`${4 / 3.75}vw`}
          bg={`rgba(254,207,2,0.1)`}
          borderRadius={`${26 / 3.75}vw`}
        >
          <Image
            ml={`${11 / 3.75}vw`}
            mr={`${10 / 3.75}vw`}
            w={`${7 / 3.75}vw`}
            h={`${10 / 3.75}vw`}
            image={{
              width: 24,
              height: 30,
              src: `/svg/yen-sign-solid.svg`,
              alt: `お金アイコン`,
            }}
          />
          <Box
            fontWeight={`bold`}
            mr={`${8 / 3.75}vw`}
            fontSize={`${10 / 3.75}vw`}
          >
            時給
          </Box>
          1,000円
        </Flex>
        <Flex
          w={`${181 / 4.28}vw`}
          color={`#39414E`}
          fontWeight={`bold`}
          fontSize={`${10 / 3.75}vw`}
          mb={`${5 / 3.75}vw`}
          py={`${4 / 3.75}vw`}
          bg={`rgba(254,207,2,0.1)`}
          borderRadius={`${26 / 3.75}vw`}
        >
          <Image
            ml={`${11 / 3.75}vw`}
            mr={`${10 / 3.75}vw`}
            w={`${9 / 3.75}vw`}
            h={`${12 / 3.75}vw`}
            image={{
              width: 13.7,
              height: 18.3,
              src: `/svg/location-dot-solid.svg`,
              alt: `場所アイコン`,
            }}
          />
          <Box
            fontWeight={`bold`}
            mr={`${8 / 3.75}vw`}
            fontSize={`${10 / 3.75}vw`}
          >
            場所
          </Box>
          新潟市中央区
        </Flex>
        <Flex
          w={`${181 / 4.28}vw`}
          color={`#39414E`}
          fontWeight={`bold`}
          fontSize={`${10 / 3.75}vw`}
          mb={`${5 / 3.75}vw`}
          py={`${4 / 3.75}vw`}
          bg={`rgba(254,207,2,0.1)`}
          borderRadius={`${26 / 3.75}vw`}
        >
          <Image
            ml={`${10 / 3.75}vw`}
            mr={`${8 / 3.75}vw`}
            w={`${10 / 3.75}vw`}
            h={`${12 / 3.75}vw`}
            image={{
              width: 16,
              height: 18.5,
              src: `/svg/user-solid.svg`,
              alt: `人型アイコン`,
            }}
          />
          <Box
            fontWeight={`bold`}
            mr={`${8 / 3.75}vw`}
            fontSize={`${10 / 3.75}vw`}
          >
            職種
          </Box>
          エンジニア
        </Flex>
        <Flex
          // alignItems={`center`}
          w={`${181 / 4.28}vw`}
          color={`#39414E`}
          fontWeight={`bold`}
          fontSize={`${10 / 3.75}vw`}
          mb={`${5 / 3.75}vw`}
          py={`${5 / 3.75}vw`}
          bg={`rgba(254,207,2,0.1)`}
          borderRadius={`${26 / 3.75}vw`}
        >
          <Image
            ml={`${10 / 3.75}vw`}
            mr={`${8 / 3.75}vw`}
            w={`${11.6 / 3.75}vw`}
            h={`${11.6 / 3.75}vw`}
            image={{
              width: 16,
              height: 16,
              src: `/svg/clock-solid.svg`,
              alt: `時間アイコン`,
            }}
          />
          <Box
            fontWeight={`bold`}
            mr={`${8 / 3.75}vw`}
            fontSize={`${10 / 3.75}vw`}
          >
            時間
          </Box>
          16:00-20:00
        </Flex>
      </Flex>
    </Box>
  );
};
