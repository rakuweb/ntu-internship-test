import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';
import { useRouter } from 'next/router';

import { Index as Template } from '~/components/templates/Register/RegisterGradeComplete';
import { SeoComponent } from 'organisms/SeoComponent';
import { CAFE_ENTRY_QUERY, CANONICAL_URL } from '~/constants';
import { parseSeo } from '~/lib';
import { useLiff } from 'contexts/LineAuthContext';
import { routes } from 'constants/routes';
import {
  useStudentStore,
  selectStudentId,
  selectSetStudent,
  selectStudent,
} from 'features/student';

// type layer

// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);
  const { liff } = useLiff();
  const router = useRouter();
  const student = useStudentStore(selectStudent);
  const [query, setQuery] = useState<string>(null);

  useEffect(() => {
    if (!router?.query) return;

    router.query?.cafeonly && setQuery(router.query.cafeonly as string);
    setIsClient(true);
  }, [router, router?.query?.cafeonly]);

  useEffect(() => {
    if (!isClient) return;

    const timeoutId = setTimeout(function() {
      if (query === CAFE_ENTRY_QUERY) {
        router.push(`${routes.signinCafeonly}?cafeonly=${CAFE_ENTRY_QUERY}`);
      } else {
        router.push(routes.signinCafeonly);
      }
    }, 1000 * 1);

    return () => clearTimeout(timeoutId);
  }, [isClient]);

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
