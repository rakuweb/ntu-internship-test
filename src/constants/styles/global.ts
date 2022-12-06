// import layer
import { css } from '@emotion/react';

// constant layer
export const global = css`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css');

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,400italic');
  @font-face {
    font-family: 'YuGothic-Bold';
    font-style: normal;
    font-weight: 700;
    src: url('public/dev/fonts/YuGothic-Bold.otf') format('opentype');
  }
  @font-face {
    font-family: 'YuGothic-Medium';
    font-style: normal;
    font-weight: 500;
    src: url('public/dev/fonts/YuGothic-Medium.otf') format('opentype');
  }

  .screen a {
    display: contents;
    text-decoration: none;
  }

  .container-center-horizontal {
    display: flex;
    flex-direction: row;
    justify-content: center;
    pointer-events: none;
    width: 100%;
  }

  .container-center-horizontal > * {
    flex-shrink: 0;
    pointer-events: auto;
  }

  * {
    box-sizing: border-box;
  }
`;
