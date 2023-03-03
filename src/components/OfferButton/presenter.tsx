// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';
import { Box, BoxProps } from '@chakra-ui/react';

// type layer
export type PresenterProps = BoxProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <Box
      transition={`all .3s`}
      _hover={{
        cursor: 'pointer',
        filter: `opacity(50%)`,
        textDecoration: 'none',
      }}
      css={styles}
      {...props}
    >
      <Box className="clinics-button">
        <Box className="clinics-button__button">エントリーする</Box>
      </Box>
    </Box>
  );
};
// styles
const styles = css`
  .clinics-button {
    display: flex;
    font-family: 'Noto Sans JP', 'Hiragino Sans';
    justify-content: center;
  }

  .clinics-button__button {
    align-items: center;
    background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
    border-radius: 8px;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    height: 50px;
    justify-content: center;
    width: calc(100% - 32px);
    font-weight: bold;
    letter-spacing: 2px;
    width: 260px;
  }

  .clinics-button__button:hover {
    opacity: 0.8;
  }

  .clinics-button__button__number {
    font-size: 16px;
    margin: 12px 0 0;
  }

  ${mq[2]} {
    .clinics-button {
    }

    .clinics-button__button {
      height: 50px;
      width: 260px;
    }
  }
`;
