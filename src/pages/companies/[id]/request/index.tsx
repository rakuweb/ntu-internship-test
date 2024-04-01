// import layer
import { NextPage, GetStaticPaths, GetStaticProps } from 'next/types';

import { SeoComponent } from 'organisms/SeoComponent';
import { Request as Template } from '~/components/templates/Request';
import { CANONICAL_URL, ORIGIN_URL } from '~/constants';

// component layer
export const Index: NextPage = () => {
  const title = `掲載依頼フォーム | NOT THE UNIVERSITY FOR JOB`;
  const description = `NOT THE UNIVERSITY FOR JOBの掲載依頼フォームのページです。`;
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
};

export default Index;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
