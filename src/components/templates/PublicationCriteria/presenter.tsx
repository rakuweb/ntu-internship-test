// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Footer } from '~/components/footers/Footer';
import { Header } from '~/components/headers/Header';
import { BreadcrumbOffers } from '~/components/organisms/BreadcrumbOffers';
import { PublicationCriteriaContent } from '~/components/organisms/PublicationCriteriaContent';

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
      <Box as={`main`}>
        <BreadcrumbOffers title={`広告掲載基準`} />
        <PublicationCriteriaContent />
      </Box>
      <Footer />
    </>
  );
};
