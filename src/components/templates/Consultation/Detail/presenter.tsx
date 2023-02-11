// import layer
import { VFC } from 'react';

import { ConsultationDetail } from 'organisms/ConsultationDetail';
import { BreadcrumbGray } from 'organisms/BreadcrumbGray';
import { ContactSection } from 'organisms/sections/ContactSection';
import { Footer } from 'organisms/footers/Footer';
import { Header } from 'components/headers/Header';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
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
