// import layer
import { FC, useEffect } from 'react';
import { Box, Flex, Grid, Heading } from '@chakra-ui/react';
import { selectOfferList, useOffersStore } from 'features/offers';
import { styles } from './styles';
import 'zenn-content-css';
import { OfferCard } from '~/features/offers/OfferCard';
import { BreadcrumbOfferId } from '../BreadcrumbOfferId';
import {
  selectPoint,
  selectPoints,
  selectSetPointItem,
  usePointStore,
  usePointsStore,
} from '~/features/point';
import { OfferCardDead } from '~/features/offers/OfferCardDead';
import { Labeltext } from '~/features/offers/OfferCard/Labeltext';
import { Labeltext2 } from './Labeltext2';
import {
  useJobCategorysStore,
  selectJobCategorys,
  selectSetJobCategoryItem,
  useJobCategoryStore,
} from '~/features/category';
import { JobCategoryEntity, PointEntity } from '~/types/gql/graphql';

// type layer
export type PresenterProps = {
  deadline: boolean;
  jobCategories: JobCategoryEntity[];
  points: PointEntity[];
};

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const point = usePointStore(selectPoint);
  const jobCategories = useJobCategorysStore(selectJobCategorys);
  const offers = useOffersStore(selectOfferList);
  const points = usePointsStore(selectPoints);
  const setJobCategoryItem = useJobCategoryStore(selectSetJobCategoryItem);
  const setPointItem = usePointStore(selectSetPointItem);

  const filteredOffers = offers
    .filter((offer) =>
      offer.points.some((pointsItem) => pointsItem.id === point.id)
    )
    .sort((offer1, offer2) => {
      const endDate1 = new Date(offer1.deadline);
      const endDate2 = new Date(offer2.deadline);
      return endDate2.getTime() - endDate1.getTime();
    });
  const pageTitles = ['ポイント', point.name];
  return (
    <div css={styles}>
      <Box bgColor={'#f5f5f5'}>
        <BreadcrumbOfferId titles={pageTitles} />
        <Box
          w={{ base: '90%', xl: '1180PX' }}
          m={'auto'}
          p={{ base: '50px 0', lg: '0 0 100px' }}
        >
          <Box className="subsection">
            <Flex
              flexWrap={`wrap`}
              //  mb={{ lg: `20px` }}
            >
              {jobCategories &&
                jobCategories.list.map((jobCategories) => {
                  return (
                    <Labeltext
                      key={jobCategories.id}
                      id={jobCategories.id}
                      labeltext={jobCategories.name}
                    ></Labeltext>
                  );
                })}
              {points &&
                points.list.map((points) => {
                  return (
                    <Labeltext2
                      key={points.id}
                      id={points.id}
                      labeltext={points.name}
                    ></Labeltext2>
                  );
                })}
            </Flex>
          </Box>
          <Heading
            fontFamily={"'Noto Sans JP', sans-serif"}
            as={'h2'}
            fontSize={{ base: '20px', lg: '30px' }}
            mb={{ base: '30px', lg: '30px' }}
            mt={{ base: '40px', lg: '50px' }}
            color={'#444444'}
          >
            {point.name}が身に付く求人一覧
          </Heading>
          <Grid
            templateColumns={{
              base: `repeat(1,1fr)`,
              md: `repeat(2,1fr)`,
              lg: `repeat(3,1fr)`,
            }}
            rowGap={{ lg: `38px` }}
            columnGap={{ lg: `10px` }}
            m={{ base: '30px auto auto' }}
            w={{ base: '300px', md: '700px', lg: '100%' }}
          >
            {filteredOffers.map((offer) => {
              const currentDate = new Date();
              const endDate = new Date(offer.deadline);
              const isEnd =
                (endDate.getTime() - currentDate.getTime()) /
                  (1000 * 3600 * 24) <=
                0;
              const daysRemaining = Math.ceil(
                (endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
              );
              return isEnd ? (
                <OfferCardDead
                  key={offer.id}
                  {...offer}
                  deadline={daysRemaining}
                />
              ) : (
                <OfferCard
                  startDate={''}
                  key={offer.id}
                  {...offer}
                  deadline={daysRemaining}
                />
              );
            })}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
