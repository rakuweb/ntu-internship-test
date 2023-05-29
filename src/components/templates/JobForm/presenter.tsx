// import layer
import { FC } from 'react';

import { JobForm } from '~/components/JobForm';
import { Footer } from '~/components/footers/Footer';
import { Header } from 'components/headers/Header';

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
      <JobForm />
      <Footer />
    </>
  );
};
