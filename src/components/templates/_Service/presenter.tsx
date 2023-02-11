// import layer
import { VFC } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

// import { Header } from 'organisms/headers/Header';
import { Footer } from 'organisms/footers/Footer';
import { ConsultationSection } from '~/components/organisms/sections/ConsultationSection';
import { NewArticleSection } from '~/components/organisms/sections/NewArticleSection';
// import { DentistInterviewSection } from '~/components/organisms/sections/DentistInterviewSection';
import { ContactSection } from '~/components/organisms/sections/ContactSection';
import { SearchSection } from '~/components/organisms/sections/SearchSection';
// import { TopFirstview } from '~/components/organisms/firstviews/TopFirstview';
import { mq } from '~/constants/styles';

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

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <>
    {/*
      <Header />
    */}
      <Box as={`main`} css={styles}>
        <section className="page-title">
          <h1 className="page-title__text">
            病名<span className="page-title__text--small">や</span>症状
            <span className="page-title__text--small">から</span>知る
          </h1>
        </section>

        <section className="disease-card-list">
          <div className="disease-card-list__container">
            <div className="disease-card">
              <h3 className="disease-card__title">歯周病</h3>
              <p className="disease-card__description">
                歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
              </p>
            </div>

            <div className="disease-card">
              <h3 className="disease-card__title">歯周病</h3>
              <p className="disease-card__description">
                歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
              </p>
            </div>

            <div className="disease-card">
              <h3 className="disease-card__title">歯周病</h3>
              <p className="disease-card__description">
                歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
              </p>
            </div>

            <div className="disease-card">
              <h3 className="disease-card__title">歯周病</h3>
              <p className="disease-card__description">
                歯の周りにある歯周組織に起きる炎症性の病気の総称。プラーク中の細菌が原因となって起きる。歯肉炎と歯周炎の2種類に大別され、前者は...
              </p>
            </div>
          </div>
        </section>
        <SearchSection />
        <ConsultationSection />
        <NewArticleSection />
        <DentistInterviewSection />
        <ContactSection />
      </Box>
      <Footer />
    </>
  );
};

// styles
const styles = css`
  // page-title
  .page-title {
    background-color: #f0f3f5;
    display: flex;
    font-family: var(--font-family-yugothic-medium);
    justify-content: center;
    padding: 28px 0;
    width: 100vw;
  }

  .page-title__text {
    color: #1978bb;
    font-weight: 700;
    font-size: 24px;
    padding-bottom: 10px;
    border-bottom: 2px solid #1978bb;
  }

  .page-title__text--small {
    font-size: 24px;
  }

  // disease-card
  .disease-card-list {
    background-color: #f0f3f5;
    display: flex;
    justify-content: center;
    padding: 28px 0;
    width: 100vw;
    font-family: var(--font-family-yugothic-medium);
  }

  .disease-card-list__container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    width: 100vw;
  }

  .disease-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    color: #003968;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    padding: 24px;
    width: calc(100vw - 48px);
  }

  .disease-card__title {
    font-size: 20px;
  }

  .disease-card__description {
    font-size: 16px;
    line-height: 1.6;
    margin-top: 16px;
  }

  ${mq[2]} {
    .page-title__text {
      font-size: 32px;
    }

    .disease-card-list__container {
      flex-direction: row;
      justify-content: space-between;
      width: 1200px;
    }

    .disease-card {
      width: calc(53% - 48px);
    }
  }
`;
