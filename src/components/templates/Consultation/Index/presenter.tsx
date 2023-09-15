// import layer
import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { ConsultationIndex } from 'organisms/ConsultationIndex';
import { ContactSection } from 'organisms/sections/ContactSection';
import { Footer } from 'organisms/footers/Footer';
import { Header } from 'components/headers/Header';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <>
      <Header />
      <Box as={`main`} css={styles}>
        <ConsultationIndex />
        <ContactSection />
      </Box>
      <Footer />
    </>
  );
};

// styles
const styles = css`


  }
`;
