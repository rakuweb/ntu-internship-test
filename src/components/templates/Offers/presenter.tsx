// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'organisms/headers/Header';
import { Footer } from 'organisms/footers/Footer';
import { OfferList } from 'features/offers/OfferList';
import { ContactSection } from '~/components/organisms/sections/ContactSection';
import { BreadcrumbGray } from 'organisms/BreadcrumbGray';
import { styles } from './styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <>
      <Header />
      <Box as={`main`} css={styles}>
        <BreadcrumbGray />
        <OfferList />
        <ContactSection />
      </Box>
      <Footer />
    </>
  );
};
