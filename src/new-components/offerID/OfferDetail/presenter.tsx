// import layer
import { FC } from 'react';
// import { Box, Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import Image from 'next/image';
import { RemoteImage } from 'new-components/images/RemoteImage';

import { BreadcrumbOfferId } from 'new-components/offerID/BreadcrumbOfferId';
import {
  useTargetOfferStore,
  selectTarget,
  selectBreadCrumbItem,
  useOffersStore,
  selectOfferList,
} from 'features/offers';
import { Applybutton } from './Applybutton';
import { Fixedmenu } from './Fixedmenu';

const Atmosphere = dynamic(() =>
  import('./Atmosphere').then((mod) => mod.Atmosphere)
);
const MobileMinInformation = dynamic(() =>
  import('./MobileMinInformation').then((mod) => mod.MobileMinInformation)
);
const Jobterms = dynamic(() =>
  import('./Jobterms').then((mod) => mod.Jobterms)
);
const OfferCard = dynamic(() =>
  import('new-components/cards/OfferCard').then((mod) => mod.OfferCard)
);
const Contact = dynamic(() =>
  import('new-components/offerID/Contact').then((mod) => mod.Contact)
);

// import { styles } from './styles';
import 'zenn-content-css';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

// type layer
export type PresenterProps = {
  title: string;
  description: string;
  company_name: string;
};

