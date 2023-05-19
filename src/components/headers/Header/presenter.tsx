// import layer
import { FC, useEffect } from 'react';
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { styles } from './styles';
import { Image } from 'atoms/Image';
import { InternalLink } from 'components/links/InternalLink';
import { routes } from '~/constants';
import { HeaderMenu } from '../HeaderMenu';
import { MenuDrawer } from '../MenuDrawer';
import {
  useAccountStore,
  selectAccount,
  selectSignout,
  selectSetAccount,
  selectSetPrevPath,
} from 'features/account';
import { useLiff } from 'contexts/LineAuthContextInternship';
import { ORIGIN_URL } from 'constants/env';

// type layer
export type PresenterProps = BoxProps & { isTop?: boolean };

// presenter
export const Presenter: FC<PresenterProps> = ({ isTop, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { email, username } = useAccountStore(selectAccount);
  const _signout = useAccountStore(selectSignout);
  const setAccount = useAccountStore(selectSetAccount);
  const setPrevPath = useAccountStore(selectSetPrevPath);
  const { liff } = useLiff();
  const router = useRouter();

  const signout = () => {
    _signout();
    window.localStorage.removeItem('prevUrl');
    liff.logout();
  };

  const signin = async () => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      const prevPath = router?.asPath;
      prevPath && setPrevPath(decodeURI(prevPath));
      window.localStorage.setItem('prevUrl', prevPath);
      liff.login(); //{ redirectUri: redirectUri });
    } else {
      if (!username) {
        const prevPath = router?.asPath;
        prevPath && setPrevPath(decodeURI(prevPath));
        window.localStorage.setItem('prevUrl', prevPath);
        router.push(routes.signin);
      }
    }
  };

  useEffect(() => {
    if (!liff) return;
    if (!username && liff.isLoggedIn()) {
      const url = `${ORIGIN_URL}${routes.apiAccount}`;

      const handler = async () => {
        const profile = await liff.getProfile();

        const res = await axios.get(url, {
          params: {
            lineId: profile.userId,
          },
        });

        const { exist } = res.data;
        if (exist) {
          const { email, username, studentId, grade } = res.data;
          setAccount({
            email: email as string,
            username: username as string,
            studentId,
            grade,
          });
        }
      };
      handler();
    }
  }, [liff, username, liff?.isLoggedIn()]);

  return (
    <Box
      w={`100%`}
      bg={`#fffffff`}
      pt={{ base: `${10 / 3.75}vw`, lg: `0` }}
      px={{ base: `${20 / 3.75}vw`, lg: `0` }}
      position={{ lg: `sticky` }}
      top={`0rem`}
      zIndex={`sticky`}
      {...props}
    >
      <Flex
        justify={`space-between`}
        align={`center`}
        backgroundColor={{ base: `#ffffff`, lg: 'var(--white)' }}
        css={styles}
        w={`100%`}
        h={{ base: `80px`, lg: `${124 / 19.2}vw` }}
        p={{ base: `0`, lg: `${0 / 19.2}vw ${80 / 19.2}vw ${5 / 19.2}vw` }}
        mx={`auto`}
        fontFamily={`'Zen Kaku Gothic New',
        'Hiragino Sans'`}
        as={`header`}
      >
        <Flex alignItems={'center'}>
          <InternalLink href={routes.home}>
            <Box
              pt={{ lg: `${8 / 19.2}vw` }}
              w={{
                base: `${136 / 3.75}vw`,
                md: `${135 / 7.68}vw`,
                lg: `${183 / 19.2}vw`,
              }}
              className="logo"
              as={isTop ? `h1` : `div`}
            >
              <Image src={`/svg/forjob.svg`} />
            </Box>
          </InternalLink>
        </Flex>

        <Flex
          mt={{ lg: `${10 / 19.2}vw` }}
          alignItems={'center'}
          letterSpacing={`0`}
        >
          <Box
            display={{ base: `none`, lg: `block` }}
            color="#39414E"
            fontSize={`${17 / 19.2}vw`}
            mr={{ lg: `${33 / 19.2}vw` }}
            mt={{ lg: `${2 / 19.2}vw` }}
          >
            採用担当者はこちら
          </Box>
          {username ? (
            <Box
              display={{ base: `none`, lg: `block` }}
              mr={{ lg: ` ${30 / 19.2}vw` }}
              color="#444444"
              fontWeight={'bold'}
              fontSize={`${14 / 19.2}vw`}
            >
              {username}
              <Box as={`span`} fontWeight={`500`}>
                さん ようこそ！
              </Box>
            </Box>
          ) : (
            <Box display={`none`} />
          )}

          {username ? (
            <Box
              display={{ base: `none`, lg: `block` }}
              borderRadius={`${10 / 19.2}vw`}
              w={`${152 / 19.2}vw`}
              h={`${44 / 19.2}vw`}
              fontSize={`${17 / 19.2}vw`}
              pt={`${13 / 19.2}vw`}
              textAlign={`center`}
              color="white"
              background={`transparent linear-gradient(270deg, #0EF4FF 0%, #41A4FD 100%) 0% 0% no-repeat padding-box`}
              fontWeight={'600'}
              onClick={() => signout()}
              transition={`all .3s`}
              _hover={{
                cursor: 'pointer',
                filter: `opacity(50%)`,
                textDecoration: 'none',
              }}
              mr={{ lg: `${33 / 19.2}vw` }}
            >
              ログアウト
            </Box>
          ) : (
            <Box
              display={{ base: `none`, lg: `block` }}
              borderRadius={`${10 / 19.2}vw`}
              w={`${152 / 19.2}vw`}
              h={`${44 / 19.2}vw`}
              fontSize={`${17 / 19.2}vw`}
              pt={`${13 / 19.2}vw`}
              textAlign={`center`}
              color="white"
              background={`transparent linear-gradient(270deg, #0EF4FF 0%, #41A4FD 100%) 0% 0% no-repeat padding-box`}
              fontWeight={'600'}
              onClick={signin}
              transition={`all .3s`}
              _hover={{
                cursor: 'pointer',
                filter: `opacity(50%)`,
                textDecoration: 'none',
              }}
              mr={{ lg: `${33 / 19.2}vw` }}
            >
              ログイン
            </Box>
          )}

          {/* <Box
            display={{ base: `none`, lg: `block` }}
            borderRadius={`20px`}
            p={`${8 / 19.2}vw ${16 / 19.2}vw`}
            color="white"
            backgroundImage={`linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)`}
            fontWeight={'600'}
            onClick={() => signout()}
            transition={`all .3s`}
            _hover={{
              cursor: 'pointer',
              filter: `opacity(50%)`,
              textDecoration: 'none',
            }}
          >
            ログアウト
          </Box> */}
          <Box
            display={{ base: `block`, lg: `block` }}
            mt={{ base: ``, lg: `${15 / 19.2}vw` }}
          >
            <HeaderMenu isOpen={isOpen} onClick={onOpen} />
          </Box>
        </Flex>

        <MenuDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Box
        display={{ base: `none`, lg: `block` }}
        w={`100%`}
        h={`${40 / 19.2}vw`}
        bg={`#41A4FD`}
      />
    </Box>
  );
};
