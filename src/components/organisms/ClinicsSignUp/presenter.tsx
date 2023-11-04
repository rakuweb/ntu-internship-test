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
      <section className="sign-up">
        <div className="sign-up__container">
          <p className="sign-up__title">
            口コミを投稿するには{' '}
            <span className="sign-up__title__bold">無料会員登録</span>{' '}
            が必要です
          </p>
          <a href="#" className="sign-up__button">
            口コミを投稿する
          </a>
          <p className="sign-up__description">
            ※初回投稿時、携帯電話番号認証による本人確認がございます。
            <br />
            ※当社グループサイトにて認証がお済みの方は不要です。
          </p>
        </div>
      </section>
    </div>
  );
};

// styles
const styles = css`
  .sign-up {
    display: flex;
    justify-content: center;
    width: 100vw;
    margin: 32px 0;
    font-family: var(--font-family-yugothic-medium);
  }

  .sign-up__container {
    background-color: #f0f3f5;
    width: 1024px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
  }

  .sign-up__title {
    font-size: 18px;
    color: #003968;
    line-height: 1.6;
    width: calc(100% - 64px);
    text-align: center;
  }

  .sign-up__title__bold {
    color: #2194e5;
    text-decoration: underline;
  }

  .sign-up__button {
    background-color: #2194e5;
    font-size: 16px;
    color: #fff;
    padding: 16px 40px;
    margin: 24px 0;
    border-radius: 8px;
    cursor: pointer;
  }

  .sign-up__button:hover {
    opacity: 0.8;
  }

  .sign-up__description {
    font-size: 16px;
    color: #003968;
    line-height: 1.7;
    width: calc(100% - 64px);
    text-align: left;
  }

  ${mq[2]} {
    .sign-up__container {
      width: 1024px;
    }

    .sign-up__description {
      text-align: center;
    }
  }
`;
