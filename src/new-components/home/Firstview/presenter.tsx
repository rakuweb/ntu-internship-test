// import layer
import { FC } from 'react';
import { css } from 'styled-system/css';
// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <div
      className={css({ w: `100%`, position: `relative`, overflow: `hidden` })}
      {...props}
    >
      <h1 className={css({ display: `none` })}>
        {`新大生のための求人サイトFORJOB`}
      </h1>
      <img // eslint-disable-line
        // WARN:
        src="/images/offers/firstview.webp"
        className={css({
          display: { base: `none`, lg: `block` },
          position: `absolute`,
          top: 0,
          left: 0,
          w: `100%`,
          h: `100%`,
          objectFit: `cover`,
        })}
      />
      <img // eslint-disable-line
        // WARN:
        src="/images/offers/fvmobile.png"
        className={css({
          display: { lg: `none !important` },
          position: `absolute`,
          top: 0,
          left: 0,
          w: `100%`,
          h: `${396 / 3.75}vw`,
        })}
      />
      <div
        className={css({
          display: `flex`,
          bgColor: { base: `#ffffff`, lg: 'var(--white)' },
          w: `100%`,
          h: { base: `${396 / 3.75}vw`, lg: `${705 / 19.2}vw` },
          mx: { lg: `auto` },
          fontFamily: `'Noto Sans JP', sans-serif`,
        })}
      >
        <div
          className={css({
            mx: { lg: `auto` },
            mt: { base: `${40 / 3.75}vw`, lg: `${186 / 19.2}vw` },
            position: `relative`,
          })}
        >
          <img
            src="/images/offers/fvlogo.png"
            className={css({
              display: { base: `none !important`, lg: `block !important` },
              top: 0,
              left: 0,
              w: `${1467 / 19.2}vw`,
              h: `${319 / 19.2}vw`,
              objectFit: `cover`,
            })}
          />
        </div>
      </div>
    </div>
  );
};
