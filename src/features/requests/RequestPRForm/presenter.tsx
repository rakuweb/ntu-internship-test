// import layer
import { FC } from 'react';
import { Box, Flex, Input, Textarea } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { Image } from 'components/images/Image';
import { useRequestStore } from 'features/requests';
import { FormButton } from '~/components/buttons/FormButton';
import { RequestSchema } from '../schema';

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
  const { backProgress } = useRequestStore();

  const list = [
    { title: '求人タイトル' },
    { title: '写真' },
    { title: '求人の詳細情報' },
    { title: '職場の情報画像' },
    { title: '職場の情報タイトル' },
    { title: '職場情報のテキスト' },
    // { title: '職場の情報の画像②' },
    // { title: '職場の情報のタイトル②' },
    // { title: '職場の情報の詳細②' },
    // { title: '職場の情報の画像③' },
    // { title: '職場の情報のタイトル③' },
    // { title: '職場の情報の詳細③' },
  ];
  const idlist = [
    'title',
    'image',
    'job_description',
    'atmosphere_image',
    'atmosphere_title',
    'atmosphere_text',
    // 'atmosphere_image2',
    // 'atmosphere_title2',
    // 'atmosphere_text2',
    // 'atmosphere_image3',
    // 'atmosphere_title3',
    // 'atmosphere_text3',
  ] as const;

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
        {`お申し込み情報の入力`}
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
                      {index < 6 && (
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
                    {index < 12 &&
                      index !== 1 &&
                      index !== 2 &&
                      index !== 3 &&
                      index !== 5 &&
                      index !== 6 &&
                      index !== 8 &&
                      index !== 9 &&
                      index !== 11 && (
                        <Box>
                          <Input
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
                    {(index === 1 || index === 3) && (
                      <Box>
                        <Input
                          type={`file`}
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

                    {(index === 2 || index === 5) && (
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
                          {...register(idlist[index] as any)}
                        />
                        {errors?.[idlist[index]]?.message && (
                          <Box
                            mt={{ base: `0.25rem` }}
                            fontSize={{ base: `0.5rem`, md: `0.75rem` }}
                            color={`red`}
                          >
                            {errors[idlist[index]].message}
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
            type={`submit`}
            isSending={false}
            isChecking={true}
          >{`確認する`}</FormButton>
        </Flex>
      </Box>
    </Box>
  );
};
