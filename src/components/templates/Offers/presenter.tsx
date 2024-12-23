// import layer
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { Header } from 'components/headers/Header';
import { Firstview } from 'features/offers/Firstview';
import { OfferList } from 'features/offers/OfferList';
import { styles } from './styles';

const Footer = dynamic(
  import('components/footers/Footer').then((mod) => mod.Footer)
);

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export function Presenter() {
  return (
    <>
      <Header isTop />

      <Box as={`main`} css={styles}>
        {/* <BreadcrumbOffers title={pageTitle} /> */}
        <Firstview />
        {/* <Taglist /> */}
        <OfferList />
      </Box>
      <Footer />
    </>
  );
}
