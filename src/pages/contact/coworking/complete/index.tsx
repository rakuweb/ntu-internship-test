import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';

import { SeoComponent } from 'organisms/SeoComponent';
import { CoworkingContactComplete } from '~/components/templates/CoworkingContactComplete';
import { CANONICAL_URL } from '~/constants';

// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
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
          />
          <CoworkingContactComplete />
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
