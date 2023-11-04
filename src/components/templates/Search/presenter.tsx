// import layer
import { FC } from 'react';

import { Header } from 'components/headers/Header';
import { SearchLook } from '~/components/SeachLook';
import { Footer } from '~/components/footers/Footer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <Header />
      <SearchLook />
      <Footer />
    </>
  );
};
