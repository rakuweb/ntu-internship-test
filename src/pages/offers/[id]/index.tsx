// import layer
import { useState, useEffect } from 'react';
import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next/types';
import { Image as NImage } from 'components/images/Image';
import { Top as Template } from 'templates/OfferId';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL, ORIGIN_URL } from 'constants/env';
import { UPDATE_INTERVAL } from '~/constants';
import { parseSeo } from '~/lib';
import {
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
  const imageurl = data?.offer?.data?.attributes?.image?.data?.attributes.url;
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
