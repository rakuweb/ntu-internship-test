// import layer
import { FC, useState } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import { OfferCard } from 'features/offers/OfferCard';
import { selectOfferList } from 'features/offers/selectors';
import { useOffersStore } from 'features/offers/hooks';
import { styles } from './styles';
import { Image } from 'components/Image';
import { breakpointsByPx } from '~/constants/styles';
import {
  selectAdvertisements,
  useAdvertisementsStore,
} from 'features/advertisements';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { OfferCardDead } from '../OfferCardDead';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const advertisements = useAdvertisementsStore(selectAdvertisements);
  const offers = useOffersStore(selectOfferList);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthNum = currentDate.getMonth();
  const monthMap = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  const month = monthMap[monthNum];
  const date = currentDate.getDate();
  const today = `${year}-${month}-${date}`;
  // const today = `${year}-03-01`;

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
  const [index, setIndex] = useState<number>(0);

  const swiperProps: SwiperProps = {
    modules: [Navigation, Autoplay],

    loop: true,
    centeredSlides: true,
    navigation: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      // [breakpointsByPx[0]]: {},
      // [breakpointsByPx[1]]: {},
      [breakpointsByPx[2]]: {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 40,
      },
      // [breakpointsByPx[3]]: {},
      // [breakpointsByPx[4]]: {},
    },
    onSlideChange: (swiper) => {
      setIndex(swiper.realIndex);
    },
  };

  return (
    <Box css={styles}>
      <Box
        // pb={{ base: `${80 / 3.75}vw`, lg: `${120 / 19.2}vw` }}
        className="search"
      >
        <Box className="search__container" position={`relative`}>
          <Box
            // border={`1px solid`}
            mx={`auto`}
            overflow={`hidden`}
            borderRadius={{ base: `${20 / 3.75}vw`, lg: `${50 / 19.2}vw` }}
            mt={`30px`}
            w={`100%`}
            sx={{
              '.swiper-button-next': {
                right: {
                  base: `0.5rem`,
                  lg: `1rem`,
                },
                mt: {
                  base: `initial`,
                  lg: `calc(0px - (var(--swiper-navigation-size)/ 2))`,
                },
                transform: { base: `translateY(-50%)`, lg: `initial` },
                backgroundColor: `var(--white)`,
                borderWidth: `2px`,
                borderStyle: `solid`,
                borderRadius: `50%`,
                borderColor: `#21d4fd`,
                // borderColor: `var(--navy-blue)`,
                width: { base: `1.5rem`, lg: `44px` },
                height: { base: `1.5rem`, lg: `44px` },
                textAlign: `center`,
                verticalAlign: `middle`,
                ':after': {
                  fontSize: { base: `0.75rem`, lg: `1.5rem` },
                  color: `#21d4fd`,
                  // color: `var(--navy-blue)`,
                  fontWeight: `bold`,
                },
                ':hover': {
                  cursor: `pointer`,
                  filter: `opacity(50%)`,
                  transition: `all .3s`,
                },
              },
              '.swiper-button-prev': {
                left: {
                  base: `0.5rem`,
                  lg: `1rem`,
                },
                mt: {
                  base: `initial`,
                  lg: `calc(0px - (var(--swiper-navigation-size)/ 2))`,
                },
                transform: { base: `translateY(-50%)`, lg: `initial` },
                backgroundColor: `var(--white)`,
                borderWidth: `2px`,
                borderStyle: `solid`,
                borderRadius: `50%`,
                borderColor: `#21d4fd`,
                // borderColor: `var(--navy-blue)`,
                width: { base: `1.5rem`, lg: `44px` },
                height: { base: `1.5rem`, lg: `44px` },
                textAlign: `center`,
                verticalAlign: `middle`,
                ':after': {
                  fontSize: { base: `0.75rem`, lg: `1.5rem` },
                  color: `#21d4fd`,
                  // color: `var(--navy-blue)`,
                  fontWeight: `bold`,
                },
                ':hover': {
                  cursor: `pointer`,
                  filter: `opacity(50%)`,
                  transition: `all .3s`,
                },
              },
            }}
          >
            <Swiper {...swiperProps}>
              {advertisements.map((ad) => (
                <SwiperSlide key={ad.id}>
                  <Box
                  // w={{ base: `100%` }}
                  // maxW={{
                  //   lg: `520px`,
                  //   xl: `700px`,
                  //   '2xl': 'initial',
                  // }}
                  // h={`auto`}
                  // position={`relative`}
                  >
                    <Image
                      w={`100%`}
                      image={{
                        ...ad.image,
                        layout: `responsive`,
                      }}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
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
            {/* <div className="recruit-card-container"> */}
            <Grid
              templateColumns={{
                base: `repeat(1,1fr)`,
                md: `repeat(2,1fr)`,
                lg: `repeat(3,1fr)`,
              }}
              rowGap={{ lg: `38px` }}
              columnGap={{ lg: `32px` }}
            >
              {/* {offers.map((offer) => (
                <OfferCard key={offer.id} {...offer} />
              ))} */}
              {/* {offers.map((offer) => (
                <OfferCardDead key={offer.id} {...offer} />
              ))} */}

              {offers.map((offer) => (
                <div key={offer.id}>
                  {(() => {
                    if (offer.deadline >= today) {
                      return <OfferCard {...offer} />;
                    } else {
                      return <OfferCardDead {...offer} />;
                    }
                  })()}
                </div>
              ))}
              {/* <div className="recruit-card-container"> */}
            </Grid>
            {/* </div> */}
          </section>
        </Box>
      </Box>
    </Box>
  );
};
