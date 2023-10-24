// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
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
      // w={`960px`}
      h={{ base: `calc(100vh - min(10vh, 40px))` }}
      fontFamily={`'Noto Sans JP', sans-serif`}
      position={`relative`}
    >
      <Flex
        w={{ base: `95%` }}
        h={{ base: `100%` }}
        justify={{ base: `space-between` }}
        mx={`auto`}
      >
        <Flex justify={{ base: `center` }} align={{ base: `center` }}>
          <Image // eslint-disable-line
            // mt={`${203 / 9.6}vw`}
            // ml={`${16 / 9.6}vw`}
            // mr={`${23 / 9.6}vw`}
            w={`${80.6 / 9.6}vw`}
            image={{
              width: 500,
              height: 120,
              src: `/svg/forjob.svg`,
              alt: `forjob`,
            }}
          />
        </Flex>
        <Flex
          // mt={`${28 / 9.6}vw`}
          w={`${750 / 9.6}vw`}
          // w={`720px`}
          justify={{ base: `center` }}
          align={{ base: `center` }}
        >
          <Swiper {...swiperProps}>
            {activeOffers.map((offer) => {
              // const daysRemaining = remainingDays(offer.deadline);
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
        </Flex>
        <Flex justify={{ base: `center` }} align={{ base: `center` }}>
          <Image // eslint-disable-line
            // ml={`${17 / 9.6}vw`}
            // mt={`${169 / 9.6}vw`}
            w={`${94 / 9.6}vw`}
            image={{
              width: 94,
              height: 94,
              src: `/images/amazon/QR_088235.png`,
              alt: `forjob`,
            }}
          />
        </Flex>
      </Flex>

      <Flex
        position={`fixed`}
        bottom={`0`}
        left={`0`}
        h={{ base: `min(10vh, 40px)` }}
        fontSize={{ base: `min(${20 / 9.6}vw, 1rem)` }}
        // h={`40px`}
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
