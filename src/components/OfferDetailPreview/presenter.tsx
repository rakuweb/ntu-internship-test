// import layer
import { FC } from 'react';
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Image } from 'components/images/Image';
import { Image as NImage } from 'components/images/Image';

import {
  useTargetOfferStore,
  selectTarget,
  selectBreadCrumbItem,
  useOffersStore,
  selectOfferList,
} from 'features/offers';
import { OfferCard3 } from '~/features/offers/OfferCard3';
import { BreadcrumbOfferId } from '../organisms/BreadcrumbOfferId';
import { Contact } from '../organisms/Contact';
import { Applybutton } from './Applybutton';
import { Atmosphere } from './Atmosphere';
import { Fixedmenu } from './Fixedmenu';
import { Jobterms } from './Jobterms';
import { MobileMinInformation } from './MobileMinInformation';

import { styles } from './styles';
import 'zenn-content-css';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const offer = useTargetOfferStore(selectTarget);
  const offers = useOffersStore(selectOfferList);
  const [_selectedOffer, setSelectedOffer] = React.useState(null);
  const { jobTitle } = useTargetOfferStore(selectBreadCrumbItem);
  const pageTitles = [jobTitle];
  const currentDate = new Date();
  const startDate = new Date(offer.start_at);
  const endDate = new Date(offer.end_at);
  const isNew =
    (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  const isEnd = Math.ceil(
    (endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );

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
  const selectOffer = (offerId) => {
    const offer = offers.find((item) => item.id === offerId);
    setSelectedOffer(offer);
  };

  const otherOffers = offers.filter((item) => item.id !== offer.id);

  return (
    <div css={styles}>
      <BreadcrumbOfferId titles={pageTitles} />
      <Flex
        mt={{ base: `${24 / 3.75}vw`, md: `${80 / 19.2}vw` }}
        ml={{
          base: `${20 / 3.75}vw`,
          md: `${45 / 7.68}vw`,
          lg: `${183 / 19.2}vw`,
        }}
        mr={{ base: `${20 / 3.75}vw`, md: `${`0`}` }}
      >
        <Box
          w={{ base: `100%`, md: `${444 / 7.68}vw`, lg: `${1012 / 19.8}vw` }}
          fontFamily={`'Noto Sans JP', sans-serif`}
          color={`#39414E`}
        >
          <Flex
            justify={`space-between`}
            alignItems={`baseline`}
            fontSize={{
              base: `${10 / 3.75}vw`,
              md: `${12 / 7.68}vw`,
              lg: `${25 / 19.2}vw`,
            }}
            mb={{ base: `${13 / 3.75}vw`, md: `${20 / 19.2}vw` }}
          >
            {offer.company_name}
            {isNew <= 7 ? (
              <Flex
                alignItems={`center`}
                justify={`center`}
                fontWeight={`bold`}
                fontSize={{ base: `${11 / 3.75}vw`, md: `${22 / 19.2}vw` }}
                mt={{ base: ``, md: `${-5 / 19.2}vw` }}
                px={{ base: `${20 / 3.75}vw`, md: `${50 / 19.2}vw` }}
                py={{ base: `${3 / 3.75}vw`, md: `${8 / 19.2}vw` }}
                bg={`#F26601`}
                color={`white`}
                borderRadius={{ base: `${3 / 3.75}vw`, md: `${3 / 19.2}vw` }}
              >
                NEW
              </Flex>
            ) : isEnd <= 10 ? (
              <Flex
                display={
                  isEnd
                    ? { base: `flex`, lg: `flex` }
                    : { base: `none`, md: `none` }
                }
                alignItems={`baseline`}
                color={`#F26601`}
                fontSize={{ base: `${10 / 3.75}vw`, md: `${22 / 19.2}vw` }}
                fontWeight={`bold`}
              >
                掲載終了まであと
                <Box
                  as={`span`}
                  fontSize={{
                    base: `${15 / 3.75}vw`,
                    md: `${16 / 7.68}vw`,
                    lg: `${35 / 19.2}vw`,
                  }}
                >
                  {isEnd}
                </Box>
                日
              </Flex>
            ) : null}
          </Flex>
          <Box
            as={`h1`}
            display={`inline`}
            mb={{ base: `${23 / 3.75}vw`, md: `${25 / 19.2}vw` }}
            fontSize={{ base: `${18 / 3.75}vw`, md: `${40 / 19.2}vw` }}
            fontWeight={`bold`}
            color={`#41A4FD`}
            borderBottom={{ base: `1px solid`, md: `2px solid ` }}
            lineHeight={`1.4em`}
          >
            {offer.title}
          </Box>
          <MobileMinInformation />
          <Box
            mt={{ base: `${14 / 3.75}vw`, md: `${25 / 19.2}vw` }}
            mb={{ base: `${35 / 3.75}vw`, md: `${54 / 19.2}vw` }}
            h={{ base: `${196 / 3.75}vw`, md: `${575 / 19.2}vw` }}
            overflow={`hidden`}
            borderRadius={{ base: `${5 / 3.75}vw`, md: `${5 / 19.2}vw` }}
          >
            <NImage image={offer.image} />
          </Box>
          <Applybutton />
          {/* 求人の詳細 */}
          <Box
            bg={`#F4FAFE`}
            w={`100%`}
            mt={{ base: `${35 / 3.75}vw`, md: `initial` }}
            mb={{ base: `${35 / 3.75}vw`, md: `${80 / 19.2}vw` }}
            pt={{ base: `${17 / 3.75}vw`, md: `${42 / 19.2}vw` }}
            pb={{ base: `${16 / 3.75}vw`, md: `${47 / 19.2}vw` }}
            pl={{ base: `${16 / 3.75}vw`, md: `${45 / 19.2}vw` }}
            pr={{ base: `${15 / 3.75}vw`, md: `${45 / 19.2}vw` }}
          >
            <Box
              display={{ base: `none`, md: `block` }}
              fontSize={{
                md: `${12 / 7.68}vw`,
                lg: `${25 / 19.2}vw`,
              }}
              fontWeight={`bold`}
            >
              求人の詳細
            </Box>
            <Box
              mt={{ base: ``, md: `${19 / 19.2}vw` }}
              mx={{ base: ``, md: `${20 / 19.2}vw` }}
              fontSize={{ base: `${11 / 3.75}vw`, md: `${20 / 19.2}vw` }}
              lineHeight={{ base: `1.2em`, md: `1.5em` }}
              whiteSpace={`pre-wrap`}
            >
              {offer.job_description}
            </Box>
          </Box>
          <Atmosphere mb={{ md: `${80 / 19.2}vw` }} />
          <Applybutton pt={`${35 / 3.75}vw`} mb={`${65 / 3.75}vw`} />
          <Jobterms mb={{ base: `${55 / 3.75}vw`, md: `${125 / 19.2}vw` }} />
          <Applybutton mb={`${65 / 3.75}vw`} />
          <Flex
            mb={{ base: `${25 / 3.75}vw`, md: `${55 / 19.2}vw` }}
            borderBottom={{
              base: `${2 / 3.75}vw solid #41A4FD`,
              md: `${4 / 19.2}vw solid #41A4FD`,
            }}
          >
            <Image // eslint-disable-line
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
              募集求人
            </Box>
          </Flex>
          <Box>
            {otherOffers
              .filter((offer) => offer.end_at >= today)
              .slice(0, 2)
              .map((offer, index) => (
                <Box
                  mt={
                    index !== 0
                      ? { base: `${36 / 3.75}vw`, md: `${50 / 19.2}vw` }
                      : undefined
                  }
                  key={index}
                >
                  <OfferCard3
                    {...offer}
                    onClick={() => selectOffer(offer.id)}
                  />
                </Box>
              ))}
          </Box>
        </Box>
        <Box
          ml={{ base: ``, md: `${35 / 7.68}vw`, lg: `${135 / 19.2}vw` }}
          display={{ base: `none`, md: `block` }}
        >
          <Fixedmenu />
        </Box>
      </Flex>
      <Contact
        mt={{ base: `${100 / 3.75}vw`, md: `${380 / 19.2}vw` }}
        mb={{ base: `${100 / 3.75}vw`, md: `${253 / 19.2}vw` }}
        mx={`auto`}
      />
    </div>
  );
};
