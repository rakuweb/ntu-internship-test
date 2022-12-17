// import layer
import { useState, useEffect } from 'react';
import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';
import { ParsedUrlQuery } from 'node:querystring';

import { Top as Template } from 'templates/OfferId';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { UPDATE_INTERVAL } from '~/constants';
import { parseSeo } from '~/lib';
import {
  GetOffersAllQuery,
  GetOffersAllDocument,
  GetOfferByIdQuery,
  GetOfferByIdDocument,
  GetCompaniesQuery,
  GetCompaniesDocument,
  OfferEntity,
  CompanyEntity,
} from 'types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';
import { useTargetOfferStore } from 'features/offers/hooks';
import { selectSetTarget } from 'features/offers/selectors';
import { useRecruitManagerStore } from '~/features/company/hooks';
import { selectSetRecruitManager } from '~/features/company/selectors';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage<Props> = ({ data, company }) => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);
  const setTarget = useTargetOfferStore(selectSetTarget);
  const setRecruitManager = useRecruitManagerStore(selectSetRecruitManager);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!data?.offer?.data || !company) {
    return <></>;
  }

  setTarget(data?.offer?.data as OfferEntity);
  company.length > 0 && company[0]?.attributes && setRecruitManager(company[0]);

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
  company: CompanyEntity[];
}> = async ({ params }) => {
  const { id } = params;
  const apolloClient = initializeApollo();

  try {
    const { data } = await apolloClient.query<GetOfferByIdQuery>({
      query: GetOfferByIdDocument,
      variables: { id },
    });
    const { data: companies } = await apolloClient.query<GetCompaniesQuery>({
      query: GetCompaniesDocument,
    });
    const company = companies?.companies?.data?.filter(
      (company) =>
        company?.attributes?.createdBy?.id ===
        data?.offer?.data?.attributes?.createdBy?.id
    ) as CompanyEntity[];

    return {
      props: {
        data,
        company,
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

export default Index;
