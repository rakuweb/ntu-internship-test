// import layer
import { FC } from 'react';

import { Header } from 'components/headers/Header';
import { AdvertisementDetail } from '~/components/AdvertisementDetail';

import { Footer } from '~/components/footers/Footer';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      {/* <Box display={{ base: `block`, lg: `none` }}> */}
      <Header />
      {/* </Box> */}
      {/* <BreadcrumbOffers title={pageTitle} /> */}
      <AdvertisementDetail />
      <Footer />
    </>
  );
};
