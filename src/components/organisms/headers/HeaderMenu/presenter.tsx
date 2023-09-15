// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { Flex, Box } from '@chakra-ui/react';

import { Span } from '~/components/atoms/Span';

// type layer
export type DataProps = { isOpen: boolean; onClick: () => void };
export type PresenterProps = DataProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ isOpen, onClick }) => {
  return (
    <Flex
      className={`${isOpen ? `open` : ``}`}
      bg={`var(--midnight-blue)`}
      css={styles}
      w={`80px`}
      h={`80px`}
      direction={`column`}
      justify={`center`}
      align={`center`}
      onClick={onClick}
      transition={`all 0.5s;`}
      _hover={{
        bg: `var(--white)`,
        '.toggle_btn > .menu-line': {
          bg: `var(--midnight-blue)`,
        },
        '.menu-text': {
          color: `var(--midnight-blue)`,
          transition: `all 0.5s;`,
        },
      }}
    >
      <div className={`toggle_btn`} css={isOpen ? openStyle : ''}>
        <Span className={`menu-line`} />
        <Span className={`menu-line`} />
        <Span className={`menu-line`} />
      </div>
      <Box
        textAlign={`center`}
        mt={`0.7rem`}
        mx={`auto`}
        className="menu-text yugothic-bold-white-14px"
      >
        {isOpen ? `閉じる` : `メニュー`}
      </Box>
    </Flex>
  );
};

// styles
const styles = css`
  cursor: pointer;
  z-index: 3;
  /*============
.toggle_btn
=============*/
  .toggle_btn {
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    transition: all 0.5s;
    margin-left: auto;
    margin-right: auto;
  }

  .toggle_btn span {
    display: block;
    position: absolute;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: var(--white);
    border-radius: 4px;
    transition: all 0.5s;
  }
  .toggle_btn span:nth-child(1) {
    top: 4px;
  }
  .toggle_btn span:nth-child(2) {
    top: 14px;
  }
  .toggle_btn span:nth-child(3) {
    bottom: 4px;
  }
  .toggle_btn span:hover {
    color: var(--curious-blue);
  }
`;

const openStyle = css`
  span {
    background-color: #fff;
  }

  span:nth-child(1) {
    -webkit-transform: translateY(10px) rotate(-315deg);
    transform: translateY(10px) rotate(-315deg);
  }

  span:nth-child(2) {
    opacity: 0;
  }
  span:nth-child(3) {
    -webkit-transform: translateY(-10px) rotate(315deg);
    transform: translateY(-10px) rotate(315deg);
  }
`;
