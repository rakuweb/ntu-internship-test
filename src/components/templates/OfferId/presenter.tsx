// import layer
import { FC } from 'react';

import { OfferDetail } from 'components/OfferDetail';
import { Footer3 } from '~/components/footers/Footer3';
import { Header } from 'components/headers/Header';
import { BreadcrumbOfferId } from '~/components/organisms/BreadcrumbOfferId';
import { useTargetOfferStore, selectBreadCrumbItem } from 'features/offers';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const { jobTitle, companyName } = useTargetOfferStore(selectBreadCrumbItem);
  const pageTitles = [companyName, jobTitle];

  return (
    <>
      <Header />
      <BreadcrumbOfferId titles={pageTitles} />
      {/* <BreadcrumbGray title={pagetitle} /> */}
      <OfferDetail />
      {/* <Footer2 /> */}
      <Footer3 />
    </>
  );
};
