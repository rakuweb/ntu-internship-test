// import layer
import { FC, useEffect } from 'react';
import {
  Drawer,
  DrawerProps,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  Flex,
  Box,
} from '@chakra-ui/react';

import axios from 'axios';
import { useRouter } from 'next/router';

import { HeaderMenuButton } from 'components/organisms/buttons/HeaderMenuButton';
import { ORIGIN_URL } from 'constants/env';
import { useLiff } from 'contexts/LineAuthContextInternship';
import {
  useAccountStore,
  selectAccount,
  selectSignout,
  selectSetAccount,
  selectSetPrevPath,
} from 'features/account';

import { routes } from '~/constants';
import { DrawerMenuNav } from '../DrawerMenuNav';
import { HeaderMenu } from '../HeaderMenu';

// type layer
export type PresenterProps = Partial<DrawerProps> & {
  isOpen: boolean;
  onClose: () => void;
};

// presenter
export const Presenter: FC<PresenterProps> = ({
  isOpen,
  onClose,
  ...props
}) => {
  const { username } = useAccountStore(selectAccount);
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
          const { email, username, grade, studentId } = res.data;
          setAccount({
            email: email as string,
            username: username as string,
            grade: grade as string,
            studentId: studentId as string,
          });
        }
      };
      handler();
    }
  }, [liff, username, liff?.isLoggedIn()]); // eslint-disable-line

  return (
    <Drawer size={`sm`} isOpen={isOpen} onClose={onClose} {...props}>
      <DrawerOverlay />
      <DrawerContent bg={`#f5f5f5`}>
        <DrawerHeader bg={`#f5f5f5`} opacity={1}>
          <Flex align={`center`}>
            <HeaderMenu isOpen={isOpen} onClick={onClose} />
            <Flex ml={{ base: `1rem` }} align={`center`}>
              {username ? (
                <HeaderMenuButton
                  onClick={() => signout()}
                  w={`fit-content`}
                  h={{ base: `2.5rem` }}
                  background={`transparent linear-gradient(270deg, #0EF4FF 0%, #41A4FD 100%) 0% 0% no-repeat padding-box`}
                  transition={`all .3s`}
                  _hover={{
                    // bg: `var(--white)`,
                    // '.text': { color: `var(--mandy)` },
                    cursor: 'pointer',
                    filter: `opacity(50%)`,
                  }}
                >
                  <Flex align={`center`}>
                    <Box
                      color={`white`}
                      ml={{ lg: `0.5rem` }}
                      fontFamily={`'Zen Kaku Gothic New','Hiragino Sans'`}
                    >
                      ログアウト
                    </Box>
                  </Flex>
                </HeaderMenuButton>
              ) : (
                <HeaderMenuButton
                  w={`fit-content`}
                  h={{ base: `2.5rem` }}
                  onClick={signin}
                  background={`transparent linear-gradient(270deg, #0EF4FF 0%, #41A4FD 100%) 0% 0% no-repeat padding-box`}
                  transition={`all .3s`}
                  _hover={{
                    // bg: `var(--white)`,
                    // '.text': { color: `var(--mandy)` },
                    cursor: 'pointer',
                    filter: `opacity(50%)`,
                  }}
                >
                  <Flex align={`center`}>
                    <Box
                      color={`white`}
                      ml={{ lg: `0.5rem` }}
                      fontFamily={`'Zen Kaku Gothic New','Hiragino Sans'`}
                    >
                      ログイン
                    </Box>
                  </Flex>
                </HeaderMenuButton>
              )}
            </Flex>
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <DrawerMenuNav />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
