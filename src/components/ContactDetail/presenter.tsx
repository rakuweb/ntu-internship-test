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
              // fontWeight={`bold`}
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
                    register={register('inquiry_item', {
                      required: '必須項目です',
                    })}
                  />
                  {errors['inquiry_item'] && (
                    <p>{String(errors['inquiry_item'].message)}</p>
                  )}
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
              // fontWeight={`bold`}
              lineHeight={`1.4em`}
            >
              <Flex>
                <ListTitle index={1} list={'お名前'} />
                <Flex alignItems={`center`}>
                  <InputForm
                    index={1}
                    list={'お名前'}
                    register={register('name', { required: '必須項目です' })}
                  />
                  {errors['name'] && <p>{String(errors['name'].message)}</p>}
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
