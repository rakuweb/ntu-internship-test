// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <div css={styles}>
      <section className="clinics-comments__option">
        <div className="clinics-comments__option__container">
          <p className="clinics-comments__option__container__count">
            1〜3件 / 3件
          </p>
          <div className="clinics-comments__option__container__sort">
            <p>並び替え :</p>
            <input type="radio" name="example" value="sample" className="clinics-comments__option__container__sort__radio" /><p>新着順</p>
            <input type="radio" name="example" value="sample" className="clinics-comments__option__container__sort__radio" checked /><p>参考になった数順</p>
          </div>
        </div>
      </section>

      <section className="clinics-comments__card-list">
        <div className="clinics-comments__card-list__card">
          <p className="clinics-comments__card-list__card__date">
            2022.01.14 16:12
          </p>
          <div className="clinics-comments__card-list__card__info">
            <p className="clinics-comments__card-list__card__info__name">
              投稿者:はなさん（50代 / 女性）
            </p>
            <div className="clinics-comments__card-list__card__info__left">
              <p className="clinics-comments__card-list__card__info__left__like">
                5.0いいね！
              </p>
              <p className="clinics-comments__card-list__card__info__left__like-detail">
                （ 施設 <span className="red">5</span> / 対応 <span className="red">5</span> / 治療 <span className="red">5</span> / 防菌 <span className="red">5</span> ）
              </p>
            </div>
          </div>
          <hr className="clinics-comments__card-list__card__border" />
          <p className="clinics-comments__card-list__card__text">
            この医院のよかった点
          </p>
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">施設</span> 清潔感 / 内装・設備 / 駐車場
          </p>
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">対応</span> 人柄・気づかい
          </p>
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">治療</span> 説明 / 丁寧さ / 痛みへの配慮 / 治療後の経過
          </p>        
          <hr className="clinics-comments__card-list__card__border" />
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">治療内容</span> 虫歯
          </p>
          <p className="clinics-comments__card-list__card__text">
            丁寧に治療内容を説明して下さり、痛みにも大変配慮して頂けて、とても安心して治療を受けることができました。
          </p>
          <hr className="clinics-comments__card-list__card__border" />
          <div className="clinics-comments__card-list__card__review">
            <p className="clinics-comments__card-list__card__review__button active">
              参考になった
            </p>
            <p className="clinics-comments__card-list__card__review__button">
              参考にならなかった
            </p>
          </div>
        </div>

        <div className="clinics-comments__card-list__card">
          <p className="clinics-comments__card-list__card__date">
            2022.01.14 16:12
          </p>
          <div className="clinics-comments__card-list__card__info">
            <p className="clinics-comments__card-list__card__info__name">
              投稿者 :はなさん（50代 / 女性）
            </p>
            <div className="clinics-comments__card-list__card__info__left">
              <p className="clinics-comments__card-list__card__info__left__like">
                5.0いいね！
              </p>
              <p className="clinics-comments__card-list__card__info__left__like-detail">
                （ 施設 <span className="red">5</span> / 対応 <span className="red">5</span> / 治療 <span className="red">5</span> / 防菌 <span className="red">5</span> ）
              </p>
            </div>
          </div>
          <hr className="clinics-comments__card-list__card__border" />
          <p className="clinics-comments__card-list__card__text">
            この医院のよかった点
          </p>
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">施設</span> 清潔感 / 内装・設備 / 駐車場
          </p>
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">対応</span> 人柄・気づかい
          </p>
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">治療</span> 説明 / 丁寧さ / 痛みへの配慮 / 治療後の経過
          </p>        
          <hr className="clinics-comments__card-list__card__border" />
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">治療内容</span> 虫歯
          </p>
          <p className="clinics-comments__card-list__card__text">
            丁寧に治療内容を説明して下さり、痛みにも大変配慮して頂けて、とても安心して治療を受けることができました。
          </p>
          <hr className="clinics-comments__card-list__card__border" />
          <div className="clinics-comments__card-list__card__review">
            <p className="clinics-comments__card-list__card__review__button active">
              参考になった
            </p>
            <p className="clinics-comments__card-list__card__review__button">
              参考にならなかった
            </p>
          </div>
        </div>

        <div className="clinics-comments__card-list__card">
          <p className="clinics-comments__card-list__card__date">
            2022.01.14 16:12
          </p>
          <div className="clinics-comments__card-list__card__info">
            <p className="clinics-comments__card-list__card__info__name">
              投稿者 :はなさん（50代 / 女性）
            </p>
            <div className="clinics-comments__card-list__card__info__left">
              <p className="clinics-comments__card-list__card__info__left__like">
                5.0いいね！
              </p>
              <p className="clinics-comments__card-list__card__info__left__like-detail">
                （ 施設 <span className="red">5</span> / 対応 <span className="red">5</span> / 治療 <span className="red">5</span> / 防菌 <span className="red">5</span> ）
              </p>
            </div>
          </div>
          <hr className="clinics-comments__card-list__card__border" />
          <p className="clinics-comments__card-list__card__text">
            この医院のよかった点
          </p>
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">施設</span> 清潔感 / 内装・設備 / 駐車場
          </p>
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">対応</span> 人柄・気づかい
          </p>
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">治療</span> 説明 / 丁寧さ / 痛みへの配慮 / 治療後の経過
          </p>        
          <hr className="clinics-comments__card-list__card__border" />
          <p className="clinics-comments__card-list__card__text">
            <span className="gray">治療内容</span> 虫歯
          </p>
          <p className="clinics-comments__card-list__card__text">
            丁寧に治療内容を説明して下さり、痛みにも大変配慮して頂けて、とても安心して治療を受けることができました。
          </p>
          <hr className="clinics-comments__card-list__card__border" />
          <div className="clinics-comments__card-list__card__review">
            <p className="clinics-comments__card-list__card__review__button active">
              参考になった
            </p>
            <p className="clinics-comments__card-list__card__review__button">
              参考にならなかった
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
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

//

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
  }
`;
