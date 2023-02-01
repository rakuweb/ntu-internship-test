// import layer
import { FC, useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import { OfferCard, OfferCardProps } from 'features/offers/OfferCard';
import { selectOfferList } from 'features/offers/selectors';
import { useOffersStore } from 'features/offers/hooks';
import { styles } from './styles';
import { AddAlarmSharp } from '@mui/icons-material';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  // const list = useOffersStore(selectOfferList);
  // const [offerList, setOfferList] = useState<OfferCardProps[][]>([]);

  // useEffect(() => {
  //   const listClone = list;
  //   const next = [];

  //   while (listClone.length > 0) {
  //     next.push(listClone.splice(0, 3));
  //   }

  //   setOfferList(next);
  // }, [list]);

  return (
    <Box css={styles}>
      <Box
        pb={{ base: `${80 / 3.75}vw`, lg: `${120 / 19.2}vw` }}
        className="search"
      >
        <div className="search__container">
          {/*<OfferSidebar />*/}
          <div className="search-title__container">
            <p className="search-title__container__title">オファー一覧</p>
          </div>
          <div className="search-result__overview">
            <div className="search-result__overview__current">
              {/*
                <p className="search-result__overview__current__paging">
                  表示 1 / 28 ページ
                </p>
                <p className="search-result__overview__current__found">
                  該当 <b>546</b> 医院
                </p>
              */}
            </div>
            <div className="search-result__overview__sort">
              <p className="search-result__overview__sort__text">並び替え :</p>
              <div className="search-result__overview__sort__checkbox">
                <input type="checkbox" name="general" />
                <label htmlFor="general">新着順</label>
              </div>
              <div className="search-result__overview__sort__checkbox">
                <input type="checkbox" name="reservation-available" />
                <label htmlFor="reservation-available">締切が早い順</label>
              </div>
              <div className="search-result__overview__sort__checkbox">
                <input type="checkbox" name="views" />
                <label htmlFor="views">人気順</label>
              </div>
            </div>
          </div>
          <section className="recruit-card-area">
            {/* {offerList.map((cards) => (
              <div key={cards[0].title} className="recruit-card-container">
                <OfferCard {...cards[0]} />
                {cards.length > 1 && (
                  <div className="test">
                    <OfferCard {...cards[1]} />
                  </div>
                )}
                {cards.length > 2 && <OfferCard {...cards[2]} />}
              </div>
            ))} */}
            <div className="recruit-card-container">
              <OfferCard
                id={`1`}
                companyName={`ラクウェブ`}
                occupation={`テスト`}
                place={`新潟県新潟市`}
                hourlyWage={`aaaaa`}
                isNew={true}
                title={`webエンジニア`}
              />
              <OfferCard
                id={`1`}
                companyName={`ラクウェブ`}
                occupation={`テスト`}
                place={`新潟県新潟市`}
                hourlyWage={`aaaaa`}
                isNew={true}
                title={`webエンジニア`}
              />
              <OfferCard
                id={`1`}
                companyName={`ラクウェブ`}
                occupation={`テスト`}
                place={`新潟県新潟市`}
                hourlyWage={`aaaaa`}
                isNew={true}
                title={`webエンジニア`}
              />
            </div>
            <div className="recruit-card-container">
              <OfferCard
                id={`1`}
                companyName={`ラクウェブ`}
                occupation={`テスト`}
                place={`新潟県新潟市`}
                hourlyWage={`aaaaa`}
                isNew={true}
                title={`webエンジニア`}
              />
              <OfferCard
                id={`1`}
                companyName={`ラクウェブ`}
                occupation={`テスト`}
                place={`新潟県新潟市`}
                hourlyWage={`aaaaa`}
                isNew={true}
                title={`webエンジニア`}
              />
              <OfferCard
                id={`1`}
                companyName={`ラクウェブ`}
                occupation={`テスト`}
                place={`新潟県新潟市`}
                hourlyWage={`aaaaa`}
                isNew={true}
                title={`webエンジニア`}
              />
            </div>
          </section>
        </div>
      </Box>
    </Box>
  );
};
