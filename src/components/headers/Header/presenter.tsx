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
    <Box
      w={`100%`}
      bg={`#f5f5f5`}
      pt={{ base: `${10 / 3.75}vw`, lg: `${15 / 19.2}vw` }}
      px={{ base: `${20 / 3.75}vw`, lg: `${40 / 19.2}vw` }}
    >
      <Flex
        justify={`space-between`}
        align={`center`}
        backgroundColor={{ base: `#f5f5f5`, lg: 'var(--white)' }}
        boxShadow={{ lg: `0px 0px 20px #00000026;` }}
        borderRadius={{ lg: `${50 / 19.2}vw` }}
        css={styles}
        w={`100%`}
        maxWidth={`1530px`}
        h={{ base: `80px`, lg: `100px` }}
        p={{ base: `0`, lg: `0 ${40 / 19.2}vw` }}
        mx={`auto`}
        position={{ lg: `sticky` }}
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
              m={{ lg: `0 0 0 ${40 / 19.2}vw` }}
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
            m={{ lg: `0 ${40 / 19.2}vw 0 0` }}
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
              borderRadius={`20px`}
              p={`${8 / 19.2}vw ${16 / 19.2}vw`}
              color="white"
              backgroundImage={`linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)`}
              fontWeight={'600'}
            >
              ログイン
            </Box>
          </InternalLink>
        </Flex>

        <MenuDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
};
