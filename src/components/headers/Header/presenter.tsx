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
      position={{ base: `sticky` }}
      top={`0rem`}
      zIndex={`sticky`}
      as={`header`}
    >
      <InternalLink href={routes.index}>
        <Box className="logo" w={`6rem`} as={`h1`}>
          <Image htmlWidth={136}  htmlHeight={70} src={`/logo-136x70.png`} />
        </Box>
      </InternalLink>

      <Box
        className="g-navi yugothic-bold-midnight-blue-18px"
        display={{ base: `none` }}
      >
        <InternalLink href={`#`}>
          <div className="text-6">歯を知る</div>
        </InternalLink>
        <InternalLink href={`#`}>
          <div className="text-5">歯科医院を調べる</div>
        </InternalLink>
        <InternalLink href={`#`}>
          <div className="text-4">相談する</div>
        </InternalLink>
      </Box>

      {/*
      <div className="btn">
        <InternalLink href={`#`}>
          <Box
            className="view"
            _hover={{
              transition: `all 0.5s;`,
              '.icon': {
                color: `var(--mandy)`,
              },
              '.register-text': { color: `var(--mandy)` },
            }}
          >
            <Box>
              <Box w={`fit-content`} mx={`auto`}>
                <Icon
                  className={`icon`}
                  as={AiOutlineUser}
                  color={`white`}
                  fontSize={`2.5rem`}
                  mx={`auto`}
                // width={66}
                // height={80}
                // src="/dev/img/arrow-@2x.png"
                />
              </Box>
              <Box
                textAlign={`center`}
                mt={`0.25rem`}
                className="register-text yugothic-bold-white-14px"
              >
                会員登録
              </Box>
            </Box>
          </Box>
        </InternalLink>
        <InternalLink href={`#`}>
          <Box
            className="view-1"
            _hover={{
              transition: `all 0.5s;`,
              '.icon': {
                color: `var(--curious-blue)`,
              },
              '.login-text': { color: `var(--curious-blue)` },
            }}
          >
            <Box>
              <Box w={`fit-content`} mx={`auto`}>
                <Icon
                  className={`icon`}
                  as={BiLogIn}
                  color={`white`}
                  fontSize={`2.5rem`}
                  mx={`auto`}
                // width={66}
                // height={80}
                // src="/dev/img/arrow-@2x.png"
                />
              </Box>
              <Box
                textAlign={`center`}
                mt={`0.25rem`}
                className="login-text yugothic-bold-white-14px"
              >
                ログイン
              </Box>
            </Box>
          </Box>
        </InternalLink>
        <HeaderMenu isOpen={isOpen} onClick={onOpen} />
      </div>
      */}

      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
