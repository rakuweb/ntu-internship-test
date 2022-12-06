// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';
import { Image } from 'atoms/Image';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <div css={styles}>
      <section className="consultation-title">
        <div className="consultation-title__breadcrumb">
          <a href="#" className="consultation-title__breadcrumb__link">HOME</a>
          <a href="#" className="consultation-title__breadcrumb__link">新着情報</a>
        </div>
        <div className="consultation-title__container">
          <p className="consultation-title__container__title">
            歯の悩み相談
          </p>
          <p className="consultation-title__container__description">
            みなさんの歯の疑問・質問に歯医者さんがお答えします！
          </p>
          <a href="#" className="consultation-title__container__button">
            悩みを質問する
          </a>
        </div>
        <Image src="/dev/img/consultation_1.png" alt="" className="consultation-title__image-left" />
        <Image src="/dev/img/consultation_2.png" alt="" className="consultation-title__image-right" />
      </section>

      <section className="consultation-popular-category">
        <p className="consultation-popular-category__title">
          よく表⽰されるカテゴリー
        </p>
        <div className="consultation-popular-category__tag-list">
          <a href="#" className="consultation-popular-category__tag-list__tag">＃虫歯</a>
          <a href="#" className="consultation-popular-category__tag-list__tag">＃親知らず</a>
          <a href="#" className="consultation-popular-category__tag-list__tag">＃入れ歯</a>
          <a href="#" className="consultation-popular-category__tag-list__tag">＃クラウン</a>
          <a href="#" className="consultation-popular-category__tag-list__tag">＃唾液</a>
          <a href="#" className="consultation-popular-category__tag-list__tag">＃エナメル質</a>
        </div>
      </section>

      <section className="consultation-option">
        <div className="consultation-option__container">
          <p className="consultation-option__container__count">
            表示 1 / 28 ページ :全<span className="large"> 280 </span>件
          </p>
          <div className="consultation-option__container__sort">
            <p>並び替え :</p>
            <input type="radio" name="example" value="sample" className="consultation-option__container__sort__radio" /><p>新着相談順</p>
            <input type="radio" name="example" value="sample" className="consultation-option__container__sort__radio" checked /><p>新着回答順</p>
          </div>
        </div>
      </section>


      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <p className="consultation-card-list__card__title">
            親知らず抜歯
          </p>
          <div className="consultation-card-list__card__info">
            <p className="consultation-card-list__card__info__name">
              投稿者 :はなさん（50代 / 女性） / 2022.01.14 
            </p>
            <a href="#" className="consultation-card-list__card__info__tag">
              ＃親知らず
            </a>
          </div>
          <p className="consultation-card-list__card__count">
            回答数 : 1件
          </p>
          <hr className="consultation-card-list__card__border" />
          <p className="consultation-card-list__card__description">
            横向き下の難しい親知らず抜歯をしました。大病院の口腔外科で抜いたのですが溶ける糸を使用してる為、次の診察は1ヶ月後でいいそうです。消毒もしない方針とのことです。溶ける糸というのはネットで調べても珍しいらしく衛生的に大丈夫でしょうか？年末までにかかりつけの歯医者に見せた方がい...
          </p>
          <a href="#" className="consultation-card-list__card__readmore">
            続きを見る
          </a>

          <div className="consultation-card-list__card__anser">
            <p className="consultation-card-list__card__anser__date">
              回答 :2022.01.15
            </p>
            <p className="consultation-card-list__card__anser__description">
              親知らずの抜歯、大変だったでしょうね。溶ける糸というのはよく外科手術で使うものです。医科では良く使いますので特に珍しいものではあ...
            </p>
          </div>
        </div>

        <div className="consultation-card-list__card">
          <p className="consultation-card-list__card__title">
            親知らず抜歯
          </p>
          <div className="consultation-card-list__card__info">
            <p className="consultation-card-list__card__info__name">
              投稿者 :はなさん（50代 / 女性） / 2022.01.14 
            </p>
            <a href="#" className="consultation-card-list__card__info__tag">
              ＃親知らず
            </a>
          </div>
          <p className="consultation-card-list__card__count">
            回答数 : 1件
          </p>
          <hr className="consultation-card-list__card__border" />
          <p className="consultation-card-list__card__description">
            横向き下の難しい親知らず抜歯をしました。大病院の口腔外科で抜いたのですが溶ける糸を使用してる為、次の診察は1ヶ月後でいいそうです。消毒もしない方針とのことです。溶ける糸というのはネットで調べても珍しいらしく衛生的に大丈夫でしょうか？年末までにかかりつけの歯医者に見せた方がい...
          </p>
          <a href="#" className="consultation-card-list__card__readmore">
            続きを見る
          </a>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .consultation-title {
    display: flex;
    width: 100vw;
    height: 500px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    position: relative;
    font-family: var(--font-family-yugothic-medium);
  }

  .consultation-title__breadcrumb {
    position: absolute;
    top: 32px;
    left: 32px;
    color: #003968;
    font-size: 12px;
  }

  .consultation-title__breadcrumb__link {
    color: #003968;
  }

  .consultation-title__breadcrumb__link:hover {
    opacity: 0.8;
  }

  .consultation-title__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .consultation-title__container__title {
    font-size: 32px;
    color: #1978BB;
    margin: 16px 0;
    width: calc(100% - 64px);
    text-align: center;
  }

  .consultation-title__container__description {
    font-size: 16px;
    color: #003968;
    margin: 16px 0;
    width: calc(100% - 64px);
    line-height: 1.6;
    text-align: center;
  }

  .consultation-title__container__button {
    font-size: 16px;
    color: #fff;
    background-color: #2194E5;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 50px;
    border-radius: 8px;
    margin: 16px 0;
    cursor: pointer;
  }

  .consultation-title__container__button:hover {
    opacity: 0.8;
  }

  .consultation-title__image-left {
    position: absolute;
    bottom: 0;
    left: 5vw;
    width: calc(552px / 4);
    height: calc(420px / 4);
  }

  .consultation-title__image-right {
    position: absolute;
    bottom: 0;
    right: 5vw;
    width: calc(548px / 4);
    height: calc(424px / 4);
  }

  //

  .consultation-popular-category {
    background-color: #F0F3F5;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 32px;
    font-family: var(--font-family-yugothic-medium);
  }

  .consultation-popular-category__title {
    text-align: center;
    width: 100%;
    font-size: 16px;
    color: #003968;
  }

  .consultation-popular-category__tag-list {
    margin: 24px 0 0;
    width: calc(100% - 32px);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .consultation-popular-category__tag-list__tag {
    font-size: 16px;
    background-color: #fff;
    margin: 0 4px 8px;
    padding: 4px 8px;
    color: #2194E5;
    border: 1px solid #2194E5;
    border-radius: 4px;
    cursor: pointer;
  }

  .consultation-popular-category__tag-list__tag:hover {
    opacity: 0.8;
  }

  //

  .consultation-option {
    display: flex;
    justify-content: center;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-family-yugothic-medium);
    background-color: #F0F3F5;
  }

  .consultation-option__container {
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 48px 0 0;
    border-top: 1px solid #257FBF;
  }

  .consultation-option__container__count {
    color: #003968;
    font-size: 16px;
    width: 100%;
  }

  .consultation-option__container__sort {
    display: flex;
    align-items: center;
    color: #003968;
    font-size: 16px;
    margin: 16px 0 0;
    width: 100%;
    justify-content: flex-start;
  }

  .consultation-option__container__sort__radio {
    -webkit-appearance: radio;
    margin: 0 4px 0 12px;
    cursor: pointer;
  }

  //

  .consultation-card-list {
    background-color: #F0F3F5;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-family-yugothic-medium);
    margin: 0 0 -20px 0;
    padding: 32px 0 64px;
  }

  .consultation-card-list__card {
    width: calc(100% - 32px);
    padding: 24px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;
    align-items: flex-end;
  }

  .consultation-card-list__card__title {
    padding: 32px 0 0;
    width: 100%;
    font-size: 18px;
    color: #E9495C;
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
    font-size: 12px;
    margin: 0 16px 8px 0;
    line-height: 1.6;
    width: 100%;
  }

  .consultation-card-list__card__info__tag {
    font-size: 16px;
    margin: 0 8px 0 0;
    padding: 4px 8px;
    color: #2194E5;
    border: 1px solid #2194E5;
    border-radius: 4px;
    cursor: pointer;
  }

  .consultation-card-list__card__info__tag:hover {
    opacity: 0.8;
  }

  .consultation-card-list__card__count {
    color: #003968;
    font-size: 16px;
    padding: 0;
    width: 100%;
    margin: 16px 0 0 0;
  }

  .large {
    font-size: 24px;
  }

  .consultation-card-list__card__border {
    border-top: 1px dashed #003968;
    width: 100%;
    margin: 24px 0;
  }

  .consultation-card-list__card__description {
    color: #003968;
    font-size: 16px;
    padding: 0;
    width: 100%;
    line-height: 1.6;
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
  .consultation-card-list__card__anser {
    background-color: #F0F3F5;
    border: 1px solid #257FBF;
    padding: 24px 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px 0 0;
  }

  .consultation-card-list__card__anser__date {
    width: 100%;
    color: #003968;
    font-size: 12px;
    padding: 32px 0 0 0;
  }

  .consultation-card-list__card__anser__description {
    width: 100%;
    color: #003968;
    font-size: 16px;
    margin: 16px 0 0;
    line-height: 1.6;
  }

  .clinics-comments__card-list {
    display: flex; 
    width: 100vw;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-family-yugothic-medium);
    line-height: 1.6;
  }

  .clinics-comments__card-list__card {
    display: flex;
    flex-direction: column;
    border: 1px solid #999999; 
    width: calc(100% - 32px);
    padding: 24px;
    border-radius: 8px;
    margin: 24px 0 0;
    color: #003968;
  }

  .clinics-comments__card-list__card__date {
    font-size: 12px;
    color: #003968;
  }

  .clinics-comments__card-list__card__info {
    display: flex;
    justify-content: space-between;
    margin: 16px 0 0;
    flex-direction: column;
    align-items: flex-start;
  }

  .clinics-comments__card-list__card__info__name {
    color: #E9495C;
    font-size: 16px;
  }

  .clinics-comments__card-list__card__info__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .clinics-comments__card-list__card__info__left__like {
    color: #E9495C;
    font-size: 16px;
    margin: 8px 0 0;
  }

  .clinics-comments__card-list__card__info__left__like-detail {
    color: #003968;
    font-size: 16px;
  }

  .red {
    color: #E9495C;
    font-size: 16px;
  }

  .clinics-comments__card-list__card__border {
    border-top: 1px solid #257FBF;
    width: 100%;
    margin: 20px 0 16px;
  }

  .clinics-comments__card-list__card__text {
    color: #003968;
    font-size: 16px;
    margin: 8px 0 0;
  }

  .gray {
    color: #666666;
    font-size: 16px;
  }

  .clinics-comments__card-list__card__review {
    margin: 8px 0 0;
    display: flex;
    justify-content: space-between;
  }

  .clinics-comments__card-list__card__review__button {
    padding: 8px;
    margin: 0;
    color: #666666;
    border: 1px solid #666666;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  .clinics-comments__card-list__card__review__button:hover {
    opacity: 0.8;
  }

  .clinics-comments__card-list__card__review__button.active {
    background-color: #2194E5;
    color: #fff;
    border: 1px solid #2194E5;
  }

  .clinics-comments__option {
    display: flex;
    justify-content: center;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    margin: 48px 0 8px 0;
    font-family: var(--font-family-yugothic-medium);
  }

  .clinics-comments__option__container {
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .clinics-comments__option__container__count {
    color: #003968;
    font-size: 16px;
  }

  .clinics-comments__option__container__sort {
    display: flex;
    align-items: center;
    color: #003968;
    font-size: 16px;
    margin: 16px 0 0;
  }

  .clinics-comments__option__container__sort__radio {
    -webkit-appearance: radio;
    margin: 0 4px 0 12px;
    cursor: pointer;
  }

  ${mq[2]} {
    .clinics-comments__option__container {
      width: 1024px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .clinics-comments__option__container__count {
      font-size: 12px;
    }
  
    .clinics-comments__option__container__sort {
      font-size: 12px;
    }

    .clinics-comments__option__container__sort {
      margin: 0;
    }

    .clinics-comments__option {
      margin: 56px 0 16px 0;
    }

    //

    .clinics-comments__card-list__card {
      width: 1024px;
    }

    .clinics-comments__card-list__card__info {
      flex-direction: row;
      align-items: center;
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
      padding: 0 0 0 32px;
    }

    .consultation-card-list__card__title {
      padding: 0 0 0 32px;
    }
    
    .consultation-card-list__card__info {
      padding: 0 0 0 32px;
      margin: 16px 0 0 0;
    }

    .consultation-card-list__card__info__name {
      width: auto;
      margin: 0 16px 0 0;
    }

    .consultation-card-list__card__count {
      padding: 0 0 0 32px;
      margin: 8px 0 0 0;
    }

    .consultation-card-list__card__anser__date {
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
