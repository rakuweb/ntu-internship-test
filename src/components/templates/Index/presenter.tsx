// import layer
import { VFC } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';

import { Header } from 'organisms/headers/Header';
import { Footer } from 'organisms/footers/Footer';
import { ConsultationSection } from '~/components/organisms/sections/ConsultationSection';
import { NewArticleSection } from '~/components/organisms/sections/NewArticleSection';
// import { DentistInterviewSection } from '~/components/organisms/sections/DentistInterviewSection';
import { ContactSection } from '~/components/organisms/sections/ContactSection';
import { SearchSection } from '~/components/organisms/sections/SearchSection';
// import { TopFirstview } from '~/components/organisms/firstviews/TopFirstview';
import { CampanylogoSection } from '~/components/organisms/sections/CampanylogoSection';

const TopFirstview = dynamic(
  () =>
    import('~/components/organisms/firstviews/TopFirstview').then(
      (module) => module.TopFirstview
    ),
  {
    ssr: false,
    // eslint-disable-next-line
    loading: () => (
      <Box
        h={{ base: `100vh`, lg: `480px`, xl: `560px` }}
        bg={`var(--porcelain)`}
      />
    ),
  }
);

const DentistInterviewSection = dynamic(
  () =>
    import('~/components/organisms/sections/DentistInterviewSection').then(
      (module) => module.DentistInterviewSection
    ),
  {
    ssr: false,
    // eslint-disable-next-line
    loading: () => (
      <Box
        h={{ base: `100vh`, lg: `480px`, xl: `560px` }}
        bg={`var(--porcelain)`}
      />
    ),
  }
);

const CardtestSection = dynamic(
  () =>
    import('~/components/organisms/sections/CardtestSection').then(
      (module) => module.CardtestSection
    ),
  {
    ssr: false,
    // eslint-disable-next-line
    loading: () => (
      <Box
        h={{ base: `100vh`, lg: `480px`, xl: `560px` }}
        bg={`var(--porcelain)`}
      />
    ),
  }
);

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <>
      <Header />
      <Box as={`main`}>
        <TopFirstview />
        <SearchSection />
        <ConsultationSection />
        <NewArticleSection />
        <DentistInterviewSection />
        <CardtestSection />
        <CampanylogoSection />
        <ContactSection />
      </Box>
      <Footer />
    </>
  );
};
