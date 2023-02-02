// import layer
import { VFC, useState } from 'react';
import { css } from '@emotion/react';
import { Flex, Box } from '@chakra-ui/react';

import { InternalLink } from 'molecules/links/InternalLink';
import { routes } from '~/constants';
import { mq } from '~/constants/styles';
import { Span } from '~/components/atoms/Span';

// type layer
export type DataProps = { isOpen: boolean; onClick: () => void };
export type PresenterProps = DataProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({
  isOpen,
  onClick,
  ...props
}) => {
  return (
    <Box>
      <Flex
        className={`${isOpen ? `open` : ``}`}
        boxShadow={{ base: `0px 0px 20px #00000026;` }}
        bg={`white`}
        css={styles}
        w={`45px`}
        h={`45px`}
        direction={`column`}
        justify={`center`}
        align={`center`}
        onClick={onClick}
        transition={`all 0.5s;`}
        borderRadius={`100%`}
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
      </Flex>
      <Box
        textAlign={`center`}
        mt={`0.7rem`}
        mx={`auto`}
        fontSize={`11px`}
        color={`#444444`}
        className="menu-text yugothic-bold-white-14px"
      >
        {isOpen ? <Box color={`white`}>閉じる</Box> : `メニュー`}
      </Box>
    </Box>
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
    width: 20px;
    height: 30px;
    transition: all 0.5s;
    margin-left: auto;
    margin-right: auto;
  }

  .toggle_btn span {
    display: block;
    position: absolute;
    left: 0;
    width: 20px;
    height: 3px;
    background-color: #444444;
    border-radius: 9px;
    transition: all 0.5s;
  }
  .toggle_btn span:nth-child(1) {
    top: 4px;
    width: 100%;
  }
  .toggle_btn span:nth-child(2) {
    top: 14px;
    width: 100%;
  }
  .toggle_btn span:nth-child(3) {
    bottom: 4px;
    width: 50%;
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
    -webkit-transform: translateY(0px) rotate(315deg);
    transform: translateY(0px) rotate(315deg);
  }
  span:nth-child(3) {
    opacity: 0;
  }
`;
