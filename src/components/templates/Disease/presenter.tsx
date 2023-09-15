// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'organisms/footers/Footer';
import { ContactSection } from '~/components/organisms/sections/ContactSection';
import { mq } from '~/constants/styles';
import { DiseaseContentsSection } from 'organisms/sections/DiseaseContentsSection';
import { BreadcrumbGray } from 'organisms/BreadcrumbGray';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <Header />
      <Box as={`main`} css={styles}>
        <BreadcrumbGray />
        <section className="page-title">
          <h1 className="page-title__text">
            病名<span className="page-title__text--small">や</span>症状
            <span className="page-title__text--small">から</span>知る
          </h1>
        </section>
        <section className="contents-count">
          <p className="contents-count__text">
            表示 1 / 1 ページ :全
            <span className="contents-count__text--bold">8</span>件
          </p>
        </section>
        <DiseaseContentsSection />
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
