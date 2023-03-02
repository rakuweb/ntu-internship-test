// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer';
import { OfferList } from 'features/offers/OfferList';
import { styles } from './styles';
import { BreadcrumbOffers } from '~/components/organisms/BreadcrumbOffers';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const pageTitle = `求人一覧`;
  return (
    <>
      <Header />
      <Box as={`main`} css={styles}>
        {/* <BreadcrumbOffers title={pageTitle} /> */}
        <OfferList />
      </Box>
      <Footer />
    </>
  );
};
