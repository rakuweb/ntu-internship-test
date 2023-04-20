// import layer
import { FC } from 'react';

import { OfferDetail } from 'components/OfferDetail';
import { Footer } from '~/components/footers/Footer';
import { Header } from 'components/headers/Header';
import { BreadcrumbOfferId } from '~/components/organisms/BreadcrumbOfferId';
import { useTargetOfferStore, selectBreadCrumbItem } from 'features/offers';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Tag } from '~/components/organisms/Tag';
import { useJobCategoryStore, selectJobCategory } from '~/features/category';

// type layer
export type PresenterProps = {
  deadline: boolean;
};

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <Header />
      <Tag deadline={false} />
      <Footer />
    </>
  );
};
