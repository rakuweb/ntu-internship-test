// import layer
import { useState, useEffect } from 'react';
import { NextPage, InferGetStaticPropsType } from 'next/types';

// import { Index as Template } from 'templates/PrivacyPolicy';
import { Index as Template } from 'templates/Register/Failed';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL, ORIGIN_URL } from '~/constants';
import { parseSeo } from '~/lib';
import Head from 'next/head';

// type layer
// type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage = () => {
  const title = `プライバシーポリシー | NOT THE UNIVERSITY FOR JOB`; // eslint-disable-line
  const description = `NOT THE UNIVERSITY FOR JOBのプライバシーポリシーです。`;
  const seo = parseSeo(title, description);
  const openGraph = {
    type: 'website',
    title: title,
    description: description,
    images: [
      {
        url: `${ORIGIN_URL}/ogp.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
