// import layer
import { useEffect } from 'react';
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
import { useClient } from 'hooks/client';
import { initializeApollo_offer } from 'lib/apollo/client';
import { SeoComponent } from 'organisms/SeoComponent';
import { Top as Template } from 'templates/OfferId';
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
  const title = offerAttributes?.title ?? ``; // eslint-disable-line
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
  const { isClient } = useClient();
  const setTarget = useTargetOfferStore(selectSetTarget);
  const setOffers = useOffersStore(selectSetOffers);

  useEffect(() => {
    data?.offer?.data && setTarget(data?.offer?.data as OfferEntity);
  }, [data]);

  useEffect(() => {
    allOffersData?.offers?.data &&
      setOffers(allOffersData.offers.data as OfferEntity[]);
  }, [allOffersData]);

  if (!data?.offer?.data) {
    return <></>;
  }

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
