// import layer
import { FC } from 'react';
import { css } from '@emotion/react';

// type layer
export type PresenterProps = { children: string };

// presenter
export const Presenter: FC<PresenterProps> = ({ children }) => {
  return (
    <div css={styles}>
      <div className="text-1 yugothic-bold-midnight-blue-16px">{children}</div>
    </div>
  );
};

// styles
const styles = css`
  width: fit-content;
  .text-1 {
    letter-spacing: 0;
    min-height: 18px;
    white-space: nowrap;
  }
`;
