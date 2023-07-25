// import layer
import { FC } from 'react';
import { Box, Flex, Input, Textarea, Checkbox, Button } from '@chakra-ui/react';
import { Image } from 'components/images/Image';
import { Select, ChakraStylesConfig } from 'chakra-react-select';
import { InternalLink } from '../links/InternalLink';
import { useForm } from 'react-hook-form';
import RequiredMark from './requiredMark';
import DocumentIcon from './DocumentIcon';
import FormName from './FormName';
import ListTitle from './ListTitle';
import { listClasses } from '@mui/material';
import SubmitButton from './SubmitButton';
// import { Button } from 'antd';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const list = [
    {
      title: `お問い合わせ項目`,
      name: 'inquiry_item',
      validation: { required: '必須項目です' },
    },
    { title: `お名前`, name: 'name', validation: { required: '必須項目です' } },
    {
      title: `会社名`,
      name: 'company_name',
      validation: { required: '必須項目です' },
    },
    {
      title: `住所`,
      name: 'address',
      validation: { required: '必須項目です' },
    },
    {
      title: `電話番号`,
      name: 'phone_number',
      validation: { required: '必須項目です' },
    },
    {
      title: `メールアドレス`,
      name: 'email',
      validation: {
        required: '必須項目です',
        pattern: {
          value: /^\S+@\S+$/i,
          message: '正しいメールアドレスを入力してください',
        },
      },
    },
    {
      title: `お問い合わせ内容`,
      name: 'inquiry_content',
      validation: { required: '必須項目です' },
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const Options = [
    { value: '資料請求', label: '資料請求' },
    { value: '採用について', label: '採用について' },
    { value: 'お仕事について', label: 'お仕事について' },
    { value: 'その他', label: 'その他' },
  ];

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
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <FormName />
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
                  <ListTitle index={index} list={list} />
                  <Flex alignItems={`center`}>
                    <Input
                      {...register(list.name, list.validation)}
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
                      {...register(list.name, list.validation)}
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
                    {errors[list.name] && errors[list.name].message && (
                      <p>{String(errors[list.name].message)}</p>
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
            プライバシーポリシー
          </InternalLink>
          に同意する
        </Flex>

        <SubmitButton />
      </Box>
    </form>
  );
};
