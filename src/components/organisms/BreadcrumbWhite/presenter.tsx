// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, string>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ title }) => {
  return (
    <div css={styles}>
      <section className="breadcrumb">
        <p className="breadcrumb__container">
          <a className="breadcrumb__container__link" href="#">
            HOME
          </a>
          <KeyboardArrowRightIcon className="breadcrumb__icon_container" />
          <a className="breadcrumb__container__link">{title}</a>
        </p>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .breadcrumb {
    background-color: #fff;
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
  }

  .breadcrumb__container__link:hover {
    opacity: 0.8;
  }

  ${mq[2]} {
    .breadcrumb {
      display: flex;
      padding: 32px 0 0;
    }

    .breadcrumb__container {
      width: 1200px;
    }

    .breadcrumb__icon_container {
      font-size: 20px;
      font-family: var(--font-family-yugothic-medium);
      color: #003968;
      padding: 0 0 3px 0;
      vertical-align: middle;
    }
  }
`;
