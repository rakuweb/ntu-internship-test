// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { AdvertisementDetail } from '~/components/AdvertisementDetail';

import { Footer } from '~/components/footers/Footer';
import { Header } from 'components/headers/Header';
import { BreadcrumbOffers } from '~/components/organisms/BreadcrumbOffers';
import { useTargetOfferStore, selectBreadCrumbItem } from 'features/offers';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const { jobTitle, companyName } = useTargetOfferStore(selectBreadCrumbItem);
  const pageTitle = `広告記事(仮)`;

  return (
    <>
      <Box display={{ base: `block`, lg: `none` }}>
        <Header />
      </Box>
      <BreadcrumbOffers title={pageTitle} />
      <AdvertisementDetail />
      <Footer />
    </>
  );
};
