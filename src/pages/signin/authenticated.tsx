// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';

import { CANONICAL_URL } from 'constants/env';
import { useLiff } from 'contexts/LineAuthContext';
import { SeoComponent } from 'organisms/SeoComponent';
import { Index as Template } from '~/components/templates/Register/Authenticated';

// component layer
export const Index: NextPage = () => {
  const title = ``;
  const description = ``;
  const [isClient, setIsClient] = useState(false);
  const { liff } = useLiff();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      liff.login(); //{ redirectUri: redirectUri });
    }
  }, [liff]);

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
        <SeoComponent
          canonical={CANONICAL_URL}
          title={title}
          description={description}
        />
      );
    }
  };

  return <>{message()}</>;
};

export default Index;
