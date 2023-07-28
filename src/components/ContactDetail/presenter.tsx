// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import FormName from './FormName';
import ListTitle from './ListTitle';
import SubmitButton from './SubmitButton';
import Policy from './Policy';
import ChakraStylesDesktop from './ChakraStyles';
import InputForm from './Input';
import SelectForm from './SelectForm';
import TextareaForm from './TextareaForm';
import { ErrorMessage } from '@hookform/error-message';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const schema = yup.object().shape({
    mail: yup
      .string()
      .email('有効なメールアドレスを入力してください')
      .required('必須項目です'),
    name: yup.string().required('必須項目です'),
    company: yup.string().required('必須項目です'),
    address: yup.string().required('必須項目です'),
    tel: yup.string().required('必須項目です'),
    inquiry_item: yup.string().required('必須項目です'),
    inquiry_content: yup.string().required('必須項目です'),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
          <div key="お問い合わせ項目">
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
              lineHeight={`1.4em`}
            >
              <Flex>
                <ListTitle index={0} list={'お問い合わせ項目'} />
                <Flex alignItems={`center`}>
                  <SelectForm
                    index={0}
                    list={'お問い合わせ項目'}
                    Options={Options}
                    control={control}
                    ChakraStylesDesktop={ChakraStylesDesktop}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="inquiry_item"
                    render={({ message }) => <p>{message}</p>}
                  />
                </Flex>
              </Flex>
            </Flex>
          </div>

          <div key="お名前">
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
              lineHeight={`1.4em`}
            >
              <Flex>
                <ListTitle index={1} list={'お名前'} />
                <Flex alignItems={`center`}>
                  <InputForm index={1} control={control} name={'name'} />
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => <p>{message}</p>}
                  />
                </Flex>
              </Flex>
            </Flex>
          </div>

          <div key="会社名">
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
              lineHeight={`1.4em`}
            >
              <Flex>
                <ListTitle index={1} list={'会社名'} />
                <Flex alignItems={`center`}>
                  <InputForm index={1} control={control} name={'company'} />
                  <ErrorMessage
                    errors={errors}
                    name="company"
                    render={({ message }) => <p>{message}</p>}
                  />
                </Flex>
              </Flex>
            </Flex>
          </div>

          <div key="住所">
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
              lineHeight={`1.4em`}
            >
              <Flex>
                <ListTitle index={1} list={'住所'} />
                <Flex alignItems={`center`}>
                  <InputForm index={1} control={control} name={'address'} />
                  <ErrorMessage
                    errors={errors}
                    name="address"
                    render={({ message }) => <p>{message}</p>}
                  />
                </Flex>
              </Flex>
            </Flex>
          </div>

          <div key="電話番号">
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
              lineHeight={`1.4em`}
            >
              <Flex>
                <ListTitle index={1} list={'電話番号'} />
                <Flex alignItems={`center`}>
                  <InputForm index={1} control={control} name={'tel'} />
                  <ErrorMessage
                    errors={errors}
                    name="tel"
                    render={({ message }) => <p>{message}</p>}
                  />
                </Flex>
              </Flex>
            </Flex>
          </div>

          <div key="メールアドレス">
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
              lineHeight={`1.4em`}
            >
              <Flex>
                <ListTitle index={1} list={'メールアドレス'} />
                <Flex alignItems={`center`}>
                  <InputForm index={1} control={control} name={'mail'} />
                  <ErrorMessage
                    errors={errors}
                    name="mail"
                    render={({ message }) => <p>{message}</p>}
                  />
                </Flex>
              </Flex>
            </Flex>
          </div>

          <div key="お問い合わせ内容">
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
              lineHeight={`1.4em`}
            >
              <Flex>
                <ListTitle index={2} list={'お問い合わせ内容'} />
                <Flex alignItems={`center`}>
                  <TextareaForm
                    index={2}
                    list={'お問い合わせ内容'}
                    control={control}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="inquiry_content"
                    render={({ message }) => <p>{message}</p>}
                  />
                </Flex>
              </Flex>
            </Flex>
          </div>
        </Box>

        <Policy />
        <SubmitButton />
      </Box>
    </form>
  );
};
