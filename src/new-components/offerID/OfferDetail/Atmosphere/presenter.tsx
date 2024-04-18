// import layer
import { FC } from 'react';
import { useTargetOfferStore, selectTarget } from 'features/offers';
import { css } from 'styled-system/css';
import 'zenn-content-css';
// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);

  return (
    <div
      className={css({
        width: `100%`,
        fontFamily: `'Noto Sans JP', sans-serif`,
      })}
      {...props}
    >
      <div
        className={css({
          display: `flex`,
          mb: { base: `${20 / 3.75}vw`, md: `${40 / 19.2}vw` },
          borderBottom: {
            base: `${2 / 3.75}vw solid #41A4FD  !important`,
            md: `${4 / 19.2}vw solid #41A4FD !important`,
          },
        })}
      >
        <img
          src={`/svg/building-solid.svg`}
          loading="lazy"
          className={css({
            ml: { base: `${10 / 3.75}vw`, md: `${23 / 19.2}vw` },
            mr: { base: `${5 / 3.75}vw`, md: `${13 / 19.2}vw` },
            mb: {
              base: `${5 / 3.75}vw`,
              md: `${2 / 7.68}vw`,
              lg: `${19 / 19.2}vw`,
            },
            w: {
              base: `${13 / 3.75}vw`,
              md: `${15 / 7.68}vw`,
              lg: `${32 / 19.2}vw`,
            },
            h: {
              base: `${15 / 3.75}vw`,
              md: `${22 / 7.68}vw`,
              lg: `${32 / 19.2}vw`,
            },
          })}
        />
        <div
          className={css({
            mt: { base: ``, md: `${3 / 19.2}vw` },
            fontSize: {
              base: `${15 / 3.75}vw`,
              md: `${16 / 7.68}vw`,
              lg: `${36 / 19.2}vw`,
            },
            fontWeight: `bold`,
          })}
        >
          職場情報
        </div>
      </div>
      {offer.atmosphere.map((list) => (
        <div
          className={css({
            display: `flex`,
            flexFlow: { base: `column`, md: `row` },
            mb: { base: `${20 / 3.75}vw`, md: `${48 / 19.2}vw` },
          })}
          key={list.title}
        >
          {list.image && (
            <img
              loading="lazy"
              src={list.image.src}
              className={css({
                objectFit: `cover`,
                w: {
                  base: `${173 / 3.75}vw `,
                  md: `${120 / 7.68}vw`,
                  lg: `${288 / 19.2}vw`,
                },
                h: {
                  base: `${100 / 3.75}vw !important`,
                  md: `${79 / 7.68}vw !important`,
                  lg: `${168 / 19.2}vw !important`,
                },
                borderRadius: { base: `${5 / 3.75}vw`, md: `${5 / 19.2}vw` },
                ml: { base: `${75 / 3.75}vw`, md: `${70 / 19.2}vw` },
                mr: { base: ``, md: `${47 / 19.2}vw` },
                mb: { base: `${12.5 / 3.75}vw`, md: `initial` },
                overflow: `hidden`,
              })}
            />
          )}
          <div
            className={css({
              w: { base: ``, md: `${250 / 7.68}vw`, lg: `${525 / 19.2}vw` },
              fontWeight: `bold`,
              mx: { base: `${15 / 3.75}vw`, md: `initial` },
              fontSize: {
                base: `${10.5 / 3.75}vw`,
                md: `${12 / 7.68}vw`,
                lg: `${22 / 19.2}vw`,
              },
              lineHeight: `1.18em`,
              whiteSpace: `pre-wrap`,
            })}
          >
            {list.title}
            <div
              className={css({
                fontSize: {
                  base: `${10 / 3.75}vw`,
                  md: `${10 / 7.68}vw`,
                  lg: `${21 / 19.2}vw`,
                },
                fontWeight: `normal`,
                lineHeight: `1.45em`,
                mt: { base: `${7.7 / 3.75}vw`, md: `${16 / 19.2}vw` },
                whiteSpace: `pre-wrap`,
              })}
            >
              <div className={css({ display: { base: `none`, md: `block` } })}>
                {list.text}
              </div>
              <div className={css({ display: { base: `block`, md: `none` } })}>
                {list.text}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
