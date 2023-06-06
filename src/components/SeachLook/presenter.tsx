// import layer
import { FC, useState } from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { Image } from 'components/images/Image';
import { Select, ChakraStylesConfig } from 'chakra-react-select';
import { Image as NImage } from 'components/images/Image';
import { useRouter } from 'next/router';

import { useTargetOfferStore, selectTarget } from 'features/offers';
import { useLiff } from 'contexts/LineAuthContextInternship';

import { useAccountStore, selectSetPrevPath } from 'features/account';
import { selectOfferList } from 'features/offers/selectors';
import { useOffersStore } from 'features/offers/hooks';
import { OfferEntity } from 'types/gql/graphql';
import { OfferCard3 } from '~/features/offers/OfferCard3';
import 'zenn-content-css';
import { InternalLink } from '~/components/links/InternalLink';
import { routes } from 'constants/routes';
import { BreadcrumbOfferId } from '../organisms/BreadcrumbOfferId';
import { Contact } from '../organisms/Contact';
import { SearchSection } from './SearchSection';
import { Pagination } from '../Pagination';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const remainingDays = (deadline) => {
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

  // const activeOffers = offers.filter((offer) => offer.deadline >= today);
  // const expiredOffers = offers.filter((offer) => offer.deadline < today);

  // const sortedOffers = [...activeOffers, ...expiredOffers];

  const pageTitles = [`求人検索`];

  const Options = [
    { value: '並び順 : 新着順', label: '並び順 : 新着順' },
    { value: '並び順 : 締切が近い順', label: '並び順 : 締切が近い順' },
    { value: '並び順 : 締切が遠い順', label: '並び順 : 締切が遠い順' },
  ];

  const chakraStyles: ChakraStylesConfig = {
    control: (provided, state) => ({
      ...provided,
      background: `white`,
      border: { base: `${2 / 3.75}vw solid #F2F2F2`, md: `0px` },
      borderColor: `#F2F2F2`,
      borderRadius: {
        base: `${10 / 3.75}vw`,
        md: `${10 / 7.68}vw`,
        lg: `${10 / 19.2}vw`,
      },
      minHeight: {
        md: `${22 / 7.68}vw`,
        lg: `${22 / 10.2}vw`,
        '2xl': `${34 / 19.2}vw`,
      },
      h: {
        md: `${22 / 7.68}vw`,
        lg: `${22 / 10.2}vw`,
        '2xl': `${34 / 19.2}vw`,
      },
      w: {
        base: `${390 / 4.28}vw`,
        md: `${170 / 7.68}vw`,
        lg: `${170 / 10.2}vw`,
        '2xl': `${250 / 19.2}vw`,
      },
      fontSize: { md: `${10 / 7.68}vw`, lg: `${13 / 19.2}vw` },
      _hover: {
        cursor: `pointer`,
      },
      boxShadow: { md: `0px 3px 6px #00000029` },
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      ml: { '2xl': `${40 / 19.2}vw` },
      whiteSpace: `pre-wrap`,
    }),

    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorSeparator: (state) => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      h: {
        md: `${22 / 7.68}vw`,
        lg: `${22 / 10.2}vw`,
        '2xl': `${34 / 19.2}vw`,
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      w: { md: `${30 / 7.68}vw`, lg: `${40 / 19.2}vw` },
      color: `#39414E`,
      background: `white`,
      borderRadius: `0`,
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontWeight: `bold`,
      color: `#39414E`,
    }),
  };

  return (
    <div>
      <BreadcrumbOfferId titles={pageTitles} />
      <SearchSection
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
          <Image
            ml={{ base: `${10 / 3.75}vw`, md: `${23 / 19.2}vw` }}
            mr={{ base: `${5 / 3.75}vw`, md: `${13 / 19.2}vw` }}
            mb={{
              base: `${0 / 3.75}vw`,
              md: `${2 / 7.68}vw`,
              lg: `${19 / 19.2}vw`,
            }}
            w={{
              base: `${14 / 3.75}vw`,
              md: `${15 / 7.68}vw`,
              lg: `${32 / 19.2}vw`,
            }}
            h={{
              base: `${21 / 3.75}vw`,
              md: `${22 / 7.68}vw`,
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
            {`0件`}
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
              placeholder={`並び順 : 新着順`}
            />
          </Box>
        </Flex>
      </Flex>

      {/* <Grid
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
        {sortedOffers.map((offer) => {
          const daysRemaining = remainingDays(offer.deadline);
          return (
            <div key={offer.id}>
              <Box m={`0 auto`} w={`fit-content`}>
                <OfferCard3
                  {...offer}
                  deadline={daysRemaining}
                  startDate={offer.createdAt}
                />
              </Box>
            </div>
          );
        })}
      </Grid> */}

      {/* 検索結果が0件の時のやつ */}
      <Flex
        fontFamily={`'Noto Sans JP', sans-serif`}
        mt={{
          base: `${16 / 3.75}vw`,
          md: `${50 / 7.68}vw`,
          lg: `${100 / 19.2}vw`,
        }}
        w={{ base: `100%`, md: `${1346 / 19.2}vw`, lg: `${1346 / 19.2}vw` }}
        bg={{ md: `#F2F2F2` }}
        fontWeight={`bold`}
        fontSize={{
          base: `${14 / 3.75}vw`,
          md: `${14 / 7.68}vw`,
          lg: `${25 / 19.2}vw`,
        }}
        mx={`auto`}
        justify={`center`}
        alignItems={`center`}
        py={{
          base: `${10 / 3.75}vw`,
          md: `${20 / 7.68}vw`,
          lg: `${61 / 19.2}vw`,
        }}
        whiteSpace={`pre-wrap`}
        borderRadius={{
          base: `${0 / 3.75}vw`,
          md: `${15 / 7.68}vw`,
          lg: `${15 / 19.2}vw`,
        }}
        lineHeight={`1.5em`}
      >
        {`検索条件に該当する求人情報が見つかりませんでした。
検索条件を変更して、再度お試しください。`}
      </Flex>

      {/* <Box
        w={`100%`}
        bg={`rgba(103,182,253,0.19)`}
        py={{
          base: `${20 / 3.75}vw`,
          md: `${47 / 19.2}vw`,
          lg: `${47 / 19.2}vw`,
        }}
        mt={{
          base: `${34 / 3.75}vw`,
          md: `${111 / 19.2}vw`,
          lg: `${111 / 19.2}vw`,
        }}
      >
        <Pagination />
      </Box> */}

      <Contact
        mt={{ base: `${100 / 3.75}vw`, md: `${225 / 19.2}vw` }}
        mb={{ base: `${100 / 3.75}vw`, md: `${225 / 19.2}vw` }}
        mx={`auto`}
      />
    </div>
  );
};
