// import layer
import { VFC, ReactNode } from 'react';
import { css } from '@emotion/react';

// type layer
export type PresenterProps = { children: string };

// presenter
export const Presenter: VFC<PresenterProps> = ({ children, ...props }) => {
  return (
    <div css={styles}>
      <div className="view border-1px-curious-blue">
        <div className="text-1 yugothic-medium-curious-blue-16px">
          {children}
        </div>
      </div>
    </div>
  );
};

// styles
const styles = css`
  width: fit-content;
  .view {
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    border-radius: 4px;
    display: flex;
    height: 28px;
    min-width: 89px;
    padding: 0 17px;
    width: fit-content;
  }
  .view:hover {
    background-color: var(--curious-blue);
  }

  .text-1 {
    letter-spacing: 0;
    min-height: 18px;
    white-space: nowrap;
  }
  .text-1:hover {
    color: var(--white);
  }
`;
