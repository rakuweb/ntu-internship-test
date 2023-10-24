// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Image } from 'components/images/Image';

import { useTargetOfferStore, selectTarget } from 'features/offers';
import { ExternalLink } from '~/components/links/ExternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);

  const list = [
    { title: `職種`, main: offer.occupation },
    // { title: `職種`, main: offer.occupation.name },
    { title: `募集人数`, main: offer.people },
    { title: `対象`, main: offer.target },
    { title: `雇用形態`, main: offer.job_type },
    // { title: `雇用形態`, main: offer.job_type.name },
    { title: `時給`, main: `${offer.hourly_wage}円` },
    { title: `勤務時間`, main: offer.hours_short },
    // { title: `最低労働時間`, main: offer.min_working_hours },
    { title: `最低勤務日数 `, main: offer.min_workingday },
    // { title: `最低勤務日数 `, main: offer.min_workingday.days },
    { title: `最低勤務期間 `, main: offer.min_period },
    // { title: `最低勤務期間 `, main: offer.min_period.period },
    { title: `休日・休暇`, main: offer.holiday },
    { title: `シフト詳細`, main: offer.shift },
    { title: `勤務場所`, main: offer.place_short },
    { title: `面接場所`, main: offer.interview_location },
    { title: `面接可能曜日`, main: offer.desired_interview_date },
    { title: `面接可能時間`, main: offer.desired_interview_time },
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
  const pointArray = convertStringToArray(list[15].main);

  return (
    <Box w={`100%`} fontFamily={`'Noto Sans JP', sans-serif`} {...props}>
      <Flex
        mb={{ base: `${12 / 3.75}vw`, md: `${40 / 19.2}vw` }}
        borderBottom={{
          base: `${2 / 3.75}vw solid #41A4FD`,
          md: `${4 / 19.2}vw solid #41A4FD`,
        }}
      >
        <Image // eslint-disable-line
          ml={{ base: `${10 / 3.75}vw`, md: `${23 / 19.2}vw` }}
          mr={{ base: `${5 / 3.75}vw`, md: `${13 / 19.2}vw` }}
          mb={{
            base: `${0 / 3.75}vw`,
            md: `${2 / 7.68}vw`,
            lg: `${19 / 19.2}vw`,
          }}
          w={{
            base: `${14 / 3.75}vw`,
            md: `${15 / 7.68}vw`,
            lg: `${32 / 19.2}vw`,
          }}
          h={{
            base: `${21 / 3.75}vw`,
            md: `${22 / 7.68}vw`,
            lg: `${32 / 19.2}vw`,
          }}
          image={{
            width: 32,
            height: 42,
            src: `/svg/file-invoice-solid.svg`,
            alt: `書類のアイコン`,
          }}
        />
        <Box
          mt={{ base: ``, md: `${3 / 19.2}vw` }}
          fontSize={{
            base: `${15 / 3.75}vw`,
            md: `${16 / 7.68}vw`,
            lg: `${36 / 19.2}vw`,
          }}
          fontWeight={`bold`}
        >
          募集求人
        </Box>
      </Flex>
      {list.map((list, index) => (
        <div key={list.title}>
          <Flex
            borderBottom={{
              base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
              md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
            }}
            fontSize={{
              base: `${12 / 3.75}vw`,
              md: `${13 / 7.68}vw`,
              lg: `${22 / 19.2}vw`,
            }}
            // fontWeight={`bold`}
            lineHeight={`1.4em`}
          >
            <Flex>
              <Box
                fontWeight={`bold`}
                bg={`#F9FCFE`}
                pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                pl={{ base: `${14 / 3.75}vw`, md: `${40 / 19.2}vw` }}
                w={{ base: `${145 / 4.28}vw`, md: `${320 / 19.2}vw` }}
              >
                {list.title}
              </Box>

              {Array.isArray(list.main) ? (
                <></>
              ) : (
                <div>
                  <Box
                    display={
                      index === 2 ||
                      index === 8 ||
                      index === 12 ||
                      index === 13 ||
                      index === 15 ||
                      index === 18 ||
                      index === 19
                        ? `none`
                        : `block`
                    }
                    fontSize={{
                      base: `${10 / 3.75}vw`,
                      md: `${12 / 7.68}vw`,
                      lg: `${21 / 19.2}vw`,
                    }}
                    pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                    pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                    pl={{ base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` }}
                    whiteSpace={`pre-wrap`}
                    w={{
                      base: `${200 / 3.75}vw`,
                      md: `${310 / 7.68}vw`,
                      lg: `${670 / 19.2}vw`,
                    }}
                  >
                    {list.main}
                  </Box>
                  <Box
                    display={index === 2 ? `block` : `none`}
                    fontSize={{
                      base: `${10 / 3.75}vw`,
                      md: `${12 / 7.68}vw`,
                      lg: `${21 / 19.2}vw`,
                    }}
                    pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                    pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                    pl={{ base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` }}
                    whiteSpace={`pre-wrap`}
                  >
                    {targetArray.map((target) => (
                      <Box
                        display={index === 2 ? `block` : `none`}
                        key={target}
                        fontSize={{
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        }}
                        whiteSpace={`pre-wrap`}
                      >
                        ・{target}
                      </Box>
                    ))}
                  </Box>
                  <Box
                    display={index === 8 ? `block` : `none`}
                    fontSize={{
                      base: `${10 / 3.75}vw`,
                      md: `${12 / 7.68}vw`,
                      lg: `${21 / 19.2}vw`,
                    }}
                    pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                    pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                    pl={{ base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` }}
                    whiteSpace={`pre-wrap`}
                  >
                    {holidayArray.map((day) => (
                      <Box
                        key={day}
                        fontSize={{
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        }}
                        whiteSpace={`pre-wrap`}
                      >
                        ・{day}
                      </Box>
                    ))}
                  </Box>
                  <Box
                    display={index === 12 ? `block` : `none`}
                    fontSize={{
                      base: `${10 / 3.75}vw`,
                      md: `${12 / 7.68}vw`,
                      lg: `${21 / 19.2}vw`,
                    }}
                    pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                    pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                    pl={{ base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` }}
                    whiteSpace={`pre-wrap`}
                  >
                    {dateArray.map((date) => (
                      <Box
                        key={date}
                        fontSize={{
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        }}
                        whiteSpace={`pre-wrap`}
                      >
                        ・{date}曜日
                      </Box>
                    ))}
                  </Box>

                  <Box
                    display={index === 13 ? `block` : `none`}
                    fontSize={{
                      base: `${10 / 3.75}vw`,
                      md: `${12 / 7.68}vw`,
                      lg: `${21 / 19.2}vw`,
                    }}
                    pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                    pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                    pl={{ base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` }}
                    whiteSpace={`pre-wrap`}
                  >
                    {timeArray.map((time) => (
                      <Box
                        key={time}
                        fontSize={{
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        }}
                        whiteSpace={`pre-wrap`}
                      >
                        ・{time}
                      </Box>
                    ))}
                  </Box>
                  <Box
                    display={index === 15 ? `block` : `none`}
                    fontSize={{
                      base: `${10 / 3.75}vw`,
                      md: `${12 / 7.68}vw`,
                      lg: `${21 / 19.2}vw`,
                    }}
                    pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                    pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                    pl={{ base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` }}
                    whiteSpace={`pre-wrap`}
                  >
                    {pointArray.map((points) => (
                      <Box
                        key={points}
                        fontSize={{
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${21 / 19.2}vw`,
                        }}
                        whiteSpace={`pre-wrap`}
                      >
                        ・{points}
                      </Box>
                    ))}
                  </Box>

                  <ExternalLink
                    href={`${list.main}`}
                    display={index === 18 ? `block` : `none`}
                    fontSize={{
                      base: `${10 / 3.75}vw`,
                      md: `${12 / 7.68}vw`,
                      lg: `${21 / 19.2}vw`,
                    }}
                    pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                    pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                    pl={{ base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` }}
                    whiteSpace={`pre-wrap`}
                    w={{
                      base: `${230 / 3.75}vw`,
                      md: `${310 / 7.68}vw`,
                      lg: `${670 / 19.2}vw`,
                    }}
                  >
                    {list.main}
                  </ExternalLink>
                  <Box
                    display={index === 19 ? `block` : `none`}
                    fontSize={{
                      base: `${10 / 3.75}vw`,
                      md: `${12 / 7.68}vw`,
                      lg: `${21 / 19.2}vw`,
                    }}
                    pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                    pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                    pl={{ base: `${19 / 3.75}vw`, md: `${35 / 19.2}vw` }}
                    whiteSpace={`pre-wrap`}
                  >
                    {`100`}
                    {list.main}
                  </Box>
                </div>
              )}
            </Flex>
          </Flex>
        </div>
      ))}
    </Box>
  );
};
