// import layer
import { FC } from 'react';
import { Box, Flex, Input, Textarea } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { useForm, Controller } from 'react-hook-form';

import FormName from './FormName';
import ListTitle from './ListTitle';
import SubmitButton from './SubmitButton';
import Policy from './Policy';
import ChakraStylesDesktop from './ChakraStyles';
import InputForm from './Input';
import SelectForm from './SelectForm';
import TextareaForm from './TextareaForm';
import { list } from '../../constants/dev/offerDetail';

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
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const Options = [
    { value: '資料請求', label: '資料請求' },
    { value: '採用について', label: '採用について' },
    { value: 'お仕事について', label: 'お仕事について' },
    { value: 'その他', label: 'その他' },
  ];

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
              <ListTitle list={list} index={undefined} />
              <Flex alignItems={`center`}>
                <InputForm list={list} register={register} index={undefined} />

                <SelectForm
                  list={list}
                  Options={Options}
                  control={control}
                  ChakraStylesDesktop={ChakraStylesDesktop}
                  index={undefined}
                />

                <TextareaForm
                  list={list}
                  register={register}
                  index={undefined}
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <Policy />
        <SubmitButton />
      </Box>
    </form>
  );
};
