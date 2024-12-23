// import layer
import { FC } from 'react';
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Image } from 'atoms/Image';
import { InternalLink } from 'components/links/InternalLink';
import { useLiff } from 'contexts/LineAuthContextInternship';
import {
  useAccountStore,
  selectAccount,
  selectSignout,
  selectSetPrevPath,
} from 'features/account';
import { routes } from '~/constants';
import { HeaderMenu } from '../HeaderMenu';
import { MenuDrawer } from '../MenuDrawer';
import { styles } from './styles';

// type layer
export type PresenterProps = BoxProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { username } = useAccountStore(selectAccount);
  const _signout = useAccountStore(selectSignout);
  const setPrevPath = useAccountStore(selectSetPrevPath);
  const { liff } = useLiff();
  const router = useRouter();

  const signout = () => {
    _signout();
    window.localStorage.removeItem('prevUrl');
    liff.logout();
  };

  const signin = () => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      const prevPath = router?.asPath;
      prevPath && setPrevPath(decodeURI(prevPath));
      window.localStorage.setItem('prevUrl', prevPath);
      liff.login(); //{ redirectUri: redirectUri });
    }
  };

  // useEffect(() => {
  //   if (!liff || !liff.isLoggedIn()) return;
  //   const url = `${ORIGIN_URL}${routes.apiAccount}`;
  //
  //   const handler = async () => {
  //     const profile = await liff.getProfile();
  //
  //     const res = await axios.get(url, {
  //       params: {
  //         lineId: profile.userId,
  //       },
  //     });
  //
  //     const { exist, username, email } = res.data;
  //     if (exist) {
  //       const { email, username } = res.data;
  //       setAccount({ email: email as string, username: username as string });
  //     } else {
  //       router.push(routes.signinFailed);
  //       window.scroll({ top: 0 });
  //     }
  //   };
  //
  //   handler();
  // }, [liff, liff?.isLoggedIn]);

  return (
    <Box
      w={`100%`}
      bg={`#f5f5f5`}
      pt={{ base: `${10 / 3.75}vw`, lg: `${15 / 19.2}vw` }}
      px={{ base: `${20 / 3.75}vw`, lg: `${40 / 19.2}vw` }}
      {...props}
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
        fontFamily={`'Zen Kaku Gothic New',
        'Hiragino Sans'`}
        as={`header`}
      >
        <Flex alignItems={'center'}>
          <InternalLink href={routes.home}>
            <Box w={{ base: `${136 / 16}rem` }} className="logo" as={`h1`}>
              <Image
                htmlWidth={300}
                htmlHeight={90}
                src={`/svg/forjob.svg`}
                alt={``}
              />
            </Box>
          </InternalLink>
          <InternalLink href={routes.home}>
            <Box
              display={{ base: `none`, lg: `block` }}
              m={{ lg: `0 0 0 ${40 / 19.2}vw` }}
              color="#444444"
              fontWeight={'bold'}
              fontSize={`14px`}
            >
              新潟大学生専用のアルバイト求人サイト
            </Box>
          </InternalLink>
        </Flex>

        <Flex alignItems={'center'}>
          <InternalLink
            href={`/`}
            // m={{ lg: `0 ${40 / 19.2}vw 0 0` }}
            // display={{ base: `none`, lg: `block` }}
            // fontWeight="bold"
            // color="rgba(153,153, 153, 0.8)"
            // fontSize={`12px`}
          >
            採用担当者はこちら
          </InternalLink>
          <Box display={{ base: `block`, lg: `none` }}>
            <HeaderMenu isOpen={isOpen} onClick={onOpen} />
          </Box>
          {username ? (
            <Box
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
            </Box>
          ) : (
            <Box
              display={{ base: `none`, lg: `block` }}
              borderRadius={`20px`}
              p={`${8 / 19.2}vw ${16 / 19.2}vw`}
              color="white"
              backgroundImage={`linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)`}
              fontWeight={'600'}
              onClick={signin}
              transition={`all .3s`}
              _hover={{
                cursor: 'pointer',
                filter: `opacity(50%)`,
                textDecoration: 'none',
              }}
            >
              {/*
            <InternalLink href={routes.signin}>
            </InternalLink>
              */}
              ログイン
            </Box>
          )}
        </Flex>

        <MenuDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
};
