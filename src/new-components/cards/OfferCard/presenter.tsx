// import layer
import { FC } from 'react';
import { routes } from 'constants/routes';
import { css, cx } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import type { OfferCard } from 'features/offers/types';

// type layer
export type DataProps = OfferCard;
export type PresenterProps = DataProps & {
  onClick?: () => void;
};

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
    job_type: _job_type,
    company: _company,
    company_name,
    ...remain
  } = props;
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

  return (
    <div>
      {/* モバイルサイズ */}
      <div
        className={css({
          w: { base: `${335 / 3.75}vw`, md: `${335 / 7.68}vw` },
          display: { lg: `none` },
          position: `relative`,
          borderRadius: { base: `${15 / 3.75}vw`, md: `${15 / 7.68}vw` },
          overflow: `hidden`,
          boxShadow: `0px ${3 / 3.75}vw ${6 / 3.75}vw #00000029`,
        })}
      >
        <a
          className={css({
            _hover: { opacity: 0.8, transition: `0.6s` },
          })}
          href={routes.offerID(id)}
        >
          <div
            className={css({
              bg: `white`,
              fontFamily: `'Noto Sans JP', sans-serif`,
            })}
          >
            {isNew <= 7 ? (
              <div
                className={flex({
                  alignItems: `center`,
                  justify: `center`,
                  borderRadius: `${3 / 3.75}vw`,
                  w: { base: `${40 / 3.75}vw`, md: `${40 / 7.68}vw` },
                  h: { base: `${12 / 3.75}vw`, md: `${12 / 7.68}vw` },
                  position: `absolute`,
                  top: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                  right: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                  color: `white`,
                  bg: `#F26601`,
                  fontWeight: `bold`,
                  fontSize: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                })}
              >
                NEW
              </div>
            ) : isEnd <= 10 ? (
              isEnd === 0 ? (
                <div
                  className={flex({
                    position: `absolute`,
                    top: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                    right: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                    color: `#F26601`,
                    alignItems: `end`,
                    fontWeight: `bold`,
                    fontSize: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                  })}
                >
                  <span
                    className={css({
                      fontSize: {
                        base: `${13 / 3.75}vw`,
                        md: `${13 / 7.68}vw`,
                      },
                    })}
                  >
                    本日掲載終了
                  </span>
                </div>
              ) : (
                <div
                  className={flex({
                    position: `absolute`,
                    top: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                    right: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                    color: `#F26601`,
                    alignItems: `end`,
                    fontWeight: `bold`,
                    fontSize: { base: `${8 / 3.75}vw`, md: `${10 / 7.68}vw` },
                  })}
                >
                  掲載終了まであと
                  <span
                    className={css({
                      fontSize: {
                        base: `${13 / 3.75}vw`,
                        md: `${13 / 7.68}vw`,
                      },
                    })}
                  >
                    {isEnd}
                  </span>
                  日
                </div>
              )
            ) : null}
            <div
              className={css({
                p: { base: `${16 / 3.75}vw`, md: `${16 / 7.68}vw` },
                pb: { base: `${11 / 3.75}vw`, md: `${11 / 7.68}vw` },
              })}
            >
              <div
                className={css({
                  mb: { base: `${4 / 3.75}vw`, md: `${4 / 7.68}vw` },
                  fontSize: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                  w: { base: `${220 / 3.75}vw`, md: `${250 / 7.68}vw` },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                })}
              >
                {company_name}
              </div>
              <div
                className={css({
                  fontSize: { base: `${12 / 3.75}vw`, md: `${12 / 7.68}vw` },
                  fontWeight: `bold`,
                  h: { base: `${37 / 3.75}vw`, md: `${37 / 7.68}vw` },
                  textDecoration: `underline #41A4FD`,
                  textUnderlineOffset: `0.2em`,
                  overflow: `hidden`,
                  textOverflow: `ellipsis`,
                  lineHeight: `1.6em`,
                  color: `#41A4FD`,
                })}
              >
                {title}
              </div>
              <div
                className={flex({
                  mt: { base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` },
                  justify: `space-between`,
                })}
              >
                <img // eslint-disable-line
                  // WARN:
                  src={image?.src || 'none'}
                  className={cx(
                    css({
                      w: { base: `${148 / 3.75}vw`, md: `${148 / 7.68}vw` },
                      h: { base: `${86.2 / 3.75}vw`, md: `${86.2 / 7.68}vw` },
                      mt: { base: `${5 / 3.75}vw`, md: `${5 / 7.68}vw` },
                      borderRadius: '5px',
                      overflow: `hidden`,
                      objectFit: { base: 'cover' },
                    })
                  )}
                  style={{ objectFit: `cover` }}
                />
                <div
                  className={flex({
                    direction: `column`,
                    fontWeight: `500`,
                  })}
                >
                  <div
                    className={flex({
                      justify: `end`,
                      fontSize: {
                        base: `${10 / 3.75}vw`,
                        md: `${10 / 7.68}vw`,
                      },
                      fontWeight: `400`,
                      mb: { base: `${6 / 3.75}vw`, md: `${6 / 7.68}vw` },
                      color: `#39414E`,
                      lineHeight: `1em!`,
                    })}
                  >
                    掲載終了 : {endDateY}年{endDateM}月{endDateD}日
                  </div>
                  <div
                    className={flex({
                      fontWeight: `bold`,
                      color: `#F26601`,
                      fontSize: {
                        base: `${10 / 3.75}vw`,
                        md: `${10 / 7.68}vw`,
                      },
                      mb: { base: `${5 / 3.75}vw`, md: `${5 / 7.68}vw` },
                      py: { base: `${3 / 3.75}vw`, md: `${3 / 7.68}vw` },
                      bg: `rgba(254,207,2,0.1)`,
                      borderRadius: {
                        base: `${26 / 3.75}vw`,
                        md: `${26 / 7.68}vw`,
                      },
                    })}
                  >
                    <img // eslint-disable-line
                      // WARN:
                      src="/svg/yen-sign-solid.svg"
                      className={css({
                        ml: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                        mr: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        w: { base: `${6 / 3.75}vw`, md: `${6 / 7.68}vw` },
                      })}
                    />
                    <div
                      className={css({
                        color: `#39414E`,
                        fontWeight: `500`,
                        mr: { base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` },
                        lineHeight: `1em!`,
                      })}
                    >
                      給与
                    </div>
                    <div
                      className={css({
                        overflow: `hidden`,
                        textOverflow: `ellipsis`,
                        whiteSpace: `nowrap`,
                        w: { base: `${90 / 3.75}vw`, md: `${90 / 7.68}vw` },
                        lineHeight: `1em!`,
                      })}
                    >
                      {hourly_wage}円
                    </div>
                  </div>
                  <div
                    className={flex({
                      fontSize: {
                        base: `${10 / 3.75}vw`,
                        md: `${10 / 7.68}vw`,
                      },
                      mb: { base: `${5 / 3.75}vw`, md: `${5 / 7.68}vw` },
                      py: { base: `${3 / 3.75}vw`, md: `${3 / 7.68}vw` },
                      bg: `rgba(254,207,2,0.1)`,
                      borderRadius: `${26 / 3.75}vw`,
                      color: `#39414E`,
                      lineHeight: `1em!`,
                    })}
                  >
                    <img // eslint-disable-line
                      // WARN:
                      src="/svg/user-solid.svg"
                      className={css({
                        ml: { base: `${9 / 3.75}vw`, md: `${9 / 7.68}vw` },
                        mr: { base: `${9 / 3.75}vw`, md: `${9 / 7.68}vw` },
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        w: { base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` },
                      })}
                    />
                    <div
                      className={css({
                        mr: { base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` },
                      })}
                    >
                      職種
                    </div>
                    <div
                      className={css({
                        overflow: `hidden`,
                        textOverflow: `ellipsis`,
                        whiteSpace: `nowrap`,
                        w: { base: `${90 / 3.75}vw`, md: `${90 / 7.68}vw` },
                      })}
                    >
                      {occupation}
                    </div>
                  </div>
                  <div
                    className={flex({
                      fontSize: {
                        base: `${10 / 3.75}vw`,
                        md: `${10 / 7.68}vw`,
                      },
                      mb: { base: `${5 / 3.75}vw`, md: `${5 / 7.68}vw` },
                      py: { base: `${3 / 3.75}vw`, md: `${3 / 7.68}vw` },
                      bg: `rgba(254,207,2,0.1)`,
                      borderRadius: {
                        base: `${26 / 3.75}vw`,
                        md: `${26 / 7.68}vw`,
                      },
                      color: `#39414E`,
                      lineHeight: `1em!`,
                    })}
                  >
                    <img // eslint-disable-line
                      // WARN:
                      src="/svg/location-dot-solid.svg"
                      className={css({
                        ml: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                        mr: { base: `${9 / 3.75}vw`, md: `${9 / 7.68}vw` },
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        w: { base: `${7 / 3.75}vw`, md: `${7 / 7.68}vw` },
                      })}
                    />
                    <div
                      className={css({
                        mr: { base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` },
                      })}
                    >
                      場所
                    </div>
                    <div
                      className={css({
                        overflow: `hidden`,
                        textOverflow: `ellipsis`,
                        whiteSpace: `nowrap`,
                        w: { base: `${90 / 3.75}vw`, md: `${90 / 7.68}vw` },
                      })}
                    >
                      {place_short}
                    </div>
                  </div>
                  <div
                    className={flex({
                      fontSize: {
                        base: `${10 / 3.75}vw`,
                        md: `${10 / 7.68}vw`,
                      },
                      mb: { base: `${5 / 3.75}vw`, md: `${5 / 7.68}vw` },
                      py: { base: `${3 / 3.75}vw`, md: `${3 / 7.68}vw` },
                      bg: `rgba(254,207,2,0.1)`,
                      borderRadius: {
                        base: `${26 / 3.75}vw`,
                        md: `${26 / 7.68}vw`,
                      },
                      color: `#39414E`,
                      lineHeight: `1em!`,
                    })}
                  >
                    <img // eslint-disable-line
                      // WARN:
                      src="/svg/clock-solid.svg"
                      className={css({
                        mt: { base: `${1 / 3.75}vw`, md: `${1 / 7.68}vw` },
                        ml: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                        mr: { base: `${9 / 3.75}vw`, md: `${9 / 7.68}vw` },
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        w: { base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` },
                      })}
                    />
                    <div
                      className={css({
                        mr: { base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` },
                      })}
                    >
                      時間
                    </div>
                    <div
                      className={css({
                        overflow: `hidden`,
                        textOverflow: `ellipsis`,
                        whiteSpace: `nowrap`,
                        w: { base: `${90 / 3.75}vw`, md: `${90 / 7.68}vw` },
                      })}
                    >
                      {hours_short}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={flex({
                w: `100%`,
                h: { base: `${30 / 3.75}vw`, md: `${30 / 7.68}vw` },
                pl: { base: `${16 / 3.75}vw`, md: `${16 / 7.68}vw` },
                pr: { base: `${15 / 3.75}vw`, md: `${15 / 7.68}vw` },
                fontSize: { base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` },
                alignItems: `center`,
                justify: `flex-end`,
                color: `white`,
                fontWeight: `500`,
                background: `transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`,
              })}
            >
              <div
                className={css({
                  mt: { base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` },
                  fontFamily: `'Josefin Sans', sans-serif`,
                  fontStyle: `italic`,
                  fontWeight: `bold`,
                })}
              >{`CHECK >>`}</div>
            </div>
          </div>
        </a>
      </div>

      {/* PCサイズ */}
      <div
        className={css({
          display: { base: `none`, lg: `block` },
          w: { lg: `${700 / 19.2}vw` },
          borderRadius: { lg: `${15 / 19.2}vw` },
          boxShadow: `0px 3px 6px #00000029`,
          overflow: `hidden`,
        })}
        {...remain}
      >
        <a
          className={css({
            _hover: { opacity: 0.6, transition: `0.6s` },
          })}
          href={routes.offerID(id)}
        >
          <div
            className={css({
              transitionProperty: `box-shadow`,
              transitionDuration: '0.3s',
              transitionTimingFunction: 'ease-in-out',
              m: 'auto',
            })}
          >
            <div
              className={css({
                bg: `white`,
                // h: `${363 / 19.2}vw`,
                py: `${30 / 19.2}vw`,
                pl: `${29 / 19.2}vw`,
                pr: `${33 / 19.2}vw`,
                fontFamily: `'Noto Sans JP', sans-serif`,
                position: `relative`,
                lineHeight: `1em`,
              })}
            >
              {isNew <= 7 ? (
                <div
                  className={flex({
                    position: `absolute`,
                    top: `${30 / 19.2}vw`,
                    right: `${33 / 19.2}vw`,
                    color: `white`,
                    bg: `#F26601`,
                    border: `1px solid #F26601`,
                    borderRadius: `${3 / 19.2}vw`,
                    w: `${90 / 19.2}vw`,
                    h: `${24 / 19.2}vw`,
                    alignItems: `center`,
                    justify: `center`,
                    fontWeight: `bold`,
                    fontSize: `${14 / 19.2}vw`,
                  })}
                >
                  NEW
                </div>
              ) : isEnd <= 10 ? (
                isEnd === 0 ? (
                  <div
                    className={flex({
                      position: `absolute`,
                      top: `${20 / 19.2}vw`,
                      right: `${33 / 19.2}vw`,
                      color: `#F26601`,
                      alignItems: `end`,
                      fontWeight: `bold`,
                      fontSize: `${15 / 19.2}vw`,
                    })}
                  >
                    <span
                      className={css({
                        fontSize: `${25 / 19.2}vw`,
                      })}
                    >
                      本日掲載終了
                    </span>
                  </div>
                ) : (
                  <div
                    className={flex({
                      position: `absolute`,
                      top: `${20 / 19.2}vw`,
                      right: `${33 / 19.2}vw`,
                      color: `#F26601`,
                      alignItems: `end`,
                      fontWeight: `bold`,
                      fontSize: `${15 / 19.2}vw`,
                    })}
                  >
                    掲載終了まであと
                    <span
                      className={css({
                        fontSize: `${25 / 19.2}vw`,
                      })}
                    >
                      {isEnd}
                    </span>
                    日
                  </div>
                )
              ) : null}
              <div
                className={css({
                  mb: `${10 / 19.2}vw`,
                  fontSize: `${18 / 19.2}vw`,
                  w: `${520 / 19.2}vw`,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
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
                  h: `300pxw`,
                  textOverflow: `ellipsis`,
                  overflow: `hidden`,
                })}
              >
                {title}
              </div>
              <div
                className={flex({
                  justify: `space-between`,
                })}
              >
                <img // eslint-disable-line
                  // WARN:
                  src={image?.src || 'none'}
                  className={cx(
                    css({
                      w: `${309 / 19.2}vw`,
                      h: `${180 / 19.2}vw !important`,
                      mt: ` ${23 / 19.2}vw`,
                      borderRadius: { base: `5px` },
                      overflow: 'hidden',
                      objectFit: { lg: `cover` },
                    })
                  )}
                  style={{ objectFit: `cover` }}
                />

                <div
                  className={css({
                    w: `${283 / 19.2}vw`,
                  })}
                >
                  <div
                    className={flex({
                      mt: `${25 / 19.2}vw`,
                      fontSize: `${13 / 19.2}vw`,
                      justify: `end`,
                      color: `#39414E`,
                    })}
                  >
                    掲載終了 :{endDateY}年{endDateM}月{endDateD}日
                  </div>
                  <div
                    className={css({
                      mt: `${15 / 19.2}vw`,
                      color: `#39414E`,
                    })}
                  >
                    <div
                      className={flex({
                        pl: `${20 / 19.2}vw`,
                        py: `${3 / 19.2}vw`,
                        alignItems: `center`,
                        fontWeight: `bold`,
                        fontSize: `${17 / 19.2}vw`,
                        bg: `rgba(254,207,2,0.1)`,
                        borderRadius: `${26 / 19.2}vw`,
                      })}
                    >
                      <img // eslint-disable-line
                        // WARN:
                        src="/svg/yen-sign-solid.svg"
                        className={css({
                          w: `${11.5 / 19.2}vw`,
                          h: `${16 / 19.2}vw`,
                        })}
                      />
                      <div
                        className={css({
                          ml: `${13 / 19.2}vw`,
                        })}
                      >
                        給与
                      </div>
                      <div
                        className={css({
                          ml: `${50 / 19.2}vw`,
                          color: `#F26601`,
                          w: `${150 / 19.2}vw`,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        })}
                      >
                        {hourly_wage}円
                      </div>
                    </div>
                  </div>
                  <div
                    className={css({
                      mt: `${15 / 19.2}vw`,
                      color: `#39414E`,
                    })}
                  >
                    <div
                      className={flex({
                        pl: `${17 / 19.2}vw`,
                        py: `${3 / 19.2}vw`,
                        alignItems: `center`,
                        fontWeight: `bold`,
                        fontSize: `${17 / 19.2}vw`,
                        bg: `rgba(254,207,2,0.1)`,
                        borderRadius: `${26 / 19.2}vw`,
                      })}
                    >
                      <img // eslint-disable-line
                        // WARN:
                        src="/svg/user-solid.svg"
                        className={css({
                          w: `${16 / 19.2}vw`,
                          h: `${18.5 / 19.2}vw`,
                        })}
                      />
                      <div
                        className={css({
                          ml: `${12 / 19.2}vw`,
                        })}
                      >
                        職種
                      </div>
                      <div
                        className={css({
                          ml: `${50 / 19.2}vw`,
                        })}
                      >
                        {occupation}
                      </div>
                    </div>
                  </div>
                  <div
                    className={css({
                      mt: `${15 / 19.2}vw`,
                      color: `#39414E`,
                    })}
                  >
                    <div
                      className={flex({
                        pl: `${18 / 19.2}vw`,
                        py: `${3 / 19.2}vw`,
                        alignItems: `center`,
                        fontWeight: `bold`,
                        fontSize: `${17 / 19.2}vw`,
                        bg: `rgba(254,207,2,0.1)`,
                        borderRadius: `${26 / 19.2}vw`,
                      })}
                    >
                      <img // eslint-disable-line
                        // WARN:
                        src="/svg/location-dot-solid.svg"
                        className={css({
                          w: `${13.7 / 19.2}vw`,
                          h: `${18.3 / 19.2}vw`,
                        })}
                      />
                      <div
                        className={css({
                          ml: `${12 / 19.2}vw`,
                        })}
                      >
                        場所
                      </div>
                      <div
                        className={css({
                          ml: `${50 / 19.2}vw`,
                          w: `${150 / 19.2}vw`,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        })}
                      >
                        {place_short}
                      </div>
                    </div>
                  </div>
                  <div
                    className={flex({
                      mt: `${15 / 19.2}vw`,
                      color: `#39414E`,
                    })}
                  >
                    <div
                      className={flex({
                        pl: `${16 / 19.2}vw`,
                        py: `${3 / 19.2}vw`,
                        alignItems: `center`,
                        fontWeight: `bold`,
                        fontSize: `${17 / 19.2}vw`,
                        bg: `rgba(254,207,2,0.1)`,
                        borderRadius: `${26 / 19.2}vw`,
                      })}
                    >
                      <img // eslint-disable-line
                        // WARN:
                        src="/svg/clock-solid.svg"
                        className={css({
                          w: `${16 / 19.2}vw`,
                          h: `${16 / 19.2}vw`,
                        })}
                      />
                      <div
                        className={css({
                          ml: `${12 / 19.2}vw`,
                        })}
                      >
                        時間
                      </div>
                      <div
                        className={css({
                          ml: `${50 / 19.2}vw`,
                          w: `${150 / 19.2}vw`,
                        })}
                      >
                        {hours_short}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={flex({
                background: `transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`,
                w: `${700 / 19.2}vw`,
                h: `${57 / 19.2}vw`,
                borderRadius: ` 0 0 ${15 / 19.2}vw ${15 / 19.2}vw`,
                justify: `flex-end`,
                pl: `${28 / 19.2}vw`,
                pr: `${23 / 19.2}vw`,
                pb: `${14 / 19.2}vw`,
                fontWeight: `bold`,
                alignItems: `flex-end`,
                color: `white`,
                fontFamily: `'Noto Sans JP', sans-serif`,
              })}
            >
              <div
                className={css({
                  fontSize: `${18 / 19.2}vw`,
                  fontFamily: `'Josefin Sans', sans-serif`,
                  fontStyle: `italic`,
                })}
              >{`CHECK >>`}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
