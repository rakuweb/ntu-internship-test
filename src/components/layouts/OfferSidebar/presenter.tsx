// import layer
import { FC } from 'react';

import {styles} from './styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <div css={styles}>
      <div className="search">
        <div className="search__container">
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
        </div>
      </div>
    </div>
  );
};

