// import layer
import { useState, useEffect } from 'react';
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { OfferSlider as Template } from '~/components/templates/OfferSlider';
import {
  GetAdvertisementArticlesQuery,
  GetAdvertisementArticlesDocument,
} from 'types/gql/graphql';
import {
  GetOffersAllQuery,
  GetOffersAllDocument,
  OfferEntity,
} from 'types/offers-gql/graphql';
import { initializeApollo } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from '~/constants';
import { selectSetOffers, useOffersStore } from 'features/offers';

import { getTodayString } from 'lib/utils';
import Head from 'next/head';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const Index: NextPage<Props> = ({ data, adData }) => {
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const setOffers = useOffersStore(selectSetOffers);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (router.isFallback) {
    return <></>;
  }
  if (!adData || !data) {
    return <></>;
  }

  data?.offers?.data && setOffers(data.offers.data as OfferEntity[]);

  const message = () => {
    if (isClient) {
      return (
        <>
          <Head>
            <meta content="noindex" />
          </Head>
          <Template />
        </>
      );
    } else {
      return <></>;
    }
  };

  return <>{message()}</>;
};

export default Index;

export const getStaticProps: GetStaticProps<{
  data: GetOffersAllQuery;
  adData: GetAdvertisementArticlesQuery;
}> = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetOffersAllQuery>({
      query: GetOffersAllDocument,
      variables: { today: getTodayString() },
    });
    const { data: adData } =
      await apolloClient.query<GetAdvertisementArticlesQuery>({
        query: GetAdvertisementArticlesDocument,
      });

    return {
      props: { data, adData },
      notFound: !data || !adData,
      revalidate: UPDATE_INTERVAL,
    };
  } catch (error) {
    console.error(error);

    return {
      props: { data: undefined, adData: undefined },
      notFound: true,
      revalidate: UPDATE_INTERVAL,
    };
  } finally {
    console.log('get pages/home static props');
  }
};
