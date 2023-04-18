// import layer
import { FC } from 'react';

// import { OfferDetail } from 'components/OfferDetail';
import { AboutCompany } from 'components/organisms/AboutCompany';
import { Footer } from '~/components/footers/Footer';
import { Header } from 'components/headers/Header';
import { BreadcrumbOfferId } from '~/components/organisms/BreadcrumbOfferId';
import { useTargetOfferStore, selectBreadCrumbItem } from 'features/offers';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const { companyName } = useTargetOfferStore(selectBreadCrumbItem);
  const pageTitles = ['企業詳細', companyName];

  return (
    <>
      <Header />
      <BreadcrumbOfferId titles={pageTitles} />
      <AboutCompany />
      <Footer />
    </>
  );
};
