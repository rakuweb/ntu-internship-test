import { css } from '@emotion/react';
import { mq } from 'constants/styles';

// styles
export const styles = css`
  .icon{
    width:1rem;
    height:1rem;
    margin-right:4px;
    ${mq[3]} {
      width:20px;
    height:20px;
    }
  }

  .consultation-card-list {
    background-color: #f5f5f5;
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Noto Sans JP', sans-serif;
    padding: 40px 0 0;
  }

  .consultation-card-list__card {
    width: calc(100% - 32px);
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .subsection {
    width: calc(100% - 32px);
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .jobtitle {
    margin-bottom:16px;
    width: 100%;
    font-size: 24px;
    color: #000000;
    font-weight: bold;
    line-height: 1.3em;
  }

  .companyName {
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    width: fit-content;
    margin: 0 0 12px 0;
  }

  .termstext {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    white-space: nowrap;
    font-size: 12px;
  }

  .placetext {
    font-size: 12px;
    font-weight: 400;
    white-space: pre-wrap;
    margin-left: 12px;
    ${mq[3]} {
      font-size: 16px;
      white-space: pre-wrap;
    }
  }

  .internDescription {
    font-size: 13px;
    font-weight: 400;
    color: #000000;
    white-space: pre-wrap;
    line-height: 1.8em;
    margin: 15px 0;
  }

  .bigImg {
    margin-bottom: 28px;
    border-radius: 20px;
  }

  .termsContainer {
  border-bottom: solid 1px #707070;
    display: flex;
    flex-direction: row;
    color: #000000;
  }

  .termsContainer2 {
    margin: 24px 0 0 0;
    padding: 0 0 10px 0;
    border-bottom: solid 1px #707070;
    display: flex;
    flex-direction: roww
    color: #000000;
  }

  .termsContainer3 {
    margin: 24px 0 0 0;
    display: flex;
    flex-direction: roww
    color: #000000;
  }

  .termsContaineroccupation{
    margin: 24px 0 0 0;
    padding: 0 0 15px 0;
    border-bottom: solid 1px #707070;
    display: flex;
    flex-direction: roww
    color: #000000;
  }

  .termsTitle {
    padding: 0px 0;
    font-size: 14px;
    line-height: 1.3;
    display: flex;
    vertical-align: top;
    min-width: 100px;
    white-space: nowrap;
    font-weight:700;
  }

  .termsTitleoccupation{
    padding: 0px 0;
    font-size: 14px;
    line-height: 1.3;
    display: flex;
    vertical-align: top;
    min-width: 100px;
    white-space: nowrap;
    font-weight:700;
    margin-top:5px;
  }

  .termsMain {
    display: flex;
    margin: auto 0;
    white-space: pre-wrap;
    line-height: 1.3;
    padding: 0px 0 10px 0;
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

    .subsection {
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

    .bigImg {
      margin-bottom: 28px;
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
      display: flex;
      flex-direction: row;
      padding: 0px 0;a
    }

    .termsContainer2 {
      margin: 24px 0 0 0;
      display: flex;
      flex-direction: row;
      padding: 0 0 10px 0;
      color: #000000;
    }

    .termsContainer3 {
      margin: 24px 0 0 0;
      display: flex;
      flex-direction: row;
    }

    .termsContaineroccupation{
      margin: 24px 0 0 0;
      padding: 0 0 15px 0;
      display: flex;
      flex-direction: row;
      color: #000000;
    }


    

    .termsTitle {
      padding: 0px 0;
      line-height: 1.3;
      display: flex;
      vertical-align: top;
      width: 190px;
    }

    .termsTitleoccupation{
      padding: 0px 0;
      line-height: 1.3;
      display: flex;
      vertical-align: middle;
      width: 190px;
    }

    .termsMain {
      display: flex;
      margin: auto 0;
      width: ${875 / 19.2}vw;
      white-space: pre-wrap;
      line-height: 1.3;
      padding: 0 0 10px 0;
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
