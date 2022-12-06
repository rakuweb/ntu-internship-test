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
      <section className="disease-card-list">
        <div className="disease-card-list__container">
          <a className="disease-card" href="#">
            <h3 className="disease-card__title">
              歯周病
            </h3>
            <p className="disease-card__description">
              歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
            </p>
          </a>

          <a className="disease-card" href="#">
            <h3 className="disease-card__title">
              虫歯（う蝕）
            </h3>
            <p className="disease-card__description">
              歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
            </p>
          </a>

          <a className="disease-card" href="#">
            <h3 className="disease-card__title">
              口内炎
            </h3>
            <p className="disease-card__description">
              歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
            </p>
          </a>

          <a className="disease-card" href="#">
            <h3 className="disease-card__title">
              親知らず
            </h3>
            <p className="disease-card__description">
              歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
            </p>
          </a>

          <a className="disease-card" href="#">
            <h3 className="disease-card__title">
              象牙質知覚過敏症
            </h3>
            <p className="disease-card__description">
              歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
            </p>
          </a>

          <a className="disease-card" href="#">
            <h3 className="disease-card__title">
              口唇裂・口蓋裂
            </h3>
            <p className="disease-card__description">
              歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
            </p>
          </a>

          <a className="disease-card" href="#">
            <h3 className="disease-card__title">
              不正咬合
            </h3>
            <p className="disease-card__description">
              歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
            </p>
          </a>

          <a className="disease-card" href="#">
            <h3 className="disease-card__title">
              歯ぎしり（ブラキシズム）
            </h3>
            <p className="disease-card__description">
              歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
            </p>
          </a>
        </div>
      </section>
    </div>
  );
};


// styles
const styles = css`
  .disease-card-list {
    background-color: #F0F3F5;
    display: flex;
    justify-content: center;
    padding: 28px 0 2.5rem;
    width: 100vw;
    font-family: var(--font-family-yugothic-medium);
    margin: 0;
  }

  .disease-card-list__container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    width: 100vw;
  }

  .disease-card {
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    color: #003968;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    padding: 24px;
    width: calc(100vw - 32px);
  }

  .disease-card:hover {
    opacity: 0.8;
  }

  .disease-card__title {
    font-size: 20px;
  }

  .disease-card__description {
    font-size: 16px;
    line-height: 1.6;
    margin-top: 16px;
  }

  ${mq[2]} {
    .disease-card-list {
      padding: 28px 0 4.5rem;
      margin: 0 0 -7.5rem 0;
    }

    .disease-card-list__container {
      flex-direction: row;
      justify-content: space-between;
      width: 1200px;
    }

    .disease-card {
      width: calc(53% - 48px);
      margin-bottom: 32px;
    }
  }
`;
