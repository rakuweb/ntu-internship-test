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
import { InternalLink } from '~/components/links/InternalLink';
import { Span } from '../Span';
import { routes } from 'constants/routes';
import { BreadcrumbOfferId } from '../organisms/BreadcrumbOfferId';
import { Atmosphere } from './Atmosphere';
import { Jobterms } from './Jobterms';
import { OfferCard3 } from '~/features/offers/OfferCard3';
import { Contact } from '../organisms/Contact';
import { Fixedmenu } from './Fixedmenu';
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
      offer?.formUrl && setPrevPath(decodeURI(offer.formUrl));
      window.localStorage.setItem('prevUrl', offer?.formUrl);
      liff.login(); //{ redirectUri: redirectUri });
    } else {
      window.location.href = offer.formUrl;
    }
  };
  const currentDate = new Date();
  const startDate = new Date(offer.createdAt);
  const endDate = new Date(offer.deadline);
  const isNew =
    (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  const isEnd = Math.ceil(
    (endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );
  const href = `${routes.companies}/${company.id}`;

  const remainingDays = (deadline) => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - currentDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  const daysRemaining = remainingDays(offer.deadline);

  return (
    <div css={styles}>
      <BreadcrumbOfferId titles={pageTitles} />
      <Flex
        mt={{ base: `0`, md: `${80 / 19.2}vw` }}
        ml={{ base: ``, md: `${45 / 7.68}vw`, lg: `${183 / 19.2}vw` }}
      >
        <Box
          w={{ base: ``, md: `${444 / 7.68}vw`, lg: `${1012 / 19.8}vw` }}
          fontFamily={`'Noto Sans JP', sans-serif`}
          color={`#39414E`}
        >
          <Flex
            justify={`space-between`}
            fontSize={{ base: ``, md: `${12 / 7.68}vw`, lg: `${25 / 19.2}vw` }}
            mb={{ base: ``, md: `${20 / 19.2}vw` }}
          >
            株式会社ラクウェブ
            <Flex
              alignItems={`center`}
              justify={`center`}
              fontWeight={`bold`}
              fontSize={{ base: ``, md: `${22 / 19.2}vw` }}
              mt={{ base: ``, md: `${-5 / 19.2}vw` }}
              px={{ base: ``, md: `${50 / 19.2}vw` }}
              py={{ base: ``, md: `${8 / 19.2}vw` }}
              bg={`#F26601`}
              color={`white`}
              borderRadius={{ base: ``, md: `${3 / 19.2}vw` }}
            >
              NEW
            </Flex>
          </Flex>
          <Box
            as={`h1`}
            display={`inline`}
            mb={{ base: ``, md: `${25 / 19.2}vw` }}
            fontSize={{ base: ``, md: `${40 / 19.2}vw` }}
            fontWeight={`bold`}
            color={`#41A4FD`}
            borderBottom={{ base: ``, md: `2px solid ` }}
            lineHeight={`1.4em`}
          >
            {`未経験も活躍中。高時給1600円！7月までの限定で高時給のバイトご紹介！`}
          </Box>
          <Box
            mt={{ base: ``, md: `${25 / 19.2}vw` }}
            mb={{ base: ``, md: `${54 / 19.2}vw` }}
            overflow={`hidden`}
            borderRadius={{ base: `${5 / 3.75}vw`, md: `${5 / 19.2}vw` }}
          >
            <NImage image={offer.image} />
          </Box>
          {/* 求人の詳細 */}
          <Box
            bg={`#F4FAFE`}
            w={`100%`}
            pt={{ base: ``, md: `${42 / 19.2}vw` }}
            pb={{ base: ``, md: `${47 / 19.2}vw` }}
            pl={{ base: ``, md: `${45 / 19.2}vw` }}
            mb={{ base: ``, md: `${80 / 19.2}vw` }}
          >
            <Box
              fontSize={{
                base: ``,
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
              fontSize={{ base: ``, md: `${20 / 19.2}vw` }}
              lineHeight={`1.5em`}
            >{`学校やご家庭、プライベートとの両立もバッチリ◎ライフスタイルを崩さず無理なく働けるシフト制です!福利厚生も整い、腰を据えて長く活躍できる環境です♪学校やご家庭、プライベートとの両立もバッ チリ◎ライフスタイルを崩さず無理なく働けるシフト制です!福利厚生も整い、腰を据えて長く活躍できる環境で`}</Box>
          </Box>
          <Atmosphere mb={{ base: ``, md: `${80 / 19.2}vw` }} />
          <Jobterms mb={{ base: ``, md: `${125 / 19.2}vw` }} />
          <Flex mb={{ base: ``, md: `${55 / 19.2}vw` }}>
            <Image
              ml={{ base: ``, md: `${23 / 19.2}vw` }}
              mr={{ base: ``, md: `${13 / 19.2}vw` }}
              mb={{ base: ``, md: `${9 / 19.2}vw` }}
              w={{ base: ``, md: `${15 / 7.68}vw`, lg: `${32 / 19.2}vw` }}
              h={{ base: ``, md: `${22 / 7.68}vw`, lg: `${32 / 19.2}vw` }}
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
                base: ``,
                md: `${16 / 7.68}vw`,
                lg: `${36 / 19.2}vw`,
              }}
              fontWeight={`bold`}
            >
              新着求人
            </Box>
          </Flex>
          <OfferCard3
            createdByid={1}
            {...offer}
            deadline={daysRemaining}
            startDate={offer.createdAt}
          />
          <Box mt={{ md: `${50 / 19.2}vw` }}>
            <OfferCard3
              createdByid={1}
              {...offer}
              deadline={daysRemaining}
              startDate={offer.createdAt}
            />
          </Box>
        </Box>
        <Box ml={{ base: ``, md: `${35 / 7.68}vw`, lg: `${135 / 19.2}vw` }}>
          <Fixedmenu />
        </Box>
      </Flex>
      <Contact
        mt={{ base: ``, md: `${380 / 19.2}vw` }}
        mb={{ base: ``, md: `${253 / 19.2}vw` }}
        mx={`auto`}
      />
    </div>
  );
};
