// import layer
import { useState, useEffect } from 'react';
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Offers as Template } from 'templates/Offers';
import { SeoComponent } from 'components/seo/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { parseSeo } from '~/lib';
import {
  GetOffersAllQuery,
  GetOffersAllDocument,
  OfferEntity,
  GetAdvertisementArticlesQuery,
  AdvertisementArticleEntity,
  GetAdvertisementArticlesDocument,
} from 'types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from '~/constants';
import { selectSetOffers, useOffersStore } from 'features/offers';
import {
  selectSetAdvertisements,
  useAdvertisementsStore,
} from 'features/advertisements';
import { getTodayString } from 'lib/utils';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const Index: NextPage<Props> = ({ data, adData }) => {
  const router = useRouter();
  const title = `新大生向け求人情報一覧 | NOT THE UNIVERSITY FOR JOB`; // eslint-disable-line
  const description = `NOT THE UNIVERSITYでしかお届けできない新大生向けの求人を紹介します。アルバイトからインターンシップまで他では体験できない求人情報ばかりを掲載しています。`;
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
  adData?.advertisementArticles?.data &&
    setAdvertisements(
      adData.advertisementArticles.data as AdvertisementArticleEntity[]
    );

  const message = () => {
    if (isClient) {
      return (
        <>
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
