// import layer
import { FC } from 'react';
import {
  Box,
  Flex,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Textarea,
  Checkbox,
} from '@chakra-ui/react';
import { useFormContext, Controller } from 'react-hook-form';
import { SelectForm } from 'components/forms/SelectForm';
import { Image } from 'components/images/Image';
import {
  JobFormSchema,
  gradeList,
  genderList,
  useJobFormStore,
  selectJobFormFunctions,
} from 'features/jobForm';
import { useTargetOfferStore, selectTarget } from 'features/offers';
import { routes } from '~/constants';
import { FormButton } from '../buttons/FormButton';
import { ExternalLink } from '../links/ExternalLink';

// type layer
export type DataProps = { submitHandler: (data: JobFormSchema) => void };
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ submitHandler, ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  const { isChecked, isSending } = useJobFormStore();
  const { setIsChecked } = useJobFormStore(selectJobFormFunctions);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext<JobFormSchema>();

  const list = [
    { title: `氏名` },
    { title: `ふりがな` },
    { title: `性別` },
    { title: `生年月日` },
    { title: `電話番号` },
    { title: `学年` },
    { title: `メールアドレス` },
    { title: `どこで知しりましたか？` },
    { title: `応募理由` },
    { title: `面接希望日` },
  ];
  const idlist = [
    'name',
    'furigana',
    'gender',
    'birthday',
    'phone',
    'grade',
    'email',
    'where',
    'reason',
    'hopeday1',
    'hopeday2',
    'hopeday3',
  ] as const;
  const list2 = [
    { title: `応募先`, text: offer.company_name },
    {
      title: `勤務地・面接地`,
      text: offer.place_short,
    },
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
        {offer.title + `への応募情報の入力`}
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
          応募する情報
        </Box>
      </Flex>
      <form onSubmit={handleSubmit(submitHandler)}>
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
                    </Flex>
                  </Box>
                  <Flex pt={{ base: `${15 / 3.75}vw`, md: `${18 / 19.2}vw` }}>
                    {(index === 0 ||
                      index === 1 ||
                      index === 4 ||
                      index === 6 ||
                      index === 7) && (
                      <Box
                        mb={{
                          base: `${19 / 3.75}vw`,
                          md: `${25 / 19.2}vw`,
                        }}
                      >
                        <Input
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
                          ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                        />
                        {errors?.[idlist[index]]?.message && (
                          <Box
                            mt={{ base: `0.25rem` }}
                            fontSize={{
                              base: `${10 / 3.75}vw`,
                              lg: `${12 / 19.2}vw`,
                            }}
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

                    {index === 3 && (
                      <Box
                        ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                        mb={{
                          base: `${19 / 3.75}vw`,
                          md: `${25 / 19.2}vw`,
                        }}
                      >
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
                        />
                        {errors?.[idlist[index]]?.message && (
                          <Box
                            mt={{ base: `0.25rem` }}
                            fontSize={{
                              base: `${10 / 3.75}vw`,
                              lg: `${12 / 19.2}vw`,
                            }}
                            color={`red`}
                          >
                            {`日付を入力してください`}
                          </Box>
                        )}
                      </Box>
                    )}

                    {index === 5 && (
                      <Box
                        ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                        mb={{
                          base: `${19 / 3.75}vw`,
                          md: `${25 / 19.2}vw`,
                        }}
                        w={{ base: `${160 / 3.75}vw`, md: `initial` }}
                      >
                        <SelectForm
                          selectList={gradeList}
                          placeholder={`学年を選択する`}
                          registers={register('grade')}
                          errorMessage={errors?.grade?.message}
                        />
                      </Box>
                    )}

                    {index === 2 && (
                      <Controller
                        name={idlist[index]}
                        control={control}
                        render={({ field }) => (
                          <RadioGroup
                            mt={{ base: `${2 / 3.75}vw`, md: `${6 / 19.2}vw` }}
                            ml={{
                              base: `${19 / 3.75}vw`,
                              md: `${70 / 19.2}vw`,
                            }}
                            size={{ base: `sm`, lg: `sm`, '2xl': `lg` }}
                            defaultValue={genderList[0]}
                            {...field}
                          >
                            <Stack direction="row">
                              {genderList.map((item) => (
                                <Radio key={item} color={`#999`} value={item}>
                                  {item}
                                </Radio>
                              ))}
                            </Stack>
                          </RadioGroup>
                        )}
                      />
                    )}

                    {index === 8 && (
                      <Box
                        mb={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
                        ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                      >
                        <Textarea
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
                          {...register('reason')}
                        />
                        {errors?.reason?.message && (
                          <Box
                            mt={{ base: `0.25rem` }}
                            fontSize={{
                              base: `${10 / 3.75}vw`,
                              lg: `${12 / 19.2}vw`,
                            }}
                            color={`red`}
                            display={index === 8 ? 'block' : 'none'}
                          >
                            {errors.reason.message}
                          </Box>
                        )}
                      </Box>
                    )}

                    {index === 9 && (
                      <Box
                        ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                      >
                        <Box
                          mb={{
                            base: `${19 / 3.75}vw`,
                            md: `${25 / 19.2}vw`,
                          }}
                        >
                          <Input
                            type={`date`}
                            {...register('hopeday1')}
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
                          />
                          {errors?.hopeday1?.message && (
                            <Box
                              mt={{ base: `0.25rem` }}
                              fontSize={{
                                base: `${10 / 3.75}vw`,
                                lg: `${12 / 19.2}vw`,
                              }}
                              color={`red`}
                              display={index === 9 ? 'block' : 'none'}
                            >
                              {errors.hopeday1.message == 'Invalid date'
                                ? `日付を入力してください`
                                : errors.hopeday1?.message}
                            </Box>
                          )}
                        </Box>
                        <Box
                          mb={{
                            base: `${19 / 3.75}vw`,
                            md: `${25 / 19.2}vw`,
                          }}
                        >
                          <Input
                            type={`date`}
                            {...register('hopeday2')}
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
                          />
                          {errors?.hopeday2?.message && (
                            <Box
                              mt={{ base: `0.25rem` }}
                              fontSize={{
                                base: `${10 / 3.75}vw`,
                                lg: `${12 / 19.2}vw`,
                              }}
                              color={`red`}
                              display={index === 9 ? 'block' : 'none'}
                            >
                              {errors.hopeday2?.message}
                            </Box>
                          )}
                        </Box>
                        <Box
                          mb={{
                            base: `${19 / 3.75}vw`,
                            md: `${25 / 19.2}vw`,
                          }}
                        >
                          <Input
                            type={`date`}
                            {...register('hopeday3')}
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
                          />
                          {errors?.hopeday3?.message && (
                            <Box
                              mt={{ base: `0.25rem` }}
                              fontSize={{
                                base: `${10 / 3.75}vw`,
                                lg: `${12 / 19.2}vw`,
                              }}
                              color={`red`}
                              display={index === 9 ? 'block' : 'none'}
                            >
                              {errors.hopeday3?.message}
                            </Box>
                          )}
                        </Box>
                      </Box>
                    )}
                  </Flex>
                </Flex>
              </Flex>
            </div>
          ))}
        </Box>

        <Flex
          mt={{ base: `${20 / 3.75}vw`, md: `${30 / 19.2}vw` }}
          mb={{ base: `${12 / 3.75}vw`, md: `${30 / 19.2}vw` }}
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
            応募する企業
          </Box>
        </Flex>
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
          {list2.map((list) => (
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
                  <Flex
                    pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                    pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                    pl={{ base: `${14 / 3.75}vw`, md: `${40 / 19.2}vw` }}
                    pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
                    w={{ base: `${116 / 4.28}vw`, md: `${320 / 19.2}vw` }}
                    bg={`#F9FCFE`}
                    fontWeight={`bold`}
                    flexWrap={`wrap`}
                    justify={`space-between`}
                  >
                    <Box whiteSpace={`pre-wrap`}>{list.title}</Box>
                  </Flex>
                  <Flex
                    alignItems={`center`}
                    w={{ base: `${220 / 4.28}vw`, md: `${500 / 19.2}vw` }}
                    ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                    pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
                    pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
                  >
                    {list.text}
                  </Flex>
                </Flex>
              </Flex>
            </div>
          ))}
        </Box>

        <Flex
          alignItems={`center`}
          w={`fit-content`}
          mx={`auto`}
          mt={{ base: `${30 / 3.75}vw`, md: `${80 / 19.2}vw` }}
          mb={{ base: `${10 / 3.75}vw`, md: `${20 / 19.2}vw` }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${22 / 19.2}vw`,
          }}
          fontWeight={`bold`}
        >
          <Checkbox
            size={{ base: `sm`, lg: `sm`, '2xl': `lg` }}
            mr={{ base: `${10 / 3.75}vw`, md: `${20 / 19.2}vw` }}
            isInvalid
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <ExternalLink href={routes.terms} borderBottom={`2px solid #39414E`}>
            利用規約
          </ExternalLink>
          の取り扱いに同意する
        </Flex>

        <FormButton
          type={`submit`}
          isSending={isSending}
          isChecking={isChecked}
          isLoading={isSending}
        >{`応募する`}</FormButton>
      </form>
    </Box>
  );
};
