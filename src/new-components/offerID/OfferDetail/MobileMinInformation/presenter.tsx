// import layer
import { useTargetOfferStore, selectTarget } from 'features/offers';
import { Image } from 'new-components/images/Image';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export function Presenter() {
  const offer = useTargetOfferStore(selectTarget);

  return (
    <div
      className={css({
        display: { md: `none` },
        mt: `${19 / 3.75}vw`,
      })}
    >
      {/* モバイルサイズ */}
      <div
        className={flex({
          justify: `space-between`,
          fontFamily: `'Noto Sans JP', sans-serif`,
          wrap: `wrap`,
        })}
      >
        <div
          className={flex({
            w: `${181 / 4.28}vw`,
            h: `auto`,
            color: `#39414E`,
            fontWeight: `bold`,
            fontSize: `${10 / 3.75}vw`,
            mb: `${5 / 3.75}vw`,
            py: `${4 / 3.75}vw`,
            bg: `rgba(254,207,2,0.1)`,
            borderRadius: `${26 / 3.75}vw`,
          })}
        >
          <Image // eslint-disable-line
            className={css({
              ml: `${11 / 3.75}vw`,
              mr: `${10 / 3.75}vw`,
              w: `${7 / 3.75}vw`,
              h: `auto`,
            })}
            image={{
              width: 24,
              height: 30,
              src: `/svg/yen-sign-solid.svg`,
              alt: `お金アイコン`,
            }}
          />
          <div
            className={css({
              fontWeight: `bold`,
              mr: `${8 / 3.75}vw`,
              fontSize: `${10 / 3.75}vw`,
            })}
          >
            給与
          </div>
          {`${offer.hourly_wage}円`}
        </div>
        <div
          className={flex({
            w: `${181 / 4.28}vw`,
            color: `#39414E`,
            fontWeight: `bold`,
            fontSize: `${10 / 3.75}vw`,
            mb: `${5 / 3.75}vw`,
            py: `${4 / 3.75}vw`,
            bg: `rgba(254,207,2,0.1)`,
            borderRadius: `${26 / 3.75}vw`,
          })}
        >
          <Image // eslint-disable-line
            className={css({
              ml: `${11 / 3.75}vw`,
              mr: `${10 / 3.75}vw`,
              w: `${9 / 3.75}vw`,
              h: `${12 / 3.75}vw`,
            })}
            image={{
              width: 13.7,
              height: 18.3,
              src: `/svg/location-dot-solid.svg`,
              alt: `場所アイコン`,
              style: { width: `100%`, height: `100%` },
            }}
          />
          <div
            className={css({
              fontWeight: `bold`,
              mr: `${8 / 3.75}vw`,
              fontSize: `${10 / 3.75}vw`,
              whiteSpace: 'nowrap',
            })}
          >
            場所
          </div>
          <div
            className={css({
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              w: `60%`,
            })}
          >
            {offer.place_short}
          </div>
        </div>
        <div
          className={flex({
            w: `${181 / 4.28}vw`,
            h: `auto`,
            color: `#39414E`,
            fontWeight: `bold`,
            fontSize: `${10 / 3.75}vw`,
            mb: `${5 / 3.75}vw`,
            py: `${4 / 3.75}vw`,
            bg: `rgba(254,207,2,0.1)`,
            borderRadius: `${26 / 3.75}vw`,
          })}
        >
          <Image // eslint-disable-line
            className={css({
              ml: `${10 / 3.75}vw`,
              mr: `${8 / 3.75}vw`,
              w: `${10 / 3.75}vw`,
              h: `auto`,
            })}
            image={{
              width: 16,
              height: 18.5,
              src: `/svg/user-solid.svg`,
              alt: `人型アイコン`,
            }}
          />
          <div
            className={css({
              fontWeight: `bold`,
              mr: `${8 / 3.75}vw`,
              fontSize: `${10 / 3.75}vw`,
            })}
          >
            職種
          </div>
          {offer.occupation}
        </div>
        <div
          className={flex({
            w: `${181 / 4.28}vw`,
            color: `#39414E`,
            fontWeight: `bold`,
            fontSize: `${10 / 3.75}vw`,
            mb: `${5 / 3.75}vw`,
            py: `${5 / 3.75}vw`,
            bg: `rgba(254,207,2,0.1)`,
            borderRadius: `${26 / 3.75}vw`,
          })}
        >
          <Image // eslint-disable-line
            className={css({
              ml: `${10 / 3.75}vw`,
              mr: `${8 / 3.75}vw`,
              w: `${11.6 / 3.75}vw`,
              h: `${11.6 / 3.75}vw`,
            })}
            image={{
              width: 16,
              height: 16,
              src: `/svg/clock-solid.svg`,
              alt: `時間アイコン`,
            }}
          />
          <div
            className={css({
              fontWeight: `bold`,
              mr: `${8 / 3.75}vw`,
              fontSize: `${10 / 3.75}vw`,
            })}
          >
            時間
          </div>
          {offer.hours_short}
        </div>
      </div>
    </div>
  );
}
