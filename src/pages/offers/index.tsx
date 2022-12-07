// import layer
import { useState, useEffect } from 'react';
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Offers as Template } from 'templates/Offers';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { parseSeo } from '~/lib';
import {
  GetOffersQuery,
  GetOffersDocument,
  OfferEntity,
} from 'types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from '~/constants';
import { useOffersStore } from 'features/offers/hooks';
import { selectSetOffers, selectCurrentPage } from 'features/offers/selectors';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage<Props> = ({ data }) => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const setOffers = useOffersStore(selectSetOffers);
  const currentPage = useOffersStore(selectCurrentPage);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (router.isFallback) {
    return <></>;
  }
  if (!data) {
    return <></>;
  }

  currentPage === 1 && setOffers((data?.offers?.data as OfferEntity[]) ?? []);

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

export const getStaticProps: GetStaticProps<{
  data: GetOffersQuery;
}> = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetOffersQuery>({
      query: GetOffersDocument,
      variables: { page: 1 },
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
    console.log('get pages/index static props');
  }
};

export default Index;
