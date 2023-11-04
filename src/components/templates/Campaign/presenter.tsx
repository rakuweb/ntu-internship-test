// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Footer } from '~/components/footers/Footer';
import { Header } from '~/components/headers/Header';
import { BreadcrumbOfferId } from '~/components/organisms/BreadcrumbOfferId';
import { CampaignContent } from '~/components/organisms/CampaignContent';

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
        <BreadcrumbOfferId titles={[`キャンペーン`]} />
        <CampaignContent />
      </Box>
      <Footer />
    </>
  );
};
