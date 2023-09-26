// import layer
import { useState, useEffect } from 'react';
import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';

import { CANONICAL_URL } from 'constants/env';
import { selectSetOffers, useOffersStore } from 'features/offers';
import { initializeApollo } from 'lib/apollo/client';
import { SeoComponent } from 'organisms/SeoComponent';
import {
  GetJobCategoriesQuery,
  GetJobCategoriesDocument,
  JobCategoryEntity,
} from 'types/gql/graphql';
import {
  OfferEntity,
  GetOffersAllQuery,
  GetOffersAllDocument,
  GetPointsQuery,
  GetPointsDocument,
  PointEntity,
} from 'types/offers-gql/graphql';
import { UPDATE_INTERVAL } from '~/constants';

import {
  selectSetJobCategoryItem,
  selectSetJobCategorys,
  useJobCategoryStore,
  useJobCategorysStore,
} from '~/features/category';
import { usePointsStore, selectSetPoints } from '~/features/point';
import { Top as Template } from '../../../../components/templates/TagId';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage<Props> = ({
  data,
  jobcategory,
  jobcategories,
  points,
}) => {
  const title = `${
    jobcategory && jobcategory.length > 0 ? jobcategory[0].attributes.name : ''
  }が身に付く求人一覧 | NOT THE UNIVERSITY FOR JOB`;

  const description = `${
    jobcategory && jobcategory.length > 0 ? jobcategory[0].attributes.name : ''
  }が身に付く求人一覧 | NOT THE UNIVERSITY FOR JOB`;

  const imageurl =
    data?.offers?.data[0]?.attributes?.image?.data?.attributes.url;
  const cmsurl = `https://management.nottheuniversity.com`;
  const openGraph = {
    type: 'website',
    title: title,
    description: description,
    images: [
      {
        url: `${cmsurl}${imageurl}`,
        width: 1200,
        height: 630,
      },
    ],
  };
  const [isClient, setIsClient] = useState(false);
  const setTarget = useJobCategoryStore(selectSetJobCategoryItem);
  const setOffers = useOffersStore(selectSetOffers);
  const setJobCategorys = useJobCategorysStore(selectSetJobCategorys);
  const setPoints = usePointsStore(selectSetPoints);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!data?.offers?.data || !data) {
    return <></>;
  }

  setTarget(jobcategory[0] as JobCategoryEntity);
  setJobCategorys(jobcategories as JobCategoryEntity[]);
  setPoints(points as PointEntity[]);
  data?.offers?.data && setOffers(data.offers.data as unknown as OfferEntity[]);
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
          <Template deadline={false} />
        </>
      );
    } else {
      return (
        <SeoComponent
          canonical={CANONICAL_URL}
          title={title}
          description={description}
          openGraph={openGraph}
        />
      );
    }
  };

  return <>{message()}</>;
};

export default Index;

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetJobCategoriesQuery>({
      query: GetJobCategoriesDocument,
    });

    const paths = data?.jobCategories?.data
      ? data.jobCategories.data.map((item) => ({
          params: {
            id: item?.id,
          },
        }))
      : [];

    return {
      paths,
      fallback: true,
    };
  } finally {
    console.log('get pages/offers/tag/[id] paths');
  }
};

export const getStaticProps: GetStaticProps<{
  data: GetOffersAllQuery;
  jobcategory: JobCategoryEntity[];
  jobcategories: JobCategoryEntity[];
  points: PointEntity[];
}> = async ({ params }) => {
  const { id } = params;
  const apolloClient = initializeApollo();

  try {
    const { data } = await apolloClient.query<GetOffersAllQuery>({
      query: GetOffersAllDocument,
      variables: { id },
    });
    const { data: job } = await apolloClient.query<GetJobCategoriesQuery>({
      query: GetJobCategoriesDocument,
    });
    const { data: jobs } = await apolloClient.query<GetJobCategoriesQuery>({
      query: GetJobCategoriesDocument,
    });
    const { data: point } = await apolloClient.query<GetPointsQuery>({
      query: GetPointsDocument,
    });

    const jobcategory =
      (job?.jobCategories?.data?.filter(
        (jobCategory) => jobCategory?.id === id
      ) as unknown as JobCategoryEntity[]) || [];
    const points = point?.points?.data || [];
    const jobcategories = jobs?.jobCategories?.data || [];
    return {
      props: {
        data,
        jobcategory,
        jobcategories,
        points,
      },
      notFound: !data,
      revalidate: UPDATE_INTERVAL,
    };
  } catch (err) {
    console.error(err);

    return {
      props: { data: undefined, jobcategory: [] },
      notFound: true,
      revalidate: UPDATE_INTERVAL,
    };
  } finally {
    console.log('get pages/offers/tag/[id] static props');
  }
};
