// import layer
import { FC, useState } from 'react';
import { Box, Grid, Image } from '@chakra-ui/react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper';

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
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { OfferCardDead } from '../OfferCardDead';
import { InternalLink } from 'components/links/InternalLink';
import { routes } from '~/constants';
import { Firstview } from '../Firstview';
import { SearchButton } from '~/components/SearchButton';

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
    loop: true,
    spaceBetween: -60,
  };
  // const activeOffers = offers.filter((offer) => offer.deadline >= today);
  // const expiredOffers = offers.filter((offer) => offer.deadline < today);

  // const sortedOffers = [...activeOffers, ...expiredOffers];
  return (
    <Box css={styles} w={`100%`} bg={`rgba(65,164,253,0.05)`}>
      <Box
        ml={{ base: `${20 / 3.75}vw`, lg: `${176 / 19.2}vw` }}
        pt={{ base: `${24 / 3.75}vw`, lg: `${51 / 19.2}vw` }}
        mb={{ base: `${24 / 3.75}vw`, lg: `${30 / 19.2}vw` }}
        fontSize={{ base: `${16 / 3.75}vw`, lg: `${30 / 19.2}vw` }}
        fontFamily={"'Noto Sans JP', sans-serif"}
        fontWeight={`800`}
      >
        新着求人一覧
      </Box>
      {/* <Box display={`none`}>
        <Swiper {...swiperProps}>
          {sortedOffers.map((offer) => {
            const daysRemaining = remainingDays(offer.deadline);
            return (
              <SwiperSlide key={offer.id}>
                {offer.deadline >= today ? (
                  <Box m={`0 auto`} w={`fit-content`}>
                    <OfferCard
                      {...offer}
                      deadline={daysRemaining}
                      startDate={offer.createdAt}
                    />
                  </Box>
                ) : (
                  <Box display={`none`}></Box>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box pt={`${20 / 3.75}vw`} pb={`${40 / 3.75}vw`}>
          <SearchButton />
        </Box>
      </Box> */}

      <Grid
        ml={{ lg: `${206 / 19.2}vw` }}
        mr={{ lg: `${240 / 19.2}vw` }}
        templateColumns={{
          base: `repeat(1,1fr)`,
          lg: `repeat(2,1fr)`,
        }}
        rowGap={{ lg: `38px` }}
        columnGap={{ lg: `32px` }}
        opacity={`1`}
      >
        {offers.map((offer) => {
          // const daysRemaining = remainingDays(offer.deadline);
          return (
            <div key={offer.id}>
              {/* {offer.deadline >= today ? (
                <Box m={`0 auto`} w={`fit-content`}>
                  <OfferCard
                    {...offer}
                    
                  />
                </Box>
              ) : (
                <Box m={`0 auto`} w={`fit-content`}>
                  {/* <OfferCardDead {...offer} deadline={daysRemaining} /> 
                </Box>
              )} */}

              <Box m={`0 auto`} w={`fit-content`}>
                <OfferCard {...offer} />
              </Box>
            </div>
          );
        })}
      </Grid>
      <Box
        w={`fit-content`}
        mt={{ base: `${30 / 3.75}vw`, md: `${80 / 19.2}vw` }}
        mb={{ base: `${60 / 3.75}vw`, md: `0` }}
        mx={`auto`}
        pb={{ lg: `${100 / 19.2}vw` }}
      >
        <SearchButton />
      </Box>
    </Box>
  );
};
