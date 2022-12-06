// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

import { Box } from '@chakra-ui/react';
import { Image } from 'atoms/Image';

import { RecruitCard } from '../cards/RecruitCard';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <div css={styles}>
      <div className="search">
        <div className="search__container">
          {/* TODO: section-component 切り出し */}
          {/* ここから左サイドバーの部分
          <section className="search-sidebar">
            
            <div className="search-title__container">
              <p className="search-title__container__title">歯医者を探す</p>
            </div> 

            
             <div className="search-filter__container">
              <div className="overlap-group search-filter">
                <div className="search-filter__title">
                  <div className="search-filter__title__wrapper">
                    <p className="search-filter__title__bold">場所</p>
                    <p className="search-filter__title__text">を指定</p>
                  </div>
                </div>
                <ul className="search-filter__candidates active">
                  <li className="search-filter__candidates__item">
                    <a href="#" className="search-filter__candidates__link">
                      愛知県
                    </a>
                    <div className="search-detail active">
                      <div className="search-detail__close"></div>
                      <p className="search-detail__title">
                        愛知県の市町村を選択
                      </p>
                      <div className="search-detail__category">市部</div>
                      <ul className="search-detail__list">
                        <li className="search-detail__list__item">
                          <input type="checkbox" name="city1" />
                          <label htmlFor="city1">愛西市(193)</label>
                        </li>
                        <li className="search-detail__list__item">
                          <input type="checkbox" name="city2" />
                          <label htmlFor="city2">春日井市(193)</label>
                        </li>
                        <li className="search-detail__list__item">
                          <input type="checkbox" name="city3" />
                          <label htmlFor="city3">知多群阿久比町(193)</label>
                        </li>
                        <li className="search-detail__list__item">
                          <input type="checkbox" name="city4" />
                          <label htmlFor="city4">長久手市(193)</label>
                        </li>
                        <li className="search-detail__list__item">
                          <input type="checkbox" name="city5" />
                          <label htmlFor="city5">名古屋市南区(193)</label>
                        </li>
                        <li className="search-detail__list__item">
                          <input type="checkbox" name="city6" />
                          <label htmlFor="city6">愛知郡大治町(193)</label>
                        </li>
                      </ul>
                      <div className="search-deital__buttons">
                        <a
                          href="#"
                          className="search-deital__buttons__item--grey"
                        >
                          全てクリア
                        </a>
                        <a
                          href="#"
                          className="search-deital__buttons__item--blue"
                        >
                          再検索
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="search-filter">
                <a href="#" className="search-filter__title--accordion active">
                  <div className="search-filter__title__wrapper">
                    <p className="search-filter__title__bold">営業日</p>
                    <p className="search-filter__title__text">を指定</p>
                  </div>
                </a>
                <ul className="search-filter__candidates active">
                  <li className="search-filter__candidates__item">
                    <input type="checkbox" name="monday" />
                    <label htmlFor="monday">月曜日</label>
                  </li>
                  <li className="search-filter__candidates__item">
                    <input type="checkbox" name="tuesday" />
                    <label htmlFor="tuesday">火曜日</label>
                  </li>
                  <li className="search-filter__candidates__item">
                    <input type="checkbox" name="wednesday" />
                    <label htmlFor="wednesday">水曜日</label>
                  </li>
                  <li className="search-filter__candidates__item">
                    <input type="checkbox" name="thursday" />
                    <label htmlFor="thursday">木曜日</label>
                  </li>
                  <li className="search-filter__candidates__item">
                    <input type="checkbox" name="friday" />
                    <label htmlFor="friday">金曜日</label>
                  </li>
                  <li className="search-filter__candidates__item">
                    <input type="checkbox" name="saturday" />
                    <label htmlFor="saturday">土曜日</label>
                  </li>
                  <li className="search-filter__candidates__item">
                    <input type="checkbox" name="sunday" />
                    <label htmlFor="sunday">日曜日</label>
                  </li>
                </ul>
              </div>
              <div className="search-filter">
                <a href="#" className="search-filter__title--accordion">
                  <div className="search-filter__title__wrapper">
                    <p className="search-filter__title__bold">診療受付時間</p>
                    <p className="search-filter__title__text">を指定</p>
                  </div>
                </a>
                <select className="search-filter__candidates">
                  {(() => {
                    const options = [];
                    for (let i = 0; i < 30; i++) {
                      const time =
                        1000 +
                        Math.floor((i * 30) / 60) * 100 +
                        ((i * 30) % 60);
                      const formatedTime =
                        String(time).slice(0, 2) + ':' + String(time).slice(2);
                      options.push(
                        <option value="{formatedTime}">{formatedTime}</option>
                      );
                    }
                    return options;
                  })()}
                </select>
              </div>
              <div className="search-filter">
                <a href="#" className="search-filter__title--accordion">
                  <div className="search-filter__title__wrapper">
                    <p className="search-filter__title__bold">医療の特徴</p>
                    <p className="search-filter__title__text">を指定</p>
                  </div>
                </a>
                <ul className="search-filter__candidates"></ul>
              </div>
            </div> 
            
            
          </section>
          --ここまで*/}

          {/* TODO: section-component 切り出し */}

          <section className="search-result">
            <p className=" search-title__container__title">
              学生インターン情報を探す
            </p>
            <p className="search-result__title">新潟大学生対象</p>
            <div className="search-result__filter">
              <div className="search-result__filter__wrapper">
                <p className="search-result__filter__text">検索条件 :</p>
                <div className="search-result__filter__tag">
                  <p className="search-result__filter__tag__text">新潟市</p>
                  <a href="#" className="search-result__filter__tag__close">
                    x
                  </a>
                </div>
              </div>
              <div className="search-result__filter__tag">
                <p className="search-result__filter__tag__text--clear-all">
                  全てクリア
                </p>
                <a href="#" className="search-result__filter__tag__close">
                  x
                </a>
              </div>
            </div>
            <div className="search-result__overview">
              <div className="search-result__overview__current">
                <p className="search-result__overview__current__paging">
                  表示 1 / 28 ページ
                </p>
                <p className="search-result__overview__current__found">
                  該当 <b>546</b> 件
                </p>
              </div>
              <div className="search-result__overview__sort">
                <p className="search-result__overview__sort__text">
                  並び替え :
                </p>
                <div className="search-result__overview__sort__checkbox">
                  <input type="checkbox" name="general" />
                  <label htmlFor="general">新着</label>
                </div>
                <div className="search-result__overview__sort__checkbox">
                  <input type="checkbox" name="reservation-available" />
                  <label htmlFor="reservation-available">時給が高い</label>
                </div>
                <div className="search-result__overview__sort__checkbox">
                  <input type="checkbox" name="views" />
                  <label htmlFor="views">締切日が近い</label>
                </div>
              </div>
            </div>
            {/* TODO: component切り出し */}
            {/* ここからカード並べるセクション */}
            <section className="recruit-card-area">
              <div className="recruit-card-container">
                <RecruitCard />
                <div className="test">
                  <RecruitCard />
                </div>
                <RecruitCard />
              </div>
              <div className="recruit-card-container">
                <RecruitCard />
                <div className="test">
                  <RecruitCard />
                </div>
                <RecruitCard />
              </div>
              <div className="recruit-card-container">
                <RecruitCard />
                <div className="test">
                  <RecruitCard />
                </div>
                <RecruitCard />
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

