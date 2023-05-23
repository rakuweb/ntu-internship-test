// import layer
import { FC, useState } from 'react';
import { Box, Grid, Flex, Select } from '@chakra-ui/react';
import { AiFillCaretDown } from 'react-icons/ai';

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
            <Flex
              my={{ base: `${15 / 3.75}vw`, lg: `${16 / 19.2}vw` }}
              border={`3px solid #41A4FD`}
              borderRadius={{ base: `${6 / 3.75}vw`, lg: `${10 / 19.2}vw` }}
              background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box`}
            >
              <Select
                w={{ base: `${248 / 3.75}vw`, lg: `${481 / 19.2}vw` }}
                h={{ base: `${45 / 3.75}vw`, lg: `${53 / 19.2}vw` }}
                border={`none`}
                color={`#9B9B9B`}
                icon={<AiFillCaretDown />}
                iconSize={`50px`}
                fontSize={{ base: `${18 / 3.75}vw`, lg: `${18 / 19.2}vw` }}
                fontWeight={`500`}
                bg={`white`}
                borderRadius={{
                  base: `${6 / 3.75}vw 0 0 ${6 / 3.75}vw`,
                  lg: `${7 / 19.2}vw 0 0 ${7 / 19.2}vw`,
                }}
              >
                <option value="option1">アルバイト</option>
                <option value="option2">インターンバイト</option>
                <option value="option3">SNS運用</option>
                <option value="option3">マーケティング</option>
              </Select>
              <Box
                pt={{ base: `${12 / 3.75}vw`, lg: `${14 / 19.2}vw` }}
                w={{ base: `${70 / 3.75}vw`, lg: `${109 / 19.2}vw` }}
                h={{ base: `${45 / 3.75}vw`, lg: `${53 / 19.2}vw` }}
                fontSize={{ base: `${18 / 3.75}vw`, lg: `${25 / 19.2}vw` }}
                borderRadius={{
                  base: `0 ${6 / 3.75}vw  ${6 / 3.75}vw 0`,
                  lg: `0 ${7 / 19.2}vw ${7 / 19.2}vw 0`,
                }}
                background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box`}
              >
                検索
              </Box>
            </Flex>
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
