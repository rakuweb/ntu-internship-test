// import layer
import { useState, useEffect } from 'react';
import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next/types';
import { useRouter } from 'next/router';

import { Index as Template } from 'templates/AdvertisementId';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from '~/constants';
import { parseSeo } from '~/lib';
import {
  GetadvertisementArticlePathsDocument,
  GetadvertisementArticlePathsQuery,
  GetAdvertisementArticleIdQuery,
  GetAdvertisementArticleIdDocument,
  AdvertisementArticleEntity,
} from '~/types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';
import { UPDATE_INTERVAL } from '~/constants';
import {
  selectSetAdvertisementArticle,
  useAdvertisementArticleStore,
} from 'features/advertisements';

import Head from 'next/head';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const title = data?.advertisementArticle?.data.attributes.title; // eslint-disable-line
  const description = `${title}のページです。皆様に有益な情報を掲載しています。`;
  const cmsurl = `https://management.nottheuniversity.com`;
  const imageurl =
    data?.advertisementArticle?.data.attributes.image.data.attributes.url;
  const openGraph = {
    type: 'website',
    title: title,
    description: description,
    images: [
      {
        url: `${cmsurl}${imageurl}`,
        width: 1200,
        height: 630,
      },
    ],
  };
  const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);
  const setAdvertisementArticle = useAdvertisementArticleStore(
    selectSetAdvertisementArticle
  );
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (router.isFallback) {
    return <></>;
  }
  if (!data) {
    return <></>;
  }

  data?.advertisementArticle?.data &&
    setAdvertisementArticle(
      data.advertisementArticle.data as AdvertisementArticleEntity
    );

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
  const apolloClient = initializeApollo();
  try {
    const { data } =
      await apolloClient.query<GetadvertisementArticlePathsQuery>({
        query: GetadvertisementArticlePathsDocument,
      });

    const paths = data?.advertisementArticles?.data
      ? data.advertisementArticles.data.map((item) => ({
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
    console.log('get pages/advertisement/[id] paths');
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query<GetAdvertisementArticleIdQuery>({
      query: GetAdvertisementArticleIdDocument,
      variables: { id },
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
    console.log('get pages/advertisements/[id] static props');
  }
};
