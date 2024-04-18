// import layer
import { FC } from 'react';
import { Image as NImage } from 'components/images/Image';
import { routes } from 'constants/routes';
import { css } from 'styled-system/css';
import { Image } from '~/components/Image';
import { InternalLink } from '~/components/links/InternalLink';
import { OfferCard } from '../types';

// type layer
export type DataProps = OfferCard;
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const {
    title,
    hourly_wage,
    place_short,
    hours_short,
    start_at,
    end_at,
    occupation,
    id,
    image,
    job_type,
    company,
    company_name,
  } = props;
  const href = `${routes.offers}/${id}`;
  const currentDate = new Date();
  const startDateObj = new Date(start_at);
  const endDate = new Date(end_at);
  const endDateY = endDate.getFullYear();
  const endDateM = endDate.getMonth() + 1;
  const endDateD = endDate.getDate();
  const isNew =
    (currentDate.getTime() - startDateObj.getTime()) / (1000 * 3600 * 24);
  const isEnd = Math.ceil(
    (endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );
  console.log(company_name);
  //
  return (
    <InternalLink href={href}>
      {/* <Box display={'none'}>{createdByid}</Box> */}
      <div
        className={css({
          display: { base: `none`, lg: `block` },
          transitionProperty: `box-shadow`,
          transitionDuration: `0.3s`,
          transitionTimingFunction: `ease-in-out`,
          m: `auto`,
        })}
      >
        <div
          className={css({
            bg: `white`,
            w: `${700 / 19.2}vw`,
            h: `${363 / 19.2}vw`,
            py: `${30 / 19.2}vw`,
            pl: `${29 / 19.2}vw`,
            pr: `${33 / 19.2}vw`,
            fontFamily: `'Noto Sans JP', sans-serif`,
            position: `relative`,
          })}
        >
          {isNew <= 7 ? (
            <div
              className={css({
                position: `absolute`,
                top: `${20 / 19.2}vw`,
                right: `${33 / 19.2}vw`,
                color: `white`,
                bg: `#F26601`,
                border: `1px solid #F26601`,
                borderRadius: `${3 / 19.2}vw`,
                w: `${90 / 19.2}vw`,
                h: `${24 / 19.2}vw`,
                alignItems: `center`,
                justifyContent: `center`,
                fontWeight: `bold`,
                fontSize: `${14 / 19.2}vw`,
                display: `flex`,
              })}
            >
              NEW
            </div>
          ) : isEnd <= 10 ? (
            <div
              className={css({
                position: `absolute`,
                top: `${20 / 19.2}vw`,
                right: `${33 / 19.2}vw`,
                color: `#F26601`,
                alignItems: `end`,
                fontWeight: `bold`,
                fontSize: `${15 / 19.2}vw`,
                // position={`absolute`}
                // top={`${20 / 19.2}vw`}
                // right={`${33 / 19.2}vw`}
                // color={`#F26601`}
                // alignItems={`end`}
                // fontWeight={`bold`}
                // fontSize={`${15 / 19.2}vw`}
              })}
            >
              掲載終了まであと
              <span className={css({ fontSize: `${25 / 19.2}vw` })}>
                {isEnd}
              </span>
              日
            </div>
          ) : null}

          <div
            className={css({
              fontSize: `${18 / 19.2}vw`,
              mb: `${10 / 19.2}vw`,
              //  mb={`${10 / 19.2}vw`} fontSize={`${18 / 19.2}vw`}
            })}
          >
            {company_name}
          </div>
          <div
            className={css({
              fontWeight: `bold`,
              fontSize: `${25 / 19.2}vw`,
              color: `#41A4FD`,
              textDecoration: `underline #41A4FD`,
              textUnderlineOffset: `0.2em`,
              lineHeight: `1.5em`,
              h: `${74.5 / 19.2}vw`,
              textOverflow: `ellipsis`,
              overflow: `hidden`,
            })}
          >
            {title}
          </div>
          <div
            className={css({
              justifyContent: `space-between`,
              display: `flex`,
            })}
          >
            <NImage className={`photo`} image={{ ...image }} />
            <div className={css({ width: `${283 / 19.2}vw` })}>
              <div
                className={css({
                  justifyContent: `end`,
                  display: `flex`,
                  fontSize: `${13 / 19.2}vw`,
                  color: `#39414E`,
                  mt: `${25 / 19.2}vw`,
                })}
              >
                掲載終了 : {endDateY}年{endDateM}月{endDateD}日
              </div>
              <div className={css({ mt: `${15 / 19.2}vw`, color: `#39414E` })}>
                <div
                  className={css({
                    pl: `${20 / 19.2}vw`,
                    py: `${3 / 19.2}vw`,
                    alignItems: `center`,
                    fontWeight: `bold`,
                    fontSize: `${17 / 19.2}vw`,
                    bg: `rgba(254,207,2,0.1)`,
                    borderRadius: `${26 / 19.2}vw`,
                  })}
                >
                  <Image // eslint-disable-line
                    w={`${11.5 / 19.2}vw`}
                    h={`${16 / 19.2}vw`}
                    image={{
                      width: 11.5,
                      height: 16,
                      src: `/svg/yen-sign-solid.svg`,
                      alt: `お金アイコン`,
                    }}
                  />
                  <div className={css({ ml: `${13 / 19.2}vw` })}> 時給</div>
                  <div
                    className={css({ ml: `${13 / 19.2}vw`, color: `#F26601` })}
                  >
                    {hourly_wage}円
                  </div>
                </div>
              </div>
              <div className={css({ mt: `${15 / 19.2}vw`, color: `#39414E` })}>
                <div
                  className={css({
                    pl: `${17 / 19.2}vw`,
                    py: `${3 / 19.2}vw`,
                    alignItems: `center`,
                    fontWeight: `bold`,
                    fontSize: `${17 / 19.2}vw`,
                    bg: `rgba(254,207,2,0.1)`,
                    borderRadius: `${26 / 19.2}vw`,
                  })}
                >
                  {/* pl={`${17 / 19.2}vw`}
                  py={`${3 / 19.2}vw`}
                  alignItems={`center`}
                  fontWeight={`bold`}
                  fontSize={`${17 / 19.2}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 19.2}vw`}
                > */}
                  <Image // eslint-disable-line
                    w={`${16 / 19.2}vw`}
                    h={`${18.5 / 19.2}vw`}
                    image={{
                      width: 16,
                      height: 18.5,
                      src: `/svg/user-solid.svg`,
                      alt: `人型アイコン`,
                    }}
                  />
                  <div className={css({ ml: `${13 / 19.2}vw` })}>職種</div>
                  <div className={css({ ml: `${13 / 19.2}vw` })}>
                    {job_type}
                  </div>
                </div>
              </div>
              <div className={css({ mt: `${15 / 19.2}vw`, color: `#39414E` })}>
                <div
                  className={css({
                    pl: `${18 / 19.2}vw`,
                    py: `${3 / 19.2}vw`,
                    alignItems: `center`,
                    fontWeight: `bold`,
                    fontSize: `${17 / 19.2}vw`,
                    bg: `rgba(254,207,2,0.1)`,
                    borderRadius: `${26 / 19.2}vw`,
                    display: `flex`,
                  })}
                >
                  {/* pl={`${18 / 19.2}vw`}
                  py={`${3 / 19.2}vw`}
                  alignItems={`center`}
                  fontWeight={`bold`}
                  fontSize={`${17 / 19.2}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 19.2}vw`}
                > */}
                  <Image // eslint-disable-line
                    w={`${13.7 / 19.2}vw`}
                    h={`${18.3 / 19.2}vw`}
                    image={{
                      width: 13.7,
                      height: 18.3,
                      src: `/svg/location-dot-solid.svg`,
                      alt: `場所アイコン`,
                    }}
                  />
                  <div className={css({ ml: `${13 / 19.2}vw` })}>場所</div>
                  <div
                    className={css({
                      ml: `${13 / 19.2}vw`,
                      w: `${150 / 19.2}vw`,
                      overflow: `hidden`,
                      textOverflow: `ellipsis`,
                      whiteSpace: `nowrap`,
                    })}
                  >
                    {place_short}
                  </div>
                </div>
              </div>
              <div className={css({ mt: `${15 / 19.2}vw`, color: `#39414E` })}>
                <div
                  className={css({
                    display: `flex`,
                    pl: `${16 / 19.2}vw`,
                    py: `${3 / 19.2}vw`,
                    alignItems: `center`,
                    fontWeight: `bold`,
                    fontSize: `${17 / 19.2}vw`,
                    bg: `rgba(254,207,2,0.1)`,
                    borderRadius: `${26 / 19.2}vw`,
                  })}
                >
                  <Image // eslint-disable-line
                    w={`${16 / 19.2}vw`}
                    h={`${16 / 19.2}vw`}
                    image={{
                      width: 16,
                      height: 16,
                      src: `/svg/clock-solid.svg`,
                      alt: `時間アイコン`,
                    }}
                  />
                  <div className={css({ ml: `${13 / 19.2}vw` })}>時間</div>
                  <div className={css({ ml: `${50 / 19.2}vw` })}>
                    {hours_short}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css({
            display: `flex`,
            background: `transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`,
            w: `100%`,
            h: `${57 / 19.2}vw`,
            borderRadius: ` 0 0 ${15 / 19.2}vw ${15 / 19.2}vw`,
          })}
        >
          <div
            className={css({
              fontSize: `${18 / 19.2}vw`,
              fontFamily: `'Josefin Sans', sans-serif`,
              fontStyle: `italic`,
            })}
            // fontSize={`${18 / 19.2}vw`}
            // fontFamily={`"Josefin Sans"`}
            // fontStyle={`italic`}
          >{`CHECK >>`}</div>
        </div>
      </div>
      {/* ///////////////// */}

      {/* モバイルサイズ */}
      <div
        className={css({
          display: { base: `block`, lg: `none` },
          pb: `${44 / 3.75}vw`,
          m: `auto`,
          position: `relative`,
        })}
        // display={{ lg: `none` }}
        // pb={`${44 / 3.75}vw`}
        // m={'auto'}
        // position={`relative`}
        // // overflow={`hidden`}
        // css={styles}
      >
        <div
          className={css({
            bg: `#white`,
            w: `${335 / 3.75}vw`,
            h: `${200 / 3.75}vw`,
            borderRadius: `${10 / 3.75}vw ${10 / 3.75}vw 0 0`,
            fontFamily: `'Noto Sans JP', sans-serif`,
          })}
          // bg={`white`}
          // w={`${335 / 3.75}vw`}
          // h={`${200 / 3.75}vw`}
          // borderRadius={`${10 / 3.75}vw ${10 / 3.75}vw 0 0`}
          // fontFamily={`'Noto Sans JP', sans-serif`}
        >
          {isNew <= 7 ? (
            <div
              className={css({
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                borderRadius: `${3 / 3.75}vw`,
                w: `${40 / 3.75}vw`,
                h: `${12 / 3.75}vw`,
                position: `absolute`,
                top: `${10 / 3.75}vw`,
                right: `${10 / 3.75}vw`,
                color: `white`,
                bg: `#F26601`,
                fontWeight: `bold`,
                fontSize: `${10 / 3.75}vw`,
              })}
            >
              NEW
            </div>
          ) : isEnd <= 10 ? (
            <div
              className={css({
                display: `flex`,
                position: `absolute`,
                top: `${10 / 3.75}vw`,
                right: `${10 / 3.75}vw`,
                color: `#F26601`,
                alignItems: `end`,
                fontWeight: `bold`,
                fontSize: `${10 / 3.75}vw`,
              })}
            >
              掲載終了まであと
              <span className={css({ fontSize: `${13 / 3.75}vw` })}>
                {isEnd}
              </span>
              日
            </div>
          ) : null}
          <div className={css({ p: `${16 / 3.75}vw`, pb: `${10 / 3.75}vw` })}>
            <div
              className={css({
                mb: `${4 / 3.75}vw`,
                fontSize: `${10 / 3.75}vw`,
              })}
            >
              {/*createby.firstname*/}
            </div>
            <div
              className={css({
                textDecoration: `underline #41A4FD`,
                textUnderlineOffset: `0.2em`,
                fontSize: `${12 / 3.75}vw`,
                fontWeight: `bold`,
                h: `${37 / 3.75}vw`,
                overflow: `hidden`,
                textOverflow: `ellipsis`,
                lineHeight: `1.6em`,
                color: `#41A4FD`,
              })}
            >
              {/* textDecoration={`underline #41A4FD`}
              textUnderlineOffset={`0.2em`}
              fontSize={`${12 / 3.75}vw`}
              fontWeight={`bold`}
              h={`${37 / 3.75}vw`}
              overflow={`hidden`}
              textOverflow={`ellipsis`}
              lineHeight={`1.6em`}
              color={`#41A4FD`} */}

              {title}
            </div>
            <div
              className={css({
                mt: `${8 / 3.75}vw`,
                justifyContent: `space-between`,
                display: `flex`,
              })}
            >
              <NImage
                mt={`${5 / 3.75}vw`}
                className={`photo`}
                image={{ ...image }}
              />
              <div className={css({ direction: `column`, fontWeight: `500` })}>
                <div
                  className={css({
                    justifyContent: `end`,
                    display: `flex`,
                    fontSize: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                    fontWeight: `400`,
                    mb: { base: `${6 / 3.75}vw`, md: `${6 / 7.68}vw` },
                    color: `#39414E`,
                  })}
                >
                  掲載終了 : {endDateY}年{endDateM}月{endDateD}日
                </div>
                <div
                  className={css({
                    display: `flex`,
                    color: `#39414E`,
                    fontSize: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },

                    mb: `${5 / 3.75}vw`,
                    py: `${3 / 3.75}vw`,
                    bg: `rgba(254,207,2,0.1)`,
                    borderRadius: `${26 / 3.75}vw`,
                  })}
                >
                  <Image // eslint-disable-line
                    ml={`${10 / 3.75}vw`}
                    mr={`${10 / 3.75}vw`}
                    w={`${6 / 3.75}vw`}
                    h={`${9 / 3.75}vw`}
                    image={{
                      width: 24,
                      height: 30,
                      src: `/svg/yen-sign-solid.svg`,
                      alt: `お金アイコン`,
                    }}
                  />
                  <div
                    className={css({
                      color: `#39414E`,
                      fontWeight: `500`,
                      mr: `${8 / 3.75}vw`,
                    })}
                    // color={`#39414E`}
                    // fontWeight={`500`}
                    // mr={`${8 / 3.75}vw`}
                  >
                    時給
                  </div>
                  {hourly_wage}
                </div>
                <div
                  className={css({
                    display: `flex`,
                    mb: `${5 / 3.75}vw`,
                    py: `${3 / 3.75}vw`,
                    bg: `rgba(254,207,2,0.1)`,
                    borderRadius: `${26 / 3.75}vw`,
                    color: `#39414E`,
                  })}
                >
                  <Image // eslint-disable-line
                    ml={`${9 / 3.75}vw`}
                    mr={`${9 / 3.75}vw`}
                    w={`${8 / 3.75}vw`}
                    h={`${9 / 3.75}vw`}
                    image={{
                      width: 24,
                      height: 30,
                      src: `/svg/user-solid.svg`,
                      alt: `人型アイコン`,
                    }}
                  />
                  <div className={css({ mr: `${8 / 3.75}vw` })}>職種</div>
                  <div
                    className={css({
                      overflow: `hidden`,
                      textOverflow: `ellipsis`,
                      whiteSpace: `nowrap`,
                      w: `${90 / 3.75}vw`,
                    })}
                  >
                    {occupation}
                    {/*occupation.name*/}
                  </div>
                </div>
                <div
                  className={css({
                    display: `flex`,
                    color: `#39414E`,
                    fontSize: `${10 / 3.75}vw`,
                    mb: `${5 / 3.75}vw`,
                    py: `${3 / 3.75}vw`,
                    bg: `rgba(254,207,2,0.1)`,
                    borderRadius: `${26 / 3.75}vw`,
                  })}
                >
                  <Image // eslint-disable-line
                    ml={`${10 / 3.75}vw`}
                    mr={`${9 / 3.75}vw`}
                    w={`${7 / 3.75}vw`}
                    h={`${9 / 3.75}vw`}
                    image={{
                      width: 24,
                      height: 30,
                      src: `/svg/location-dot-solid.svg`,
                      alt: `場所アイコン`,
                    }}
                  />
                  <div className={css({ mr: `${8 / 3.75}vw` })}>場所</div>
                  <div
                    className={css({
                      overflow: `hidden`,
                      textOverflow: `ellipsis`,
                      whiteSpace: `nowrap`,
                      w: `${90 / 3.75}vw`,
                    })}
                  >
                    {place_short}
                  </div>
                </div>
                <div
                  className={css({
                    display: `flex`,
                    color: `#39414E`,
                    fontSize: `${10 / 3.75}vw`,
                    mb: `${5 / 3.75}vw`,
                    py: `${3 / 3.75}vw`,
                    bg: `rgba(254,207,2,0.1)`,
                    borderRadius: `${26 / 3.75}vw`,
                  })}
                >
                  <Image // eslint-disable-line
                    mt={`${1 / 3.75}vw`}
                    ml={`${9 / 3.75}vw`}
                    mr={`${10 / 3.75}vw`}
                    w={`${8 / 3.75}vw`}
                    h={`${8 / 3.75}vw`}
                    image={{
                      width: 24,
                      height: 30,
                      src: `/svg/clock-solid.svg`,
                      alt: `時間アイコン`,
                    }}
                  />
                  <div className={css({ mr: `${8 / 3.75}vw` })}>時間</div>
                  <div
                    className={css({
                      overflow: `hidden`,
                      textOverflow: `ellipsis`,
                      whiteSpace: `nowrap`,
                      w: `${90 / 3.75}vw`,
                    })}
                  >
                    {hours_short}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css({
              display: `flex`,
              width: `100%`,
              height: `${30 / 3.75}vw`,
              pl: `${16 / 3.75}vw`,
              pr: `${15 / 3.75}vw`,
              borderRadius: `${10 / 3.75}vw ${10 / 3.75}vw 0 0`,
              justifyContent: `space-between`,
              alignItems: `center`,
              color: `#39414E`,
              fontSize: `${10 / 3.75}vw`,
              fontWeight: `500`,
              background: `linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`,
            })}
          >
            <div>
              お祝い金
              <span
                className={css({
                  fontSize: `${13 / 3.75}vw`,
                  fontWeight: `bold`,
                })}
              >
                {job_type}
                {/*job_type.gift*/}
              </span>
              ポイントもらえる
            </div>
            <div
              className={css({
                mt: `${8 / 3.75}vw`,
                fontFamily: `'Josefin Sans'`,
                fontStyle: `italic`,
                fontWeight: `bold`,
              })}
            >{`CHECK >>`}</div>
          </div>
        </div>
      </div>
    </InternalLink>
  );
};

// const styles = css`
//   .photo {
//     width: ${148 / 3.75}vw;
//     height: ${86.2 / 3.75}vw;
//     border-radius: 5px;
//     overflow: hidden;
//     ${mq[2]} {
//       width: ${309 / 19.2}vw;
//       height: ${180 / 19.2}vw;
//       margin-top: ${23 / 19.2}vw;
//       border-radius: 5px;
//       object-fit: cover;
//     }
//   }
// `;
