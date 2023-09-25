// import layer
import { FC } from 'react';

// import { OfferDetail } from 'components/OfferDetail';
import { Header } from 'components/headers/Header';
import { AboutCompany } from 'components/organisms/AboutCompany';
import { Footer } from '~/components/footers/Footer';
import { BreadcrumbOfferId } from '~/components/organisms/BreadcrumbOfferId';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { useCompanyStore, selectCompany } from '~/features/company';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const company = useCompanyStore(selectCompany);
  const pageTitles = ['企業情報', company?.companyName];

  return (
    <>
      <Header />
      <BreadcrumbOfferId titles={pageTitles} />
      <AboutCompany />
      <Footer />
    </>
  );
};
