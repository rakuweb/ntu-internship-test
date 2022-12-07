// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';

import { Index as Template } from '~/components/templates/Register/Registered';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { ORIGIN_URL } from 'constants/env';
import { parseSeo } from '~/lib';
import { useLiff } from 'contexts/LineAuthContext';
import { routes } from 'constants/routes';

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
