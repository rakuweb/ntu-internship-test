// import layer
import { useState, useEffect } from 'react';
import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';
import { Image as NImage } from 'components/images/Image';
import { Top as Template } from '../../../components/templates/AboutCompany';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL, ORIGIN_URL } from 'constants/env';
import { UPDATE_INTERVAL } from '~/constants';
import { parseSeo } from '~/lib';
import {
  GetCompaniesQuery,
  GetCompaniesDocument,
  OfferEntity,
  CompanyEntity,
  UploadFile,
  GetOffersAllQuery,
  GetOffersAllDocument,
} from 'types/gql/graphql';
import { initializeApollo } from 'lib/apollo/client';
import { selectSetOffers, useOffersStore } from 'features/offers';
import { selectSetCompanyItem, useCompanyStore } from '~/features/company';
import { parseImage } from '~/lib/utils';

// type layer
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage<Props> = ({ data, company }) => {
  const [isClient, setIsClient] = useState(false);
  const setTarget = useCompanyStore(selectSetCompanyItem);
  const setComapanyItem = useCompanyStore(selectSetCompanyItem);
  const setOffers = useOffersStore(selectSetOffers);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!data?.offers?.data) {
    return <></>;
  }
  const title = company[0]?.attributes?.name ?? ``; // eslint-disable-line
  const description = company[0]?.attributes?.description ?? ``;
  const ogp = company[0]?.attributes?.cover_image?.data?.attributes
    ? parseImage(
        company[0]?.attributes.cover_image?.data?.attributes as UploadFile
      )
    : undefined;
  const seo = parseSeo(title, description, undefined, ogp);
  const imageurl = company[0]?.attributes?.cover_image?.data?.attributes.url;
  const cmsurl = `https://management.nottheuniversity.com`;
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
  setTarget(company[0] as CompanyEntity);
  company.length > 0 && company[0]?.attributes && setComapanyItem(company[0]);
  data?.offers?.data && setOffers(data.offers.data as OfferEntity[]);

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
    const { data } = await apolloClient.query<GetCompaniesQuery>({
      query: GetCompaniesDocument,
    });

    const paths = data?.companies?.data
      ? data.companies.data.map((item) => ({
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
    console.log('get pages/companies/[id] paths');
  }
};

export const getStaticProps: GetStaticProps<{
  data: GetOffersAllQuery;
  company: CompanyEntity[];
}> = async ({ params }) => {
  const { id } = params;
  const apolloClient = initializeApollo();

  try {
    const { data } = await apolloClient.query<GetOffersAllQuery>({
      query: GetOffersAllDocument,
      variables: { id },
    });

    const { data: companies } = await apolloClient.query<GetCompaniesQuery>({
      query: GetCompaniesDocument,
    });
    const company = companies?.companies?.data?.filter(
      (company) => company?.id === id
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
