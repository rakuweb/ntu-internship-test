// import layer
import { VFC } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { InternalLink } from '~/components/links/InternalLink';

import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  const list = {
    Link: `/news/1`,
    Img: `/images/newscard/clip-5@1x.png`,
    Date: `2022.12.06`,
    Category: `ニュース`,
    Title: `手磨きと電動歯ブラシのプラーク除去力を比較`,
    Description: ` 記事の本文が表示される想定です、記事の本文が表示される想定です、記事の本文が表示される想定です、記事の本文が表示される想定です。記事の本文が表示される想定です、記事の本文が表示される想定です。...`,
    Tag: `タグ`,
  };

  return (
    <Box css={styles}>
      <div className="news-article-item">
        <InternalLink className="hoverClass" href={list.Link}>
          <Image
            className="news-article-item__image"
            src={list.Img}
            width={350}
            height={195}
            alt={``}
          />
          <div className="spacing_item">
            <p className="news-article-item__info">
              {list.Date} |{' '}
              <a href="#" className="news-article-item__info__link">
                {list.Category}
              </a>
            </p>
            <p className="news-article-item__title">{list.Title}</p>
            <p className="news-article-item__description">{list.Description}</p>
            <div className="news-article-item__tag-list">
              <div className="news-article-item__tag-list__tag">{list.Tag}</div>
              <div className="news-article-item__tag-list__tag">{list.Tag}</div>
            </div>
          </div>
        </InternalLink>
      </div>
    </Box>
  );
};

// styles
const styles = css`
  .news-article-item {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 25px 12px;
    border-bottom: 1px solid #257fbf;
    font-family: var(--font-family-yugothic-medium);
    flex-direction: column;
  }

  .hoverClass {
    display: flex;
    flex-direction: column;
  }
  .hoverClass:hover {
    opacity: 0.8;
  }

  .news-article-item__image {
    height: 195px;
    width: 350px;
  }

  .spacing_item {
    margin: 32px 0 0 0;
  }

  .news-article-item__info {
    color: #003968;
    font-size: 12px;
    width: 100%;
  }

  .news-article-item__info__link {
    color: #003968;
  }

  .news-article-item__title {
    color: #003968;
    font-size: 18px;
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
    color: #2194e5;
    font-size: 16px;
    border: 1px solid #2194e5;
    padding: 4px 12px;
    border-radius: 4px;
    margin-right: 8px;
  }

  .news-article-item__tag-list__tag:hover {
    opacity: 0.8;
  }

  ${mq[2]} {
    .news-article-item {
      width: 1200px;
      flex-direction: row;
      padding: 50px 0;
    }

    .hoverClass {
      display: flex;
      flex-direction: row;
    }

    .news-article-item__image {
      height: 167px;
      width: 300px;
    }

    .spacing_item {
      margin: 0 0 0 32px;
    }
  }
`;
