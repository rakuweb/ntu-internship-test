// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer';
import { OfferList } from 'features/offers/OfferList';
import { BreadcrumbGray } from 'organisms/BreadcrumbGray';
import { styles } from './styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const pageTitle = `オファー一覧`;
  return (
    <>
      <Header />
      <Box as={`main`} css={styles}>
        <BreadcrumbGray title={pageTitle} />
        <OfferList />
      </Box>
      <Footer />
    </>
  );
};
