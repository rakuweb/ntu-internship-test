// import layer
import { VFC } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Header } from 'organisms/headers/Header';
import { Footer } from 'organisms/footers/Footer';
import { SearchIndex } from 'organisms/SearchIndex';
import { ContactSection } from '~/components/organisms/sections/ContactSection';
import { mq } from '~/constants/styles';
import { BreadcrumbGray } from 'organisms/BreadcrumbGray';

const TopFirstview = dynamic(
  () =>
    import('~/components/organisms/firstviews/TopFirstview').then(
      (module) => module.TopFirstview
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

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <>
      <Header />
      <Box as={`main`} css={styles}>
        <BreadcrumbGray />
        <SearchIndex />
        <ContactSection />
      </Box>
      <Footer />
    </>
  );
};

// styles
const styles = css`
  // page-title
  .page-title {
    background-color: #f0f3f5;
    display: flex;
    font-family: var(--font-family-yugothic-medium);
    justify-content: center;
    padding: 28px 0;
    width: 100vw;
  }

  .page-title__text {
    color: #1978bb;
    font-weight: 700;
    font-size: 24px;
    padding-bottom: 10px;
    border-bottom: 2px solid #1978bb;
  }

  .page-title__text--small {
    font-size: 24px;
  }

  //ContentsCount
  .contents-count {
    background-color: #f0f3f5;
    display: flex;
    font-family: var(--font-family-yugothic-medium);
    justify-content: center;
    padding: 16px 0 0;
    width: 100vw;
  }

  .contents-count__text {
    color: #003968;
    font-size: 12px;
    width: calc(100% - 32px);
  }

  .contents-count__text--bold {
    font-size: 16px;
    margin: 0 4px;
    font-weight: bold;
  }

  ${mq[2]} {
    .page-title__text {
      font-size: 32px;
    }

    .contents-count__text {
      color: #003968;
      font-size: 12px;
      width: 1200px;
    }
  }
`;
