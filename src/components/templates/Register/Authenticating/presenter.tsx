// import layer
import { FC, useState, useEffect } from 'react';
import { Box, Center } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { SigninHeader as Header } from 'components/headers/SigninHeader';
import { Footer } from 'components/footers/OldFooter';
import { mq } from '~/constants/styles';
import { RegisteredMessage } from '~/components/organisms/RegisteredMessage';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const title = `認証中です`;
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const next = `会員情報を照会していいます。しばらくお待ちください。`;
    setMessage(next);
  }, []);

  return (
    <>
      <Header />
      <Box
        as={`main`}
        h={{ base: `50vh`, lg: `calc(${60 - 193 / 19.2}vh)` }}
        css={styles}
        bg={`#f5f5f5`}
      >
        <Center h={`100%`} as={`section`}>
          <RegisteredMessage title={title} message={message} />
        </Center>
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
