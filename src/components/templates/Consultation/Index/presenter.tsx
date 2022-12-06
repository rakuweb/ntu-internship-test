// import layer
import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import dynamic from 'next/dynamic';

import { mq } from '~/constants/styles';

import { ConsultationIndex } from 'organisms/ConsultationIndex';
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
  const Carousel = dynamic(
    () =>
      import('~/components/organisms/firstviews/ClinicsFirstview').then(
        (module) => module.ClinicsFirstview
      ),
    {
      ssr: false,
      // eslint-disable-next-line
      loading: () => (
        <Box
          h={{ base: `100vh`, lg: `480px`, xl: `560px` }}
          bg={`var(--porcelain)`}
        />
      ),
    }
  );

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
