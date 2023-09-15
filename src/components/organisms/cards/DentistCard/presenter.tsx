// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { Box } from '@chakra-ui/react';

import { Image } from 'atoms/Image';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <Box
      _hover={{ boxShadow: `2xl` }}
      transitionProperty={`box-shadow`}
      transitionDuration="0.3s"
      transitionTimingFunction="ease-in-out"
      css={styles}
    >
      <div className="x001">
        <div className="photo">
          <Image
            width={564}
            height={564}
            src={`/dev/img/clip-1@1x.png`}
            alt={``}
          />
        </div>
        <div className="text">
          <div className="text-2 yugothic-medium-midnight-blue-16px">
            ○○歯科クリニック 院長
          </div>
          <div className="text-1 yugothic-bold-midnight-blue-21px">
            山田 太郎 先生
          </div>
        </div>
      </div>
    </Box>
  );
};

// styles
const styles = css`
  //モバイルサイズ
  .x001 {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: -3.06e-16px 5px 10px #00417026;
    display: flex;
    flex-direction: column;
    height: 382px;
    width: 282px;
    padding: 0rem;
    margin: 0 auto 30px auto;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 24px;
    margin-left: 19px;
    width: 175px;
  }

  .text-2 {
    flex: 1;
    height: 21px;
    letter-spacing: 0;
    line-height: 36px;
    margin-left: 7px;
    margin-right: -2px;
    margin-top: -8.5px;
    max-height: 21px;
    text-align: center;
    white-space: nowrap;
  }

  .text-1 {
    height: 25px;
    letter-spacing: 0;
    line-height: 36px;
    margin-top: 0.75rem;
    margin-bottom: 4.5px;
    text-align: center;
    white-space: nowrap;
    width: 140px;
  }

  .photo {
    display: flex;
    flex: 1;
    margin-bottom: 23px;
    width: 282px;
  }

  //デスクトップサイズ
  ${mq[2]} {
    .x001 {
      background-color: var(--white);
      border-radius: 10px;
      box-shadow: -3.06e-16px 5px 10px #00417026;
      display: flex;
      flex-direction: column;
      height: 382px;
      justify-content: flex-end;
      width: 282px;
      padding: 0rem;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 24px;
      margin-left: 19px;
      width: 175px;
    }

    .text-2 {
      flex: 1;
      height: 21px;
      letter-spacing: 0;
      line-height: 36px;
      margin-left: 7px;
      margin-right: -2px;
      margin-top: -8.5px;
      max-height: 21px;
      text-align: center;
      white-space: nowrap;
    }

    .text-1 {
      height: 25px;
      letter-spacing: 0;
      line-height: 36px;
      margin-top: 0.75rem;
      margin-bottom: 4.5px;
      text-align: center;
      white-space: nowrap;
      width: 140px;
    }

    .photo {
      display: flex;
      flex: 1;
      margin-bottom: 23px;
      width: 282px;
    }
  }
`;
