// import layer
import { FC, useState } from 'react';
import { Box, Grid, Flex } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import dynamic from 'next/dynamic';

import { Image } from 'components/images/Image';
import { OfferCard } from 'features/offers';
// import { OfferCard3 } from 'features/offers/OfferCard3';
import { useOffersStore } from 'features/offers/hooks';
import { selectOfferList } from 'features/offers/selectors';
// import { Pagination } from '~/components/Pagination';

import chakraStyles from '~/components/SeachLook/chakraStyles';
import { styles } from './styles';

const OfferCard3 = dynamic(
  import('features/offers/OfferCard3').then((mod) => mod.OfferCard3)
);
const Pagination = dynamic(
  import('~/components/Pagination').then((mod) => mod.Pagination)
);

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
  const Options = [
    { value: '並び順 : 新着順', label: '並び順 : 新着順' },
    { value: '並び順 : 締切が近い順', label: '並び順 : 締切が近い順' },
    { value: '並び順 : 締切が遠い順', label: '並び順 : 締切が遠い順' },
  ];
  const [sortOption, setSortOption] = useState<string>('並び順 : 新着順');
  const sortOffers = (offers: OfferCard[]) => {
    switch (sortOption) {
      case '並び順 : 新着順':
        return offers.sort(
          (a, b) =>
            new Date(b.start_at).getTime() - new Date(a.start_at).getTime()
        );
      case '並び順 : 締切が近い順':
        return offers.sort(
          (a, b) => new Date(a.end_at).getTime() - new Date(b.end_at).getTime()
        );
      case '並び順 : 締切が遠い順':
        return offers.sort(
          (a, b) => new Date(b.end_at).getTime() - new Date(a.end_at).getTime()
        );
      default:
        return [...offers];
    }
  };
  const sortedOffers = sortOffers([...activeOffers]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <Box css={styles} w={`100%`}>
      <Flex
        direction={{ base: `column`, md: `initial` }}
        justify={{ md: `space-between` }}
        w={{ base: ``, md: `${698 / 7.68}vw`, lg: `${1439 / 19.2}vw` }}
        ml={{ base: ``, md: `${30 / 7.68}vw`, lg: `${206 / 19.2}vw` }}
        pt={{ base: ``, md: `${30 / 7.68}vw`, lg: `${130 / 19.2}vw` }}
        mb={{ base: `${34 / 3.75}vw`, md: `${70 / 19.2}vw` }}
        color={`#39414E`}
      >
        <Flex
          fontFamily={`'Noto Sans JP', sans-serif`}
          display={{ base: `flex`, md: `flex` }}
          pt={{ base: `${15 / 3.75}vw`, md: `initial` }}
          ml={{ base: `${10 / 3.75}vw`, md: `initial` }}
        >
          <Image // eslint-disable-line
            ml={{ base: `${10 / 3.75}vw`, md: `${23 / 19.2}vw` }}
            mr={{ base: `${10 / 3.75}vw`, md: `${13 / 19.2}vw` }}
            mb={{
              base: `${0 / 3.75}vw`,
              md: `${2 / 7.68}vw`,
              lg: `${19 / 19.2}vw`,
            }}
            w={{
              base: `${20 / 3.75}vw`,
              md: `${20 / 7.68}vw`,
              lg: `${32 / 19.2}vw`,
            }}
            h={{
              base: `${15 / 3.75}vw`,
              md: `${23 / 7.68}vw`,
              lg: `${32 / 19.2}vw`,
            }}
            image={{
              width: 32,
              height: 42,
              src: `/svg/file-invoice-solid.svg`,
              alt: `書類のアイコン`,
            }}
          />
          <Box
            mt={{ base: `${5 / 3.75}vw`, md: `${3 / 19.2}vw` }}
            fontSize={{
              base: `${18 / 3.75}vw`,
              md: `${20 / 7.68}vw`,
              lg: `${36 / 19.2}vw`,
            }}
            fontWeight={`bold`}
          >
            求人一覧
          </Box>
        </Flex>
        <Flex
          display={{ base: `block`, md: `flex` }}
          mt={{ base: `${15 / 3.75}vw`, md: `${13 / 19.2}vw` }}
          ml={{ base: `${15 / 3.75}vw`, md: `initial` }}
          fontSize={{
            base: `${13 / 3.75}vw`,
            md: `${14 / 7.68}vw`,
            lg: `${25 / 19.2}vw`,
          }}
          fontWeight={`bold`}
          fontFamily={`'Noto Sans JP', sans-serif`}
        >
          <Box
            mt={{
              base: `${14 / 3.75}vw`,
              md: `${-5 / 7.68}vw`,
              lg: `${-10 / 19.2}vw`,
              '2xl': `${-5 / 19.2}vw`,
            }}
          >
            <Select
              options={Options}
              chakraStyles={chakraStyles}
              placeholder={sortOption}
              onChange={(option: { value: string }) =>
                setSortOption(option.value)
              }
            />
          </Box>
        </Flex>
      </Flex>
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
          md: `repeat(2,1fr)`,
          lg: `repeat(2,1fr)`,
        }}
        rowGap={{
          base: `${34 / 3.75}vw`,
          md: `${80 / 19.2}vw`,
          lg: `${80 / 19.2}vw`,
        }}
        columnGap={{ lg: `32px` }}
        opacity={`1`}
      >
        {sortedOffers
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((offer) => {
            // const daysRemaining = remainingDays(offer.deadline);
            return (
              <div key={offer.id}>
                {offer.end_at >= today ? (
                  <Box m={`0 auto`} w={`fit-content`}>
                    <OfferCard3 {...offer} />
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
        mt={{ base: `${50 / 3.75}vw`, md: `${130 / 19.2}vw` }}
        mx={`auto`}
        pb={{ base: `${50 / 3.75}vw`, md: `${100 / 19.2}vw` }}
      >
        {/* <SearchButton /> */}
        <Pagination
          currentPage={currentPage}
          totalData={activeOffers ? activeOffers.length : 0}
          itemsPerPage={8}
          handlePageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};
