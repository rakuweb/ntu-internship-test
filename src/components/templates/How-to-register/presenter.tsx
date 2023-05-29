// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Footer } from '~/components/footers/Footer';
import { Header } from '~/components/headers/Header';
import { HowToRegisterContent } from '~/components/organisms/How-to-registerContent';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { BreadcrumbOfferId } from '~/components/organisms/BreadcrumbOfferId';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <Header />
      <Box as={`main`}>
        <BreadcrumbOfferId titles={[`会員登録方法`]} />
        <HowToRegisterContent />
      </Box>
      <Footer />
    </>
  );
};
