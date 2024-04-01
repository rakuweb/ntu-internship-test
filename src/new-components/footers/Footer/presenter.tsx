// import layer

import { routes } from 'constants/routes';
import { InternalLink } from 'new-components/links/InternalLink';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export function Presenter() {
  return (
    <footer
      className={css({
        w: `100%`,
        bg: `#39414E`,
      })}
    >
      <div
        className={css({
          w: { lg: `${1000 / 19.2}vw` },
          pt: { base: `${40 / 3.75}vw`, lg: `${70 / 19.2}vw` },
          pb: { base: `${40 / 3.75}vw`, lg: `${24 / 19.2}vw` },
          mx: `auto`,
        })}
      >
        <div>
          <div
            className={css({
              color: 'white',
            })}
          >
            <div
              className={flex({
                pb: { base: `${20 / 3.75}vw`, lg: `0` },
                direction: { base: 'column', lg: 'row' },
                justifyContent: `center`,
              })}
            >
              <div
                className={css({
                  m: { base: `0 auto`, lg: `0` },
                })}
              >
                <InternalLink href="https://rakuweb.jp/">
                  <div
                    className={css({
                      m: { base: `0 0 ${16 / 3.75}vw 0` },
                    })}
                  >
                    運営会社
                  </div>
                </InternalLink>
              </div>
              <div
                className={css({
                  m: { base: `0 auto`, lg: `0` },
                })}
              >
                <InternalLink href={routes.terms}>
                  <div
                    className={css({
                      m: {
                        base: `0 0 ${16 / 3.75}vw 0`,
                        lg: `0 0 0 ${14 / 19.2}vw`,
                      },
                    })}
                  >
                    利用規約
                  </div>
                </InternalLink>
              </div>
              <div
                className={css({
                  m: { base: `0 auto`, lg: `0` },
                })}
              >
                <InternalLink href={routes.privacyPolicy}>
                  <div
                    className={css({
                      m: { lg: `0 0 0 ${14 / 19.2}vw` },
                    })}
                  >
                    プライバシーポリシー
                  </div>
                </InternalLink>
              </div>
            </div>
          </div>
          <div
            className={flex({
              justifyContent: `center`,
              color: `white`,
              fontWeight: 500,
              letterSpacing: `0.6px`,
              whiteSpace: `nowrap`,
              fontSize: `12px`,
              m: `0 auto`,
            })}
          >
            Copyright © 2023 NOT THE UNIVERSITY
          </div>
        </div>
      </div>
    </footer>
  );
}
