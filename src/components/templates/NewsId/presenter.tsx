// import layer
// import layer
import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { mq } from '~/constants/styles';

import { NewsId } from '~/components/organisms/NewsId';
import { BreadcrumbGray } from 'organisms/BreadcrumbGray';
import { ContactSection } from 'organisms/sections/ContactSection';
import { Footer } from 'organisms/footers/Footer';
import { Header } from 'organisms/headers/Header';

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
        <BreadcrumbGray title={`ニュース`} />
        <NewsId />
        <ContactSection />
      </Box>
      <Footer />
    </>
  );
};

// styles
const styles = css``;
