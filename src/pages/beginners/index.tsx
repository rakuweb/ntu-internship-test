// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';

import { SeoComponent } from 'organisms/SeoComponent';
import { Index as Template } from 'templates/beginners';
import { CANONICAL_URL, ORIGIN_URL } from '~/constants';

// component layer
export const Index: NextPage = () => {
  const title = `はじめての方へ | NOT THE UNIVERSITY FOR JOB`; // eslint-disable-line
  const description = `NOT THE UNIVERSITY FOR JOBのはじめての方へのページです。`;
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
