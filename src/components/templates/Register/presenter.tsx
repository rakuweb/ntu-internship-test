// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer';
import { mq } from '~/constants/styles';
import { RegisterForm } from '~/components/organisms/RegisterForm';
import { StepBar } from '~/components/organisms/StepBar';
import { useFormProgressStore } from 'features/formProgress/hooks';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ isHidden }) => {
  const progress = useFormProgressStore((state) => state.progress);

  return (
    <Box display={isHidden ? 'none' : `initial`}>
      <Header />
      <Box as={`main`} css={styles}>
        <section className="clinics-tab"></section>
        <StepBar current={progress} />
        <RegisterForm />
      </Box>
      <Footer />
    </Box>
  );
};

// styles
const styles = css`
  .clinics-tab {
    display: flex;
    font-family: var(--font-family-yugothic-medium);
    justify-content: center;
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
