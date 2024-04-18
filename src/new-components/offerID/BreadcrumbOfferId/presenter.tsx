// import layer
import { css as ECss } from '@emotion/react';

import { InternalLink } from 'new-components/links/InternalLink';
import { css } from 'styled-system/css';
import { routes } from '~/constants';
// type layer
export type PresenterProps = { titles?: string[] };

// presenter
export function Presenter({ titles }: PresenterProps) {
  return (
    <div
      className={css({
        display: { base: `none`, md: `block` },
      })}
      css={styles}
    >
      <section className="breadcrumb">
        <div className="breadcrumb__container">
          <InternalLink
            className="breadcrumb__container__link"
            href={routes.home}
            display={`inline`}
          >
            HOME
          </InternalLink>
          <div
            className={css({
              mx: `${10 / 19.2}vw`,
            })}
          >{`>`}</div>
          <div>{titles}</div>
        </div>
      </section>
    </div>
  );
}

// styles
const styles = ECss`
  .breadcrumb {
    background-color: #f5f5f5;
    width: 100%;
    justify-content: center;
    padding: ${30 / 19.2}vw 0 ${24 / 19.2}vw ${48 / 19.2}vw;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .breadcrumb__container {
    display: flex;
    font-size: ${18 / 19.2}vw;
    color: #000000;
  }

  .breadcrumb__container__link{
    color:#41A4FD;
    font-weight:bold
  }

  .breadcrumb__container__link:hover {
    opacity: 0.8;
  }
  }
`;
