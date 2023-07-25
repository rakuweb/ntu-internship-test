// import layer
import { FC } from 'react';
import { Box, Flex, Input, Textarea, Checkbox, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Image } from 'components/images/Image';
import { Select, ChakraStylesConfig } from 'chakra-react-select';
import { InternalLink } from '../links/InternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;
const schema = z.object({
  inquiry: z
    .string()
    .nonempty({ message: 'お問い合わせ項目を選択してください。' }),
  name: z.string().nonempty({ message: 'お名前を入力してください。' }),
  company: z.string().nonempty({ message: '会社名を入力してください。' }),
  address: z.string().nonempty({ message: '住所を入力してください。' }),
  phone: z.string().nonempty({ message: '電話番号を入力してください。' }),
  email: z
    .string()
    .email({ message: '有効なメールアドレスを入力してください。' }),
  content: z
    .string()
    .nonempty({ message: 'お問い合わせ内容を入力してください。' }),
});
// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const list = [
    { title: `お問い合わせ項目` },
    { title: `お名前` },
    { title: `会社名` },
    { title: `住所` },
    { title: `電話番号` },
    { title: `メールアドレス` },
    { title: `お問い合わせ内容` },
  ];

  const Options = [
    { value: '資料請求', label: '資料請求' },
    { value: '採用について', label: '採用について' },
    { value: 'お仕事について', label: 'お仕事について' },
    { value: 'その他', label: 'その他' },
  ];
  // form options
  const formOptions = { resolver: zodResolver(schema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const chakraStylesDesktop: ChakraStylesConfig = {
    control: (provided) => ({
      ...provided,
      background: `white`,
      borderColor: `#999`,
      borderRadius: `${0 / 7.68}vw`,
      minHeight: {
        base: `${28 / 3.75}vw`,
        md: `${62 / 19.2}vw`,
        lg: `${42 / 19.2}vw`,
      },
      height: {
        base: `${28 / 3.75}vw`,
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

    valueContainer: (provided) => ({
      ...provided,
      pt: `0`,
    }),

    input: (provided) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: {
        base: `${27 / 3.75}vw`,
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
    menu: (provided) => ({
      ...provided,
      fontSize: {
        base: `${13 / 3.75}vw`,
        md: `${10 / 7.68}vw`,
        lg: `${19 / 19.2}vw`,
      },
    }),
    placeholder: (provided) => ({
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
      >{`お問い合わせフォーム`}</Box>
      <Flex mb={{ base: `${12 / 3.75}vw`, md: `${20 / 19.2}vw` }}>
        <Image
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
          お問い合わせ内容
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
                    pl={{ base: `${8 / 3.75}vw`, md: `${40 / 19.2}vw` }}
                    pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
                    w={{ base: `${120 / 4.28}vw`, md: `${320 / 19.2}vw` }}
                    fontWeight={`bold`}
                    flexWrap={`wrap`}
                    justify={{ md: `space-between` }}
                  >
                    <Box
                      w={{ base: `${116 / 4.28}vw`, md: `${170 / 19.2}vw` }}
                      whiteSpace={`pre-wrap`}
                    >
                      {list.title}
                    </Box>
                    <Flex
                      display={index === 8 ? `none` : `flex`}
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
                <Flex alignItems={`center`}>
                  <Input
                    {...register('name')}
                    display={index === 0 || index === 6 ? 'none' : 'block'}
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
                  {/* {errors.name && <p>{String(errors.name.message)}</p>} */}
                  <Box
                    display={index === 0 ? 'block' : 'none'}
                    ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                    w={{ base: `${160 / 3.75}vw`, md: `initial` }}
                  >
                    <Select
                      options={Options}
                      chakraStyles={chakraStylesDesktop}
                      placeholder={`項目を選択する`}
                    />
                  </Box>

                  <Textarea
                    {...register('content')}
                    display={index === 6 ? 'block' : 'none'}
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
                    my={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
                    ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                  />
                </Flex>
              </Flex>
            </Flex>
          </div>
        ))}
        {errors.name && <p>{String(errors.name.message)}</p>}
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
        <InternalLink href={`/`} as={`span`} borderBottom={`2px solid #39414E`}>
          プライバシーポリシー
        </InternalLink>
        に同意する
      </Flex>

      <Button
        onClick={handleSubmit((data) => console.log(data))}
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
        justifyContent={`center`}
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
        <Image
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
        送信する
      </Button>
    </Box>
  );
};
