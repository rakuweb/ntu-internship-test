// import layer
import Image from 'next/image';
import { useTargetOfferStore, selectTarget } from 'features/offers';
import { css } from 'styled-system/css';
import { routes } from '~/constants';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export function Presenter({ ...props }: PresenterProps) {
  const offer = useTargetOfferStore(selectTarget);

  return (
    <div
      className={css({
        display: { md: `none` },
        color: `#39414E`,
        fontFamily: `'Noto Sans JP', sans-serif`,
      })}
      {...props}
    >
      <div
        className={css({ w: `fit-content`, mt: `${10 / 3.75}vw`, mx: `auto` })}
      >
        <a
          className={css({
            _hover: { opacity: 0.8, transition: `0.6s` },
          })}
          href={routes.offersJobForm(offer.id)}
        >
          <div
            className={css({
              display: `flex`,
              alignItems: `center`,
              paddingLeft: `${38 / 3.75}vw`,
              paddingY: `${10 / 4.28}vw`,
              background: `transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`,
              color: `white`,
              fontSize: `${18 / 3.75}vw`,
              fontWeight: `bold`,
              borderRadius: `${5 / 3.75}vw`,
              width: `${200 / 3.75}vw`,
            })}
          >
            <Image
              src="/svg/paper-plane-solid.svg"
              className={css({
                width: `${20 / 3.75}vw`,
                height: `${20 / 3.75}vw`,
                marginRight: `${15 / 3.75}vw`,
              })}
              alt={''}
              width={35}
              height={35}
            />
            応募する
          </div>
        </a>
      </div>
    </div>
  );
}
