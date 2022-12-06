// import layer
import { VFC } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Header } from 'organisms/headers/Header';
import { Footer } from 'organisms/footers/Footer';
import { ContactSection } from '~/components/organisms/sections/ContactSection';
import { mq } from '~/constants/styles';
import { Image } from 'atoms/Image';

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
        <section className="news-title">
          <div className="news-title__breadcrumb">
            HOME &gt; 新着情報
          </div>
          <h1 className="news-title__h1">
            新着情報
          </h1>
        </section>

        <section className="news-option">
          <p className="news-option__description">
            仮）歯周病や虫歯治療、予防に関する疑問や不安など、あなたの健康に役立つ情報を紹介！
          </p>

          <div className="news-option__button-list">
            <a className="news-option__button-list__button--blue">
              すべて
            </a>
            <a className="news-option__button-list__button--white">
              病気症状について
            </a>
            <a className="news-option__button-list__button--white">
              ニュース
            </a>
          </div>
        </section>

        <section className="news-article-list">

          <div className="news-article-item">
            <Image
              src={`/dev/img/article-thumbnail_1.png`}
              width={300}
              height={167}
            />
            <div>
              <p className="news-article-item__info">
                2021.09.01 | <a href="#" className="news-article-item__info__link">ニュース</a>
              </p>
              <p className="news-article-item__title">
                手磨きと電動歯ブラシのプラーク除去力を比較
              </p>
              <p className="news-article-item__description">
                記事の本文が表示される想定です、記事の本文が表示される想定です、記事の本文が表示される想定です、記事の本文が表示される想定です。記事の本文が表示される想定です、記事の本文が表示される想定です。...
              </p>
              <div className="news-article-item__tag-list">
                <a href="#" className="news-article-item__tag-list__tag">
                  タグ
                </a>
                <a href="#" className="news-article-item__tag-list__tag">
                  タグ
                </a>
              </div>
            </div>
          </div>

          <div className="news-article-item">
            <Image
              src={`/dev/img/article-thumbnail_1.png`}
              width={300}
              height={167}
            />
            <div>
              <p className="news-article-item__info">
                2021.09.01 | <a href="#" className="news-article-item__info__link">ニュース</a>
              </p>
              <p className="news-article-item__title">
                手磨きと電動歯ブラシのプラーク除去力を比較
              </p>
              <p className="news-article-item__description">
                記事の本文が表示される想定です、記事の本文が表示される想定です、記事の本文が表示される想定です、記事の本文が表示される想定です。記事の本文が表示される想定です、記事の本文が表示される想定です。...
              </p>
              <div className="news-article-item__tag-list">
                <a href="#" className="news-article-item__tag-list__tag">
                  タグ
                </a>
                <a href="#" className="news-article-item__tag-list__tag">
                  タグ
                </a>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </Box>
      <Footer />
    </>
  );
};

// styles
const styles = css`
  .news-title {
    background-image: url("/dev/img/news.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-family: var(--font-family-yugothic-medium);
  }

  .news-title__breadcrumb {
    color: #FFF;
    width: 100%;
    position: absolute;
    top: 32px;
    font-family: var(--font-family-yugothic-medium);
  }

  .news-title__h1 {
    color: #FFF;
    text-align: center;
    font-size: 32px;
    padding: 0 0 8px;
    border-bottom: 1px solid #FFF;
  }

  //

  .news-option {
    display: flex;
    padding: 48px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F0F3F5;
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
    color: #FFF;
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
    background-color: #FFF;
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
    background-color: #FFF;
    display: flex;
    justify-content: center;
    padding: 28px 0;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-family-yugothic-medium);
  }

  .news-article-item {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 32px 0;
    border-bottom: 1px solid #257FBF;
    font-family: var(--font-family-yugothic-medium);
    flex-direction: column;
  }

  .news-article-item__image {
    height: 167px;
    width: 300px;
    margin: 0 32px 0 0;
  }

  .news-article-item__info {
    color: #003968;
    font-size: 12px;
    width: 100%;
  }

  .news-article-item__info__link {
    color: #003968;
  }

  .news-article-item__info__link:hover {
    opacity: 0.8;
  }

  .news-article-item__title {
    color: #003968;
    font-size: 16px;
    line-height: 1.7;
    margin: 16px 0 0;
    width: 100%;
  }

  .news-article-item__description {
    color: #003968;
    font-size: 16px;
    line-height: 1.6;
    margin: 8px 0 0;
    width: 100%;
  }

  .news-article-item__tag-list {
    margin: 16px 0 0;
    display: flex;
    width: 100%;
  }

  .news-article-item__tag-list__tag {
    color: #2194E5;
    font-size: 16px;
    border: 1px solid #2194E5;
    padding: 4px 12px;
    border-radius: 4px;
    margin-right: 8px;
  }

  .news-article-item__tag-list__tag:hover {
    opacity: 0.8;
  }

  ${mq[2]} {
    .news-title__breadcrumb {
      width: 1200px;
    }

    .news-article-item {
      width: 1200px;
    }

    .news-article-item {
      flex-direction: row;
    }
  }
`;
