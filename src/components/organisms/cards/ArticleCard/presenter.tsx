// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { Box } from '@chakra-ui/react';

import { Image } from 'atoms/Image';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <Box
      _hover={{ boxShadow: `2xl` }}
      transitionProperty={`box-shadow`}
      transitionDuration="0.3s"
      transitionTimingFunction="ease-in-out"
      css={styles}
    >
      <Box className="x001" w={{ lg: `fit-content`, xl: `594px` }}>
        <Box className="x3d-render-of-teeth-d">
          <Image
            src="/dev/img/concept-image-of-dental@1x.png"
            width={918}
            height={611}
          />
        </Box>
        <Box className="overlap-group">
          <div className="view yugothic-medium-midnight-blue-12px">
            <div className="date">{`2021.09.01`}</div>
            <div className="line"></div>
            <div className="text-2">病気症状について</div>
          </div>
          <div className="text-1 yugothic-bold-midnight-blue-16px">
            虫歯や歯周病を「治す」から「防ぐ」へ
          </div>
        </Box>
      </Box>
    </Box>
  );
};

// styles
const styles = css`
  .x3d-render-of-teeth-d {
    height: auto;
    width: 9rem;
  }

  .view {
    align-items: flex-start;
    display: flex;
    height: 15px;
    left: 1px;
    top: 0;
  }

  .date {
    letter-spacing: 0;
    min-width: 62px;
    text-shadow: -3.06e-16px 5px 10px #0000001a;
    white-space: nowrap;
  }

  .line {
    align-self: center;
    background-color: var(--alto);
    box-shadow: -3.06e-16px 5px 10px #0000001a;
    height: 12px;
    margin-left: 7px;
    width: 1px;
  }

  .text-2 {
    letter-spacing: 0;
    margin-left: 10px;
    text-shadow: -3.06e-16px 5px 10px #0000001a;
    white-space: nowrap;
  }

  .x001 {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: -3.06e-16px 5px 10px #0000001a;
    display: flex;
    padding: 1rem;
  }

  .overlap-group {
    margin-left: 15px;
    margin-top: 5px;
  }

  .text-1 {
    left: 0;
    letter-spacing: 0;
    line-height: 1.5em;
    text-shadow: -3.06e-16px 5px 10px #0000001a;
    top: 14px;
  }

  ${mq[2]} {
    .x3d-render-of-teeth-d {
      align-self: flex-end;
      display: flex;
      height: 80px;
      width: 140px;
    }

    .view {
      align-items: flex-start;
      display: flex;
      height: 15px;
      left: 1px;
      min-width: 178px;
      top: 0;
    }

    .date {
      letter-spacing: 0;
      min-width: 62px;
      text-shadow: -3.06e-16px 5px 10px #0000001a;
      white-space: nowrap;
    }

    .line {
      align-self: center;
      background-color: var(--alto);
      box-shadow: -3.06e-16px 5px 10px #0000001a;
      height: 12px;
      margin-left: 7px;
      width: 1px;
    }

    .text-2 {
      letter-spacing: 0;
      margin-left: 10px;
      text-shadow: -3.06e-16px 5px 10px #0000001a;
      white-space: nowrap;
    }

    .x001 {
      align-items: flex-start;
      background-color: var(--white);
      border-radius: 10px;
      box-shadow: -3.06e-16px 5px 10px #0000001a;
      display: flex;
      padding: 1rem;
    }

    .overlap-group {
      height: 32px;
      margin-left: 15px;
      margin-top: 5px;
    }

    .text-1 {
      left: 0;
      letter-spacing: 0;
      line-height: 36px;
      text-shadow: -3.06e-16px 5px 10px #0000001a;
      top: 14px;
      white-space: nowrap;
    }
  }
`;
