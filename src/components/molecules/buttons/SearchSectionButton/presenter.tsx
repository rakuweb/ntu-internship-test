// import layer
import { VFC, ReactNode } from 'react';
import { css } from '@emotion/react';
import { Box } from '@chakra-ui/react';

import { Image } from 'atoms/Image';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <div css={styles}>
      <div className="view">
        <div className="text-1 yugothic-medium-midnight-blue-16px">
          一覧から探す
        </div>
        <Box className="x19">
          <Image width={10} height={16} src="/dev/img/file----19-----@1x.png" />
        </Box>
      </div>
    </div>
  );
};

// styles
const styles = css`
  width: fit-content;

  .view {
    display: flex;
    height: 16px;
    justify-content: flex-end;
    width: 105px;
    align-items: center;
  }
  //          align-items: flex-end;

  .text-1 {
    letter-spacing: 0;
    min-height: 18px;
    white-space: nowrap;
    margin-right: 0.3rem;
  }
  .view:hover {
    .text-1 {
      color: var(--curious-blue);
    }
  }

  .x19 {
    height: 7.62px;
    object-fit: cover;
    width: 4.62px;
  }
`;
