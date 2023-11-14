// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

// import { Footer } from 'components/footers/Footer';
import { Header } from 'components/headers/Header';
// import { OfferList } from 'features/offers/OfferList';
import { Firstview } from 'features/offers/Firstview';
import { styles } from './styles';

const OfferList = dynamic(
  import('features/offers/OfferList').then((mod) => mod.OfferList)
);
const Footer = dynamic(
  import('components/footers/Footer').then((mod) => mod.Footer)
);

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
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
};
