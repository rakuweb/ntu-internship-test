// import layer
import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Header } from 'components/headers/Header';
import { BreadcrumbGray } from 'organisms/BreadcrumbGray';
import { Footer } from 'organisms/footers/Footer';
import { DictionaryContentsSection } from 'organisms/sections/DictionaryContentsSection';
import { ContactSection } from '~/components/organisms/sections/ContactSection';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <>
      <Header />
      <Box as={`main`} css={styles}>
        <BreadcrumbGray />
        <section className="page-title">
          <h1 className="page-title__text">
            歯<span className="page-title__text--small">の</span>辞典
          </h1>
        </section>
        <DictionaryContentsSection />
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
