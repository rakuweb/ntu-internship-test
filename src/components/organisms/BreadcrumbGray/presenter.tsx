// import layer
import { FC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// type layer
export type PresenterProps = {title?: string};

// presenter
export const Presenter: FC<PresenterProps> = ({ title }) => {
  return (
    <div css={styles}>
      <section className="breadcrumb">
        <p className="breadcrumb__container">
          <a className="breadcrumb__container__link" href="#">
            HOME
            <KeyboardArrowRightIcon className="breadcrumb__icon_container" />
          </a>
          <a className="breadcrumb__container__link">{title}</a>
        </p>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .breadcrumb {
    background-color: #f0f3f5;
    display: none;
    width: 100vw;
    justify-content: center;
    padding: 24px 0 24px;
  }

  .breadcrumb__container {
    font-size: 12px;
    font-family: var(--font-family-yugothic-medium);
    color: #003968;
    width: calc(100% - 32px);
    line-height: 1.7;
  }

  .breadcrumb__icon_container {
    font-size: 20px;
    font-family: var(--font-family-yugothic-medium);
    color: #003968;
    padding: 0 0 3px 0;
    vertical-align: middle;
  }

  .breadcrumb__container__link:hover {
    opacity: 0.8;
  }

  ${mq[2]} {
    .breadcrumb {
      padding: 32px 0 0;
      display: flex;
    }

    .breadcrumb__container {
      width: 950px;
    }
    ${mq[3]} {
      .breadcrumb__container {
        width: 1180px;
      }
    }
  }
`;
