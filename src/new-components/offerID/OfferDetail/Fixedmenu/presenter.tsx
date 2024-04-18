// import layer
import { FC } from 'react';
// import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { useLiff } from 'contexts/LineAuthContextInternship';
import { useAccountStore, selectSetPrevPath } from 'features/account';
import { useTargetOfferStore, selectTarget } from 'features/offers';
import { css } from 'styled-system/css';
import { routes } from '~/constants';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  const { liff } = useLiff();
  const setPrevPath = useAccountStore(selectSetPrevPath);
  const _signin = () => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      offer?.id + `/jobform` && setPrevPath(decodeURI(offer.id + `/jobform`));
      window.localStorage.setItem('prevUrl', offer?.id + `/jobform`);
      liff.login(); //{ redirectUri: redirectUri });
    } else {
      window.location.href = offer.id + `/jobform`;
    }
  };

  return (
    <div
      className={css({
        position: { base: `relative`, md: `sticky` },
        top: { base: ``, md: `${90 / 768}vw`, lg: `${160 / 19.2}vw` },
        width: { base: ``, md: `${190 / 7.68}vw`, lg: `${395 / 19.2}vw` },
        height: `fit-content`,
        boxShadow: `0px 3px 6px #00000029`,
        borderRadius: { base: ``, md: `${5 / 19.2}vw` },
      })}
      {...props}
    >
      <div
        className={css({
          fontFamily: `'Noto Sans JP', sans-serif`,
          fontSize: { base: ``, md: `${11 / 7.68}vw`, lg: `${19 / 19.2}vw` },
          pt: { base: ``, md: `${32 / 19.2}vw` },
          pb: { base: ``, md: `${13 / 19.2}vw` },
          px: { base: ``, md: `${40 / 19.2}vw` },
          color: `#39414E`,
        })}
      >
        <div
          className={css({
            fontSize: {
              base: ``,
              md: `${11.5 / 7.68}vw`,
              lg: `${20 / 19.2}vw`,
            },
            fontWeight: `bold`,
            lineHeight: `1.65em`,
            mb: { base: ``, md: `${46 / 19.2}vw` },
            textDecoration: `underline`,
            textDecorationThickness: { base: ``, md: `${1 / 19.2}vw` },
            textUnderlineOffset: { base: ``, md: `${3 / 19.2}vw` },
          })}
        >
          {offer.title}
        </div>
        <div
          className={css({
            display: `flex`,
            mb: { base: ``, md: `${14 / 19.2}vw` },
            pl: { base: ``, md: `${20 / 19.2}vw` },
            py: { base: ``, md: `${5 / 7.68}vw`, lg: `${7 / 19.2}vw` },
            alignItems: `center`,
            fontWeight: `bold`,
            bg: `rgba(254,207,2,0.1)`,
            borderRadius: { base: ``, md: `${26 / 19.2}vw` },
          })}
        >
          <Image
            src="/svg/yen-sign-solid.svg"
            className={css({
              width: { base: ``, md: `${8 / 7.68}vw`, lg: `${13 / 19.2}vw` },
              h: { base: ``, md: `auto` },
            })}
            alt={''}
            width={17}
            height={22}
          />
          <div className={css({ ml: { base: ``, md: `${17 / 19.2}vw` } })}>
            給与
          </div>
          <div
            className={css({
              ml: { base: ``, md: `${53 / 19.2}vw` },
              w: `${170 / 19.2}vw`,
              overflow: `hidden`,
              textOverflow: `ellipsis`,
              whiteSpace: `nowrap`,
            })}
          >
            {offer.hourly_wage}円
          </div>
        </div>
        <div
          className={css({
            display: `flex`,
            mb: { base: ``, md: `${14 / 19.2}vw` },
            pl: { base: ``, md: `${18 / 19.2}vw` },
            py: { base: ``, md: `${5 / 7.68}vw`, lg: `${7 / 19.2}vw` },
            alignItems: `center`,
            fontWeight: `bold`,
            bg: `rgba(254,207,2,0.1)`,
            borderRadius: { base: ``, md: `${26 / 19.2}vw` },
          })}
        >
          <Image
            src="/svg/user-solid.svg"
            className={css({
              width: { base: ``, md: `${10 / 7.68}vw`, lg: `${19 / 19.2}vw` },
              h: { base: `auto` },
            })}
            alt={''}
            width={25}
            height={24}
          />
          <div className={css({ ml: { base: ``, md: `${14 / 19.2}vw` } })}>
            職種
          </div>
          <div
            className={css({
              ml: { base: ``, md: `${53 / 19.2}vw` },
            })}
          >
            {offer.occupation}
          </div>
        </div>
        <div
          className={css({
            display: `flex`,
            mb: { base: ``, md: `${14 / 19.2}vw` },
            pl: { base: ``, md: `${20 / 19.2}vw` },
            py: { base: ``, md: `${5 / 7.68}vw`, lg: `${7 / 19.2}vw` },
            alignItems: `center`,
            fontWeight: `bold`,
            bg: `rgba(254,207,2,0.1)`,
            borderRadius: { base: ``, md: `${26 / 19.2}vw,` },
          })}
        >
          <Image
            src="/svg/location-dot-solid.svg"
            className={css({
              width: { base: ``, md: `${9 / 7.68}vw`, lg: `${16 / 19.2}vw` },
              h: { base: `auto` },
            })}
            alt={''}
            width={22}
            height={26}
          />
          <div className={css({ ml: { base: ``, md: `${16 / 19.2}vw` } })}>
            場所
          </div>
          <div
            className={css({
              ml: { base: ``, md: `${53 / 19.2}vw` },
              w: `${170 / 19.2}vw`,
              overflow: `hidden`,
              textOverflow: `ellipsis`,
              whiteSpace: `nowrap`,
            })}
          >
            {offer.place_short}
          </div>
        </div>
        <div
          className={css({
            display: `flex`,
            mb: { base: ``, md: `${14 / 19.2}vw` },
            pl: { base: ``, md: `${18 / 19.2}vw` },
            py: { base: ``, md: `${5 / 7.68}vw`, lg: `${7 / 19.2}vw` },
            alignItems: `center`,
            fontWeight: `bold`,
            bg: `rgba(254,207,2,0.1)`,
            borderRadius: { base: ``, md: `${26 / 19.2}vw` },
          })}
        >
          <Image
            src="/svg/clock-solid.svg"
            className={css({
              width: { base: ``, md: `${11 / 7.68}vw`, lg: `${20 / 19.2}vw` },
              h: { base: `auto` },
            })}
            alt={''}
            width={24}
            height={24}
          />
          <div className={css({ ml: { base: ``, md: `${16 / 19.2}vw` } })}>
            時間
          </div>
          <div className={css({ ml: { base: ``, md: `${53 / 19.2}vw` } })}>
            {offer.hours_short}
          </div>
        </div>
      </div>
      <a
        className={css({
          _hover: { opacity: 0.8, transition: `0.6s` },
        })}
        href={routes.offersJobForm(offer.id)}
      >
        <div>
          <div
            className={css({
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              py: { base: ``, md: `${40 / 19.2}vw` },

              bg: `transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`,
              color: `white`,
              fontSize: {
                base: ``,
                md: `${16 / 7.68}vw`,
                lg: `${27 / 19.2}vw`,
              },
              fontWeight: `bold`,
            })}
          >
            <Image
              src="/svg/paper-plane-solid.svg"
              className={css({
                width: { base: ``, md: `${16 / 7.68}vw`, lg: `${27 / 19.2}vw` },
                h: { base: ``, md: `${16 / 7.68}vw`, lg: `${27 / 19.2}vw` },
                mr: { base: ``, md: `${15 / 19.2}vw` },
              })}
              alt={''}
              width={35}
              height={35}
            />
            応募する
          </div>
        </div>
      </a>
    </div>
  );
};
