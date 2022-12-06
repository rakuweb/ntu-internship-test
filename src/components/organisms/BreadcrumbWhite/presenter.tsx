// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <div css={styles}>
      <section className="breadcrumb">
        <p className="breadcrumb__container">
          <a className="breadcrumb__container__link" href="#">HOME</a>
          <a className="breadcrumb__container__link" href="#">新着情報</a>
        </p>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .breadcrumb {
    background-color: #FFF;
    display: flex; 
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

  .breadcrumb__container__link:hover {
    opacity: 0.8;
  }

  ${mq[2]} {
    .breadcrumb {
      padding: 32px 0 0;
    }

    .breadcrumb__container {
      width: 1200px;
    }
  }
`;
