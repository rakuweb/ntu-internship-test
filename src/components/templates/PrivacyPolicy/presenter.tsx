// import layer
// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Footer } from '~/components/footers/Footer';
import { Header } from '~/components/headers/Header';
import { BreadcrumbOffers } from '~/components/organisms/BreadcrumbOffers';
import { Privacy } from '~/components/organisms/Privacy';

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
        <BreadcrumbOffers title={`プライバシーポリシー`} />
        <Privacy />
      </Box>
      <Footer />
    </>
  );
};
