import { css } from '@emotion/react';
import { mq } from 'constants/styles';

// styles
export const styles = css`
  .consultation-card-list {
    background-color: #f5f5f5;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Noto Sans JP', sans-serif;
    padding: 32px 0 64px;
  }

  .consultation-card-list__card {
    width: calc(100% - 32px);
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;
  }

  .jobtitle {
    padding: 0 0 0;
    width: 100%;
    font-size: 20px;
    color: #003968;
    font-weight: bold;
    line-height: 1.3em;
  }

  .companyName {
    color: #000000;
    font-size: 12px;
    font-weight: 700;
    padding: 0;
    width: fit-content;
    margin: 15px 0 0 0;
  }

  .h2 {
    font-size: 20px;
    font-weight: bold;
    color: #003968;
  }

  .internDescription {
    font-size: 13px;
    font-weight: 400;
    color: #000000;
    white-space: pre-wrap;
    line-height: 1.8em;
    margin: 15px 0;
  }

  .h3container {
    display: flex;
    flex-wrap: wrap;
  }

  .h3content {
    display: flex;
    flex-direction: colmun;
    font-size: 13px;
    font-weight: bold;
    color: #003968;
    margin: 15px 0 0 0;
    align-items: center;
    width: 50%;
  }

  .h3icon {
    max-width: 12px;
    object-fit: scale-down;
    margin: 0 16px 0 0;
  }

  .peopleicon {
    max-height: 14px;
    object-fit: scale-down;
    margin: 0 16px 0 0;
  }

  .moneyicon {
    max-height: 14px;
    object-fit: scale-down;
    margin: 0 19px 0 4px;
  }

  .bigImg {
    margin: 30px 0;
  }

  .termsContainer {
    padding: 15px 0;
    border-top: solid 1px #707070;
    border-bottom: solid 1px #707070;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    color: #003968;
  }

  .termsContainer2 {
    margin: 15px 0 0 0;
    padding: 0 0 15px 0;
    border-bottom: solid 1px #707070;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    color: #003968;
  }

  .termsTitle {
    padding: 12px 0;
    font-size: 14px;
    line-height: 1.3;
    display: flex;
    vertical-align: top;
    min-width: 100px;
    white-space: nowrap;
  }

  .termsMain {
    display: flex;
    margin: auto 0;
    white-space: pre-wrap;
    line-height: 1.3;
    padding: 12px 0 12px 0;
    font-size: 14px;
    width: ${203 / 3.75}vw;
  }

  .contactBlank {
    margin: 40px 0 0 0;
  }

  .minTitle {
    margin: 70px 0 30px 0;
    color: #003968;
    font-size: 20px;
    font-weight: bold;
  }

  .cardContainer {
    width: 91%;
    padding: 30px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    color: #003968;
    font-size: 14px;
  }

  .cardTextContainer {
    display: flex;
    flex-direction: column;
  }

  .cardImg {
    max-width: 300px;
    border-radius: 10px;
  }

  .post {
    white-space: pre-wrap;
    margin: 15px 0;
  }

  .cardName {
    margin: 0 0 15px 0;
    font-weight: bold;
    font-size: 20px;
  }

  .cardMain {
    white-space: pre-wrap;
    line-height: 1.5em;
  }

  ${mq[2]} {
    .consultation-card-list__card {
      width: 760px;
      padding: 40px;
    }

    .jobtitle {
      margin-bottom: 16px;
      font-size: 24px;
    }

    .companyName {
      margin-bottom: 12px;
      font-size: 18px;
    }

    .h2 {
      font-size: 23px;
      font-weight: bold;
      color: #003968;
      margin: 0 0 0 0;
    }

    .h3content {
      display: flex;
      flex-direction: row;
      font-size: 20px;
      font-weight: bold;
      color: #003968;
      margin: 24px 0 0 0;
      width: 50%;
    }

    .h3icon {
      max-width: 15%;
      padding: 0 22px;
      margin: 0;
    }
    .peopleicon {
      max-height: 100%;
      margin: 0 20px 0 0;
    }

    .moneyicon {
      max-height: 100%;
      padding: 0 28px 0 6px;
      margin: 0;
    }

    .bigImg {
      margin: 45px 0 45px 0;
      padding: 0 0 0 7px;
    }

    .internDescription {
      font-size: 16px;
      font-weight: 400;
      color: #000000;
      white-space: pre-wrap;
      line-height: 2em;
      margin: 30px 0 30px 20px;
    }

    .termsContainer {
      margin: 24px 0 0 0;
      display: flex;
      flex-direction: row;
      padding: 30px 0;
      font-weight: bold;
      color: #003968;
    }

    .termsContainer2 {
      margin: 30px 0 0 0;
      display: flex;
      flex-direction: row;
      padding: 0 0 30px 0;
      font-weight: bold;
      color: #003968;
    }

    .termsTitle {
      padding: 12px 0;
      font-size: 20px;
      line-height: 1.3;
      display: flex;
      vertical-align: top;
      width: 190px;
    }

    .termsMain {
      display: flex;
      margin: auto 0;
      width: ${875 / 19.2}vw;
      white-space: pre-wrap;
      line-height: 1.3;
      padding: 12px;
      font-size: 20px;
    }

    //

    .minTitle {
      margin: 100px 0 30px 360px;
      align-self: flex-start;
      color: #003968;
      font-size: 23px;
    }

    .cardContainer {
      width: 1200px;
      padding: 50px;
      background-color: #fff;
      display: flex;
      flex-direction: row;
      border-radius: 10px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 150px;
      color: #003968;
    }

    .cardTextContainer {
      display: flex;
      flex-direction: column;
    }

    .cardImg {
      max-width: 180px;
    }

    .post {
      margin: 0 30px;
      white-space: pre-wrap;
    }

    .cardName {
      margin: 15px 30px;
      font-weight: bold;
      font-size: 20px;
    }

    .cardMain {
      margin: 0 0 0 30px;
      white-space: pre-wrap;
      line-height: 1.5em;
    }
  }
`;
