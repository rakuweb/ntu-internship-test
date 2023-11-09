// import layer
import { useState, useEffect } from 'react';
import { NextPage } from 'next/types';

import { SeoComponent } from 'organisms/SeoComponent';
import { CoworkingContact as Template } from '~/components/templates/CoworkingContact';
import { CANONICAL_URL, ORIGIN_URL } from '~/constants';

// component layer
export const Index: NextPage = () => {
  const title = `COWORKINGに関するお問い合せ | NOT THE UNIVERSITY`; // eslint-disable-line
  const description = `「企業と学生のサードプレイス」を目指したサービスを提供しています。本コワーキング施設（COWORK）は、新潟大学内の施設の一部を法人様にご提供しております。また、特徴として空間の提供のみならず、学生や学内の先生と繋がれる3つのサービスも一緒にご提供することで、皆さまのビジネスを加速させます。`;
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

export default Index;