// styles
const styles = css`
  .search {
    background-color: #f0f3f5;
    font-family: var(--font-family-yugothic-medium);
    width: 100vw;
  }

  .search__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px 0;
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
    font-size: 32px;
    color: #1978bb;
    margin: 16px 0 30px 0;
    width: fit-content;
    text-align: center;
  }

  .search-title__container__title::after {
    background-color: #1978bb;
    content: '';
    display: block;
    margin-top: 5px;
    height: 2px;
    width: 100%;
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
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
  }

  .recruit-card-container {
    margin: 50px 0 0 0;
  }

  .test {
    margin: 50px 0;
  }

  ${mq[2]} {
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
    }

    .recruit-card-container {
      display: flex;
      flex-direction: row;
      margin: 50px auto 25px auto;
    }

    .test {
      margin: 0 25px;
    }

    ${mq[3]} {
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
        display: flex;
        flex-direction: row;
        margin: 50px auto 25px auto;
      }
      .test {
        margin: 0 50px;
      }
    }
  }
`;

{
  /*
      避難所
<article className="search-result__item">
<div className="search-result__item__image">
  <Image
    src="/dev/img/search-clinic-result1@1x.png"
    width={650}
    height={431}
  />
  <a href="#" className="search-result__item__favarite"></a>
</div>
<div className="search-result__item__title">
  <a href="#" className="search-result__item__title__text">
    ワキタ歯科医院
  </a>
</div>
<div className="search-result__item__base-info">
  <div className="search-result__item__base-info__row">
    <p>
      <Image
        src="/dev/img/icon_train.png"
        width={15}
        height={15}
      />
      鶴舞線川名駅 1番出口 徒歩 6分
    </p>
    <p>
      <Image
        src="/dev/img/icon_closed.png"
        width={15}
        height={15}
      />
      木曜 / 日曜 / 祝日
    </p>
  </div>
  <div className="search-result__item__base-info__row">
    <p>
      <Image src="/dev/img/icon_map.png" width={15} height={15} />
      愛知県名古屋市昭和区川名町5-35
    </p>
    <a href="#">GoogleMap</a>
  </div>
</div>
<div className="search-result__item__labels">
  <div className="search-result__item__labels__row">
    <p className="search-result__item__labels__item--blue">
      歯科
    </p>
    <p className="search-result__item__labels__item--blue">
      子児歯科
    </p>
    <p className="search-result__item__labels__item--blue">
      矯正歯科
    </p>
    <p className="search-result__item__labels__item--blue">
      歯科口腔外科
    </p>
  </div>
  <div className="search-result__item__labels__row">
    <p className="search-result__item__labels__item--grey">
      土曜診療
    </p>
  </div>
</div>
<p className="search-result__item__message">
  患者さまの痛みや不安を考え、一人ひとりの気持ちに寄り添います
</p>
<div className="search-result__item__time-table">
  <div className="search-result__item__time-table__label">
    <p className="wide">診療受付時間</p>
    <p>日</p>
    <p>月</p>
    <p>火</p>
    <p>水</p>
    <p>木</p>
    <p>金</p>
    <p>土</p>
  </div>
  <div className="search-result__item__time-table__row">
    <p className="wide">9:00 ～ 12:45</p>
    <p>
      <Image src="/dev/img/icon_status-closed.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-open.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-open.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-open.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-open.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-open.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-open.png" />
    </p>
  </div>
  <div className="search-result__item__time-table__row">
    <p className="wide">14:00 ～ 17:45</p>
    <p>
      <Image src="/dev/img/icon_status-closed.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-open.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-open.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-open.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-open.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-open.png" />
    </p>
    <p>
      <Image src="/dev/img/icon_status-warning.png" />
    </p>
  </div>
</div>
<a href="#" className="search-result__reviews">
  口コミ(4)
</a>
</article> */
}
