import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';

import { Graduation as Template } from '~/components/templates/Graduation';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from '~/constants';

// component layer
export const Index: NextPage = () => {
  console.log('account/card');
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
