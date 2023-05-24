// import layer
import { FC, useState } from 'react';
import { Box, Grid, Flex } from '@chakra-ui/react';
import { Select, ChakraStylesConfig } from 'chakra-react-select';

import { selectOfferList } from 'features/offers/selectors';
import { useOffersStore } from 'features/offers/hooks';
import {
  selectAdvertisements,
  useAdvertisementsStore,
} from 'features/advertisements';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { InternalLink } from 'components/links/InternalLink';
import { routes } from '~/constants';
import { Image } from '~/components/Image';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offers = useOffersStore(selectOfferList);

  const Options = [
    { value: 'アルバイト', label: 'アルバイト' },
    { value: 'インターンバイト', label: 'インターンバイト' },
    { value: 'SNS運用', label: 'SNS運用' },
    { value: 'マーケティング', label: 'マーケティング' },
  ];

  const chakraStyles: ChakraStylesConfig = {
    control: (provided, state) => ({
      ...provided,
      background: `white`,
      border: `0px`,
      borderRadius: {
        base: `${10 / 3.75}vw`,
        lg: `${10 / 19.2}vw`,
      },
      minHeight: {
        base: `${45 / 3.75}vw`,
        lg: `${53 / 19.2}vw`,
      },
      w: { base: `${278 / 3.75}vw`, lg: `${481 / 19.2}vw` },
      h: { base: `${45 / 3.75}vw`, lg: `${53 / 19.2}vw` },
      fontSize: { md: `${18 / 3.75}vw`, lg: `${18 / 19.2}vw` },
      textAlign: `start`,

      fontFamily: `'Noto Sans JP', sans-serif`,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      color: 'black',
    }),
    indicatorSeparator: (state) => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      h: { base: `${45 / 3.75}vw`, lg: `${53 / 19.2}vw` },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      w: { base: `${52 / 3.75}vw`, lg: `${80 / 19.2}vw` },
      background: `transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`,
      borderRadius: `0`,
    }),
    menu: (state) => ({
      color: 'black',
      position: `absolute`,
      fontWeight: `500`,
      // left: `55px`,
      w: `70%`,
    }),
  };

  return (
    <Box w={`100%`} {...props} position={`relative`} overflow={`hidden`}>
      <Image
        display={{ base: `none`, lg: `block` }}
        position={`absolute`}
        top={0}
        left={0}
        w={`100%`}
        h={`100%`}
        objectFit={`cover`}
        image={{
          width: 3212,
          height: 950,
          src: `/images/offers/firstviewtest.png`,
          alt: `カバー画像`,
        }}
      />
      <Image
        display={{ lg: `none` }}
        position={`absolute`}
        top={`0`}
        left={0}
        w={`100%`}
        h={`${484 / 3.75}vw`}
        image={{
          width: 991,
          height: 1126,
          src: `/images/offers/firstviewtest2.png`,
          alt: `カバー画像`,
        }}
      />
      <Flex
        backgroundColor={{ base: `#ffffff`, lg: 'var(--white)' }}
        w={`100%`}
        h={{ base: `${424 / 3.75}vw`, lg: `${563 / 19.2}vw` }}
        mx={{ lg: `auto` }}
        fontFamily={`'Noto Sans JP', sans-serif`}
      >
        <Box
          ml={{ lg: `${638 / 19.2}vw` }}
          mt={{ base: `${40 / 3.75}vw`, lg: `${118 / 19.2}vw` }}
          position={`relative`}
        >
          {/* デスクトップサイズ */}
          <Flex
            display={{ base: `none`, lg: `flex` }}
            color={`white`}
            letterSpacing={`0`}
            fontWeight={`800`}
            fontSize={{ base: `${32 / 3.75}vw`, lg: `${52 / 19.2}vw` }}
            alignItems={`baseline`}
            mb={`${30 / 19.2}vw`}
            textShadow={`0px 3px 6px #00000029`}
          >
            新大生
            <Box fontSize={{ base: `${18 / 3.75}vw`, lg: `${39 / 19.2}vw` }}>
              のための
            </Box>
            <Box fontSize={`${52 / 19.2}vw`}>求人</Box>
            <Box fontSize={`${39 / 19.2}vw`}>サイト</Box>
          </Flex>
          {/* ////////// */}

          {/* モバイルサイズ */}
          <Box
            display={{ lg: `none` }}
            textAlign={`end`}
            mr={`${20 / 3.75}vw`}
            color={`white`}
            letterSpacing={`0`}
            lineHeight={`1.25em`}
            fontWeight={`800`}
            fontSize={`${32 / 3.75}vw`}
            mb={`${30 / 3.75}vw`}
            textShadow={`0px 3px 6px #00000029`}
          >
            新大生のための
            <Box fontSize={`${32 / 3.75}vw`}>求人サイト</Box>
          </Box>
          {/* //////////////// */}

          <Box
            bg={`#39414E`}
            mx={{ base: `${20 / 3.75}vw`, lg: `0` }}
            w={{ base: `${335 / 3.75}vw`, lg: `${676 / 19.2}vw` }}
            h={{
              base: `${150 / 3.75}vw`,
              lg: `initial`,
            }}
            borderRadius={{ base: `${5 / 3.75}vw`, lg: `${5 / 19.2}vw` }}
            p={{
              base: `${15 / 3.75}vw`,
              lg: `${27 / 19.2}vw ${40 / 19.2}vw ${30 / 19.2}vw`,
            }}
            color={`white`}
            fontSize={{ base: `${16 / 3.75}vw`, lg: `${18 / 19.2}vw` }}
            fontWeight={`bold`}
            textAlign={`center`}
          >
            \ここでしか出会えない求人がたくさん/
            <Box
              w={`fit-content`}
              overflow={`hidden`}
              my={{ base: `${15 / 3.75}vw`, lg: `${16 / 19.2}vw` }}
              border={{
                base: `${3 / 3.75}vw solid #41A4FD`,
                lg: `3px solid #41A4FD`,
              }}
              borderRadius={{
                base: `${13 / 3.75}vw`,
                lg: `${15 / 19.2}vw`,
                '2xl': `${13 / 19.2}vw`,
              }}
              mx={`auto`}
            >
              <Select
                options={Options}
                chakraStyles={chakraStyles}
                placeholder={`飲食アルバイト`}
              />
            </Box>
            <Box
              display={`inline`}
              borderBottom={{
                base: `${2 / 3.75}vw solid #A8A8A8`,
                lg: `${2 / 19.2}vw solid #A8A8A8`,
              }}
              mt={`${0 / 3.75}vw`}
              fontSize={{ base: `${16 / 3.75}vw`, lg: `${18 / 19.2}vw` }}
              color={`#A8A8A8`}
            >{`会員登録（無料）はこちら`}</Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
