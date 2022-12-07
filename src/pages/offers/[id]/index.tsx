// import layer
import { useState, useEffect } from 'react';
import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';

import { Top as Template } from 'templates/Consultation/Detail';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { UPDATE_INTERVAL } from '~/constants';
import { parseSeo } from '~/lib';
import {
  GetOffersAllQuery,
  GetOffersAllDocument,
  GetOfferByIdQuery,
  GetOfferByIdDocument,
} from 'types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage<Props> = ({ data }) => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetOffersAllQuery>({
      query: GetOffersAllDocument,
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
}> = async ({ params }) => {
  const { id } = params;
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetOfferByIdQuery>({
    query: GetOfferByIdDocument,
    variables: { id },
  });

  try {
    return {
      props: {
        data,
      },
      notFound: !data,
      revalidate: UPDATE_INTERVAL,
    };
  } catch (err) {
    console.error(err);

    return { props: { data: undefined }, notFound: true };
  } finally {
    console.log('get pages/offers/[id] static props');
  }
};

export default Index;
