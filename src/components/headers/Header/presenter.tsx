// import layer
import { VFC } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';

import { styles } from './styles';
import { Image } from 'atoms/Image';
import { InternalLink } from 'molecules/links/InternalLink';
import { routes } from '~/constants';
import { HP_URL } from 'constants/routes';
import { HeaderMenu } from '../HeaderMenu';
import { MenuDrawer } from '../MenuDrawer';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justify={`space-between`}
      align={`center`}
      backgroundColor="var(--white)"
      boxShadow={`-1.84e-16px 3px 7px #00000026;`}
      css={styles}
      w={`100%`}
      h={{ base: `80px`, lg: `100px` }}
      p={{ base: `0`, lg: `0 ${184 / 19.2}vw` }}
      position={{ base: `sticky` }}
      top={`0rem`}
      zIndex={`sticky`}
      as={`header`}
    >
      <Flex alignItems={'center'}>
        <InternalLink href={HP_URL}>
          <Box className="logo" as={`h1`}>
            <Image htmlWidth={136} htmlHeight={70} src={`/logo-136x70.png`} />
          </Box>
        </InternalLink>
        <InternalLink href="/offers">
          <Box
            display={{ base: `none`, lg: `block` }}
            m={{ lg: `0 0 0 ${32 / 19.2}vw` }}
            color="#444444"
            fontWeight={'bold'}
            fontSize={`14px`}
          >
            インターンを探す
          </Box>
        </InternalLink>
      </Flex>

      <Flex alignItems={'center'}>
        <Box
          m={{ lg: `0 ${20 / 19.2}vw 0 0` }}
          display={{ base: `none`, lg: `block` }}
          fontWeight="bold"
          color="rgba(153,153, 153, 0.8)"
          fontSize={`12px`}
        >
          採用担当者はこちら
        </Box>
        <Box display={{ base: `block`, lg: `none` }}>
          <HeaderMenu isOpen={isOpen} onClick={onOpen} />
        </Box>
        <InternalLink href="/">
          <Box
            display={{ base: `none`, lg: `block` }}
            border="1px solid"
            p={`${8 / 19.2}vw ${16 / 19.2}vw`}
            color="#FF882F"
            fontWeight={'600'}
          >
            ログイン
          </Box>
        </InternalLink>
      </Flex>

      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
