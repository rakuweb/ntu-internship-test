// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';

import { SeoComponent } from 'organisms/SeoComponent';
import { Contact as Template } from '~/components/templates/Contact';
import { CANONICAL_URL, ORIGIN_URL } from '~/constants';

// component layer
export const Index: NextPage = () => {
  const title = `お問合せフォーム | NOT THE UNIVERSITY FOR JOB`; // eslint-disable-line
  const description = `NOT THE UNIVERSITY FOR JOBのお問合せフォームです。`;
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
