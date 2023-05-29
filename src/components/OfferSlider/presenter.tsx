// import layer
import { FC, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper';

import { OfferCard } from 'features/offers/OfferCard';
import { selectOfferList } from 'features/offers/selectors';
import { useOffersStore } from 'features/offers/hooks';
import {
  selectAdvertisements,
  useAdvertisementsStore,
} from 'features/advertisements';

import 'swiper/css';

import { SearchButton } from '~/components/SearchButton';
import { OfferCardverSlider } from './OfferCardverSlider';
import { Image } from '../images/Image';

// type layer
export type PresenterProps = Record<string, unknown>;

const remainingDays = (deadline) => {
  const currentDate = new Date();
  const deadlineDate = new Date(deadline);
  const diffTime = deadlineDate.getTime() - currentDate.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offers = useOffersStore(selectOfferList);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthNum = currentDate.getMonth();
  const monthMap = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  const dayNum = currentDate.getDate();
  const dayMap = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];

  const month = monthMap[monthNum];
  const date = dayMap[dayNum];
  const today = `${year}-${month}-${date}`;

  const swiperProps: SwiperProps = {
    modules: [Autoplay],
    loop: true,
    autoplay: { delay: 5000 },
    spaceBetween: 50,
    slidesPerView: 1,
  };
  const activeOffers = offers.filter((offer) => offer.deadline >= today);
  const expiredOffers = offers.filter((offer) => offer.deadline < today);

  const sortedOffers = [...activeOffers, ...expiredOffers];

  const remainingDays = (deadline) => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - currentDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysRemaining = remainingDays(offers[0].deadline);
  return (
    <Box
      w={`960px`}
      fontFamily={`'Noto Sans JP', sans-serif`}
      position={`relative`}
    >
      <Flex>
        <Image
          mt={`${203 / 9.6}vw`}
          ml={`${16 / 9.6}vw`}
          mr={`${23 / 9.6}vw`}
          w={`${80.6 / 9.6}vw`}
          image={{
            width: 500,
            height: 120,
            src: `/svg/forjob.svg`,
            alt: `forjob`,
          }}
        />
        <Box mt={`${28 / 9.6}vw`} w={`720px`}>
          <Swiper {...swiperProps}>
            <SwiperSlide>
              <Box py={`10px`} px={`10px`}>
                <OfferCardverSlider
                  {...offers[0]}
                  deadline={daysRemaining}
                  startDate={offers[0].createdAt}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box py={`10px`} px={`10px`}>
                <OfferCardverSlider
                  {...offers[0]}
                  deadline={daysRemaining}
                  startDate={offers[0].createdAt}
                />
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Image
          ml={`${17 / 9.6}vw`}
          mt={`${169 / 9.6}vw`}
          w={`${94 / 9.6}vw`}
          image={{
            width: 94,
            height: 94,
            src: `/images/amazon/QR_088235.png`,
            alt: `forjob`,
          }}
        />
      </Flex>

      <Flex
        position={`fixed`}
        bottom={`0`}
        left={`0`}
        h={`40px`}
        w={`100%`}
        bg={`#41A4FD`}
        alignItems={`center`}
        justify={`center`}
        fontWeight={`bold`}
        color={`white`}
      >
        FROJOBは、ここにしかない高時給バイトや長期インターンの求人掲載を行なっております。
      </Flex>
    </Box>
  );
};
