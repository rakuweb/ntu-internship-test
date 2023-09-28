// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Footer } from 'components/footers/Footer';
import { Header } from 'components/headers/Header';
import { InternalLink } from 'components/links/InternalLink';
import { HP_URL } from 'constants/routes';
import { Button } from '~/components/buttons/Button';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const title = `求人記事の公開申請`;
  const mainMessage = `求人記事の公開申請を賜りました。ありがとうございました。
`;
  const message = `担当者が確認の上、公開手続きをいたします。
もうしばらくお待ちください。`;

  return (
    <>
      <Header />
      <Box as={`main`} css={styles} my={{ lg: `5rem` }}>
        <section className="form">
          <div className="form__container">
            <h1 className="h1">{title}</h1>
            <Box
              whiteSpace={`break-spaces`}
              fontWeight={`bold`}
              fontSize={{ lg: `1.1rem` }}
              mt={{ base: `2rem` }}
              as={`p`}
              mx={`auto`}
            >
              {mainMessage}
            </Box>
            <Box className="form__container__item">
              <Box
                className="form__container__item__left"
                whiteSpace={`break-spaces`}
                as={`p`}
                mx={`auto`}
                textAlign={`center`}
                fontSize={{ lg: `1rem` }}
              >
                {message}
              </Box>
            </Box>
            <Box className="form__container__button">
              <InternalLink href={HP_URL}>
                <Button>HPに戻る</Button>
              </InternalLink>
            </Box>
          </div>
        </section>
      </Box>
      <Footer />
    </>
  );
};

// styles
const styles = css`
  .h1 {
    width: 100%;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin: 16px 0 0 0;
  }

  .form {
    display: flex;
    justify-content: center;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    margin: 0 0 24px 0;
    font-family: var(--font-family-yugothic-medium);
  }

  .form__container {
    width: calc(100% - 32px);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    line-height: 1.7;
    color: #003968;
  }

  .form__container__title {
    font-size: 20px;
    margin: 40px 0 0 0;
  }

  .form__container__description {
    font-size: 16px;
    margin: 8px 0 0 0;
  }

  .form__container__item {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }

  .form__container__item__left {
    width: 100%;
    margin: 16px 0 0px 0;
  }

  .form__container__item__right {
    width: 100%;
  }

  .form__container__button {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 50px 0 0 0;
  }

  .form__container__button__cancel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    margin: 0 8px;
    color: #666666;
    border: 1px solid #666666;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 240px;
  }

  .form__container__button__submit {
    background-color: #2194e5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    margin: 0 8px;
    color: #fff;
    border: 1px solid #2194e5;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 240px;
  }

  .form__container__button__submit.inactive {
    opacity: 0.4;
    cursor: auto;
  }

  ${mq[2]} {
    .form__container {
      width: 1024px;
    }

    .form__container__item {
      flex-direction: row;
      justify-content: space-between;
      margin: 20px 0;
    }

    .form__container__item__left {
      margin: auto;
    }
  }
`;
