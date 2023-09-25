// import layer
import { FC } from 'react';

import { Header } from 'components/headers/Header';
import { Footer } from '~/components/footers/Footer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Point } from '../../organisms/Point';

// type layer
export type PresenterProps = {
  deadline: boolean;
};

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <Header />
      <Point deadline={false} />
      <Footer />
    </>
  );
};
