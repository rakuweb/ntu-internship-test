// import layer
import { FC } from 'react';
import { Box, Flex, Input, Checkbox, Textarea, Button } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { Image } from 'components/images/Image';
import { ExternalLink } from 'components/links/ExternalLink';
import { useApplicationStore } from 'features/application';
import { SelectForm } from '~/components/forms/SelectForm';
import { routes } from '~/constants';
import { ApplicationSchema, employeeNumberList, planList } from '../schema';

// type layer
export type DataProps = { submitHandler: (data: ApplicationSchema) => void };
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ submitHandler, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<ApplicationSchema>();
  const { isSending, isChecking, setIsChecking } = useApplicationStore();

  const list = [
    { title: `企業名` },
    { title: '代表者' },
    { title: '設立日' },
    { title: '従業員数' },
    { title: '所在地' },
    { title: '会社HP' },
    { title: 'ご担当者氏名' },
    { title: `ご担当者電話番号` },
    { title: 'メールアドレス' },
    { title: '掲載プラン' },
    { title: '備考' },
  ];
  const idlist = [
    'name',
    'representative',
    'establishment_date',
    'number_of_employees',
    'place',
    'url',
    'manager_name',
    'manager_phone',
    'email',
    'plan',
    'remarks',
  ] as const;
  const placeholderList = [
    `株式会社ラクウェブ`,
    `新潟太郎`,
    ``,
    ``,
    `新潟県新潟市中央区天神1-1PLAKA3 2F`,
    `https://forjob.nottheuniversity.com/`,
    `新潟一郎`,
    `0012345678`,
    `xxx@forjob.jp`,
    ``,
    ``,
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
      <Flex
        mt={{ base: ``, md: `${80 / 19.2}vw` }}
        mb={{ base: `${12 / 3.75}vw`, md: `${40 / 19.2}vw` }}
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
          {`FORJOB求人掲載  お申し込み`}
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
                      {index < 10 && (
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
                    {index !== 2 && index !== 3 && index < 9 && (
                      <Box>
                        <Input
                          placeholder={placeholderList[index]}
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
                    {index === 2 && (
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
                    {(index === 3 || index === 9) && (
                      <Box
                        mb={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
                        ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                      >
                        <SelectForm
                          selectList={
                            index === 3 ? employeeNumberList : planList
                          }
                          registers={register(idlist[index])}
                          errorMessage={errors?.[idlist[index]]?.message}
                          placeholder={`選択してください`}
                        />
                        {index === 9 && (
                          <Box
                            w={{
                              base: `${190 / 3.75}vw`,
                              md: `${200 / 7.68}vw`,
                              lg: `${500 / 19.2}vw`,
                            }}
                            fontSize={{ lg: `${13 / 19.2}vw` }}
                            lineHeight={`1.5`}
                            whiteSpace={{ base: `pre-wrap` }}
                          >
                          {`※月額プランの方は記事作成代行を0円でご利用いただけます。`}
                          </Box>
                        )}
                      </Box>
                    )}
                    {index === 10 && (
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
                          {...register('remarks')}
                        />
                        {errors?.remarks?.message && (
                          <Box
                            mt={{ base: `0.25rem` }}
                            fontSize={{ base: `0.5rem`, md: `0.75rem` }}
                            color={`red`}
                          >
                            {errors.remarks.message}
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

        <Flex
          alignItems={`center`}
          w={`fit-content`}
          mx={`auto`}
          mt={{ base: `${30 / 3.75}vw`, md: `${40 / 19.2}vw` }}
          mb={{ base: `${10 / 3.75}vw`, md: `${60 / 19.2}vw` }}
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
            checked={isChecking}
            onChange={(e) => setIsChecking(e.target.checked)}
          />
          <ExternalLink href={routes.terms} borderBottom={`2px solid #39414E`}>
            利用規約
          </ExternalLink>
          ・
          <ExternalLink href={''} borderBottom={`2px solid #39414E`}>
            広告掲載基準
          </ExternalLink>
          ・
          <ExternalLink
            href={routes.privacyPolicy}
            borderBottom={`2px solid #39414E`}
          >
            プライバシーポリシー
          </ExternalLink>
          に同意の上でご送信ください
        </Flex>

        <Button
          type={`submit`}
          display={`flex`}
          disabled={isSending || !isChecking}
          isLoading={isSending}
          w={{
            base: `${220 / 3.75}vw`,
            md: `${230 / 7.68}vw`,
            lg: `${348 / 19.2}vw`,
          }}
          borderRadius={{
            base: `${15 / 3.75}vw`,
            md: `${10 / 7.68}vw`,
            lg: `${15 / 19.2}vw`,
          }}
          overflow={`hidden`}
          py={{
            base: `${15 / 4.28}vw`,
            md: `${35 / 19.2}vw`,
            lg: `${20 / 19.2}vw`,
          }}
          mb={{ base: `${60 / 3.75}vw`, md: `${80 / 19.2}vw` }}
          mx={`auto`}
          background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
          color={`white`}
          fontSize={{
            base: `${16 / 3.75}vw`,
            md: `${16 / 7.68}vw`,
            lg: `${27 / 19.2}vw`,
          }}
          fontWeight={`bold`}
          transition={`all .3s`}
          _hover={{
            cursor: isChecking && !isSending ? `pointer` : `not-allowed`,
            filter: `opacity(50%)`,
          }}
        >
          <Flex alignItems={`center`} justify={`center`}>
            <Image // eslint-disable-line
              w={{
                base: `${16 / 3.75}vw`,
                md: `${16 / 7.68}vw`,
                lg: `${27 / 19.2}vw`,
              }}
              h={{
                base: `${16 / 3.75}vw`,
                md: `${16 / 7.68}vw`,
                lg: `${27 / 19.2}vw`,
              }}
              mr={{ base: `${7 / 3.75}vw`, md: `${15 / 19.2}vw` }}
              image={{
                width: 35,
                height: 35,
                src: `/svg/paper-plane-solid.svg`,
                alt: `紙飛行機アイコン`,
              }}
            />
            申し込む
          </Flex>
        </Button>
      </form>
    </Box>
  );
};
