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
import { Image } from 'atoms/Image';
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

  console.log(offer.createdAt);

  return (
    <div css={styles}>
      <BreadcrumbOfferId titles={pageTitles} />
      <Box
        mt={{ base: `0`, lg: `${80 / 19.2}vw` }}
        ml={{ base: ``, lg: `${183 / 19.2}vw` }}
      >
        <Box
          w={{ base: ``, lg: `${1012 / 19.2}vw` }}
          fontFamily={`'Noto Sans JP', sans-serif`}
          color={`#39414E`}
        >
          <Flex
            justify={`space-between`}
            fontSize={{ base: ``, lg: `${25 / 19.2}vw` }}
            mb={{ base: ``, lg: `${20 / 19.2}vw` }}
          >
            株式会社ラクウェブ
            <Box>NEW</Box>
          </Flex>
          <Box
            display={`inline`}
            mb={{ base: ``, lg: `${25 / 19.2}vw` }}
            fontSize={{ base: ``, lg: `${40 / 19.2}vw` }}
            fontWeight={`bold`}
            color={`#41A4FD`}
            borderBottom={{ base: ``, lg: `2px solid ` }}
            lineHeight={`1.4em`}
          >
            {`未経験も活躍中。高時給1600円！7月までの限定で高時給のバイトご紹介！`}
          </Box>
        </Box>
      </Box>
    </div>
  );
};
