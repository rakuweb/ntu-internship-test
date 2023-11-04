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
      overflow={{ lg: `hidden` }}
    >
      <Flex w={{ base: `100vw` }} h={{ base: `100%` }} bg={`#E7EFFA`}>
        <Image // eslint-disable-line
          display={{ lg: `none` }}
          // w={`30%`}
          w={{ base: `${(300 / 1280) * 100}%`, lg: `${(300 / 1280) * 100}%` }}
          // w={{ base: `${(260 / 960) * 100}%`, lg: `auto` }}
          // w={{ base: `${(260 / 960) * 100}%`, lg: `${(300 / 1280) * 100}%` }}
          h={{ base: `100%`, lg: `800px` }}
          image={{
            width: 299,
            height: 728,
            // width: 389,
            // height: 720,
            src: `/images/amazon/amazon-side1280.jpg`,
            alt: `QR`,
            style: { objectFit: `cover` },
          }}
        />
        <Image // eslint-disable-line
          display={{ base: `none`, lg: `block` }}
          w={{ base: `${(260 / 960) * 100}%`, lg: `${(300 / 1280) * 100}%` }}
          h={{ base: `100%` }}
          image={{
            width: 299,
            height: 728,
            src: `/images/amazon/amazon-side1280.jpg`,
            alt: `QR`,
            style: { objectFit: `cover` },
          }}
        />
        <Stack
          mt={{ base: `${80 / 12.8}vw` }}
          justify={{ lg: `center` }}
          align={{ lg: `center` }}
          overflow={{ lg: `hidden` }}
          w={{ base: `${(980 / 1280) * 100}%`, lg: `${(980 / 1280) * 100}%` }}
          // h={{ base: `100%` }}
          spacing={{ base: `${60 / 12.8}vw` }}
        >
          <Box
            mt={{ base: `${24 / 12.8}vw`, lg: `${24 / 12.8}vw` }}
            ml={{ base: `auto`, lg: `auto` }}
            mr={{ base: `auto` }}
          >
            <Image
              display={{ lg: `none` }}
              w={`75%`}
              pl={`1rem`}
              mx={`auto`}
              image={{
                width: 740,
                height: 58,
                src: `/images/amazon/amazon-text1280.png`,
                // width: 504,
                // height: 40,
                // src: `/images/amazon/amazon-text.png`,
                alt: `text`,
              }}
            />
            <Image
              display={{ base: `none`, lg: `block` }}
              w={`${100}%`}
              image={{
                width: 740,
                height: 58,
                src: `/images/amazon/amazon-text1280.png`,
                alt: `text`,
              }}
            />
          </Box>

          <Box>
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
