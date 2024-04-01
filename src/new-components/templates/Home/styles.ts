import { css } from '@emotion/react';

import { mq } from '~/constants/styles';

// styles
export const styles = css`
  // page-title
  .page-title {
    background-color: #f0f3f5;
    display: flex;
    font-family: var(--font-family-yugothic-medium);
    justify-content: center;
    padding: 28px 0;
    width: 100vw;
  }

  .page-title__text {
    color: #1978bb;
    font-weight: 700;
    font-size: 24px;
    padding-bottom: 10px;
    border-bottom: 2px solid #1978bb;
  }

  .page-title__text--small {
    font-size: 24px;
  }

  //ContentsCount
  .contents-count {
    background-color: #f0f3f5;
    display: flex;
    font-family: var(--font-family-yugothic-medium);
    justify-content: center;
    padding: 16px 0 0;
    width: 100vw;
  }

  .contents-count__text {
    color: #003968;
    font-size: 12px;
    width: calc(100% - 32px);
  }

  .contents-count__text--bold {
    font-size: 16px;
    margin: 0 4px;
    font-weight: bold;
  }

  ${mq[2]} {
    .page-title__text {
      font-size: 32px;
    }

    .contents-count__text {
      color: #003968;
      font-size: 12px;
      width: 1200px;
    }
  }
`;
