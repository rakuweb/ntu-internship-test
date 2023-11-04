import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

import { routes } from 'constants/routes';
import { SeoComponent } from 'organisms/SeoComponent';
import { Index as Template } from '~/components/templates/Register/RegisterGradeComplete';
import { CAFE_ENTRY_QUERY, CANONICAL_URL } from '~/constants';
import { parseSeo } from '~/lib';

// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [query, setQuery] = useState<string>(null);

  useEffect(() => {
    if (!router?.query) return;

    router.query?.cafeonly && setQuery(router.query.cafeonly as string);
    setIsClient(true);
  }, [router, router?.query?.cafeonly]);

  useEffect(() => {
    if (!isClient) return;

    const timeoutId = setTimeout(function () {
      if (query === CAFE_ENTRY_QUERY) {
        router.push(`${routes.signinCafeonly}?cafeonly=${CAFE_ENTRY_QUERY}`);
      } else {
        router.push(routes.signinCafeonly);
      }
    }, 1000 * 1);

    return () => clearTimeout(timeoutId);
  }, [isClient]); // eslint-disable-line

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
