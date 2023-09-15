// import layer
import { FC, useState } from 'react';
// import { useFormContext } from 'react-hook-form';
import {
  Box,
  Flex,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Textarea,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import { Image } from 'components/images/Image';
import { Select, ChakraStylesConfig } from 'chakra-react-select';
import { InternalLink } from '../links/InternalLink';
import { useTargetOfferStore, selectTarget } from 'features/offers';
// import { JobFormSchema } from '../../lib/jobForm/schema';

// type layer
export type DataProps = { onClick: () => void };
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ onClick, ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  // const {
  //   register,
  //   watch,
  //   setValue,
  //   formState: { errors },
  // } = useFormContext<JobFormSchema>();
  // console.log(errors);

  const list = [
    { title: `氏名` },
    { title: `ふりがな` },
    { title: `性別` },
    { title: `生年月日` },
    { title: `電話番号` },
    { title: `学年` },
    { title: `メールアドレス` },
    { title: `応募理由` },
    { title: `面接希望日` },
  ];

  const _registarlist = [
    `name`,
    `furigana`,
    `birthDate`,
    `phone`,
    `greade`,
    `email`,
    `reason`,
    `hopeday1`,
    `hopeday2`,
    `hopeday`,
  ];

  const list2 = [
    { title: `応募先`, text: offer.createby.firstname },
    {
      title: `勤務地・面接地`,
      text: offer.place_short + offer.place_detail,
    },
  ];

  const [value, setValue1] = useState('1');

  const Options = [
    { value: '大学1年生', label: '大学1年生' },
    { value: '大学2年生', label: '大学2年生' },
    { value: '大学3年生', label: '大学3年生' },
    { value: '大学4年生', label: '大学4年生' },
    { value: '大学5年生', label: '大学5年生' },
    { value: '大学6年生', label: '大学6年生' },
  ];

  const chakraStylesDesktop: ChakraStylesConfig = {
    control: (provided, _state) => ({
      ...provided,
      background: `white`,
      borderColor: `#999`,
      borderRadius: `${0 / 7.68}vw`,
      minHeight: {
        base: `${27 / 3.75}vw`,
        md: `${62 / 19.2}vw`,
        lg: `${42 / 19.2}vw`,
      },
      height: {
        base: `${27 / 3.75}vw`,
        md: `${62 / 19.2}vw`,
        lg: `${42 / 19.2}vw`,
      },
      fontSize: {
        base: `${13 / 3.75}vw`,
        md: `${10 / 7.68}vw`,
        lg: `${19 / 19.2}vw`,
      },
      transition: `all .3s`,
      _hover: {
        cursor: `pointer`,
        filter: `opacity(50%)`,
        textDecoration: 'none',
      },
    }),

    valueContainer: (provided, _state) => ({
      ...provided,
    }),

    input: (provided, _state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorSeparator: (_state) => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, _state) => ({
      ...provided,
      height: {
        base: `${25 / 3.75}vw`,
        md: `${60 / 19.2}vw`,
        lg: `${40 / 19.2}vw`,
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      w: { md: `${90 / 19.2}vw`, lg: `${70 / 19.2}vw` },
      background: `white`,
      borderRadius: `0`,
      pl: `0`,
    }),
    menu: (provided, _state) => ({
      ...provided,
      fontSize: {
        base: `${13 / 3.75}vw`,
        md: `${10 / 7.68}vw`,
        lg: `${19 / 19.2}vw`,
      },
    }),
    placeholder: (provided, _state) => ({
      ...provided,
      whiteSpace: `nowrap`,
    }),
  };

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
      <form onSubmit={onClick}>
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
                    <Box>
                      <Input
                        display={
                          index === 2 ||
                            index === 5 ||
                            index === 7 ||
                            index === 8
                            ? 'none'
                            : 'block'
                        }
                        // {...register('name')}
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
                      {/* {errors?.name?.message && (
                        <Box
                          mt={{ base: `0.25rem` }}
                          fontSize={{ base: `0.5rem`, md: `0.75rem` }}
                          ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                          color={`red`}
                          display={
                            index === 2 ||
                            index === 5 ||
                            index === 7 ||
                            index === 8
                              ? 'none'
                              : 'block'
                          }
                        >
                          {errors.name.message}
                        </Box>
                      )} */}
                    </Box>
                    <Box
                      display={index === 5 ? 'block' : 'none'}
                      ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                      w={{ base: `${160 / 3.75}vw`, md: `initial` }}
                    >
                      <Select
                        options={Options}
                        chakraStyles={chakraStylesDesktop}
                        placeholder={`学年を選択する`}
                      // {...register('grade')}
                      />
                    </Box>
                    <RadioGroup
                      mt={{ base: `${2 / 3.75}vw`, md: `${6 / 19.2}vw` }}
                      ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                      size={{ base: `sm`, lg: `sm`, '2xl': `lg` }}
                      onChange={setValue1}
                      value={value}
                      display={index === 2 ? 'block' : 'none'}
                    >
                      <Stack direction="row">
                        <Radio color={`#999`} value="1">
                          男性
                        </Radio>
                        <Radio color={`#999`} value="2">
                          女性
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    <Box
                      mb={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
                      ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                    >
                      <Textarea
                        display={index === 7 ? 'block' : 'none'}
                        // {...register('reason')}
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
                      />
                      {/* {errors?.reason?.message && (
                        <Box
                          mt={{ base: `0.25rem` }}
                          fontSize={{ base: `0.5rem`, md: `0.75rem` }}
                          color={`red`}
                          display={index === 7 ? 'block' : 'none'}
                        >
                          {errors.reason.message}
                        </Box>
                      )} */}
                    </Box>
                    <Box display={index === 8 ? 'block' : 'none'}>
                      <Input
                        // {...register('hopeday1')}
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
                        mb={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
                      />
                      {/* {errors?.reason?.message && (
                        <Box
                          mt={{ base: `0.25rem` }}
                          fontSize={{ base: `0.5rem`, md: `0.75rem` }}
                          color={`red`}
                          display={index === 8 ? 'block' : 'none'}
                        >
                          {errors.reason.message}
                        </Box>
                      )} */}
                      <Input
                        // {...register('hopeday2')}
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
                        mb={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
                      />
                      <Input
                        // {...register('hopeday3')}
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
                        mb={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
                      />
                    </Box>
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
          {list2.map((list, _index) => (
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
          />
          <InternalLink
            href={`/`}
            as={`span`}
            borderBottom={`2px solid #39414E`}
          >
            利用規約
          </InternalLink>
          の取り扱いに同意する
        </Flex>

        <Flex
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
          alignItems={`center`}
          justify={`center`}
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
        >
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
          応募する
        </Flex>
        <Button type={`submit`} />
      </form>
    </Box>
  );
};
