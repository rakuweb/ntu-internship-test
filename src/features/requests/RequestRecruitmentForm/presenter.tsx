// import layer
import { FC } from 'react';
import { Box, Flex, Input, Textarea } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { Image } from 'components/images/Image';
import { useRequestStore } from 'features/requests';
import { FormButton } from '~/components/buttons/FormButton';
import { CheckboxForm } from '~/components/forms/CheckboxForm';
import { SelectForm } from '~/components/forms/SelectForm';
import {
  RequestSchema,
  jobTypeList,
  shiftList,
  minPeriodList,
  desiredInterviewDateList,
  desiredInterviewTimeList,
  occuationList,
  minWorkingdayList,
  pointList,
} from '../schema';

// type layer
export type DataProps = {
  isHidden: boolean;
};
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ isHidden, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RequestSchema>();
  const { backProgress, proceedProgress } = useRequestStore();

  const list = [
    { title: `雇用形態` },
    { title: '職種' },
    { title: '募集する学生の学年' },
    { title: '募集人数' },
    { title: '時給' },
    { title: '勤務時間' },
    { title: 'シフト詳細' },
    { title: `最低勤務時間` },
    { title: '最低勤務日数' },
    { title: '休日・休暇' },
    { title: '勤務地' },
    { title: '面接場所' },
    { title: '歓迎' },
    { title: 'おすすめポイント' },
    { title: '面談希望日' },
    { title: '面談希望時間' },
    { title: '面談希望時間（備考）' },
    { title: '選考方法' },
    { title: '会社HP' },
    { title: '掲載日' },
    { title: '締切日' },
  ];
  const idlist = [
    'job_type',
    'occupation',
    'target',
    'people',
    'hourly_wage',
    'hours_short',
    'shift',
    'min_period',
    'min_workingday',
    'holiday',
    'place_short',
    'interview_location',
    'qualification',
    'points',
    'desired_interview_date',
    'desired_interview_time',
    'interview_remarks',
    'flow',
    'url',
    'start_at',
    'end_at',
  ] as const;
  const placeholderList = [
    '',
    '',
    '大学1年生〜修士1年生',
    '3人',
    '1,000円',
    '15:00〜19:00',
    '',
    '',
    '',
    '',
    '新潟県新潟市中央区天神1-1PLAKA3 2F',
    '新潟県新潟市中央区天神1-1PLAKA3 2F',
    '・経験を積みたい方・エクセル使える方・高時給で働きたい方',
    '',
    '',
    '',
    `その他希望日時等ある場合は記載ください
例）10月10日　対応不可`, // eslint-disable-line
    'エントリー⇒面接⇒合否',
    'https://forjob.nottheuniversity.com/',
    '',
    '',
    '',
  ];

  return (
    <Box
      mx={`auto`}
      w={{
        base: `${335 / 3.75}vw`,
        md: `${980 / 19.2}vw`,
        lg: `${980 / 19.2}vw`,
      }}
      color={`#39414E`}
      fontFamily={`'Noto Sans JP', sans-serif`}
      display={isHidden ? 'none' : `block`}
      {...props}
    >
      <Box
        mt={{ base: `${12 / 3.75}vw`, md: `${20 / 19.2}vw` }}
        mb={{ base: `${12 / 3.75}vw`, md: `${20 / 19.2}vw` }}
        fontSize={{
          base: `${15 / 3.75}vw`,
          md: `${16 / 7.68}vw`,
          lg: `${26 / 19.2}vw`,
        }}
        whiteSpace={`pre-wrap`}
        fontWeight={`bold`}
        lineHeight={`1.2em`}
      >
        {`求人掲載情報の入力`}
      </Box>
      <Flex mb={{ base: `${12 / 3.75}vw`, md: `${20 / 19.2}vw` }}>
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
            lg: `${22 / 19.2}vw`,
          }}
          h={{
            base: `${21 / 3.75}vw`,
            md: `${22 / 7.68}vw`,
            lg: `${22 / 19.2}vw`,
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
            lg: `${24 / 19.2}vw`,
          }}
          fontWeight={`bold`}
        >
          求人情報
        </Box>
      </Flex>
      <Box>
        <Box
          borderTop={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          borderLeft={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          borderRight={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
        >
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
                  lg: `${18 / 19.2}vw`,
                }}
                // fontWeight={`bold`}
                lineHeight={`1.4em`}
              >
                <Flex>
                  <Box bg={`#F9FCFE`}>
                    <Flex
                      pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                      pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                      pl={{ base: `${14 / 3.75}vw`, md: `${40 / 19.2}vw` }}
                      pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
                      w={{ base: `${116 / 4.28}vw`, md: `${320 / 19.2}vw` }}
                      fontWeight={`bold`}
                      flexWrap={`wrap`}
                      justify={{ md: `space-between` }}
                    >
                      <Box
                        w={{ base: `${116 / 4.28}vw`, md: `${163 / 19.2}vw` }}
                        whiteSpace={`pre-wrap`}
                      >
                        {list.title}
                      </Box>
                      {index < 22 && index !== 16 && (
                        <Flex
                          px={{
                            base: `${3 / 3.75}vw`,
                            md: `${5 / 7.68}vw`,
                            lg: `${5 / 19.2}vw`,
                          }}
                          fontSize={{
                            base: `${10 / 3.75}vw`,
                            md: `${10 / 7.68}vw`,
                            lg: `${16 / 19.2}vw`,
                          }}
                          alignItems={`center`}
                          color={`white`}
                          bg={`#F26601`}
                          h={`fit-content`}
                        >
                          必須
                        </Flex>
                      )}
                    </Flex>
                  </Box>
                  <Flex pt={{ base: `${15 / 3.75}vw`, md: `${18 / 19.2}vw` }}>
                    {index < 19 &&
                      index !== 0 &&
                      index !== 1 &&
                      index !== 6 &&
                      index !== 7 &&
                      index !== 8 &&
                      index !== 13 &&
                      index !== 14 &&
                      index !== 15 &&
                      index !== 16 && (
                        <Box>
                          <Input
                            placeholder={placeholderList[index]}
                            {...register(idlist[index] as any)}
                            borderColor={`#999`}
                            borderRadius={`0`}
                            w={{
                              base: `${190 / 3.75}vw`,
                              md: `${200 / 7.68}vw`,
                              lg: `${500 / 19.2}vw`,
                            }}
                            h={{
                              base: `${25 / 3.75}vw`,
                              md: `${20 / 7.68}vw`,
                              lg: `${40 / 19.2}vw`,
                            }}
                            fontSize={{
                              base: `${10 / 3.75}vw`,
                              md: `${12 / 7.68}vw`,
                              lg: `${19 / 19.2}vw`,
                            }}
                            ml={{
                              base: `${19 / 3.75}vw`,
                              md: `${70 / 19.2}vw`,
                            }}
                          />
                          {errors?.[idlist[index]]?.message && (
                            <Box
                              mt={{ base: `0.25rem` }}
                              fontSize={{ base: `0.5rem`, md: `0.75rem` }}
                              ml={{
                                base: `${19 / 3.75}vw`,
                                md: `${70 / 19.2}vw`,
                              }}
                              color={`red`}
                            >
                              {errors[idlist[index]].message}
                            </Box>
                          )}
                        </Box>
                      )}
                    {(index === 19 || index === 20) && (
                      <Box>
                        <Input
                          type={`date`}
                          {...register(idlist[index])}
                          borderColor={`#999`}
                          borderRadius={`0`}
                          w={{
                            base: `${190 / 3.75}vw`,
                            md: `${200 / 7.68}vw`,
                            lg: `${500 / 19.2}vw`,
                          }}
                          h={{
                            base: `${25 / 3.75}vw`,
                            md: `${20 / 7.68}vw`,
                            lg: `${40 / 19.2}vw`,
                          }}
                          fontSize={{
                            base: `${10 / 3.75}vw`,
                            md: `${12 / 7.68}vw`,
                            lg: `${19 / 19.2}vw`,
                          }}
                          ml={{
                            base: `${19 / 3.75}vw`,
                            md: `${70 / 19.2}vw`,
                          }}
                        />
                        {errors?.[idlist[index]]?.message && (
                          <Box
                            mt={{ base: `0.25rem` }}
                            fontSize={{ base: `0.5rem`, md: `0.75rem` }}
                            ml={{
                              base: `${19 / 3.75}vw`,
                              md: `${70 / 19.2}vw`,
                            }}
                            color={`red`}
                          >
                            {`日付を入力してください`}
                          </Box>
                        )}
                      </Box>
                    )}
                    {(index === 6 ||
                      index === 13 ||
                      index === 14 ||
                      index === 15) && (
                      <Box
                        mb={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
                        ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                      >
                        <CheckboxForm
                          checkboxes={
                            index === 6
                              ? shiftList
                              : index === 13
                              ? pointList
                              : index === 14
                              ? desiredInterviewDateList
                              : desiredInterviewTimeList
                          }
                          registers={register(idlist[index])}
                          isRequired
                          errorMessage={errors?.[idlist[index]]?.message}
                        />
                      </Box>
                    )}
                    {(index === 0 ||
                      index === 1 ||
                      index === 7 ||
                      index === 8) && (
                      <Box
                        mb={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
                        ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                      >
                        <SelectForm
                          selectList={
                            index === 0
                              ? jobTypeList
                              : index === 1
                              ? occuationList
                              : index === 7
                              ? minPeriodList
                              : index === 8
                              ? minWorkingdayList
                              : index === 15
                              ? desiredInterviewDateList
                              : desiredInterviewTimeList
                          }
                          registers={register(idlist[index] as any)}
                          errorMessage={errors?.[idlist[index]]?.message}
                          placeholder={`選択してください`}
                        />
                      </Box>
                    )}
                    {index === 16 && (
                      <Box
                        mb={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
                        ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                      >
                        <Textarea
                          placeholder={placeholderList[index]}
                          borderRadius={`0`}
                          borderColor={`#999`}
                          w={{
                            base: `${190 / 3.75}vw`,
                            md: `${200 / 7.68}vw`,
                            lg: `${500 / 19.2}vw`,
                          }}
                          h={{
                            base: `${150 / 3.75}vw`,
                            md: `${150 / 7.68}vw`,
                            lg: `${200 / 19.2}vw`,
                          }}
                          fontSize={{
                            base: `${10 / 3.75}vw`,
                            md: `${12 / 7.68}vw`,
                            lg: `${19 / 19.2}vw`,
                          }}
                          {...register(idlist[index] as any)}
                        />
                        {errors?.[idlist[index]]?.message && (
                          <Box
                            mt={{ base: `0.25rem` }}
                            fontSize={{ base: `0.5rem`, md: `0.75rem` }}
                            color={`red`}
                          >
                            {errors.job_description.message}
                          </Box>
                        )}
                      </Box>
                    )}
                  </Flex>
                </Flex>
              </Flex>
            </div>
          ))}
        </Box>

        <Flex mt={{ base: `${60 / 3.75}vw`, md: `${80 / 19.2}vw` }}>
          <FormButton
            isSending={false}
            isChecking={true}
            onClick={() => backProgress()}
          >{`戻る`}</FormButton>
          <FormButton
            isSending={false}
            isChecking={true}
            onClick={() => proceedProgress()}
          >{`次へ`}</FormButton>
        </Flex>
      </Box>
    </Box>
  );
};
