// import layer
import { VFC } from 'react';

import { Header } from 'components/headers/Header';
import { BreadcrumbGray } from 'organisms/BreadcrumbGray';
import { ConsultationDetail } from 'organisms/ConsultationDetail';
import { Footer } from 'organisms/footers/Footer';
import { ContactSection } from 'organisms/sections/ContactSection';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  const pagetitle = `企業詳細`;

  return (
    <>
      <Header />
      <BreadcrumbGray title={pagetitle} />
      <ConsultationDetail />
      <ContactSection />
      <Footer />
    </>
  );
};
