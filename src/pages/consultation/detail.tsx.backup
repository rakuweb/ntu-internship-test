// import layer
import { useState } from 'react';
import { NextPage, InferGetStaticPropsType } from 'next/types';

import { Top as Template } from 'templates/Consultation/Detail';
import { SeoComponent } from 'organisms/SeoComponent';
import { CANONICAL_URL } from 'constants/env';
import { parseSeo } from '~/lib';

// type layer
// type Props = InferGetStaticPropsType<typeof getStaticProps>;

// component layer
export const Index: NextPage = () => {
  const title = ``; // eslint-disable-line
  const description = ``;
  const seo = parseSeo(title, description);

  return (
    <>
      <SeoComponent canonical={CANONICAL_URL} {...seo} />
      <Template />
    </>
  );
};

export default Index;
