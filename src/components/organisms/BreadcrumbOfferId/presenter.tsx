// import layer
import { FC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { InternalLink } from '~/components/links/InternalLink';
// type layer
export type PresenterProps = { titles?: string[] };

// presenter
export const Presenter: FC<PresenterProps> = ({ titles }) => {
  return (
    <div css={styles}>
      <section className="breadcrumb">
        <p className="breadcrumb__container">
          <InternalLink
            className="breadcrumb__container__link"
            href="/"
            display={`inline`}
          >
            HOME
            <KeyboardArrowRightIcon className="breadcrumb__icon_container" />
          </InternalLink>
          {titles?.map((title, idx) => (
            <a key={title} className="breadcrumb__container__link">
              {title}
              {idx < titles.length - 1 && (
                <KeyboardArrowRightIcon className="breadcrumb__icon_container" />
              )}
            </a>
          ))}
        </p>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .breadcrumb {
    background-color: #f5f5f5;
    display: none;
    width: 100%;
    justify-content: center;
    padding: 24px 0 24px;
  }

  .breadcrumb__container {
    font-size: 12px;
    font-family: var(--font-family-yugothic-medium);
    color: #000000;
    width: calc(100%);
    line-height: 1.7;
  }

  .breadcrumb__icon_container {
    font-size: 20px;
    font-family: var(--font-family-yugothic-medium);
    color: #000000;
    padding: 0 0 3px 0;
    vertical-align: middle;
  }

  .breadcrumb__container__link:hover {
    opacity: 0.8;
  }

  ${mq[2]} {
    .breadcrumb {
      /* padding: 32px 0 0; */
      display: flex;
    }

    .breadcrumb__container {
      max-width: 1180px;
      width: 90%;
    }
    ${mq[3]} {
      .breadcrumb__container {
        width: 1180px;
      }
    }
  }
`;
