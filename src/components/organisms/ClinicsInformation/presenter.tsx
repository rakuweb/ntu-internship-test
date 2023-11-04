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
      <section className="clinics-information">
        <div className="clinics-information__container">
          <h2 className="clinics-information__container__title">
            銀座駅 医療法人社団清麗会
            銀座T&apos;Sデンタルオフィスインプラントセンター 医院情報
          </h2>
          <div className="clinics-information__container__item">
            <p className="clinics-information__container__item__label">
              電話番号
            </p>
            <p className="clinics-information__container__item__text">
              03-3571-3045
            </p>
          </div>
          <div className="clinics-information__container__item">
            <p className="clinics-information__container__item__label">
              診療内容
            </p>
            <p className="clinics-information__container__item__text">
              虫歯治療 / クリーニング・定期検診 / 矯正歯科 / セラミック治療 /
              口腔外科 / 歯周病治療 / ホワイトニング / インプラント /
              カウンセリング / 義歯（入れ歯）
            </p>
          </div>
          <div className="clinics-information__container__item">
            <p className="clinics-information__container__item__label">
              医院HP
            </p>
            <a href="#" className="clinics-information__container__item__text">
              https://www.ts-dental.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .clinics-information {
    display: flex;
    font-family: var(--font-family-yugothic-medium);
    justify-content: center;
    margin: 64px 0 0;
    width: 100vw;
  }

  .clinics-information__container {
    border-bottom: 1px solid #257fbf;
    display: flex;
    flex-direction: column;
    width: calc(100% - 32px);
  }

  .clinics-information__container__title {
    color: #003968;
    font-size: 18px;
    margin: 0 0 16px;
    line-height: 1.7;
  }

  .clinics-information__container__item {
    border-top: 1px solid #257fbf;
    display: flex;
    padding: 8px 0;
    align-items: flex-start;
    justify-content: flex-start;
    line-height: 1.5;
  }

  .clinics-information__container__item__label {
    color: #666;
    display: block;
    font-size: 16px;
    width: 100px;
  }

  .clinics-information__container__item__text {
    color: #003968;
    font-size: 16px;
    width: calc(100% - 120px);
    display: block;
  }

  ${mq[2]} {
    .clinics-information__container {
      width: 1024px;
    }

    .clinics-information__container__item__label {
      width: 120px;
    }
  }
`;
