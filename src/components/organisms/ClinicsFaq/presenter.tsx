// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <div css={styles}>
      <section className="clinics-faq__option">
        <div className="clinics-faq__option__container">
          <p className="clinics-faq__option__container__count">1〜3件 / 3件</p>
          <div className="clinics-faq__option__container__sort">
            <p>並び替え :</p>
            <input
              type="radio"
              name="example"
              value="sample"
              className="clinics-faq__option__container__sort__radio"
            />
            <p>新着順</p>
            <input
              type="radio"
              name="example"
              value="sample"
              className="clinics-faq__option__container__sort__radio"
              checked
            />
            <p>いいねの多い順</p>
          </div>
        </div>
      </section>

      <section className="clinics-faq__card-list">
        <div className="clinics-faq__card-list__card">
          <h2 className="clinics-faq__card-list__card__title">
            マウスピースは、あまりにも痛すぎる場合は外した方がいいですか？
          </h2>
          <div className="clinics-faq__card-list__card__post-info">
            <p className="clinics-faq__card-list__card__post-info__text">
              投稿者 :はなさん（50代 / 女性） / 2022.01.14
            </p>
            <p className="clinics-faq__card-list__card__post-info__tag">
              ＃マウスピース
            </p>
          </div>
          <hr className="clinics-faq__card-list__card__border" />
          <p className="clinics-faq__card-list__card__description">
            めったにいませんが、20人に1人くらいの割合でひどく痛むという方もいらっしゃいます。その場合、マウスピースをカットするか、切れ込みを入れるなどの対応をさせていただいております。
            また、マウスピースは弾力性があり、歯に伝わる力がワイヤーに比べて緩やかなので、つけっぱなしにしておいたほうが効果を実感できます。
          </p>
          <div className="clinics-faq__card-list__card__anser-info">
            <p className="clinics-faq__card-list__card__anser-info__text">
              回答者 :山本 太郎 / 2022.01.15
            </p>
            <p className="clinics-faq__card-list__card__anser-info__tag">
              いいね 12件
            </p>
          </div>
        </div>

        <div className="clinics-faq__card-list__card">
          <h2 className="clinics-faq__card-list__card__title">
            マウスピースは、あまりにも痛すぎる場合は外した方がいいですか？
          </h2>
          <div className="clinics-faq__card-list__card__post-info">
            <p className="clinics-faq__card-list__card__post-info__text">
              投稿者 :はなさん（50代 / 女性） / 2022.01.14
            </p>
            <p className="clinics-faq__card-list__card__post-info__tag">
              ＃マウスピース
            </p>
          </div>
          <hr className="clinics-faq__card-list__card__border" />
          <p className="clinics-faq__card-list__card__description">
            めったにいませんが、20人に1人くらいの割合でひどく痛むという方もいらっしゃいます。その場合、マウスピースをカットするか、切れ込みを入れるなどの対応をさせていただいております。
            また、マウスピースは弾力性があり、歯に伝わる力がワイヤーに比べて緩やかなので、つけっぱなしにしておいたほうが効果を実感できます。
          </p>
          <div className="clinics-faq__card-list__card__anser-info">
            <p className="clinics-faq__card-list__card__anser-info__text">
              回答者 :山本 太郎 / 2022.01.15
            </p>
            <p className="clinics-faq__card-list__card__anser-info__tag">
              いいね 12件
            </p>
          </div>
        </div>

        <div className="clinics-faq__card-list__card">
          <h2 className="clinics-faq__card-list__card__title">
            マウスピースは、あまりにも痛すぎる場合は外した方がいいですか？
          </h2>
          <div className="clinics-faq__card-list__card__post-info">
            <p className="clinics-faq__card-list__card__post-info__text">
              投稿者 :はなさん（50代 / 女性） / 2022.01.14
            </p>
            <p className="clinics-faq__card-list__card__post-info__tag">
              ＃マウスピース
            </p>
          </div>
          <hr className="clinics-faq__card-list__card__border" />
          <p className="clinics-faq__card-list__card__description">
            めったにいませんが、20人に1人くらいの割合でひどく痛むという方もいらっしゃいます。その場合、マウスピースをカットするか、切れ込みを入れるなどの対応をさせていただいております。
            また、マウスピースは弾力性があり、歯に伝わる力がワイヤーに比べて緩やかなので、つけっぱなしにしておいたほうが効果を実感できます。
          </p>
          <div className="clinics-faq__card-list__card__anser-info">
            <p className="clinics-faq__card-list__card__anser-info__text">
              回答者 :山本 太郎 / 2022.01.15
            </p>
            <p className="clinics-faq__card-list__card__anser-info__tag">
              いいね 12件
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .clinics-faq__option {
    display: flex;
    justify-content: center;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    margin: 48px 0 8px 0;
    font-family: var(--font-family-yugothic-medium);
  }

  .clinics-faq__option__container {
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .clinics-faq__option__container__count {
    color: #003968;
    font-size: 16px;
  }

  .clinics-faq__option__container__sort {
    display: flex;
    align-items: center;
    color: #003968;
    font-size: 16px;
    margin: 16px 0 0;
  }

  .clinics-faq__option__container__sort__radio {
    -webkit-appearance: radio;
    margin: 0 4px 0 12px;
    cursor: pointer;
  }

  .clinics-faq__card-list {
    display: flex;
    justify-content: center;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-family-yugothic-medium);
  }

  .clinics-faq__card-list__card {
    display: flex;
    flex-direction: column;
    border: 1px solid #999999;
    width: calc(100% - 32px);
    padding: 24px;
    border-radius: 8px;
    margin: 24px 0 0;
  }

  .clinics-faq__card-list__card__title {
    color: #e9495c;
    font-size: 20px;
    line-height: 1.6;
  }

  .clinics-faq__card-list__card__post-info {
    display: flex;
    margin: 8px 0 0;
    flex-direction: column;
    align-items: flex-start;
  }

  .clinics-faq__card-list__card__post-info__text {
    color: #003968;
    font-size: 12px;
    line-height: 1.7;
  }

  .clinics-faq__card-list__card__post-info__tag {
    color: #2194e5;
    font-size: 14px;
    border: 1px solid #2194e5;
    border-radius: 4px;
    padding: 4px;
    margin: 8px 0 0;
  }

  .clinics-faq__card-list__card__description {
    color: #003968;
    font-size: 16px;
    line-height: 1.7;
    margin: 16px 0 0;
  }

  .clinics-faq__card-list__card__anser-info {
    display: flex;
    align-items: center;
    margin: 8px 0 0;
  }

  .clinics-faq__card-list__card__anser-info {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 16px 0 0;
  }

  .clinics-faq__card-list__card__anser-info__text {
    color: #003968;
    font-size: 12px;
    line-height: 1.7;
  }

  .clinics-faq__card-list__card__anser-info__tag {
    color: #e9495c;
    font-size: 14px;
    border: 1px solid #e9495c;
    border-radius: 4px;
    padding: 4px;
    margin: 8px 0 0;
  }

  .clinics-faq__card-list__card__border {
    border: 1px dashed #003968;
    width: 100%;
    margin: 16px 0 0;
  }

  ${mq[2]} {
    .clinics-faq__option__container {
      width: 1024px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .clinics-faq__card-list__card {
      width: 1024px;
    }

    .clinics-faq__option__container__count {
      font-size: 12px;
    }

    .clinics-faq__option__container__sort {
      font-size: 12px;
    }

    .clinics-faq__option__container__sort {
      margin: 0;
    }

    .clinics-faq__option {
      margin: 56px 0 16px 0;
    }

    .clinics-faq__card-list__card__title {
      font-size: 24px;
      line-height: 1.7;
    }

    .clinics-faq__card-list__card__post-info__tag {
      font-size: 16px;
      margin: 0 0 0 16px;
    }

    .clinics-faq__card-list__card__post-info {
      flex-direction: row;
      align-items: center;
    }

    .clinics-faq__card-list__card__anser-info__tag {
      font-size: 16px;
      margin: 0 0 0 16px;
    }

    .clinics-faq__card-list__card__anser-info {
      align-items: center;
      flex-direction: row;
      margin: 8px 0 0;
    }
  }
`;
