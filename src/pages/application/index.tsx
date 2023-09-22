// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';

import { CompanyApplication as Template } from '~/components/templates/CompanyApplication';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL, ORIGIN_URL } from '~/constants';

// component layer
export const Application: NextPage = () => {
  const title = `申し込みフォーム | NOT THE UNIVERSITY FOR JOB`;
  const description = `NOT THE UNIVERSITY FOR JOBのお申し込みフォームのページです。`;

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

export default Application;
