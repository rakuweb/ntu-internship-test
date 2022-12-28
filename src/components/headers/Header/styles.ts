// import layer
import { css } from '@emotion/react';

import { mq } from '~/constants/styles';

// styles
export const styles = css`
  .logo {
    vertical-align: middle;
    margin-left: 1rem;
  }

  .g-navi {
    align-items: flex-start;
    display: flex;
    height: 18px;
  }

  .text-6 {
    letter-spacing: 0;
    min-width: 74px;
    white-space: nowrap;
    display: none;
  }

  .text-5 {
    letter-spacing: 0;
    margin-left: 43px;
    min-width: 146px;
    white-space: nowrap;
    display: none;
  }

  .text-4 {
    letter-spacing: 0;
    margin-left: 46px;
    white-space: nowrap;
    display: none;
  }

  .btn {
    align-items: flex-start;
    justify-content: space-between;
    display: flex;
  }

  .view {
    align-items: flex-start;
    background-color: var(--mandy);
    display: none;
    height: 80px;
    min-width: 80px;
    padding: 7.6px 10px;
  }

  .overlap-group {
    height: 37px;
    position: relative;
    width: 58px;
  }

  .text {
    left: 0;
    letter-spacing: 0;
    line-height: 106.9px;
    position: absolute;
    top: 0;
    white-space: nowrap;
  }

  .image {
    height: 31px;
    left: 15px;
    object-fit: cover;
    position: absolute;
    top: 6px;
    width: 30px;
  }

  .view-1 {
    align-items: flex-start;
    background-color: var(--curious-blue);
    display: none;
    height: 80px;
    justify-content: flex-end;
    min-width: 80px;
    padding: 7.6px 11px;
  }

  .overlap-group1 {
    height: 42px;
    position: relative;
    width: 57px;
  }

  .x9-1 {
    height: 40px;
    left: 12px;
    object-fit: cover;
    position: absolute;
    top: 2px;
    width: 33px;
  }

  .view-2 {
    align-items: flex-end;
    background-color: var(--midnight-blue);
    display: flex;
    flex-direction: column;
    min-height: 80px;
    padding: 7.6px 10px;
    width: 80px;
  }

  .overlap-group2 {
    height: 16px;
    position: relative;
    width: 57px;
  }

  .x9-2 {
    background-color: var(--white);
    height: 3px;
    left: 9px;
    position: absolute;
    top: 11px;
    width: 40px;
  }

  .x9 {
    background-color: var(--white);
    height: 3px;
    margin-right: 8px;
    margin-top: 5px;
    width: 40px;
  }

  .x9-3 {
    background-color: var(--white);
    height: 3px;
    margin-right: 8px;
    margin-top: 7px;
    width: 40px;
  }

  .Hmenu {
    display: block;
  }
  ${mq[2]} {
    .logo {
      height: 70px;
      vertical-align: middle;
    }

    .g-navi {
      align-items: flex-start;
      display: flex;
      height: 18px;
    }

    .text-6 {
      letter-spacing: 0;
      min-width: 74px;
      white-space: nowrap;
    }

    .text-5 {
      letter-spacing: 0;
      margin-left: 43px;
      min-width: 146px;
      white-space: nowrap;
    }

    .text-4 {
      letter-spacing: 0;
      margin-left: 46px;
      white-space: nowrap;
    }

    .btn {
      align-items: flex-start;
      display: flex;
    }

    .view {
      align-items: center;
      background-color: var(--mandy);
      display: flex;
      padding: 7.6px 10px;
      justify-content: center;
    }
    .view:hover {
      background-color: var(--white);
    }

    .overlap-group {
      height: 37px;
      position: relative;
      width: 58px;
    }

    .text {
      left: 0;
      letter-spacing: 0;
      line-height: 106.9px;
      position: absolute;
      top: 0;
      white-space: nowrap;
    }

    .image {
      height: 31px;
      left: 15px;
      object-fit: cover;
      position: absolute;
      top: 6px;
      width: 30px;
    }

    .view-1 {
      align-items: center;
      background-color: var(--curious-blue);
      display: flex;
      height: 80px;
      justify-content: center;
      min-width: 80px;
      padding: 7.6px 11px;
    }
    .view-1:hover {
      background-color: var(--white);
    }

    .overlap-group1 {
      height: 42px;
      position: relative;
      width: 57px;
    }

    .x9-1 {
      height: 40px;
      left: 12px;
      object-fit: cover;
      position: absolute;
      top: 2px;
      width: 33px;
    }

    .view-2 {
      align-items: flex-end;
      background-color: var(--midnight-blue);
      display: flex;
      flex-direction: column;
      min-height: 80px;
      padding: 7.6px 10px;
      width: 80px;
    }

    .overlap-group2 {
      height: 16px;
      position: relative;
      width: 57px;
    }

    .x9-2 {
      background-color: var(--white);
      height: 3px;
      left: 9px;
      position: absolute;
      top: 11px;
      width: 40px;
    }

    .x9 {
      background-color: var(--white);
      height: 3px;
      margin-right: 8px;
      margin-top: 5px;
      width: 40px;
    }

    .x9-3 {
      background-color: var(--white);
      height: 3px;
      margin-right: 8px;
      margin-top: 7px;
      width: 40px;
    }
    .Hmenu {
      display: none;
    }
  }
`;
