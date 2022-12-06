// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';
import { Image } from '@chakra-ui/react';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  const list = {
    title: `タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。`,
    date: `2022.12.06`,
    tag: `タグ`,
    description: `横向き下の難しい親知らず抜歯をしました。大病院の口腔外科で抜いたのですが溶ける糸を使用してる為、次の診察は1ヶ月後でいいそうです。
消毒もしない方針とのことです。
溶ける糸というのはネットで調べても珍しいらしく衛生的に大丈夫でしょうか？
年末までにかかりつけの歯医者に見せた方がいいのか悩んでおります。
しかし現在は口が開けられない状態の為かかりつけの歯医者に予約しても出来るか分かりません。
口が大きく開けられないため歯ブラシも大変で抜歯した周辺の歯がうまく磨けません。`,
  };

  return (
    <div css={styles}>
      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <p className="consultation-card-list__card__title large">
            {list.title}
          </p>
          <div className="consultation-card-list__card__info">
            <p className="consultation-card-list__card__info__name">
              {list.date}
            </p>
            <a href="#" className="consultation-card-list__card__info__tag">
              {list.tag}
            </a>
          </div>
          <hr className="consultation-card-list__card__border" />
          <Image src="/dev/img/recruit-test.png" className="Img"></Image>
          <p className="consultation-card-list__card__description">
            {list.description}
          </p>
        </div>
      </section>
    </div>
  );
};

// styles
const styles = css`
  //
  .consultation-card-list {
    background-color: #f0f3f5;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Noto Sans JP', sans-serif;
    margin: 0 0 -20px 0;
    padding: 32px 0 64px;
  }
  .consultation-card-list__card {
    width: calc(100% - 32px);
    padding: 24px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;
    align-items: flex-end;
  }
  .consultation-card-list__card__title {
    width: 100%;
    font-size: 18px;
    color: #003968;
    font-weight: bold;
  }
  .consultation-card-list__card__info {
    padding: 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin: 16px 0 0 0;
    flex-direction: column;
  }
  .consultation-card-list__card__info__name {
    color: #003968;
    font-size: 16px;
    margin: 0 16px 8px 0;
    line-height: 1.6;
    width: 100%;
  }
  .consultation-card-list__card__info__tag {
    font-size: 16px;
    margin: 0px 8px 0 0;
    padding: 4px 8px;
    color: #2194e5;
    border: 1px solid #2194e5;
    border-radius: 4px;
    cursor: pointer;
  }
  .consultation-card-list__card__info__tag:hover {
    opacity: 0.8;
  }
  .large {
    font-size: 20px;
  }
  .consultation-card-list__card__border {
    border-top: 1px dashed #003968;
    width: 100%;
    margin: 24px 0;
  }

  .Img {
    margin: 0 auto;
  }

  .consultation-card-list__card__description {
    color: #003968;
    font-size: 16px;
    padding: 0;
    width: 100%;
    line-height: 1.6;
    white-space: pre-wrap;
    margin: 24px 0 0 0;
  }
  .consultation-card-list__card__readmore {
    margin: 8px 0 0 0;
    line-height: 1.6;
    color: #003968;
    font-size: 16px;
    text-decoration: underline;
  }
  .consultation-card-list__card__readmore:hover {
    opacity: 0.8;
  }
  //

  //

  ${mq[2]} {
    //
    .Img {
      margin: 36px auto 0 auto;
    }

    .large {
      font-size: 32px;
    }

    .clinics-comments__card-list__card {
      width: 1024px;
    }
    .clinics-comments__card-list__card__info {
      flex-direction: row;
      align-items: center;
    }
    .consultation-card-list__card__info__tag {
      font-size: 16px;
      margin: 0px 8px 0 0;
    }

    .clinics-comments__card-list__card__info__left {
      flex-direction: row;
      align-items: center;
    }
    .clinics-comments__card-list__card__info__left__like {
      margin: 0;
    }
    .clinics-comments__card-list__card__review {
      justify-content: flex-end;
    }
    .clinics-comments__card-list__card__review__button {
      margin: 0 0 0 16px;
    }
    .consultation-card-list__card {
      width: 1200px;
    }
    .consultation-option__container {
      width: 1200px;
      flex-direction: row;
      align-items: center;
    }
    //
    .consultation-title {
      height: 300px;
    }
    .consultation-title__image-left {
      left: 10vw;
      width: calc(552px / 2);
      height: calc(420px / 2);
    }
    .consultation-title__image-right {
      right: 10vw;
      width: calc(548px / 2);
      height: calc(424px / 2);
    }
    //
    .consultation-popular-category__tag-list {
      flex-wrap: nowrap;
    }
    .consultation-popular-category__tag-list__tag {
      margin: 0 4px;
    }
    .consultation-popular-category__tag-list {
      width: 100%;
    }
    .consultation-popular-category {
      padding: 48px 0;
    }
    .consultation-option__container__sort {
      margin: 0;
      justify-content: flex-end;
    }
    .consultation-card-list__card__info {
      flex-direction: row;
      align-items: center;
    }
    .consultation-card-list__card__description {
      padding: 50px 60px;
      font-size: 1.5rem;
      margin: 0 0;
    }
    .consultation-card-list__card__title {
      padding: 16px 58px 0 58px;
    }

    .consultation-card-list__card__info {
      padding: 0 0 0 32px;
      margin: 16px 0 0 0;
    }
    .consultation-card-list__card__info__name {
      width: auto;
      margin: 0 16px 0 30px;
    }
    .consultation-card-list__card__count {
      padding: 0 0 0 32px;
      margin: 8px 0 0 0;
    }
    .consultation-card-list__card__anser__date {
      padding: 0 0 0 32px;
    }
    .consultation-card-list__card__anser__date.detail {
      padding: 0 0 0 32px;
    }
    .consultation-card-list__card__anser__description {
      padding: 0 0 0 32px;
    }
    //
    .consultation-card-list {
      margin: 0 0 -120px 0;
    }
  }
`;
