// import layer
import { FC } from 'react';
import { Box, Flex, Input, Textarea } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { Image } from 'components/images/Image';
import { useRequestStore } from 'features/requests';
import { BackButton } from '~/components/buttons/BackButton';
import { NextButton } from '~/components/buttons/NextButton';
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
    { title: 'メイン写真' },
    { title: '求人の詳細内容' },
    { title: '職場情報の写真①' },
    { title: '職場情報のタイトル①' },
    { title: '職場情報の詳細①' },
    { title: '職場情報の写真②' },
    { title: '職場情報のタイトル②' },
    { title: '職場情報の詳細②' },
    { title: '職場情報の写真③' },
    { title: '職場情報のタイトル③' },
    { title: '職場情報の詳細③' },
  ];
  const idlist = [
    'title',
    'image',
    'job_description',
    'atmosphere_image',
    'atmosphere_title',
    'atmosphere_text',
    'atmosphere_image2',
    'atmosphere_title2',
    'atmosphere_text2',
    'atmosphere_image3',
    'atmosphere_title3',
    'atmosphere_text3',
  ] as const;
  const placeholderlist = [
    `初めてでもOK！人気のイベントで働いてみませんか？`,
    ``,
    ``,
    ``,
    `職場の雰囲気`,
    `私たちの職場は、フレンドリーで協力的な雰囲気が広がっています。
年齢や性別に関わらず、お互いにサポートし合い、
協力しあう文化が根付いています。みんなでわいわいと楽しく働きながら、
お仕事をこなすので、新人さんもすぐに馴染むことができますよ。
テキパキと動きながらも、のんびりとした雰囲気で、
お仕事のストレスを感じにくい環境です。`,
    ``,
    `職場の雰囲気`,
    `私たちの職場は、フレンドリーで協力的な雰囲気が広がっています。
年齢や性別に関わらず、お互いにサポートし合い、
協力しあう文化が根付いています。みんなでわいわいと楽しく働きながら、
お仕事をこなすので、新人さんもすぐに馴染むことができますよ。
テキパキと動きながらも、のんびりとした雰囲気で、
お仕事のストレスを感じにくい環境です。`,
    ``,
    `職場の雰囲気`,
    `私たちの職場は、フレンドリーで協力的な雰囲気が広がっています。
年齢や性別に関わらず、お互いにサポートし合い、
協力しあう文化が根付いています。みんなでわいわいと楽しく働きながら、
お仕事をこなすので、新人さんもすぐに馴染むことができますよ。
テキパキと動きながらも、のんびりとした雰囲気で、
お仕事のストレスを感じにくい環境です。`,
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
      <Flex
        mt={{ base: ``, md: `${80 / 19.2}vw` }}
        mb={{ base: `${12 / 3.75}vw`, md: `${20 / 19.2}vw` }}
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
          FORJOB求人掲載フォーム
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
                        whiteSpace={{ base: `pre-wrap`, lg: `nowrap` }}
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

                  <Flex py={{ base: `${15 / 3.75}vw`, md: `${18 / 19.2}vw` }}>
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
                            placeholder={placeholderlist[index]}
                            // eslint-disable-next-line
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
                    {(index === 1 ||
                      index === 3 ||
                      index === 6 ||
                      index === 9) && (
                      <Box
                        ml={{
                          base: `${19 / 3.75}vw`,
                          md: `${70 / 19.2}vw`,
                        }}
                      >
                        <Input
                          placeholder={placeholderlist[index]}
                          type={`file`}
                          accept={`image/jpeg,image/png`}
                          // eslint-disable-next-line
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
                        />
                        <Box
                          w={{
                            base: `${190 / 3.75}vw`,
                            md: `${200 / 7.68}vw`,
                            lg: `${500 / 19.2}vw`,
                          }}
                          mt={{ lg: `${4 / 19.2}vw` }}
                          fontSize={{ lg: `${13 / 19.2}vw` }}
                          lineHeight={`1.5`}
                          whiteSpace={{ base: `pre-wrap` }}
                        >
                          {index === 1
                            ? `※推奨サイズ：1020x600[px]`
                            : `※推奨サイズ：300x180[px]`}
                        </Box>
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

                    {(index === 2 ||
                      index === 5 ||
                      index === 8 ||
                      index === 11) && (
                      <Box
                        // mb={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
                        ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                      >
                        <Textarea
                          placeholder={placeholderlist[index]}
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
                          // eslint-disable-next-line
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
          <BackButton
            isSending={false}
            isChecking={true}
            onClick={() => {
              backProgress();
              window.scroll({ top: 0 });
            }}
          >{`戻る`}</BackButton>
          <NextButton
            type={`submit`}
            isSending={false}
            isChecking={true}
          >{`確認する`}</NextButton>
        </Flex>
      </Box>
    </Box>
  );
};
