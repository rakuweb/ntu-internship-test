// import layer
import { FC, useState } from 'react';
import { Box, Grid, Flex, Select } from '@chakra-ui/react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { MdArrowDropDown } from 'react-icons/md';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper';

import { OfferCard } from 'features/offers/OfferCard';
import { selectOfferList } from 'features/offers/selectors';
import { useOffersStore } from 'features/offers/hooks';
// import { Image } from 'components/Image';
import { breakpointsByPx } from '~/constants/styles';
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
        display={{ base: `none`, lg: `initial` }}
        position={`absolute`}
        top={0}
        left={0}
        w={`100%`}
        h={{ base: `${484 / 3.75}vw`, lg: `100%` }}
        image={{
          width: 1920,
          height: 556,
          src: `/images/offers/firstviewtest.png`,
          alt: `カバー画像`,
        }}
      />
      <Image
        display={{ lg: `none` }}
        position={`absolute`}
        transform={`scale(2.5)`}
        top={`300px`}
        left={0}
        w={`100%`}
        h={{ base: `${484 / 3.75}vw`, lg: `100%` }}
        image={{
          width: 375,
          height: 484,
          src: `/images/offers/firstviewtest.png`,
          alt: `カバー画像`,
        }}
      />
      <Flex
        backgroundColor={{ base: `#ffffff`, lg: 'var(--white)' }}
        w={`100%`}
        h={{ base: `${484 / 3.75}vw`, lg: `${563 / 19.2}vw` }}
        mx={{ lg: `auto` }}
        fontFamily={`'Noto Sans JP', sans-serif`}
      >
        <Box
          ml={`${638 / 19.2}vw`}
          mt={`${118 / 19.2}vw`}
          position={`relative`}
        >
          <Flex
            display={{ base: `none`, lg: `block` }}
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
          <Flex
            display={{ base: `block`, lg: `none` }}
            color={`white`}
            textAlign={`end`}
            letterSpacing={`0`}
            fontWeight={`800`}
            fontSize={`${32 / 3.75}vw`}
            mb={`${30 / 19.2}vw`}
            textShadow={`0px 3px 6px #00000029`}
          >
            新大生のための
            <Box fontSize={`${32 / 3.75}vw`}>求人サイト</Box>
          </Flex>
          <Box
            bg={`#39414E`}
            w={`${676 / 19.2}vw`}
            h={`${178 / 19.2}vw`}
            borderRadius={`${5 / 19.2}vw`}
            p={`${27 / 19.2}vw ${40 / 19.2}vw ${30 / 19.2}vw`}
            color={`white`}
            fontSize={`${18 / 19.2}vw`}
            fontWeight={`bold`}
            textAlign={`center`}
          >
            \ここでしか出会えない求人がたくさん/
            <Flex
              my={`${16 / 19.2}vw`}
              border={`3px solid #41A4FD`}
              borderRadius={`${10 / 19.2}vw`}
              background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box`}
            >
              <Select
                w={`${481 / 19.2}vw`}
                h={`${53 / 19.2}vw`}
                border={`none`}
                color={`#9B9B9B`}
                icon={<AiFillCaretDown />}
                iconSize={`50px`}
                fontSize={`${18 / 19.2}vw`}
                fontWeight={`bold`}
                bg={`white`}
                borderRadius={`${7 / 19.2}vw 0 0 ${7 / 19.2}vw`}
              >
                <option value="option1">アルバイト</option>
                <option value="option2">インターンバイト</option>
                <option value="option3">SNS運用</option>
                <option value="option3">マーケティング</option>
              </Select>
              <Box
                pt={`${14 / 19.2}vw`}
                w={`${109 / 19.2}vw`}
                h={`${53 / 19.2}vw`}
                fontSize={`${25 / 19.2}vw`}
                borderRadius={`0 ${7 / 19.2}vw ${7 / 19.2}vw 0`}
                background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box`}
              >
                検索
              </Box>
            </Flex>
            <Box color={`#A8A8A8`}>{`会員登録（無料）はこちら`}</Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
