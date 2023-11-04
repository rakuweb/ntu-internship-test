import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

import { routes } from 'constants/routes';
import { useLiff } from 'contexts/LineAuthContext';
import { SeoComponent } from 'organisms/SeoComponent';
import { Index as Template } from '~/components/templates/MemberCardOnly';
import { CANONICAL_URL } from '~/constants';
// import { parseSeo } from '~/lib';

// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
  // const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);
  const { liff } = useLiff();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      router.push(routes.register);
    }
  }, [liff]); // eslint-disable-line

  const message = () => {
    if (isClient) {
      return (
        <>
          <SeoComponent
            canonical={CANONICAL_URL}
            title={title}
            description={description}
          />
          <Template />
        </>
      );
    } else {
      return (
        <>
          {' '}
          <SeoComponent
            canonical={CANONICAL_URL}
            title={title}
            description={description}
          />
        </>
      );
    }
  };

  return <>{message()}</>;
};

export default Index;
