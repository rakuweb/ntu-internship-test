// import layer
import { useEffect } from 'react';
import {
  Drawer,
  DrawerProps,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
} from '@chakra-ui/react';

import axios from 'axios';
import { useRouter } from 'next/router';

import { ORIGIN_URL } from 'constants/env';
import { useLiff } from 'contexts/LineAuthContextInternship';
import {
  useAccountStore,
  selectAccount,
  selectSignout,
  selectSetAccount,
  selectSetPrevPath,
} from 'features/account';
import { HeaderMenuButton } from 'new-components/buttons/HeaderMenuButton';

import { DrawerMenuNav } from 'components/headers/DrawerMenuNav';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { routes } from '~/constants';
import { HeaderMenu } from '../HeaderMenu';

// type layer
export type PresenterProps = Partial<DrawerProps> & {
  isOpen: boolean;
  onClose: () => void;
};

// presenter
export function Presenter({ isOpen, onClose, ...props }: PresenterProps) {
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

  //FIX:
  return (
    <Drawer size={`sm`} isOpen={isOpen} onClose={onClose} {...props}>
      <DrawerOverlay />
      <DrawerContent bg={`#f5f5f5`}>
        <DrawerHeader bg={`#f5f5f5`} opacity={1}>
          <div
            className={flex({
              align: `center`,
            })}
          >
            <HeaderMenu isOpen={isOpen} onClick={onClose} />
            <div
              className={flex({
                ml: { base: `1rem` },
                align: `center`,
              })}
            >
              {username ? (
                <HeaderMenuButton
                  className={css({
                    w: `fit-content`,
                  })}
                  onClick={() => signout()}
                >
                  <div
                    className={flex({
                      align: `center`,
                    })}
                  >
                    <div
                      className={css({
                        color: `white`,
                        ml: { lg: `0.5rem` },
                        fontFamily: `'Zen Kaku Gothic New','Hiragino Sans'`,
                        fontSize: `1rem`,
                      })}
                    >
                      ログアウト
                    </div>
                  </div>
                </HeaderMenuButton>
              ) : (
                <HeaderMenuButton onClick={signin}>
                  <div
                    className={flex({
                      align: `center`,
                    })}
                  >
                    <div
                      className={css({
                        color: `white`,
                        ml: { lg: `0.5rem` },
                        fontFamily: `'Zen Kaku Gothic New','Hiragino Sans'`,
                        fontSize: `1rem`,
                      })}
                    >
                      ログイン
                    </div>
                  </div>
                </HeaderMenuButton>
              )}
            </div>
          </div>
        </DrawerHeader>
        <DrawerBody>
          <DrawerMenuNav />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
