// import layer
// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { BreadcrumbOffers } from '~/components/organisms/BreadcrumbOffers';
import { Footer } from '~/components/footers/Footer';
import { Header } from '~/components/headers/Header';
import { Member } from '~/components/organisms/Member';

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
        <BreadcrumbOffers title={`会員証`} />
        <Member />
      </Box>
      <Footer />
    </>
  );
};
