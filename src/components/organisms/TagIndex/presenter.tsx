// import layer
import { FC } from 'react';
import { Box, Flex, Grid, Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';
import {
  useJobCategorysStore,
  selectJobCategorys,
  JobCategorysCard,
} from '~/features/category';
import { Labeltext } from '~/features/offers/OfferCard/Labeltext';
import { selectPoints, usePointsStore } from '~/features/point';
import { BreadcrumbOffers } from '../BreadcrumbOffers';
import { Labeltext2 } from '../Tag/Labeltext2';

// type layer
export type DataProps = JobCategorysCard;
export type PresenterProps = Record<string, string>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const jobCategories = useJobCategorysStore(selectJobCategorys);
  const points = usePointsStore(selectPoints);

  // const filteredOffers = offers.sort((offer1, offer2) => {
  //   const endDate1 = new Date(offer1.deadline);
  //   const endDate2 = new Date(offer2.deadline);
  //   return endDate2.getTime() - endDate1.getTime();
  // });

  return (
    <div css={styles}>
      <Box bgColor={'#f5f5f5'}>
        <BreadcrumbOffers title={`タグ一覧`} />
        <Box
          p={{ base: '50px 0', lg: '50px 0 100px' }}
          w={{ base: '90%', xl: '1180px' }}
          m={'auto'}
        >
          <Heading
            m={'auto'}
            fontFamily={"'Noto Sans JP', sans-serif"}
            as={'h2'}
            fontSize={{ base: '20px', lg: '30px' }}
            mb={{ base: '30px', lg: '30px' }}
            color={'#444444'}
          >
            求人一覧
          </Heading>
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
            {/* {filteredOffers.map((offer) => {
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
            })} */}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
// styles
const styles = css`
  .subsection {
    /* width: calc(100% - 32px); */
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    font-family: 'Noto Sans JP', sans-serif;
  }

  ${mq[2]} {
    .subsection {
      /* width: 1180px; */
      min-width: 925px;
      padding: 40px;
    }
  }
`;
