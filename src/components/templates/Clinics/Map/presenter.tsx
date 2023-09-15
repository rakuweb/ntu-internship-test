// import layer
import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'organisms/footers/Footer';
import { ContactSection } from '~/components/organisms/sections/ContactSection';
import { mq } from '~/constants/styles';
import { ClinicsTitle } from 'organisms/ClinicsTitle';
import { ClinicsInformation } from 'organisms/ClinicsInformation';
import { ClinicsSchedule } from 'organisms/ClinicsSchedule';
import { ClinicsContact } from 'organisms/ClinicsContact';
import { ClinicsMap } from 'organisms/ClinicsMap';
import { BreadcrumbWhite } from 'organisms/BreadcrumbWhite';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <>
      <Header />
      <Box as={`main`} css={styles}>
        <BreadcrumbWhite />
        <ClinicsTitle />
        <section className="clinics-tab">
          <div className="clinics-tab__container">
            <a href="./top" className="clinics-tab__container__item">
              医院TOP
            </a>
            <a href="./staff" className="clinics-tab__container__item">
              スタッフ
            </a>
            <a href="./vr" className="clinics-tab__container__item">
              VR院内検索
            </a>
            <a href="./map" className="clinics-tab__container__item active">
              マップ
            </a>
            <a href="./faq" className="clinics-tab__container__item">
              相談箱
            </a>
            <a href="./comments" className="clinics-tab__container__item">
              口コミ
            </a>
          </div>
        </section>
        <ClinicsMap />
        <ClinicsInformation />
        <ClinicsSchedule />
        <ClinicsContact />
        <ContactSection />
      </Box>
      <Footer />
    </>
  );
};

// styles
const styles = css`
  .clinics-tab {
    display: flex;
    font-family: var(--font-family-yugothic-medium);
    justify-content: center;
    margin: 36px 0 0;
    width: 100vw;
  }

  .clinics-tab__container {
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 32px);
  }

  .clinics-tab__container__item {
    align-items: center;
    color: #2194e5;
    cursor: pointer;
    border: 1px solid #2194e5;
    border-radius: 8px;
    display: flex;
    height: 48px;
    justify-content: center;
    margin: 4px 0;
    width: 49%;
  }

  .clinics-tab__container__item.active {
    border: 3px solid #2194e5;
    height: 48px;
  }

  .clinics-tab__container__item:hover {
    opacity: 0.8;
  }

  ${mq[2]} {
    .clinics-tab__container {
      border-bottom: 2px solid #2194e5;
      flex-wrap: nowrap;
      justify-content: center;
      width: 1200px;
    }

    .clinics-tab__container__item {
      align-items: flex-start;
      border-radius: 8px 8px 0 0;
      height: 38px;
      padding: 12px;
      margin: 0 6px;
      width: calc(1024px / 6 - 12px);
    }

    .clinics-tab__container__item.active {
      border: 2px solid #2194e5;
      border-bottom: none;
      height: 44px;
    }
  }
`;
