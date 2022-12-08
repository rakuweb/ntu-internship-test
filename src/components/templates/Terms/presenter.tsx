// import layer
// import layer
import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { mq } from '~/constants/styles';

import { BreadcrumbGray } from 'organisms/BreadcrumbGray';
import { Footer } from '~/components/footers/Footer';
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
        <BreadcrumbGray title={`利用規約`} />
        <TermContent />
      </Box>
      <Footer />
    </>
  );
};

// styles
const styles = css``;
