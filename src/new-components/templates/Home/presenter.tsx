// import layer
import { FC } from 'react';
import dynamic from 'next/dynamic';

import { Header } from 'new-components/headers/Header';
import { Firstview } from 'new-components/home/Firstview';
import { OfferList } from 'new-components/home/OfferList';
// import { styles } from './styles';

const Footer = dynamic(
  import('new-components/footers/Footer').then((mod) => mod.Footer)
);

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <Header isTop />
      <main>
        {/* <BreadcrumbOffers title={pageTitle} /> */}
        <Firstview />
        {/* <Taglist /> */}
        <OfferList />
      </main>
      <Footer />
    </>
  );
};
