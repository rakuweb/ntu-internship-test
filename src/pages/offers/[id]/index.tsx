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
  GetOfferPathsQuery,
  GetOfferPathsDocument,
  UploadFile,
} from 'types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';
import { selectSetTarget, useTargetOfferStore } from 'features/offers';
import { selectSetCompanyItem, useCompanyStore } from '~/features/company';
import { parseImage } from '~/lib/utils';
import Head from 'next/head';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage<Props> = ({ data, company }) => {
  const title = data?.offer?.data?.attributes?.title ?? ``; // eslint-disable-line
  const description = data?.offer?.data?.attributes?.description ?? ``;
  const ogp = data?.offer?.data?.attributes?.image?.data?.attributes
    ? parseImage(
      data.offer.data.attributes.image?.data?.attributes as UploadFile
    )
    : undefined;
  const seo = parseSeo(title, description, undefined, ogp);
  const [isClient, setIsClient] = useState(false);
  const setTarget = useTargetOfferStore(selectSetTarget);
  const setComapanyItem = useCompanyStore(selectSetCompanyItem);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!data?.offer?.data || !company) {
    return <></>;
  }

  setTarget(data?.offer?.data as OfferEntity);
  company.length > 0 && company[0]?.attributes && setComapanyItem(company[0]);

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

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
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
