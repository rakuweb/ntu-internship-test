// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';

import { SeoComponent } from 'organisms/SeoComponent';
import { AgentForm as Template } from '~/components/templates/AgentForm';
import { CANONICAL_URL, ORIGIN_URL } from '~/constants';

// component layer
export const Agent: NextPage = () => {
  const title = `記事作成代行フォーム | NOT THE UNIVERSITY FOR JOB`;
  const description = `NOT THE UNIVERSITY FOR JOBの記事作成代行フォームのページです。`;

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

export default Agent;
