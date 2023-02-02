// import layer
import { FC } from 'react';

import { OfferDetail } from 'components/OfferDetail';
import { BreadcrumbGray } from 'organisms/BreadcrumbGray';
import { Footer } from 'components/footers/Footer';
import { Footer2 } from '~/components/footers/Footer2';
import { Footer3 } from '~/components/footers/Footer3';
import { Header } from 'components/headers/Header';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const pagetitle = `企業詳細`;

  return (
    <>
      <Header />
      {/* <BreadcrumbGray title={pagetitle} /> */}
      <OfferDetail />
      {/* <Footer2 /> */}
      <Footer3 />
    </>
  );
};
