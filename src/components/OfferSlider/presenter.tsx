// import layer
import { FC } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { useOffersStore } from 'features/offers/hooks';
import { selectOfferList } from 'features/offers/selectors';

import 'swiper/css';

import { Image } from '../images/Image';
import { OfferCardverSlider } from './OfferCardverSlider';

// type layer
export type PresenterProps = Record<string, unknown>;

const _remainingDays = (deadline) => {
  const currentDate = new Date();
  const deadlineDate = new Date(deadline);
  const diffTime = deadlineDate.getTime() - currentDate.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// presenter
export const Presenter: FC<PresenterProps> = () => {
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
  const activeOffers = offers.filter((offer) => offer.end_at >= today);
  const expiredOffers = offers.filter((offer) => offer.end_at < today);

  const _sortedOffers = [...activeOffers, ...expiredOffers];

  const remainingDays = (deadline) => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - currentDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysRemaining = remainingDays(offers[0].end_at);
  return (
    <Box
      w={{ base: `100vw` }}
      h={{ base: `100vh` }}
      fontFamily={`'Noto Sans JP', sans-serif`}
      position={`relative`}
    >
      <Flex w={{ base: `100vw` }} h={{ base: `100%` }} bg={`#E7EFFA`}>
        <Image // eslint-disable-line
          // w={`30%`}
          w={`${(260 / 960) * 100}%`}
          h={`100%`}
          image={{
            width: 389,
            height: 720,
            src: `/images/amazon/amazon-side1.png`,
            alt: `QR`,
          }}
        />
        <Stack
          w={`${(700 / 960) * 100}%`}
          // w={{ base: `auto` }}
          h={{ base: `100%` }}
        >
          <Image
            mt={`${30 / 9.6}vw`}
            ml={`${115 / 9.6}vw`}
            w={`${700 / 960}%`}
            // w={`${502 / 9.6}vw`}
            image={{
              width: 504,
              height: 40,
              src: `/images/amazon/amazon-text.png`,
              alt: `text`,
            }}
          />

          <Box h={{ base: `100%` }}>
            <Swiper {...swiperProps}>
              {activeOffers.map((offer) => {
                return offer.end_at >= today ? (
                  <SwiperSlide key={offer.id}>
                    <Box py={`1rem`} px={`1rem`} mx={`auto`}>
                      <OfferCardverSlider
                        {...offer}
                        deadline={daysRemaining}
                        startDate={offer.start_at}
                      />
                    </Box>
                  </SwiperSlide>
                ) : (
                  <></>
                );
              })}
            </Swiper>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};
