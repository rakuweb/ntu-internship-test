// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer';
import { OfferList } from 'features/offers/OfferList';
import { styles } from './styles';
import { Firstview } from '~/features/offers/Firstview';
import { Taglist } from '~/features/offers/Taglist';

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
        <Taglist />
        <OfferList />
      </Box>
      <Footer />
    </>
  );
};
