// src/new-components/templates/OfferId/presenter.tsx
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
  return (
    <>
      <Header />
      <OfferDetail
        title={title}
        description={description}
        company_name={company_name}
      />
      <Footer />
    </>
  );
};
