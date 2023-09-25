// import layer
import { FC } from 'react';

import { OfferDetail } from 'components/OfferDetail';
import { Header } from 'components/headers/Header';
import { Footer } from '~/components/footers/Footer';

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
