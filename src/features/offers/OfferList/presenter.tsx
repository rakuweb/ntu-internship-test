// import layer
import { FC, useState } from 'react';
import { Box, Grid, Image } from '@chakra-ui/react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper';

import { OfferCard } from 'features/offers/OfferCard';
import { selectOfferList } from 'features/offers/selectors';
import { useOffersStore } from 'features/offers/hooks';
import { styles } from './styles';
// import { Image } from 'components/Image';
import { breakpointsByPx } from '~/constants/styles';
import {
  selectAdvertisements,
  useAdvertisementsStore,
} from 'features/advertisements';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { OfferCardDead } from '../OfferCardDead';
import { InternalLink } from 'components/links/InternalLink';
import { routes } from '~/constants';

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
  const advertisements = useAdvertisementsStore(selectAdvertisements);
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

  const [index, setIndex] = useState<number>(0);

  const swiperProps: SwiperProps = {
    modules: [Navigation, Autoplay, EffectFade],
    loop: true,
    speed: 2000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    // centeredSlides: true,
    // navigation: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      // [breakpointsByPx[0]]: {},
      // [breakpointsByPx[1]]: {},
      [breakpointsByPx[2]]: {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 40,
      },
      // [breakpointsByPx[3]]: {},
      // [breakpointsByPx[4]]: {},
    },
    onSlideChange: (swiper) => {
      setIndex(swiper.realIndex);
    },
  };
  const activeOffers = offers.filter((offer) => offer.deadline >= today);
  const expiredOffers = offers.filter((offer) => offer.deadline < today);

  const sortedOffers = [...activeOffers, ...expiredOffers];
  return (
    <Box css={styles}>
      <Box
        // pb={{ base: `${80 / 3.75}vw`, lg: `${120 / 19.2}vw` }}
        className="search"
      >
        <Box className="search__container" position={`relative`}>
          <Box
            mx={`auto`}
            borderRadius={{ base: `${20 / 3.75}vw`, lg: `${50 / 19.2}vw` }}
            overflow={`hidden`}
            position={`relative`}
            zIndex={`1`}
            mt={`30px`}
            w={`100%`}
          >
            <Swiper {...swiperProps}>
              <SwiperSlide>
                <InternalLink href={routes.campaign}>
                  <Image src="/images/campaign/slider.webp"></Image>
                </InternalLink>
              </SwiperSlide>
              <SwiperSlide>
                <InternalLink href={routes.howToRegister}>
                  {' '}
                  <Image src="/images/register/slider.webp"></Image>
                </InternalLink>
              </SwiperSlide>
              <SwiperSlide>
                <InternalLink href={routes.beginners}>
                  {' '}
                  <Image src="/images/beginners/slider.webp"></Image>
                </InternalLink>
              </SwiperSlide>
              {/* {advertisements.map((ad) => (
                <SwiperSlide key={ad.id}>
                  <InternalLink href={`${routes.advertisements}/${ad.id}`}>
                    <Box>
                      <Image
                        w={`100%`}
                        image={{
                          ...ad.image,
                          layout: `responsive`,
                        }}
                      />
                    </Box>
                  </InternalLink>
                </SwiperSlide>
              ))} */}
            </Swiper>
          </Box>
          {/*<OfferSidebar />*/}
          <div className="search-title__container">
            <p className="search-title__container__title">求人一覧</p>
          </div>

          <section className="recruit-card-area">
            {/* <div className="recruit-card-container"> */}
            <Grid
              templateColumns={{
                base: `repeat(1,1fr)`,
                md: `repeat(2,1fr)`,
                lg: `repeat(3,1fr)`,
              }}
              rowGap={{ lg: `38px` }}
              columnGap={{ lg: `32px` }}
            >
              {sortedOffers.map((offer) => {
                const daysRemaining = remainingDays(offer.deadline);
                return (
                  <div key={offer.id}>
                    {offer.deadline >= today ? (
                      <Box m={`0 auto`} w={`fit-content`}>
                        <OfferCard
                          {...offer}
                          deadline={daysRemaining}
                          startDate={offer.createdAt}
                        />
                      </Box>
                    ) : (
                      <Box m={`0 auto`} w={`fit-content`}>
                        <OfferCardDead {...offer} deadline={daysRemaining} />
                      </Box>
                    )}
                  </div>
                );
              })}
            </Grid>

            {/* </div> */}
          </section>
        </Box>
      </Box>
    </Box>
  );
};
