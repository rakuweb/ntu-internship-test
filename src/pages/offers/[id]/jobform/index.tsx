// import layer
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';

import { selectSetTarget, useTargetOfferStore } from 'features/offers';
import { useClient } from 'hooks/client';
import { initializeApollo_offer } from 'lib/apollo/client';
import { SeoComponent } from 'organisms/SeoComponent';
import {
  GetOfferByIdQuery,
  GetOfferByIdDocument,
  OfferEntity,
  GetOfferPathsQuery,
  GetOfferPathsDocument,
} from 'types/offers-gql/graphql';
import { JobForm as Template } from '~/components/templates/JobForm';
import { CANONICAL_URL, ORIGIN_URL, routes } from '~/constants';

import { UPDATE_INTERVAL } from '~/constants';
import { useLiff } from '~/contexts/LineAuthContextInternship';
import {
  selectAccount,
  useAccountStore,
  selectSetPrevPath,
} from '~/features/account';

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
        url: `${ORIGIN_URL}/newogp.png`,
        width: 1200,
        height: 630,
      },
    ],
  };

  const { liff } = useLiff();
  const { isClient } = useClient();
  const setTarget = useTargetOfferStore(selectSetTarget);
  const { username } = useAccountStore(selectAccount);
  const router = useRouter();
  const setPrevPath = useAccountStore(selectSetPrevPath);

  useEffect(() => {
    const prevPath = router?.asPath;
    window.localStorage.setItem('prevUrl', prevPath);
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      const prevPath = router?.asPath;
      prevPath && setPrevPath(decodeURI(prevPath));
      window.localStorage.setItem('prevUrl', prevPath);
      liff.login();
    }

    if (!username) {
      const prevPath = router?.asPath;
      prevPath && setPrevPath(decodeURI(prevPath));
      window.localStorage.setItem('prevUrl', prevPath);
      router.push(routes.signin);
    }
  }, [username, liff]); // eslint-disable-line react-hooks/exhaustive-deps

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
      fallback: 'blocking',
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
