import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';
import { useRouter } from 'next/router';

import { Index as Template } from '~/components/templates/Member';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from '~/constants';
import { parseSeo } from '~/lib';
import { routes } from 'constants/routes';
import { useStudentStore, selectStudent } from 'features/student';

// type layer

// component layer
export const Index: NextPage = () => {
  console.log('account/card');
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const student = useStudentStore(selectStudent);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!student?.id || !student?.gradeUpdatedAt) {
      router.push(routes.signinCafeonly);
    } else if (student.grade === '卒業生') {
      router.push(routes.accountGraduation);
    }
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
