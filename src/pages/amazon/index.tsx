// import layer
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { selectSetOffers, useOffersStore } from 'features/offers';
import { initializeApollo, initializeApollo_offer } from 'lib/apollo/client';
import { getTodayString } from 'lib/utils';
import {
  GetAdvertisementArticlesQuery,
  GetAdvertisementArticlesDocument,
} from 'types/gql/graphql';
import {
  GetOffersAllQuery,
  GetOffersAllDocument,
  OfferEntity,
} from 'types/offers-gql/graphql';
import { OfferSlider as Template } from '~/components/templates/OfferSlider';
import { UPDATE_INTERVAL } from '~/constants';

import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';

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
  const apolloClientOffer = initializeApollo_offer();
  try {
    const { data } = await apolloClientOffer.query<GetOffersAllQuery>({
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
