// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { Box, Stack } from '@chakra-ui/react';

import { Image } from 'atoms/Image';
import { InternalLink } from 'molecules/links/InternalLink';
import { routes } from '~/constants';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <footer css={styles}>
      <div className="footer">
        <div className="overlap-group">
          <Box
            my={{ base: `3rem`, lg: `initial` }}
            className="navi yugothic-bold-midnight-blue-16px"
          >
            <Box position={{ lg: `relative` }} w={{ lg: `17rem` }}>
              <InternalLink href={routes.index}>
                <div className="logo">
                  <Image
                    alt=""
                    width={233}
                    height={36}
                    src="/dev/img/logo.png"
                  />
                </div>
              </InternalLink>
              <Stack
                direction={{ base: `row` }}
                mt={{ base: `1.5rem`, lg: `initial` }}
                justify={{ base: `center`, lg: `flex-start` }}
                align={{ base: `center` }}
                spacing={{ base: `1rem`, lg: `0rem` }}
              >
                <InternalLink href={`#`}>
                  <div className="x636">
                    <Image
                      width={33}
                      height={33}
                      src={`/dev/img/file-----636@1x.png`}
                      alt={``}
                    />
                  </div>
                </InternalLink>
                <InternalLink href={`#`}>
                  <div className="x635">
                    <Image
                      width={33}
                      height={33}
                      src={`/dev/img/file-----635@1x.png`}
                      alt={``}
                    />
                  </div>
                </InternalLink>
              </Stack>
              <Box mt={{ base: `1.5rem`, lg: `initial` }} className="copyright">
                © 2022 PREVENTIVEDENTISTRY.COM
              </Box>
            </Box>
            <div className="text-4">
              <InternalLink href={`#`}>
                <div className="text yugothic-medium-midnight-blue-16px">
                  歯医者を探す
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  新着情報
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-2 yugothic-medium-midnight-blue-16px">
                  病気症状について
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  ニュース
                </div>
              </InternalLink>
            </div>
            <div className="text-5">
              <InternalLink href={`#`}>
                <div className="text yugothic-medium-midnight-blue-16px">
                  歯の辞典
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-2 yugothic-medium-midnight-blue-16px">
                  歯の悩み相談
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  歯の悩み相談箱
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  オンライン相談
                </div>
              </InternalLink>
            </div>
            <div className="text-6">
              <InternalLink href={`#`}>
                <div className="text yugothic-medium-midnight-blue-16px">
                  歯医者さんインタビュー
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-2 yugothic-medium-midnight-blue-16px">
                  お問い合わせ
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  プライバシーポリシー
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  利用規約
                </div>
              </InternalLink>
            </div>
          </Box>
        </div>
      </div>
    </footer>
  );
};

// styles
const styles = css`
  .footer {
    align-items: center;
    display: flex;
  }

  .overlap-group {
    width: 100%;
  }

  .bg {
    background-color: var(--white);
    height: 400px;
    width: 100%;
  }

  .copyright {
    color: var(--midnight-blue);
    font-family: var(--font-family-yugothic-medium);
    font-size: var(--font-size-s);
    font-weight: 500;
    letter-spacing: 0.6px;
    white-space: nowrap;
  }

  .navi {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .text-4 {
    display: none;
  }

  .text {
    display: none;
    letter-spacing: 0;
    line-height: 36px;
    margin-bottom: -18px;
    margin-top: -10px;
    min-height: 18px;
    white-space: nowrap;
  }
  .text:hover {
    color: var(--curious-blue);
  }

  .text-1 {
    display: none;
    letter-spacing: 0;
    line-height: 36px;
    margin-bottom: -18px;
    margin-top: 15px;
    min-height: 18px;
    white-space: nowrap;
  }
  .text-1:hover {
    color: var(--curious-blue);
  }

  .text-5 {
    display: none;
  }

  .text-6 {
    display: none;
  }

  .x636 {
    height: 24px;
    width: 24px;
  }

  .x635 {
    width: 24px;
  }

  .logo {
    height: 36px;
    object-fit: cover;
    width: 233px;
    margin: 0 auto;
  }

  ${mq[2]} {
    .footer {
      align-items: center;
      display: flex;
      height: 481px;
    }

    .overlap-group {
      width: 100%;
    }

    .bg {
      background-color: var(--white);
      height: 400px;
      width: 100%;
    }

    .copyright {
      color: var(--midnight-blue);
      font-family: var(--font-family-yugothic-medium);
      font-size: var(--font-size-s);
      font-weight: 500;
      letter-spacing: 0.6px;
      position: absolute;
      top: 98px;
      white-space: nowrap;
    }

    .navi {
      align-items: flex-start;
      justify-content: center;
      flex-direction: row;
      display: flex;
      height: 117px;
    }

    .text-4 {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      margin-left: 99px;
      min-height: 114px;
    }

    .text {
      display: initial;
      letter-spacing: 0;
      line-height: 36px;
      margin-bottom: -18px;
      margin-top: -10px;
      min-height: 18px;
      white-space: nowrap;
    }
    .text:hover {
      color: var(--curious-blue);
    }

    .text-1 {
      display: initial;
      letter-spacing: 0;
      line-height: 36px;
      margin-bottom: -18px;
      margin-top: 15px;
      min-height: 18px;
      white-space: nowrap;
    }
    .text-1:hover {
      color: var(--curious-blue);
    }

    .text-2 {
      display: initial;
      letter-spacing: 0;
      line-height: 36px;
      margin-bottom: -18px;
      margin-top: 14px;
      min-height: 18px;
      white-space: nowrap;
    }
    .text-2:hover {
      color: var(--curious-blue);
    }

    .text-5 {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      margin-left: 99px;
      min-height: 117px;
    }

    .text-3 {
      display: initial;
      letter-spacing: 0;
      margin-bottom: -18px;
      margin-top: 15px;
      min-height: 18px;
      white-space: nowrap;
    }

    .text-6 {
      display: initial;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      margin-left: 131px;
      min-height: 117px;
    }

    .x636 {
      background-size: cover;
      height: 16px;
      position: absolute;
      top: 65px;
      width: 16px;
    }

    .x635 {
      height: 13px;
      left: 33px;
      position: absolute;
      top: 67px;
      width: 17px;
    }

    .logo {
      height: 36px;
      object-fit: cover;
      position: absolute;
      width: 233px;
    }
  }
`;