// presenter
export const Presenter: FC<PresenterProps> = ({
  title,
  description,
  company_name,
}) => {
  const offer = useTargetOfferStore(selectTarget);
  const offers = useOffersStore(selectOfferList);
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

  const otherOffers = offers.filter((item) => item.id !== offer.id);

  return (
    <div>
      <BreadcrumbOfferId titles={pageTitles} />
      <div
        className={flex({
          mt: { base: `${24 / 3.75}vw`, md: `${80 / 19.2}vw` },
          ml: {
            base: `${20 / 3.75}vw`,
            md: `${45 / 7.68}vw`,
            lg: `${183 / 19.2}vw`,
          },
          mr: { base: `${20 / 3.75}vw`, md: `${`0`}` },
        })}
      >
        <div
          className={css({
            w: { base: `100%`, md: `${444 / 7.68}vw`, lg: `${1012 / 19.8}vw` },
            fontFamily: `'Noto Sans JP', sans-serif`,
            color: `#39414E`,
          })}
        >
          <div
            className={flex({
              justify: `space-between`,
              alignItems: `baseline`,
              fontSize: {
                base: `${10 / 3.75}vw`,
                md: `${12 / 7.68}vw`,
                lg: `${25 / 19.2}vw`,
              },
              mb: { base: `${13 / 3.75}vw`, md: `${20 / 19.2}vw` },
            })}
          >
            <h2>{company_name}</h2>
            {isNew <= 7 ? (
              <div
                className={flex({
                  alignItems: `center`,
                  justify: `center`,
                  fontWeight: `bold`,
                  fontSize: { base: `${11 / 3.75}vw`, md: `${22 / 19.2}vw` },
                  mt: { base: ``, md: `${-5 / 19.2}vw` },
                  px: { base: `${20 / 3.75}vw`, md: `${50 / 19.2}vw` },
                  py: { base: `${3 / 3.75}vw`, md: `${8 / 19.2}vw` },
                  bg: `#F26601`,
                  color: `white`,
                  borderRadius: { base: `${3 / 3.75}vw`, md: `${3 / 19.2}vw` },
                })}
              >
                NEW
              </div>
            ) : isEnd <= 10 ? (
              <div
                className={flex({
                  display: isEnd
                    ? { base: `flex`, lg: `flex` }
                    : { base: `none`, md: `none` },
                  alignItems: `baseline`,
                  color: `#F26601`,
                  fontSize: { base: `${10 / 3.75}vw`, md: `${22 / 19.2}vw` },
                  fontWeight: `bold`,
                })}
              >
                掲載終了まであと
                <span
                  className={css({
                    fontSize: {
                      base: `${15 / 3.75}vw`,
                      md: `${16 / 7.68}vw`,
                      lg: `${35 / 19.2}vw`,
                    },
                  })}
                >
                  {isEnd}
                </span>
                日
              </div>
            ) : null}
          </div>
          <h1
            className={css({
              display: `inline`,
              mb: { base: `${23 / 3.75}vw`, md: `${25 / 19.2}vw` },
              fontSize: { base: `${18 / 3.75}vw!`, md: `${40 / 19.2}vw!` },
              fontWeight: `bold!`,
              color: `#41A4FD`,
              borderBottom: { base: `1px solid!`, md: `2px solid!` },
              lineHeight: `1.4em!`,
            })}
          >
            {title}
          </h1>
          <MobileMinInformation />
          <div
            className={css({
              mt: { base: `${14 / 3.75}vw`, md: `${25 / 19.2}vw` },
              mb: { base: `${35 / 3.75}vw`, md: `${54 / 19.2}vw` },
              h: {
                base: `${196 / 3.75}vw !important`,
                md: `${575 / 19.2}vw !important`,
              },
              w: `auto`,
            })}
          >
            {offer.image && (
              <>
                <link rel="preload" href={offer.image.src} as="image" />
                <img
                  src={offer.image.src}
                  className={css({
                    h: {
                      base: `${196 / 3.75}vw !important`,
                      md: `${575 / 19.2}vw !important`,
                    },
                    w: `100%`,
                    overflow: `hidden`,
                    objectFit: `cover`,
                    borderRadius: {
                      base: `${5 / 3.75}vw`,
                      md: `${5 / 19.2}vw`,
                    },
                  })}
                  alt="Important image"
                  loading="eager"
                />
              </>
            )}
          </div>
          <Applybutton />
          {/* 求人の詳細 */}
          <div
            className={css({
              bg: `#F4FAFE`,
              w: `100%`,
              mt: { base: `${35 / 3.75}vw`, md: `initial` },
              mb: { base: `${35 / 3.75}vw`, md: `${80 / 19.2}vw` },
              pt: { base: `${17 / 3.75}vw`, md: `${42 / 19.2}vw` },
              pb: { base: `${16 / 3.75}vw`, md: `${47 / 19.2}vw` },
              pl: { base: `${16 / 3.75}vw`, md: `${45 / 19.2}vw` },
              pr: { base: `${15 / 3.75}vw`, md: `${45 / 19.2}vw` },
            })}
          >
            <div
              className={css({
                display: { base: `none`, md: `block` },
                fontSize: { md: `${12 / 7.68}vw`, lg: `${25 / 19.2}vw` },
                fontWeight: `bold`,
              })}
            >
              求人の詳細
            </div>
            <h3
              className={css({
                mt: { base: ``, md: `${19 / 19.2}vw !important` },
                mx: { base: ``, md: `${20 / 19.2}vw` },
                fontSize: {
                  base: `${11 / 3.75}vw !important`,
                  md: `${20 / 19.2}vw !important`,
                },
                lineHeight: { base: `1.2em`, md: `1.5em` },
                whiteSpace: `pre-wrap`,
              })}
            >
              {description}
            </h3>
          </div>
          <div className={css({ mb: { md: `${80 / 19.2}vw` } })}>
            <Atmosphere />
          </div>
          <div
            className={css({
              pt: {
                base: `${10 / 3.75}vw`,
                md: `0`,
              },
              mb: { base: `${65 / 3.75}vw`, md: `0` },
            })}
          >
            <Applybutton />
          </div>
          <div
            className={css({
              mb: { base: `${55 / 3.75}vw`, md: `${125 / 19.2}vw` },
            })}
          >
            <Jobterms />
          </div>
          <div className={css({ mb: { base: `${65 / 3.75}vw`, md: `0` } })}>
            <Applybutton />
          </div>
          <div
            className={css({
              display: `flex`,
              borderBottom: {
                base: `${2 / 3.75}vw solid #41A4FD !important`,
                md: `${4 / 19.2}vw solid #41A4FD !important`,
              },
            })}
          >
            <Image
              src={`/svg/building-solid.svg`}
              className={css({
                ml: { base: `${10 / 3.75}vw`, md: `${23 / 19.2}vw` },
                mr: { base: `${5 / 3.75}vw`, md: `${13 / 19.2}vw` },
                mb: {
                  base: `${0 / 3.75}vw`,
                  md: `${2 / 7.68}vw`,
                  lg: `${19 / 19.2}vw`,
                },
                w: {
                  base: `${14 / 3.75}vw`,
                  md: `${15 / 7.68}vw`,
                  lg: `${32 / 19.2}vw`,
                },
                h: {
                  base: `${21 / 3.75}vw`,
                  md: `${22 / 7.68}vw`,
                  lg: `${32 / 19.2}vw`,
                },
              })}
              alt={''}
              width={32}
              height={42}
            />
            <div
              className={css({
                mt: { base: ``, md: `${0 / 19.2}vw` },
                fontSize: {
                  base: `${15 / 3.75}vw`,
                  md: `${16 / 7.68}vw`,
                  lg: `${36 / 19.2}vw`,
                },
                fontWeight: `bold`,
              })}
            >
              新着求人
            </div>
          </div>
          <div>
            {otherOffers
              .filter((offer) => offer.end_at >= today)
              .slice(0, 2)
              .map((offer, index) => (
                <div
                  className={css({
                    mt: { base: `${36 / 3.75}vw`, md: `${50 / 19.2}vw` },
                  })}
                  key={index}
                >
                  <OfferCard {...offer} />
                </div>
              ))}
          </div>
        </div>
        <div
          className={css({
            ml: { base: ``, md: `${35 / 7.68}vw`, lg: `${135 / 19.2}vw` },
            display: { base: `none`, md: `block` },
          })}
        >
          <Fixedmenu />
        </div>
      </div>
      <Contact
        mt={{ base: `${100 / 3.75}vw`, md: `${380 / 19.2}vw` }}
        mb={{ base: `${100 / 3.75}vw`, md: `${253 / 19.2}vw` }}
        mx={`auto`}
      />
    </div>
  );
};
