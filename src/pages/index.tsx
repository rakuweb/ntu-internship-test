// import layer
import { useState, useEffect } from 'react';
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Offers as Template } from 'templates/Offers';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { parseSeo } from '~/lib';
import {
  GetOffersAllQuery,
  GetOffersAllDocument,
  OfferEntity,
  GetAdvertisementsQuery,
  GetAdvertisementsDocument,
  AdvertisementEntity,
} from 'types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from '~/constants';
import { useOffersStore } from 'features/offers/hooks';
import { selectSetOffers, selectCurrentPage } from 'features/offers/selectors';
import {
  selectSetAdvertisements,
  useAdvertisementsStore,
} from 'features/advertisements';
import { getTodayString } from 'lib/utils';
import Head from 'next/head';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const Index: NextPage<Props> = ({ data, adData }) => {
  const router = useRouter();
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);
  const setOffers = useOffersStore(selectSetOffers);
  const setAdvertisements = useAdvertisementsStore(selectSetAdvertisements);
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
  adData?.advertisements?.data &&
    setAdvertisements(adData.advertisements.data as AdvertisementEntity[]);

  const message = () => {
    if (isClient) {
      return (
        <>
          <Head>
            <title>Not the University求人情報</title>
            <meta name="description">
              Not the
              University新潟大学生向けのアルバイト情報・インターン情報を掲載します。
            </meta>
            <link rel="icon" href="/svg/ntu-job.svg"></link>
          </Head>
          <SeoComponent canonical={CANONICAL_URL} {...seo} />
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
  adData: GetAdvertisementsQuery;
}> = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetOffersAllQuery>({
      query: GetOffersAllDocument,
      variables: { today: getTodayString() },
    });
    const { data: adData } = await apolloClient.query<GetAdvertisementsQuery>({
      query: GetAdvertisementsDocument,
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
    console.log('get pages/offers static props');
  }
};
