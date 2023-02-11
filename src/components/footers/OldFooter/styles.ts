import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

// styles
export const styles = css`
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
    height: 100px;
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
      /* height: 36px; */
      object-fit: cover;
      position: absolute;
      width: 233px;
    }
  }
`;
