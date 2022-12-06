import { css } from '@emotion/react';

import { mq } from '~/constants/styles';

// styles
export const styles = css`
  .h1{
    font-size:20px;
    font-weight:bold;
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

  .red {
    color: #E9495C;
  }

  .form__container__border {
    border-top: 1px solid #003968;
    width: 100%;
    margin: 24px 0;  
  }

  .form__container__item {
    display: flex;
    flex-direction:row;
    align-items: start;
  }

  .form__container__item__left {
    margin: 16px 0 0 0;
  }

  .form__container__item__right {
    margin: 16px 0 0 5px;
  }

  .form__container__item__right__small-text {
    font-size: 12px;
  }

  .form__container__item__address{ 
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }

  .form__container__item__address__right{
    
  }

  //
  .form__container__privacy {
    width: 100%;
    display: flex;
    margin: 40px 0 0 0;
  }

  .form__container__privacy__text {
    font-size: 16px;
    margin: 0 0 0 4px;
  }

  .form__container__privacy__text__link {
    text-decoration: underline;
    color: #003968;
  }

  .form__container__privacy__checkbox {
    -webkit-appearance: checkbox;
    cursor: pointer;
  }

  .form__container__student {
    width: 100%;
    display: flex;
    margin: 10px 0 0;
  }

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
      margin: 0;
    }


    .form__container__item__right {
      margin: 0;
    }
    .form__container__item__address{ 
      display: flex;
      width: 100%;
      justify-content: start;
      flex-direction: row;
      align-items: flex-start;
    }
    
`;
