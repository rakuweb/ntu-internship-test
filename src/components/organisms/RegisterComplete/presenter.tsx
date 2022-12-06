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
      <section className="form">
        <div className="form__container">
          <h1 className="h1">送信が完了しました。</h1>
          <div className="form__container__item">
            <p className="form__container__item__left">
              メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。メッセージが入ります。
              メッセージが入
            </p>
          </div>
          <div className="form__container__button">
            <a href="#" className="form__container__button__submit">
              TOPに戻る
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .h1{
    width:100%;
    font-size:20px;
    font-weight:bold;
    text-align: center;
    margin:16px 0 0 0;
  }

  .form {
    display: flex;
    justify-content: center;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    margin: 0 0 24px 0;
    font-family: var(--font-family-yugothic-medium);
  }

  .form__container {
    width: calc(100% - 32px);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    line-height: 1.7;
    color: #003968;
  }

  .form__container__title {
    font-size: 20px;
    margin: 40px 0 0 0;
  }

  .form__container__description {
    font-size: 16px;
    margin: 8px 0 0 0;
  }



  .form__container__item {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }

  .form__container__item__left {
    width: 100%;
    margin: 16px 0 0px 0;
  }

  .form__container__item__right {
    width: 100%;
  }


  //

  .form__container__button {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 50px 0 0 0;
  }

  .form__container__button__cancel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    margin: 0 8px;
    color: #666666;
    border: 1px solid #666666;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 240px;
  }

  .form__container__button__submit {
    background-color: #2194E5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    margin: 0 8px;
    color: #fff;
    border: 1px solid #2194E5;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 240px;
  } 

  .form__container__button__submit.inactive {
    opacity: 0.4;
    cursor: auto;
  }

  ${mq[2]} {
    .form__container {
      width: 1024px;
    }

    .form__container__item {
      flex-direction: row;
      justify-content: space-between;
      margin:20px 0;
    }

    .form__container__item__left {
      width: 160px;
    }

    .form__container__item__left {
      margin: 0;
    }

    
`;
