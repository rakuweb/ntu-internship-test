// import layer
import { FC } from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  textDecoration,
} from '@chakra-ui/react';
import { Image } from 'components/images/Image';
import { Image as NImage } from 'components/images/Image';
import { useRouter } from 'next/router';

import { OfferButton } from 'components/OfferButton';
import { Labeltext } from '~/features/offers/OfferCard/Labeltext';
import { Labeltext2 } from './Labeltext2';

import { selectCompany, useCompanyStore } from 'features/company';
import {
  useTargetOfferStore,
  selectTarget,
  selectBreadCrumbItem,
} from 'features/offers';
import { useLiff } from 'contexts/LineAuthContextInternship';

import { styles } from './styles';
import { useAccountStore, selectSetPrevPath } from 'features/account';
import { OfferEntity } from 'types/gql/graphql';
import 'zenn-content-css';
import { routes } from 'constants/routes';
import { BreadcrumbOfferId } from '../organisms/BreadcrumbOfferId';
import { Atmosphere } from './Atmosphere';
import { Jobterms } from './Jobterms';
import { OfferCard3 } from '~/features/offers/OfferCard3';
import { Contact } from '../organisms/Contact';
import { Fixedmenu } from './Fixedmenu';
import { MobileMinInformation } from './MobileMinInformation';
import { Applybutton } from './Applybutton';
// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  const company = useCompanyStore(selectCompany);
  const { liff } = useLiff();
  const setPrevPath = useAccountStore(selectSetPrevPath);
  const { jobTitle, companyName } = useTargetOfferStore(selectBreadCrumbItem);
  const pageTitles = [companyName, jobTitle];
  const signin = () => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      // offer?.formUrl && setPrevPath(decodeURI(offer.formUrl));
      // window.localStorage.setItem('prevUrl', offer?.formUrl);
      liff.login(); //{ redirectUri: redirectUri });
    } else {
      // window.location.href = offer.formUrl;
    }
  };
  const currentDate = new Date();
  const startDate = new Date(offer.start_at);
  const endDate = new Date(offer.end_at);
  const isNew =
    (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  const isEnd = Math.ceil(
    (endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );

  const remainingDays = (deadline) => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - currentDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  // const daysRemaining = remainingDays(offer.deadline);

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
            株式会社ラクウェブ
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
            {/* <Flex
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
                6
              </Box>
              日
            </Flex> */}
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
              募集求人
            </Box>
          </Flex>
          <OfferCard3 {...offer} />
          <Box mt={{ base: `${36 / 3.75}vw`, md: `${50 / 19.2}vw` }}>
            <OfferCard3 {...offer} />
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
