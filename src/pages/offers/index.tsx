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
// type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
// export const Index: NextPage<Props> = ({ data }) => {
//   const title = ``; // eslint-disable-line
//   const description = ``;
//   const seo = parseSeo(title, description);
//   const [isClient, setIsClient] = useState(false);
//   const router = useRouter();
//   const setOffers = useOffersStore(selectSetOffers);

// useEffect(() => {
//   setIsClient(true);
// }, []);

// useEffect(() => {
//   const handler = async (page: number) => {
//     const apolloClient = initializeApollo();
//     try {
//       const { data } = await apolloClient.query<GetOffersQuery>({
//         query: GetOffersDocument,
//         variables: { page: page },
//       });

//       setOffers((data?.offers?.data as OfferEntity[]) ?? []);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   if (!router?.query?.page) {
//     setOffers((data?.offers?.data as OfferEntity[]) ?? []);
//   }

//   const page = Number(router.query.page as string);

//   if (page === 1) {
//     setOffers((data?.offers?.data as OfferEntity[]) ?? []);
//   } else {
//     handler(page);
//   }
// }, [router?.query?.page]);

// if (router.isFallback) {
//   return <></>;
// }
// if (!data) {
//   return <></>;
// }

//   const message = () => {
//     if (isClient) {
//       return (
//         <>
//           <SeoComponent canonical={CANONICAL_URL} {...seo} />
//           <Template />
//         </>
//       );
//     } else {
//       return <></>;
//     }
//   };

//   return <>{message()}</>;
// };

// export const getStaticProps: GetStaticProps<{
//   data: GetOffersQuery;
// }> = async () => {
//   const apolloClient = initializeApollo();
//   try {
//     const { data } = await apolloClient.query<GetOffersQuery>({
//       query: GetOffersDocument,
//       variables: { page: 1 },
//     });

//     return {
//       props: { data },
//       notFound: !data,
//       revalidate: UPDATE_INTERVAL,
//     };
//   } catch (error) {
//     console.error(error);

//     return {
//       props: { data: undefined },
//       notFound: true,
//       revalidate: UPDATE_INTERVAL,
//     };
//   } finally {
//     console.log('get pages/index static props');
//   }
// };

// export default Index;

export const Index: NextPage = () => {
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

export default Index;
