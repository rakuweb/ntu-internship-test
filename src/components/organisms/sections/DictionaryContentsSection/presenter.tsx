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
      <section className="dictionary-card-list">
        <div className="dictionary-card-list__container">

          <div className="dictionary-card">
            <h3 className="dictionary-card__title">
              保存・カリオロジー
            </h3>
            <hr className="dictionary-card__border" />
            <ul>
              <li>
                <a href="" className="dictionary-card__item">う蝕</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">Tooth Wear</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">レンジ修復</a>
              </li>
            </ul>
          </div>

          <div className="dictionary-card">
            <h3 className="dictionary-card__title">
              エンド
            </h3>
            <hr className="dictionary-card__border" />
            <ul>
              <li>
                <a href="" className="dictionary-card__item">エンドの審査・診断</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">抜髄処置</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">感染根管治療</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">外科的歯内療法</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">マイクロエンド</a>
              </li>
            </ul>
          </div>

          <div className="dictionary-card">
            <h3 className="dictionary-card__title">
              ペリオ
            </h3>
            <hr className="dictionary-card__border" />
            <ul>
              <li>
                <a href="" className="dictionary-card__item">歯周基本治療</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">歯周外科手術</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">歯周再生療法</a>
              </li>
            </ul>
          </div>

          <div className="dictionary-card">
            <h3 className="dictionary-card__title">
              デンチャー
            </h3>
            <hr className="dictionary-card__border" />
            <ul>
              <li>
                <a href="" className="dictionary-card__item">印象採得</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">咬合採得</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">咬合調整</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">義歯製作</a>
              </li>
            </ul>
          </div>

          <div className="dictionary-card">
            <h3 className="dictionary-card__title">
              歯冠補綴
            </h3>
            <hr className="dictionary-card__border" />
            <ul>
              <li>
                <a href="" className="dictionary-card__item">インレー・アンレー</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">クラウン・ブリッジ</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">CAD/CAM</a>
              </li>
            </ul>
          </div>

          <div className="dictionary-card">
            <h3 className="dictionary-card__title">
              審美
            </h3>
            <hr className="dictionary-card__border" />
            <ul>
              <li>
                <a href="" className="dictionary-card__item">審美修復</a>
              </li>
              <li>
                <a href="" className="dictionary-card__item">ホワイトニング</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};


// styles
const styles = css`
  .dictionary-card-list {
    background-color: #F0F3F5;
    display: flex;
    justify-content: center;
    padding: 16px 0 2.5rem;
    width: 100vw;
    font-family: var(--font-family-yugothic-medium);
    flex-direction: column;
  }

  .dictionary-card-list__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .dictionary-card {
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    color: #003968;
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: calc(100% - 48px);
    margin-bottom: 32px;
  }

  .dictionary-card__title {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .dictionary-card__border {
    border-top: 1px solid #257FBF;
    margin: 8px 0;
    width: 100%;
  }

  .dictionary-card__item {
    display: inline-block;
    font-size: 16px;
    line-height: 1.6;
    padding: 4px 0;
  }

  .dictionary-card__item:hover {
    opacity: 0.8;
  }


  a:visited{
    color: inherit;
  }

  ${mq[2]} {
    .dictionary-card-list {
      background-color: #F0F3F5;
      display: flex;
      justify-content: center;
      width: 100vw;
      font-family: var(--font-family-yugothic-medium);
      padding: 28px 0 4.5rem;
      margin: 0 0 -7.5rem 0;
      flex-direction: row;
    }

    .dictionary-card-list__container {
      justify-content: space-between;
      width: 1200px;
    }

    .dictionary-card {
      width: calc(36% - 48px);
    }
  }
`;
