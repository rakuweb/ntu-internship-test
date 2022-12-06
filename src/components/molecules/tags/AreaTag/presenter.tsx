// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';

import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = { children: string };

// presenter
export const Presenter: VFC<PresenterProps> = ({ children, ...props }) => {
  return (
    <div css={styles}>
      <div className="x16-5 border-1px-mountain-mist yugothic-bold-granite-gray-16px">
        {children}
      </div>
    </div>
  );
};

// styles
const styles = css`
  width: fit-content;
  .x16-5 {
    align-items: center;
    background-color: var(--white);
    border-radius: 4px;
    display: flex;
    padding: 0.5rem 0.75rem;
    white-space: nowrap;
    text-align: center;
    font-size: --var(--font-size-xs);
  }
  .x16-5:hover {
    background-color: var(--curious-blue);
    color: var(--white);
  }

  ${mq[2]} {
    .x16-5 {
      align-items: center;
      background-color: var(--white);
      border-radius: 4px;
      display: flex;
      height: 30px;
      padding: 0 17px;
      letter-spacing: 0.96px;
      white-space: nowrap;
      text-align: center;
    }
  }
`;
