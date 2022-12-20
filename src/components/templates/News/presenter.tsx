// import layer
import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Footer } from '~/components/footers/Footer';
import { Header } from '~/components/headers/Header';
import { BreadcrumbWhite } from '~/components/organisms/BreadcrumbWhite';
import { ContactSection } from '~/components/organisms/sections/ContactSection';
import { NewsCard } from '~/components/organisms/cards/NewsCard';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <>
      <Header />
      <Box as={`main`} css={styles}>
        <BreadcrumbWhite title={`新着情報`} />
        <section className="news-title">
          <h1 className="news-title__h1">新着情報</h1>
        </section>

        <section className="news-option">
          <p className="news-option__description">
            仮）Not the Univercityの最新情報をお届けします。
          </p>

          <div className="news-option__button-list">
            <a className="news-option__button-list__button--blue">すべて</a>
            <a className="news-option__button-list__button--white">
              病気症状について
            </a>
            <a className="news-option__button-list__button--white">ニュース</a>
          </div>
        </section>

        <section className="news-article-list">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </section>
      </Box>
      <Footer />
    </>
  );
};

// styles
const styles = css`
  .news-title {
    background-image: url('/dev/img/news.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 160px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-family: var(--font-family-yugothic-medium);
  }

  .news-title__breadcrumb {
    display: none;
  }

  .news-title__h1 {
    color: #003068;
    text-align: center;
    font-size: 32px;
    padding: 0 0 8px;
    border-bottom: 1px solid #fff;
  }

  //

  .news-option {
    display: flex;
    padding: 48px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f3f5;
    font-family: var(--font-family-yugothic-medium);
  }

  .news-option__description {
    font-size: 16px;
    color: #003968;
  }

  .news-option__button-list {
    margin: 32px 0 0;
  }

  .news-option__button-list__button--blue {
    background-color: #003968;
    border: 1px solid #003968;
    color: #fff;
    font-size: 16px;
    padding: 4px 12px;
    border-radius: 4px;
    margin: 0 4px;
    cursor: pointer;
  }

  .news-option__button-list__button--blue:hover {
    opacity: 0.8;
  }

  .news-option__button-list__button--white {
    background-color: #fff;
    border: 1px solid #003968;
    color: #003968;
    font-size: 16px;
    padding: 4px 12px;
    border-radius: 4px;
    margin: 0 4px;
    cursor: pointer;
  }

  .news-option__button-list__button--white:hover {
    opacity: 0.8;
  }

  //
  .news-article-list {
    background-color: #fff;
    display: flex;
    justify-content: center;
    padding: 28px 0;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-family-yugothic-medium);
  }

  ${mq[2]} {
    .news-title {
      height: 200px;
    }

    .news-title__breadcrumb {
      display: block;
      width: 1200px;
      color: #003068;
      position: absolute;
      top: 32px;
      font-family: var(--font-family-yugothic-medium);
    }
  }
`;
