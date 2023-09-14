// import layer
import { useState, useEffect } from 'react';
import { NextPage, GetStaticProps } from 'next/types';
import { Index as Template } from 'templates/Tag';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL, ORIGIN_URL, UPDATE_INTERVAL } from '~/constants';
import { initializeApollo } from '~/lib/apollo/client';
import {
  GetOffersAllQuery,
  GetOffersAllDocument,
  GetPointsQuery,
  GetPointsDocument,
  PointEntity,
  OfferEntity,
} from '~/types/offers-gql/graphql';
import {
  JobCategoryEntity,
  GetJobCategoriesQuery,
  GetJobCategoriesDocument,
} from '~/types/gql/graphql';
import {
  selectSetJobCategorys,
  useJobCategorysStore,
} from '~/features/category';
import { selectSetPoints, usePointsStore } from '~/features/point';
import { useOffersStore, selectSetOffers } from '~/features/offers';

// type layer
type Props = {
  jobcategories: JobCategoryEntity[];
  points: PointEntity[];
  offers: OfferEntity[];
};
// component layer
export const Index: NextPage<Props> = ({ jobcategories, points, offers }) => {
  const title = `求人一覧 | NOT THE UNIVERSITY FOR JOB`; // eslint-disable-line
  const description = `NOT THE UNIVERSITY FOR JOBの求人一覧です。`;
  // const seo = parseSeo(title, description);
  const openGraph = {
    type: 'website',
    title: title,
    description: description,
    images: [
      {
        url: `${ORIGIN_URL}/ogp.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  };
  const [isClient, setIsClient] = useState(false);
  const setJobCategorys = useJobCategorysStore(selectSetJobCategorys);
  const setPoints = usePointsStore(selectSetPoints);
  const setOffers = useOffersStore(selectSetOffers);
  useEffect(() => {
    setIsClient(true);
  }, []);
  setJobCategorys(jobcategories as JobCategoryEntity[]);
  setPoints(points as PointEntity[]);
  setOffers(offers as OfferEntity[]);
  const message = () => {
    if (isClient) {
      return (
        <>
          <SeoComponent
            canonical={CANONICAL_URL}
            title={title}
            description={description}
            openGraph={openGraph}
          />
          <Template />
        </>
      );
    } else {
      return (
        <>
          {' '}
          <SeoComponent
            canonical={CANONICAL_URL}
            title={title}
            description={description}
            openGraph={openGraph}
          />
        </>
      );
    }
  };

  return <>{message()}</>;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetJobCategoriesQuery>({
      query: GetJobCategoriesDocument,
    });
    const { data: point } = await apolloClient.query<GetPointsQuery>({
      query: GetPointsDocument,
    });

    const { data: offer } = await apolloClient.query<GetOffersAllQuery>({
      query: GetOffersAllDocument,
    });
    const jobcategories = data?.jobCategories?.data || [];
    const points = point?.points?.data || [];
    const offers = offer?.offers?.data || [];
    return {
      props: {
        jobcategories,
        points,
        offers,
        revalidate: UPDATE_INTERVAL,
      },
    };
  } catch (err) {
    console.error(err);

    return {
      props: { jobcategories: [], points: [], offers: [] },
      revalidate: UPDATE_INTERVAL,
    };
  } finally {
    console.log('get pages/tag static props');
  }
};
