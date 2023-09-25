// import layer
import { FC } from 'react';
import { Box, Grid } from '@chakra-ui/react';

import { OfferCard } from 'features/offers/OfferCard';
import { useOffersStore } from 'features/offers/hooks';
import { selectOfferList } from 'features/offers/selectors';
import { SearchButton } from '~/components/SearchButton';
import { styles } from './styles';

// type layer
export type PresenterProps = Record<string, unknown>;

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
    '00',
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

  const activeOffers = offers.filter((offer) => offer.end_at >= today);

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
        {activeOffers.map((offer) => {
          // const daysRemaining = remainingDays(offer.deadline);
          return (
            <div key={offer.id}>
              {offer.end_at >= today ? (
                <Box m={`0 auto`} w={`fit-content`}>
                  <OfferCard {...offer} />
                </Box>
              ) : (
                <></>
              )}
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
