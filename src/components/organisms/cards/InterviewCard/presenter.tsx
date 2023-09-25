// import layer
import { VFC } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { css } from '@emotion/react';

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
      height={{ base: `250px`, lg: `300px` }}
      css={styles}
    >
      <div className="x001">
        <Image className="photo" src={`/dev/img/clip-1@1x.png`} alt={``} />

        <div className="text">
          <div className="text-2">
            内容が入ります内容が入ります内容が入ります内容が入ります内容が入ります内容が入ります内容が入り内容が入ります内容が
          </div>
        </div>
      </div>
    </Box>
  );
};

// styles
const styles = css`
  /*モバイルサイズ*/
  .x001 {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: -3.06e-16px 5px 10px #00417026;
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 300px;
    padding: 0rem;
    ${mq[3]} {
        height: 300px;
        width: 360px;
      }
  }

  .photo {
    width: 260px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    margin:20px;
    
    ${mq[3]} {
      width: 320px;
    height: 180px;
    margin:20px 20px 0 20px
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom:20px;
    width: 300px;
    font-family: 'yugothic';
    color:#1E406B;
    ${mq[3]} {
      justify-content: space-between;
      padding: 0 20px;
      margin-bottom:0px;
      width: 360px;
      font-family: 'yugothic';
      color:#1E406B;
    }
  }

  .text-2 {
    letter-spacing: 0;
    line-height: 14px;
    white-space: pre-wrap;
    font-size: 14px;
    font-weight: bold;
    color:#1E406B;
    ${mq[3]} {
      line-height: 20px;
      white-space: pre-wrap;
      font-size: 16.5px;
      margin: 20px 0;
      font-weight: bold;
      color:#1E406B;
    }
  }
  }
}

`;
