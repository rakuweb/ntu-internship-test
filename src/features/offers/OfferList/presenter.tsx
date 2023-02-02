// import layer
import { FC, useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { OfferCard, OfferCardProps } from 'features/offers/OfferCard';
import { selectOfferList } from 'features/offers/selectors';
import { useOffersStore } from 'features/offers/hooks';
import { styles } from './styles';
import { AddAlarmSharp } from '@mui/icons-material';
import { Image } from 'components/Image';

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
        // pb={{ base: `${80 / 3.75}vw`, lg: `${120 / 19.2}vw` }}
        className="search"
      >
        <div className="search__container">
          <Box
            // border={`1px solid`}
            mx={`auto`}
            overflow={`hidden`}
            borderRadius={{ base: `${20 / 3.75}vw`, lg: `${50 / 19.2}vw` }}
            mt={`30px`}
          >
            <Image
              image={{
                src: '/images/offers/kokoutest.png',
                width: 1584,
                height: 396,
                alt: ``,
              }}
            />
          </Box>
          {/*<OfferSidebar />*/}
          <div className="search-title__container">
            <p className="search-title__container__title">求人一覧</p>
          </div>
          {/* <div className="search-result__overview">
            <div className="search-result__overview__current">
              
                <p className="search-result__overview__current__paging">
                  表示 1 / 28 ページ
                </p>
                <p className="search-result__overview__current__found">
                  該当 <b>546</b> 医院
                </p>
             
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
          </div> */}
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
            {/* <div className="recruit-card-container"> */}
            <Flex flexWrap={`wrap`} justifyContent={`space-between`}>
              <OfferCard
                id={`1`}
                companyName={`ソリマチ株式会社`}
                occupation={`フロントエンドエンジニア`}
                place={`東京都 品川区 東五反田3-18-6 反町第8ビル`}
                hourlyWage={`時給1000円`}
                isNew={true}
                title={`Pythonとレゴマインドストームを使ったプログラミング体験`}
              />
              <OfferCard
                id={`1`}
                companyName={`TRUNK株式会社`}
                occupation={`バックエンドエンジニア`}
                place={`東京都 渋谷区神南 1-9-4 NCビル3F B号`}
                hourlyWage={`未定`}
                isNew={true}
                title={`ワークスクールのコンテンツを作りたいひと募集！`}
              />
              <OfferCard
                id={`1`}
                companyName={`バレットグループ株式会社`}
                occupation={`営業`}
                place={`東京都 新宿区新宿5-15-5 新宿三光町ビル 4F`}
                hourlyWage={`日給1万円`}
                isNew={true}
                title={`第２弾【活躍社員からのFBあり】就活にも役立つ企画提案型[営業]インターンシップ！`}
              />
              {/* </div> */}
              {/* <div className="recruit-card-container"> */}
              <OfferCard
                id={`1`}
                companyName={`バレットグループ株式会社`}
                occupation={`WEBディレクター`}
                place={`東京都 新宿区新宿5-15-5 新宿三光町ビル 4F`}
                hourlyWage={`未定`}
                isNew={true}
                title={`第１弾【活躍社員からのFBあり】就活にも役立つ企画考案型[マーケティング]インターンシップ！`}
              />
              <OfferCard
                id={`1`}
                companyName={`バレットクラブ株式会社`}
                occupation={`WEBマーケター`}
                place={`東京都 新宿区新宿5-15-5 新宿三光町ビル 4F`}
                hourlyWage={`時給1050円`}
                isNew={true}
                title={`web広告新規事業2人目社員に！営業〜マーケティングまで学ぶ長期インターン`}
              />
              <OfferCard
                id={`1`}
                companyName={`株式会社エウレカ`}
                occupation={`iosエンジニア`}
                place={`東京都 港区三田 1-4-1 住友不動産麻布十番ビル4階`}
                hourlyWage={`時給1300円`}
                isNew={true}
                title={`地方学生歓迎！実務でインターンを経験したい学生エンジニアをWanted`}
              />
            </Flex>
            {/* </div> */}
          </section>
        </div>
      </Box>
    </Box>
  );
};
