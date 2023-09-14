// import layer
import { useState, useEffect } from 'react';
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Search as Template } from '~/components/templates/Search';
import { SeoComponent } from 'components/seo/SeoComponent';
import { CANONICAL_URL, ORIGIN_URL } from 'constants/env';
import {
  GetOffersAllQuery,
  GetOffersAllDocument,
  OfferEntity,
} from 'types/offers-gql/graphql';
import { initializeApollo_offer } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from '~/constants';
import { selectSetOffers, useOffersStore } from 'features/offers';

import { getTodayString } from 'lib/utils';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const Index: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const title = `For job(新大生のための求人サイト) | NOT THE UNIVERSITY`; // eslint-disable-line
  const description = `For jobは、NOT THE UNIVERSITYがお届けする新大生のための求人サイトです。ワンデーバイトからインターンシップ求人まで、他では体験できない求人や高時給アルバイトをお届けします。`;
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
  // const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);
  const setOffers = useOffersStore(selectSetOffers);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (router.isFallback) {
    return <></>;
  }

  data?.offers?.data && setOffers(data.offers.data as OfferEntity[]);

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
    console.log('get pages/search static props');
  }
};
