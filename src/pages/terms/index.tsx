// import layer
import { useState, useEffect } from 'react';
import { NextPage, InferGetStaticPropsType } from 'next/types';

import { Index as Template } from 'templates/Terms';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from '~/constants';
import { parseSeo } from '~/lib';
import Head from 'next/head';

// type layer
// type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
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
          <Head>
            <title>利用規約</title>
            <meta name="description">Not the Universityの利用規約です。</meta>
          </Head>
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
