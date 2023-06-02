// import layer
import { useState, useEffect } from 'react';
import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';
import { Top as Template } from 'templates/OfferId';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL, CMS_URL } from 'constants/env';
import { UPDATE_INTERVAL } from '~/constants';
import { parseSeo } from '~/lib';
import {
  GetOfferByIdQuery,
  GetOfferByIdDocument,
  OfferEntity,
  GetOfferPathsQuery,
  GetOfferPathsDocument,
  UploadFile,
} from 'types/gql/graphql';
import { initializeApollo, initializeApollo_offer } from 'lib/apollo/client';
import { selectSetTarget, useTargetOfferStore } from 'features/offers';
import { selectSetCompanyItem, useCompanyStore } from '~/features/company';
import { parseImage } from '~/lib/utils';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage<Props> = ({ data }) => {
  const title = data?.offer?.data?.attributes?.title ?? ``; // eslint-disable-line
  const description = data?.offer?.data?.attributes?.job_description ?? ``;
  const ogp = data?.offer?.data?.attributes?.image?.data?.attributes
    ? parseImage(
        data.offer.data.attributes.image?.data?.attributes as UploadFile
      )
    : undefined;
  const seo = parseSeo(title, description, undefined, ogp);
  const imageurl = data?.offer?.data?.attributes?.image?.data?.attributes.url;
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
  const [isClient, setIsClient] = useState(false);
  const setTarget = useTargetOfferStore(selectSetTarget);
  const setComapanyItem = useCompanyStore(selectSetCompanyItem);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!data?.offer?.data) {
    return <></>;
  }

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
        <>
          <SeoComponent
            canonical={CANONICAL_URL}
            title={title}
            description={description}
            openGraph={openGraph}
          />
        </>
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
      props: { data: undefined, company: undefined },
      notFound: true,
      revalidate: UPDATE_INTERVAL,
    };
  } finally {
    console.log('get pages/offers/[id] static props');
  }
};
