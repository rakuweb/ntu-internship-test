// import layer
import { FC, useState } from 'react';
import { Box, Checkbox, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import FormName from './FormName';
import SubmitButton from './SubmitButton';
import Policy from './Policy';
import ChakraStylesDesktop from './ChakraStyles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InquiryItem from './InquiryItem';
import { InternalLink } from '../links/InternalLink';

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
  const [isChecked, setIsChecked] = useState(false);

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
          <InquiryItem
            Options={Options}
            control={control}
            ChakraStylesDesktop={ChakraStylesDesktop}
            errors={errors}
          />
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
            onChange={(e) => setIsChecked(e.target.checked)}
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
        <SubmitButton disabled={!isChecked} />
      </Box>
    </form>
  );
};
