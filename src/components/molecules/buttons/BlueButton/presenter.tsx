// import layer
import { VFC, ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { mq } from '~/constants/styles';

// type layer
export type StyleProps = BoxProps;
export type PresenterProps = { children: ReactNode } & BoxProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ children, ...props }) => {
  return (
    <Box
      maxW={{
        base: `28rem`,
        lg: `520px`,
        xl: `700px`,
        '2xl': 'initial',
      }}
      mx={`auto`}
      css={styles}
      {...props}
    >
      <Box
        className="btn border-1px-malibu"
        _hover={{
          boxShadow: `2xl`,
          color: `var(--curious-blue)`,
          // bg: `white`,
          // border: `1px solid ${primaryColor ? PRIMARY_COLOR : ACCENT_ORANGE}`,
        }}
        transitionProperty={`box-shadow`}
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
      >
        <Box
          _hover={{
            '.text-1': {
              color: `var(--curious-blue)`,
            },
            // bg: `white`,
            // border: `1px solid ${primaryColor ? PRIMARY_COLOR : ACCENT_ORANGE}`,
          }}
          className="text-1 yugothic-bold-white-16px"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

// styles
const styles = css`
  width: 100%;
  .btn {
    align-items: center;
    background-color: var(--curious-blue);
    display: flex;
    height: 40px;
    justify-content: center;
    padding: 0 89px;
  }
  .btn:hover {
    background-color: var(--white);
    border-width: 2px;
    .text-1 {
      color: var(--curious-blue);
    }
  }

  .text-1 {
    letter-spacing: 0;
    text-align: center;
    white-space: nowrap;
  }

  ${mq[2]} {
    width: 262px;
    .btn {
      align-items: center;
      background-color: var(--curious-blue);
      border-radius: 10px;
      display: flex;
      height: 50px;
      justify-content: center;
      padding: 0 89px;
    }

    .text-1 {
      letter-spacing: 0;
      text-align: center;
      white-space: nowrap;
    }
  }
`;
