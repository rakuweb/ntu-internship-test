// import layer
import { FC, useState } from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { OfferCard } from 'features/offers';
import { useOffersStore } from 'features/offers/hooks';
import { selectOfferList } from 'features/offers/selectors';
import { OfferCard3 } from '~/features/offers/OfferCard3';
import 'zenn-content-css';
import { BreadcrumbOfferId } from '../organisms/BreadcrumbOfferId';
import { Contact } from '../organisms/Contact';
import { SearchSection } from './SearchSection';
import chakraStyles from './chakraStyles';
import FileInvoiceSvg from './fileInvoiceSvg';
// import { Point } from '../../features/offers/types';
// import { constSelector } from 'recoil';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const _remainingDays = (deadline) => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - currentDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
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
  // const [index, setIndex] = useState<number>(0);

  const activeOffers = offers.filter((offer) => offer.end_at >= today);
  // const expiredOffers = offers.filter((offer) => offer.end_at < today);

  const pageTitles = [`求人検索`];
  const [sortOption, setSortOption] = useState<string>('並び順 : 新着順');
  const Options = [
    { value: '並び順 : 新着順', label: '並び順 : 新着順' },
    { value: '並び順 : 締切が近い順', label: '並び順 : 締切が近い順' },
    { value: '並び順 : 締切が遠い順', label: '並び順 : 締切が遠い順' },
  ];

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
  const [selectedOccupation, setSelectedOccupation] = useState<string>('');
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState<
    string[]
  >([]);

  const _handleEmploymentTypeSelect = (newTypes: string[]) => {
    setSelectedEmploymentTypes(newTypes);
  };

  // Then in the filter
  const filteredOffers = sortedOffers.filter((offer) => {
    if (selectedOccupation && offer.occupation.name !== selectedOccupation)
      return false;
    if (
      selectedEmploymentTypes.length > 0 &&
      !selectedEmploymentTypes.includes(offer.job_type.name)
    )
      return false;
    return true;
  });

  return (
    <div>
      <BreadcrumbOfferId titles={pageTitles} />
      <SearchSection
        occupationOptions={[]}
        onOccupationSelect={setSelectedOccupation}
        onEmploymentTypeSelect={setSelectedEmploymentTypes}
        mx={`auto`}
        mt={{ base: ``, md: `${81 / 19.2}vw`, lg: `${81 / 19.2}vw` }}
        mb={{ base: ``, md: `${96 / 19.2}vw`, lg: `${96 / 19.2}vw` }}
      />
      <Flex
        justify={`space-between`}
        w={{ base: ``, md: `${698 / 7.68}vw`, lg: `${1439 / 19.2}vw` }}
        ml={{ base: ``, md: `${30 / 7.68}vw`, lg: `${206 / 19.2}vw` }}
        mb={{ base: `${34 / 3.75}vw`, md: `${55 / 19.2}vw` }}
        color={`#39414E`}
      >
        <Flex
          fontFamily={`'Noto Sans JP', sans-serif`}
          display={{ base: `none`, md: `flex` }}
        >
          <FileInvoiceSvg />
          <Box
            mt={{ base: ``, md: `${3 / 19.2}vw` }}
            fontSize={{
              base: `${15 / 3.75}vw`,
              md: `${16 / 7.68}vw`,
              lg: `${36 / 19.2}vw`,
            }}
            fontWeight={`bold`}
          >
            求人検索の結果
          </Box>
        </Flex>
        <Flex
          display={{ base: `block`, md: `flex` }}
          mt={{ base: `${24 / 3.75}vw`, md: `${13 / 19.2}vw` }}
          ml={{ base: `${15 / 3.75}vw`, md: `initial` }}
          fontSize={{
            base: `${13 / 3.75}vw`,
            md: `${14 / 7.68}vw`,
            lg: `${25 / 19.2}vw`,
          }}
          fontWeight={`bold`}
          fontFamily={`'Noto Sans JP', sans-serif`}
        >
          検索結果 :
          <Box
            as={`span`}
            color={`#41A4FD`}
            fontSize={{
              base: `${16 / 3.75}vw`,
              md: `${14 / 7.68}vw`,
              lg: `${25 / 19.2}vw`,
            }}
            ml={{ md: `${5 / 7.68}vw`, lg: `${10 / 19.2}vw` }}
            mr={{ md: `${20 / 7.68}vw`, lg: `${20 / 19.2}vw` }}
          >
            {`${filteredOffers.length}件`}
          </Box>
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

      <Grid
        ml={{ md: `${30 / 7.68}vw`, lg: `${206 / 19.2}vw` }}
        mr={{ md: `${30 / 7.68}vw`, lg: `${240 / 19.2}vw` }}
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
        columnGap={{ md: `${0 / 7.68}vw`, lg: `${74 / 19.2}vw` }}
        opacity={`1`}
      >
        {filteredOffers.map((offer) => {
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

      <Contact
        mt={{ base: `${100 / 3.75}vw`, md: `${225 / 19.2}vw` }}
        mb={{ base: `${100 / 3.75}vw`, md: `${225 / 19.2}vw` }}
        mx={`auto`}
      />
    </div>
  );
};
