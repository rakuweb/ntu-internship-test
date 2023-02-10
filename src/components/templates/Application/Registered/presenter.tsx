// import layer
import { FC, useState, useEffect } from 'react';
import { Box, Center } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Header } from 'components/headers/Header';
import { Footer3 } from 'components/footers/Footer3';
import { mq } from '~/constants/styles';
import { RegisteredMessage } from '~/components/organisms/RegisteredMessage';
import { useAccountStore } from 'features/account/hooks';
import { selectAccount } from 'features/account/selectors';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const title = `登録済みアカウント`;
  const [message, setMessage] = useState<string>('');
  const { username } = useAccountStore(selectAccount);

  useEffect(() => {
    const next = `${username}様のアカウントを表示しています。`;
    setMessage(next);
  }, [username]);

  return (
    <>
      <Header />
      <Box as={`main`} h={{ base: `50vh` }} css={styles}>
        <Center h={`100%`} as={`section`}>
          <RegisteredMessage title={title} message={message} />
        </Center>
      </Box>
      <Footer3 />
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
