// import layer
import { FC } from 'react';
import dynamic from 'next/dynamic';

import { Header } from 'new-components/headers/Header';
import { OfferDetail } from 'new-components/offerID/OfferDetail';

const Footer = dynamic(
  import('new-components/footers/Footer').then((mod) => mod.Footer)
);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <Header />
      <OfferDetail />
      <Footer />
    </>
  );
};
