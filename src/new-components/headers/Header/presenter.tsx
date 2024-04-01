// import layer
import { useState, useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import dynamic from 'next/dynamic';
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
import { HeaderMenu } from 'new-components/headers/HeaderMenu';
import { Image as NImage } from 'new-components/images/Image';
import { ExternalLink } from 'new-components/links/ExternalLink';
import { InternalLink } from 'new-components/links/InternalLink';

import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { FORJOB_LP_URL, routes } from '~/constants';
import type { SystemStyleObject } from 'styled-system/types';

const MenuDrawer = dynamic(
  import('new-components/headers/MenuDrawer').then((mod) => mod.MenuDrawer)
);

// type layer
export type PresenterProps = SystemStyleObject & { isTop?: boolean };

// presenter
export function Presenter({ isTop, ...props }: PresenterProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { username } = useAccountStore(selectAccount);
  const _signout = useAccountStore(selectSignout);
  const setAccount = useAccountStore(selectSetAccount);
  const setPrevPath = useAccountStore(selectSetPrevPath);
  const { liff } = useLiff();
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);

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
  const handleOpen = () => {
    !show && setShow(true);
    onOpen();
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
  }, [liff, username, liff?.isLoggedIn()]); // eslint-disable-line

  return (
    <div
      className={css(
        {
          w: `100%`,
          bg: `#fffffff`,
          pt: { base: `${10 / 3.75}vw`, lg: `0` },
          px: { base: `${20 / 3.75}vw`, lg: `0` },
          position: { lg: `sticky` },
          top: `0rem`,
          zIndex: 10,
        },
        props
      )}
    >
      <header
        className={flex({
          justify: `space-between`,
          align: `center`,
          backgroundColor: { base: `#ffffff`, lg: 'var(--white)' },
          w: `100%`,
          h: { base: `80px`, lg: `${124 / 19.2}vw` },
          p: { base: `0`, lg: `${0 / 19.2}vw ${80 / 19.2}vw ${5 / 19.2}vw` },
          mx: `auto`,
          fontFamily: `Zen Kaku Gothic New','Hiragino Sans'`,
        })}
      >
        <div
          className={flex({
            alignItems: 'center',
          })}
        >
          <InternalLink href={routes.home}>
            <div
              className={css({
                pt: { lg: `${8 / 19.2}vw` },
                w: {
                  base: `${136 / 3.75}vw`,
                  md: `${135 / 7.68}vw`,
                  lg: `${183 / 19.2}vw`,
                },
                ml: `1rem`,
              })}
            >
              <NImage
                image={{
                  src: `/svg/forjob.svg`,
                  width: 300,
                  height: 95,
                  alt: ``,
                  loading: `eager`,
                  priority: true,
                }}
              />
            </div>
          </InternalLink>
          <div
            className={css({
              display: { base: `none`, lg: `block` },
              color: '#39414E',
              fontSize: `${17 / 19.2}vw`,
              ml: { lg: `${60 / 19.2}vw` },
              mt: { lg: `${2 / 19.2}vw` },
              fontFamily: `'Noto Sans JP', sans-serif`,
              fontWeight: `500`,
            })}
          >
            新大生のための求人サイト
          </div>
        </div>

        <div
          className={flex({
            mt: { lg: `${10 / 19.2}vw` },
            alignItems: 'center',
            letterSpacing: `0`,
          })}
        >
          <ExternalLink href={FORJOB_LP_URL}>
            <div
              className={css({
                display: { base: `none`, lg: `block` },
                color: '#39414E',
                fontSize: `${17 / 19.2}vw`,
                mr: { lg: `${33 / 19.2}vw` },
                mt: { lg: `${2 / 19.2}vw` },
              })}
            >
              採用担当者はこちら
            </div>
          </ExternalLink>
          {username ? (
            <div
              className={css({
                display: { base: `none`, lg: `block` },
                mr: { lg: ` ${30 / 19.2}vw` },
                color: '#444444',
                fontWeight: 'bold',
                fontSize: `${14 / 19.2}vw`,
              })}
            >
              {username}
              <span
                className={css({
                  fontWeight: `500`,
                })}
              >
                さん ようこそ！
              </span>
            </div>
          ) : (
            <div
              className={css({
                display: `none`,
              })}
            />
          )}

          {username ? (
            <div
              className={css({
                display: { base: `none`, lg: `flex` },
                justifyContent: `center`,
                alignItems: `center`,
                borderRadius: `${10 / 19.2}vw`,
                w: `${152 / 19.2}vw`,
                h: `${44 / 19.2}vw`,
                fontSize: `${17 / 19.2}vw`,
                textAlign: `center`,
                color: 'white',
                background: `transparent linear-gradient(270deg, #0EF4FF 0%, #41A4FD 100%) 0% 0% no-repeat padding-box`,
                fontWeight: '600',
                transition: `all .3s`,
                _hover: {
                  cursor: 'pointer',
                  filter: `opacity(50%)`,
                  textDecoration: 'none',
                },
                mr: { lg: `${33 / 19.2}vw` },
              })}
              onClick={() => signout()}
            >
              ログアウト
            </div>
          ) : (
            <div
              className={css({
                display: { base: `none`, lg: `flex` },
                justifyContent: `center`,
                alignItems: `center`,
                borderRadius: `${10 / 19.2}vw`,
                w: `${152 / 19.2}vw`,
                h: `${44 / 19.2}vw`,
                fontSize: `${17 / 19.2}vw`,
                textAlign: `center`,
                color: 'white',
                background: `transparent linear-gradient(270deg, #0EF4FF 0%, #41A4FD 100%) 0% 0% no-repeat padding-box`,
                fontWeight: '600',
                transition: `all .3s`,
                _hover: {
                  cursor: 'pointer',
                  filter: `opacity(50%)`,
                  textDecoration: 'none',
                },
                mr: { lg: `${33 / 19.2}vw` },
              })}
              onClick={signin}
            >
              ログイン
            </div>
          )}
          <div
            className={css({
              display: { base: `block`, lg: `block` },
              mt: { base: ``, lg: `${15 / 19.2}vw` },
            })}
          >
            <HeaderMenu isOpen={isOpen} onClick={handleOpen} />
          </div>
        </div>

        {show && <MenuDrawer isOpen={isOpen} onClose={onClose} />}
      </header>
    </div>
  );
}
