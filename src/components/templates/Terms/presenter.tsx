// import layer
// import layer
import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { mq } from '~/constants/styles';

import { BreadcrumbOffers } from '~/components/organisms/BreadcrumbOffers';
import { Footer3 } from '~/components/footers/Footer3';
import { Header } from '~/components/headers/Header';
import { TermContent } from '~/components/organisms/TermContent';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <>
      <Header />
      <Box as={`main`} css={styles}>
        <BreadcrumbOffers title={`利用規約`} />
        <TermContent />
      </Box>
      <Footer3 />
    </>
  );
};

// styles
const styles = css``;
