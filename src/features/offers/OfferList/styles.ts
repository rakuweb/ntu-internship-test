import { css } from '@emotion/react';

import { mq } from '~/constants/styles';

// styles
export const styles = css`
  .search {
    background-color: #f5f5f5;
    font-family: var(--font-family-yugothic-medium);
    width: 100vw;
  }

  .search__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
  }

  .search-sidebar {
    width: 100%;
  }

  .search-title__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .search-title__container__title {
    font-size: 20px;
    color: #444444;
    font-weight: bold;
    margin: 30px 0;
    width: fit-content;
    text-align: center;
  }

  .search-filter__container {
    margin-top: 20px;
  }

  .search-filter {
    align-items: flex-start;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    color: #003968;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    padding: 14px;
    width: 100%;
  }

  .search-filter__title {
    display: flex;
    font-size: 16px;
    width: 100%;
  }

  .search-filter__title--accordion {
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    width: 100%;
  }

  .search-filter__title--accordion::after {
    content: url('/dev/img/icon_caret_down.png');
    color: #003968;
    display: block;
  }

  .search-filter__title--accordion.active::after {
    content: url('/dev/img/icon_caret_up.png');
    color: #003968;
    display: block;
  }

  .search-filter__title__wrapper {
    display: flex;
  }

  .search-filter__title__bold {
    font-weight: 700;
  }

  .search-filter__title__text {
  }

  .search-filter__candidates {
    border-top: 1px solid #257fbf;
    display: none;
    padding-top: 10px;
    margin-top: 10px;
    width: 100%;
  }

  .search-filter__candidates.active {
    display: block;
  }

  .search-filter__candidates__item {
    align-items: center;
    display: flex;
    line-height: 1.5;
    position: relative;
  }

  .search-filter__candidates__link {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .search-filter__candidates__link::after {
    content: url('/dev/img/icon_caret_right.png');
    color: #003968;
    display: block;
  }

  .search-filter__candidates__item label {
    margin-left: 10px;
  }

  .search-detail {
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #999999;
    border-radius: 14px;
    display: none;
    top: 50px;
    left: 0px;
    padding: 30px 20px 50px;
    position: absolute;
    width: 100%;
    z-index: 10;
  }

  .search-detail.active {
    display: block;
  }

  .search-detail:before {
    content: '';
    position: absolute;
    top: -12px;
    left: 21px;
    margin-top: -12px;
    border: 12px solid transparent;
    border-bottom: 12px solid #fff;
    z-index: 2;
  }

  .search-detail:after {
    content: '';
    position: absolute;
    top: -13px;
    left: 20px;
    margin-top: -13px;
    border: 13px solid transparent;
    border-bottom: 13px solid #999999;
    z-index: 1;
  }

  .search-detail__title {
    border-bottom: 1px solid #257fbf;
    color: #003968;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
    padding-bottom: 15px;
  }

  .search-detail__category {
    color: #003968;
    font-size: 16px;
    font-weight: 700;
  }

  .search-detail__list {
    color: #003968;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 16px;
  }

  .search-detail__list__item {
    width: fit-content;
  }

  .search-deital__buttons {
    display: flex;
    margin: 30px auto 0;
    justify-content: space-between;
    width: 100%;
  }

  .search-deital__buttons__item--grey {
    background-color: #fff;
    border: 1px solid #999999;
    border-radius: 6px;
    color: #666666;
    text-align: center;
    padding: 10px;
    width: calc(100% / 2 - 20px);
  }

  .search-deital__buttons__item--blue {
    background-color: #2194e5;
    border: 1px solid #89c9ff;
    border-radius: 6px;
    color: #fff;
    text-align: center;
    padding: 10px;
    width: calc(100% / 2 - 20px);
  }

  .search-result {
    width: 100%;
  }

  .search-result__title {
    color: #003968;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
    width: 100%;
  }

  .search-result__filter {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .search-result__filter__wrapper {
    align-items: center;
    display: flex;
  }

  .search-result__filter__text {
    color: #003968;
    font-size: 12px;
  }

  .search-result__filter__tag {
    align-items: center;
    border: 1px solid #999999;
    border-radius: 14px;
    background-color: #fff;
    display: flex;
    font-size: 12px;
    padding: 8px 12px;
  }

  .search-result__filter__tag__text {
    color: #2194e5;
  }

  .search-result__filter__tag__text--clear-all {
    color: #999999;
  }

  .search-result__filter__tag__close {
    color: #999999;
    margin-left: 8px;
    font-weight: 700;
  }

  .search-result__overview {
    align-items: center;
    color: #003968;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
  }

  .search-result__overview__current {
    align-items: center;
    display: flex;
    font-size: 12px;
  }

  .search-result__overview__current__found b {
    font-weight: 700;
    font-size: 16px;
  }

  .search-result__overview__sort {
    align-items: center;
    display: flex;
    font-size: 12px;
  }

  .search-result__overview__sort__checkbox {
    align-items: center;
    display: flex;
    margin-left: 10px;
  }

  .search-result__overview__sort__checkbox label {
    margin-left: 5px;
  }

  .search-result__item {
    background-color: #fff;
    border-radius: 14px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    padding: 20px 20px 30px;
  }

  .search-result__item__image {
    position: relative;
  }

  .search-result__item__favarite {
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    bottom: 10px;
    display: flex;
    height: 30px;
    justify-content: center;
    position: absolute;
    right: 10px;
    width: 30px;
  }

  .search-result__item__favarite::after {
    content: url('/dev/img/icon_heart-regular.png');
    display: block;
  }

  .search-result__item__favarite.active::after {
    content: url('/dev/img/icon_heart-solid.png');
    display: block;
  }

  .search-result__item__title {
    align-items: flex-end;
    border-bottom: 1px solid #257fbf;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 20px;
  }

  .search-result__item__title__text {
    border-bottom: 1px solid #003968;
    color: #003968;
    font-size: 22px;
    font-weight: 700;
  }

  .search-result__item__base-info {
    color: #003968;
    font-size: 16px;
    margin-top: 20px;
  }

  .search-result__item__base-info__row {
    display: flex;
    line-height: 1.6;
    flex-wrap: wrap;
  }

  .search-result__item__base-info__row p {
    align-items: center;
    display: flex;
    margin-right: 15px;
  }

  .search-result__item__base-info__row img {
    margin-right: 5px;
  }

  .search-result__item__base-info__row a {
    border-bottom: 1px solid #003968;
  }

  .search-result__item__labels {
    font-size: 16px;
    margin-top: 20px;
  }

  .search-result__item__labels__row {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }

  .search-result__item__labels__item--blue {
    border: 1px solid #2194e5;
    border-radius: 4px;
    color: #fff;
    background-color: #2194e5;
    padding: 6px 10px;
    margin-right: 5px;
    margin-bottom: 12px;
  }

  .search-result__item__labels__item--grey {
    border: 1px solid #999999;
    border-radius: 4px;
    color: #666666;
    margin-right: 5px;
    padding: 6px 10px;
    margin-bottom: 12px;
  }

  .search-result__item__message {
    color: #003968;
    font-size: 18px;
    font-weight: 700;
    margin-top: 30px;
  }

  .search-result__item__time-table {
    border-left: 1px solid #dddddd;
    color: #003968;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
    width: 100%;
  }

  .search-result__item__time-table img {
    margin: 0 auto;
  }

  .search-result__item__time-table__label {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    align-items: center;
    display: flex;
    width: 100%;
  }

  .search-result__item__time-table__label .wide {
    width: 120px;
  }

  .search-result__item__time-table__label p {
    border-right: 1px solid #dddddd;
    padding: 10px 0;
    width: calc((100% - 120px) / 7);
  }

  .search-result__item__time-table__row {
    align-items: center;
    border-bottom: 1px solid #dddddd;
    display: flex;
    width: 100%;
  }

  .search-result__item__time-table__row .wide {
    width: 120px;
  }

  .search-result__item__time-table__row p {
    border-right: 1px solid #dddddd;
    padding: 10px 0;
    width: calc((100% - 120px) / 7);
  }

  .search-result__reviews {
    border-bottom: 1px solid #003968;
    color: #003968;
    display: block;
    margin-top: 20px;
    width: fit-content;
  }

  .recruit-card-area {
    // display: flex;
    // flex-direction: column;
    // width: 300px;
    // margin: 0 auto;
  }

  .recruit-card-container {
    margin: 0px 0 0 0;
  }

  .test {
    margin: 50px 0;
  }

  .flexwidth {
    width: 100%;
  }

  ${mq[2]} {
    .search {
      padding-top: 30px;
    }

    .search-title__container__title {
      font-size: 40px;
      margin: 30px 0;
    }

    .search__container {
      width: 950px;
    }

    .search-sidebar {
      width: 280px;
    }

    .search-detail {
      top: -30px;
      left: 300px;
      position: absolute;
      width: 600px;
    }

    .search-detail.active {
      display: block;
    }

    .search-detail:before {
      content: '';
      position: absolute;
      top: 40px;
      left: -24px;
      margin-top: -12px;
      border: 12px solid transparent;
      border-right: 12px solid #fff;
      z-index: 2;
    }

    .search-detail:after {
      content: '';
      position: absolute;
      top: 40px;
      left: -26px;
      margin-top: -13px;
      border: 13px solid transparent;
      border-right: 13px solid #999999;
      z-index: 1;
    }

    .search-detail__list__item {
      width: calc(100% / 3);
    }

    .search-deital__buttons {
      width: 70%;
    }

    .search-result {
      width: 100%;
    }

    .search-result__item__time-table__label .wide {
      width: 150px;
    }

    .search-result__item__time-table__label p {
      width: calc((100% - 150px) / 7);
    }

    .search-result__item__time-table__row .wide {
      width: 150px;
    }

    .search-result__item__time-table__row p {
      width: calc((100% - 150px) / 7);
    }
    .recruit-card-area {
      display: flex;
      flex-direction: column;
      width: 950px;
      margin-bottom: 32px;
    }

    .recruit-card-container {
      display: flex;
      flex-direction: row;
      margin: 50px auto 25px auto;
    }

    .test {
      margin: 0 25px;
    }

    .flexwidth {
      width: 50%;
    }

    ${mq[3]} {
      .search {
        padding-top: 30px;
      }

      .search__container {
        width: 1180px;
      }

      .search-detail {
        width: 670px;
      }
      .recruit-card-area {
        display: flex;
        flex-direction: column;
        width: 1180px;
      }

      .recruit-card-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 0px auto 25px auto;
        justify-content: space-between;
      }
      .test {
        margin: 0 50px;
      }
    }
  }
`;
