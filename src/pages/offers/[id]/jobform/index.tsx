// import layer
import { useState, useEffect } from 'react';
import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';

import { JobForm as Template } from '~/components/templates/JobForm';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL, ORIGIN_URL } from '~/constants';

import {
  GetOfferByIdQuery,
  GetOfferByIdDocument,
  OfferEntity,
  GetOfferPathsQuery,
  GetOfferPathsDocument,
} from 'types/offers-gql/graphql';
import { initializeApollo_offer } from 'lib/apollo/client';
import { selectSetTarget, useTargetOfferStore } from 'features/offers';
import { UPDATE_INTERVAL } from '~/constants';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage<Props> = ({ data }) => {
  const title = `応募フォーム | NOT THE UNIVERSITY FOR JOB`;
  const description = `NOT THE UNIVERSITY FOR JOBの応募フォームのページです。`;

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
  const setTarget = useTargetOfferStore(selectSetTarget);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!data) return;

  setTarget(data?.offer?.data as OfferEntity);

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
    console.log('get pages/offers/[id]/jobform paths');
  }
};

export const getStaticProps: GetStaticProps<{
  data: GetOfferByIdQuery;
}> = async ({ params }) => {
  const { id } = params;
  const apolloClient = initializeApollo_offer();

  try {
    const { data } = await apolloClient.query<GetOfferByIdQuery>({
      query: GetOfferByIdDocument,
      variables: { id },
    });

    return {
      props: {
        data,
      },
      notFound: !data,
      revalidate: UPDATE_INTERVAL,
    };
  } catch (err) {
    console.error(err);

    return {
      props: { data: undefined },
      notFound: true,
      revalidate: UPDATE_INTERVAL,
    };
  } finally {
    console.log('get pages/offers/[id]/jobform static props');
  }
};
