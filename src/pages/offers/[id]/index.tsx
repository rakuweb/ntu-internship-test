// import layer
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';
import { CANONICAL_URL, CMS_URL } from 'constants/env';
import {
  selectSetOffers,
  selectSetTarget,
  useOffersStore,
  useTargetOfferStore,
} from 'features/offers';
import { initializeApollo_offer } from 'lib/apollo/client';
import { SeoComponent } from 'new-components/seo/SeoComponent';
import { OfferID as Template } from 'new-components/templates/OfferId';
import {
  GetOfferByIdQuery,
  GetOfferByIdDocument,
  OfferEntity,
  GetOfferPathsQuery,
  GetOfferPathsDocument,
  GetOffersAllQuery,
  GetOffersAllDocument,
} from 'types/offers-gql/graphql';
import { UPDATE_INTERVAL } from '~/constants';
import { getTodayString } from '~/lib/utils';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage<Props> = ({ data, allOffersData }) => {
  const offerAttributes = data?.offer?.data?.attributes;
  const router = useRouter();
  const title = offerAttributes?.title ?? ``;
  const company_name = offerAttributes?.company_name ?? ``;
  const description = offerAttributes?.job_description ?? ``;
  const imageurl = offerAttributes?.image?.data?.attributes.url;
  const openGraph = {
    type: 'website',
    title: title,
    description: description,
    images: [
      {
        url: `${CMS_URL}${imageurl}`,
        width: 1200,
        height: 630,
      },
    ],
  };
  const setTarget = useTargetOfferStore(selectSetTarget);
  const setOffers = useOffersStore(selectSetOffers);

  useEffect(() => {
    data?.offer?.data && setTarget(data?.offer?.data as OfferEntity);
  }, [data]); // eslint-disable-line

  useEffect(() => {
    allOffersData?.offers?.data &&
      setOffers(allOffersData.offers.data as OfferEntity[]);
  }, [allOffersData]); // eslint-disable-line

  if (router.isFallback) {
    return <></>;
  }

  return (
    <>
      <SeoComponent
        canonical={CANONICAL_URL}
        title={
          title + ` | FOR JOB(新大生のための求人サイト) | NOT THE UNIVERSITY`
        }
        description={description}
        openGraph={openGraph}
      />

      <Template
        title={title}
        description={description}
        company_name={company_name}
      />
    </>
  );
};

export default Index;

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo_offer();
  try {
    const { data } = await apolloClient.query<GetOfferPathsQuery>({
      query: GetOfferPathsDocument,
    });

    const paths = data?.offers?.data
      ? data.offers.data.map((item) => ({
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
    console.log('get pages/offers/[id] paths');
  }
};

export const getStaticProps: GetStaticProps<{
  data: GetOfferByIdQuery;
  allOffersData: GetOffersAllQuery;
}> = async ({ params }) => {
  const { id } = params;
  const apolloClient = initializeApollo_offer();

  try {
    const { data } = await apolloClient.query<GetOfferByIdQuery>({
      query: GetOfferByIdDocument,
      variables: { id },
    });

    const allOffersResult = await apolloClient.query<GetOffersAllQuery>({
      query: GetOffersAllDocument,
      variables: { today: getTodayString() },
    });

    return {
      props: {
        data,
        allOffersData: allOffersResult.data,
      },
      notFound: !data,
      revalidate: UPDATE_INTERVAL,
    };
  } catch (err) {
    console.error(err);

    return {
      props: { data: undefined, allOffersData: undefined },
      notFound: true,
      revalidate: UPDATE_INTERVAL,
    };
  } finally {
    console.log('get pages/offers/[id] static props');
  }
};
