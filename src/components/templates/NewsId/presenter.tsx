// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { BreadcrumbGray } from 'organisms/BreadcrumbGray';
import { Footer } from '~/components/footers/Footer';
import { Header } from '~/components/headers/Header';
import { NewsId } from '~/components/organisms/NewsId';

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
        <BreadcrumbGray title={`ニュース`} />
        <NewsId />
      </Box>
      <Footer />
    </>
  );
};
