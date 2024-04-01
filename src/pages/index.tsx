// import layer
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { CANONICAL_URL, ORIGIN_URL } from 'constants/env';
import { selectSetOffers, useOffersStore } from 'features/offers';
import { initializeApollo_offer } from 'lib/apollo/client';

import { getTodayString } from 'lib/utils';
import { SeoComponent } from 'new-components/seo/SeoComponent';
import { Home as Template } from 'new-components/templates/Home';
import {
  GetOffersAllQuery,
  GetOffersAllDocument,
  OfferEntity,
} from 'types/offers-gql/graphql';
import { UPDATE_INTERVAL } from '~/constants';
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const Index: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const title = `FOR JOB(新大生のための求人サイト) | NOT THE UNIVERSITY`; // eslint-disable-line
  const description = `FOR JOBは、NOT THE UNIVERSITYがお届けする新大生のための求人サイトです。単発アルバイトから長期インターンシップ求人まで、他では体験できない求人や高時給アルバイトをお届けします。`;
  const openGraph = {
    type: 'website',
    title: title,
    description: description,
    images: [
      {
        url: `${ORIGIN_URL}/newogp.png`,
        width: 1200,
        height: 630,
      },
    ],
  };
  const setOffers = useOffersStore(selectSetOffers);

  useEffect(() => {
    data?.offers?.data && setOffers(data.offers.data as OfferEntity[]);
  }, [data?.offers?.data, setOffers]);

  if (router.isFallback) {
    return <></>;
  }

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
};

export default Index;

export const getStaticProps: GetStaticProps<{
  data: GetOffersAllQuery;
}> = async () => {
  const apolloClient = initializeApollo_offer();
  try {
    const { data } = await apolloClient.query<GetOffersAllQuery>({
      query: GetOffersAllDocument,
      variables: { today: getTodayString() },
    });

    return {
      props: { data },
      notFound: !data,
      revalidate: UPDATE_INTERVAL,
    };
  } catch (error) {
    console.error(error);

    return {
      props: { data: undefined },
      notFound: true,
      revalidate: UPDATE_INTERVAL,
    };
  } finally {
    console.log('get pages/home static props');
  }
};
