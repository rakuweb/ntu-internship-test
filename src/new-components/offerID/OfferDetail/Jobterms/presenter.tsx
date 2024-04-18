// import layer
import { FC } from 'react';
import Image from 'next/image';
import { useTargetOfferStore, selectTarget } from 'features/offers';
import { css } from 'styled-system/css';
import {
  desiredInterviewDateList,
  desiredInterviewTimeList,
} from '~/features/requests';
// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);

  const list = [
    { title: `職種`, main: offer.occupation },
    { title: `募集人数`, main: offer.people },
    { title: `対象`, main: offer.target },
    { title: `雇用形態`, main: offer.job_type },
    { title: `給与形態`, main: `${offer.hourly_wage}円` },
    { title: `勤務時間`, main: offer.hours_short },
    { title: `最低勤務日数 `, main: offer.min_workingday },
    { title: `最低勤務期間 `, main: offer.min_period },
    { title: `休日`, main: offer.holiday },
    { title: `シフト詳細`, main: offer.shift },
    { title: `勤務場所`, main: offer.place_short },
    { title: `面接場所`, main: offer.interview_location },
    { title: `面接可能曜日`, main: offer.desired_interview_date },
    {
      title: `面接可能時間`,
      main:
        offer.desired_interview_time != desiredInterviewTimeList[6]
          ? offer.desired_interview_time
          : undefined,
    },
    { title: `面接について（備考）`, main: offer.interview_remarks },
    { title: `対象になる方・資格`, main: offer.qualification },
    { title: `おすすめポイント`, main: offer.points },
    { title: `選考方法`, main: offer.flow },
    { title: `会社名`, main: offer.company_name },
    { title: `会社詳細`, main: offer.url },
    { title: `求人番号`, main: offer.id },
  ];

  const convertStringToArray = (str: string) => {
    const array = str?.split(',') ?? '';
    if (array === '') return [''];
    return array.map((item) => item.trim());
  };
  const targetArray = convertStringToArray(list[2].main);
  const holidayArray = convertStringToArray(list[8].main);
  const dateArray = convertStringToArray(list[12].main);
  const timeArray = convertStringToArray(list[13].main);
  const pointArray = convertStringToArray(list[16].main);

  return (
    <div
      className={css({ w: `100%`, fontFamily: `'Noto Sans JP', sans-serif` })}
      {...props}
    >
      <div
        className={css({
          display: `flex`,
          mb: { base: `${12 / 3.75}vw`, md: `${40 / 19.2}vw` },
          borderBottom: {
            base: `${2 / 3.75}vw solid #41A4FD !important`,
            md: `${4 / 19.2}vw solid #41A4FD !important`,
          },
        })}
      >
        <Image
          src={`/svg/file-invoice-solid.svg`}
          className={css({
            ml: { base: `${10 / 3.75}vw`, md: `${23 / 19.2}vw` },
            mr: { base: `${5 / 3.75}vw`, md: `${13 / 19.2}vw` },
            mb: {
              base: `${0 / 3.75}vw`,
              md: `${2 / 7.68}vw`,
              lg: `${19 / 19.2}vw`,
            },
            w: {
              base: `${14 / 3.75}vw`,
              md: `${15 / 7.68}vw`,
              lg: `${32 / 19.2}vw`,
            },
            h: {
              base: `${21 / 3.75}vw`,
              md: `${22 / 7.68}vw`,
              lg: `${32 / 19.2}vw`,
            },
          })}
          alt={''}
          width={32}
          height={42}
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
          募集求人
        </div>
      </div>
      {list.map((list, index) =>
        list.main ? (
          <div key={list.title}>
            <div
              className={css({
                display: `flex`,

                fontSize: {
                  base: `${12 / 3.75}vw !important`,
                  md: `${13 / 7.68}vw !important`,
                  lg: `${22 / 19.2}vw !important`,
                },
                lineHeight: `1.4em`,
              })}
            >
              <div
                className={css({
                  display: `flex`,
                  borderBottom: {
                    base: `${
                      2 / 3.75
                    }vw solid rgba(65,164,253,0.25) !important`,
                    md: `${2 / 19.2}vw solid rgba(65,164,253,0.25) !important`,
                  },
                  w: `100%`,
                })}
              >
                <div
                  className={css({
                    fontWeight: `bold`,
                    bg: `#F9FCFE`,
                    pt: { base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` },
                    pb: { base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` },
                    pl: { base: `${14 / 3.75}vw`, md: `${40 / 19.2}vw` },
                    w: { base: `${145 / 4.28}vw`, md: `${320 / 19.2}vw` },
                    whiteSpace: { lg: `nowrap` },
                  })}
                >
                  {list.title}
                </div>

                {Array.isArray(list.main) ? (
                  <></>
                ) : (
                  <div>
                    <div
                      className={css({
                        display:
                          index === 2 ||
                          index === 8 ||
                          index === 12 ||
                          index === 13 ||
                          index === 16 ||
                          index === 19 ||
                          index === 20
                            ? `none`
                            : `block`,
                        fontSize: {
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        },
                        pt: { base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` },
                        pb: { base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` },
                        pl: { base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` },
                        whiteSpace: `pre-wrap`,

                        w: {
                          base: `${200 / 3.75}vw`,
                          md: `${310 / 7.68}vw`,
                          lg: `${670 / 19.2}vw`,
                        },
                      })}
                    >
                      {list.main}
                    </div>
                    <div
                      className={css({
                        display: index === 2 ? `block` : `none`,
                        fontSize: {
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        },
                        pt: { base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` },
                        pb: { base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` },
                        pl: { base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` },
                        whiteSpace: `pre-wrap`,
                        w: {
                          base: `${200 / 3.75}vw`,
                          md: `${310 / 7.68}vw`,
                          lg: `${670 / 19.2}vw`,
                        },
                      })}
                    >
                      {targetArray.map((target) => (
                        <div
                          className={css({
                            display: index === 2 ? `block` : `none`,
                            fontSize: {
                              base: `${10 / 3.75}vw`,
                              md: `${12 / 7.68}vw`,
                              lg: `${21 / 19.2}vw`,
                            },
                            whiteSpace: `pre-wrap`,
                            w: {
                              base: `${145 / 4.28}vw`,
                              md: `${320 / 19.2}vw !important`,
                            },
                          })}
                          key={target}
                        >
                          ・{target}
                        </div>
                      ))}
                    </div>
                    <div
                      className={css({
                        display: index === 8 ? `block` : `none`,
                        fontSize: {
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        },
                        whiteSpace: `pre-wrap`,
                        pt: { base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` },
                        pb: { base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` },
                        pl: { base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` },
                        w: {
                          base: `${200 / 3.75}vw`,
                          md: `${310 / 7.68}vw`,
                          lg: `${670 / 19.2}vw`,
                        },
                      })}
                    >
                      {holidayArray.map((day) => (
                        <div
                          className={css({
                            fontSize: {
                              base: `${10 / 3.75}vw`,
                              md: `${12 / 7.68}vw`,
                              lg: `${21 / 19.2}vw`,
                            },
                            whiteSpace: `pre-wrap`,
                          })}
                          key={day}
                        >
                          ・{day}
                        </div>
                      ))}
                    </div>
                    <div
                      className={css({
                        display: index === 12 ? `block` : `none`,
                        fontSize: {
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        },
                        pt: { base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` },
                        pb: { base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` },
                        pl: { base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` },
                        whiteSpace: `pre-wrap`,
                        w: {
                          base: `${200 / 3.75}vw`,
                          md: `${310 / 7.68}vw`,
                          lg: `${670 / 19.2}vw`,
                        },
                      })}
                    >
                      {dateArray.map((date) => (
                        <div
                          className={css({
                            fontSize: {
                              base: `${10 / 3.75}vw`,
                              md: `${12 / 7.68}vw`,
                              lg: `${21 / 19.2}vw`,
                            },
                            whiteSpace: `pre-wrap`,
                          })}
                          key={date}
                        >
                          ・{date}
                          {date == desiredInterviewDateList[7] ||
                          date == desiredInterviewDateList[8]
                            ? ``
                            : `曜日`}
                        </div>
                      ))}
                    </div>

                    <div
                      className={css({
                        display: index === 13 ? `block` : `none`,
                        fontSize: {
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        },
                        pt: { base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` },
                        pb: { base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` },
                        pl: { base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` },
                        whiteSpace: `pre-wrap`,
                        w: {
                          base: `${200 / 3.75}vw`,
                          md: `${310 / 7.68}vw`,
                          lg: `${670 / 19.2}vw`,
                        },
                      })}
                    >
                      {timeArray.map((time) => (
                        <div
                          className={css({
                            fontSize: {
                              base: `${10 / 3.75}vw`,
                              md: `${12 / 7.68}vw`,
                              lg: `${21 / 19.2}vw`,
                            },
                            whiteSpace: `pre-wrap`,
                          })}
                          key={time}
                        >
                          ・{time}
                        </div>
                      ))}
                    </div>
                    <div
                      className={css({
                        display: index === 16 ? `block` : `none`,

                        fontSize: {
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        },
                        pt: { base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` },
                        pb: { base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` },
                        pl: { base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` },
                        whiteSpace: `pre-wrap`,
                        w: {
                          base: `${200 / 3.75}vw`,
                          md: `${310 / 7.68}vw`,
                          lg: `${670 / 19.2}vw`,
                        },
                      })}
                    >
                      {pointArray.map((points) => (
                        <div
                          className={css({
                            fontSize: {
                              base: `${10 / 3.75}vw`,
                              md: `${12 / 7.68}vw`,
                              lg: `${21 / 19.2}vw`,
                            },
                            whiteSpace: `pre-wrap`,
                          })}
                          key={points}
                        >
                          ・{points}
                        </div>
                      ))}
                    </div>

                    <a
                      className={css({
                        display: index === 19 ? `block` : `none`,

                        fontSize: {
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        },
                        pt: { base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` },
                        pb: { base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` },
                        pl: { base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` },
                        whiteSpace: `pre-wrap`,
                        w: {
                          base: `${200 / 3.75}vw`,
                          md: `${310 / 7.68}vw`,
                          lg: `${670 / 19.2}vw`,
                        },

                        _hover: { opacity: 0.8, transition: `0.6s` },
                      })}
                      href={`${list.main}`}
                    >
                      {list.main}
                    </a>
                    <div
                      className={css({
                        display: index === 20 ? `block` : `none`,
                        fontSize: {
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        },
                        pt: { base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` },
                        pb: { base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` },
                        pl: { base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` },
                        whiteSpace: `pre-wrap`,
                        w: {
                          base: `${200 / 3.75}vw`,
                          md: `${310 / 7.68}vw`,
                          lg: `${670 / 19.2}vw`,
                        },
                      })}
                    >
                      {`100`}
                      {list.main}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );
};
