// import layer
import { useState, useEffect } from 'react';
import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';
import { Top as Template } from '../../../../components/templates/PointId';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL, ORIGIN_URL } from 'constants/env';
import { UPDATE_INTERVAL } from '~/constants';
import { parseSeo } from '~/lib';
import {
  OfferEntity,
  UploadFile,
  GetOffersAllQuery,
  GetOffersAllDocument,
  PointEntity,
  GetPointsQuery,
  GetPointsDocument,
} from 'types/offers-gql/graphql';
import {
  GetJobCategoriesQuery,
  GetJobCategoriesDocument,
  JobCategoryEntity,
} from 'types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';
import { selectSetOffers, useOffersStore } from 'features/offers';
import { parseImage } from '~/lib/utils';
import {
  selectSetJobCategorys,
  useJobCategorysStore,
} from '~/features/category';
import {
  selectSetPointItem,
  selectSetPoints,
  usePointStore,
  usePointsStore,
} from '~/features/point';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export type PresenterProps = {
  deadline: boolean;
};
// component layer
export const Index: NextPage<Props> = ({
  data,
  point,
  points,
  jobcategories,
}) => {
  const title = `${point && point.length > 0 ? point[0].attributes.name : ''
    }が身に付く求人一覧 | NOT THE UNIVERSITY FOR JOB`;
  const description = `${point && point.length > 0 ? point[0].attributes.name : ''
    }が身に付く求人一覧 | NOT THE UNIVERSITY FOR JOB`;
  const ogp = data?.offers?.data[0]?.attributes?.image?.data?.attributes
    ? parseImage(
      data.offers.data[0].attributes.image?.data?.attributes as UploadFile
    )
    : undefined;
  const seo = parseSeo(title, description, undefined, ogp);
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
  const setPointItem = usePointStore(selectSetPointItem);
  const setPoints = usePointsStore(selectSetPoints);
  const setOffers = useOffersStore(selectSetOffers);
  const setJobCategorys = useJobCategorysStore(selectSetJobCategorys);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!data?.offers?.data || !data) {
    return <></>;
  }
  setJobCategorys(jobcategories as JobCategoryEntity[]);
  setPoints(points as PointEntity[]);
  setPointItem(point[0] as PointEntity);
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
        <>
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
export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetPointsQuery>({
      query: GetPointsDocument,
    });
    const paths = data?.points?.data
      ? data.points.data.map((item) => ({
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
    console.log('get pages/Points/[id] paths');
  }
};

export const getStaticProps: GetStaticProps<{
  data: GetOffersAllQuery;
  point: PointEntity[];
  points: PointEntity[];
  jobcategories: JobCategoryEntity[];
}> = async ({ params }) => {
  const { id } = params;
  const apolloClient = initializeApollo();

  try {
    const { data } = await apolloClient.query<GetOffersAllQuery>({
      query: GetOffersAllDocument,
      variables: { id },
    });
    const { data: pointer } = await apolloClient.query<GetPointsQuery>({
      query: GetPointsDocument,
    });
    const { data: jobCategoriesData } =
      await apolloClient.query<GetJobCategoriesQuery>({
        query: GetJobCategoriesDocument,
      });
    const { data: pointers } = await apolloClient.query<GetPointsQuery>({
      query: GetPointsDocument,
    });

    const jobcategories = jobCategoriesData.jobCategories
      .data as unknown as JobCategoryEntity[];

    const point =
      (pointer?.points?.data?.filter(
        (point) => point?.id === id
      ) as unknown as PointEntity[]) || [];
    const points = pointers?.points?.data || [];
    return {
      props: {
        data,
        point,
        points,
        jobcategories,
      },
      notFound: !data,
      revalidate: UPDATE_INTERVAL,
    };
  } catch (err) {
    console.error(err);

    return {
      props: { data: undefined, point: [] },
      notFound: true,
      revalidate: UPDATE_INTERVAL,
    };
  } finally {
    console.log('get pages/point/[id] static props');
  }
};
