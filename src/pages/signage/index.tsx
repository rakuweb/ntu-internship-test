// import layer
import { useState, useEffect } from 'react';
import {
  NextPage,
  InferGetStaticPropsType,
  GetServerSideProps,
} from 'next/types';

import { Signage as Template } from 'templates/Signage';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from '~/constants';
import { parseSeo } from '~/lib';
import {
  GetSinageQuery,
  GetSinageDocument,
  UploadFileEntity,
} from 'types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';
import { useSignageStore } from 'features/signage/hooks';
import { selectSetVideos } from 'features/signage/selectors';

// type layer
type Props = { list: UploadFileEntity[] };

// component layer
export const Index: NextPage = (props: Props) => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);
  const setVideos = useSignageStore(selectSetVideos);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!props?.list) {
    return <></>;
  }

  setVideos(props.list);

  const message = () => {
    if (isClient) {
      return (
        <>
          <Template />
        </>
      );
    } else {
      return <></>;
    }
  };

  return <>{message()}</>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  try {
    const { data } = await apolloClient.query<GetSinageQuery>({
      query: GetSinageDocument,
    });
    const list = data?.signage?.data?.attributes?.videos
      ?.data as UploadFileEntity[];

    const props: Props = {
      list: list,
    };

    return {
      props: props,
    };
  } catch (err: any) {
    console.error(err);
  }
};

export default Index;
