// import layer
import { FC, useState } from 'react';
import { Box, Checkbox, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import FormName from './FormName';
import SubmitButton from './SubmitButton';
import ChakraStylesDesktop from './ChakraStyles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InquiryItem from './InquiryItem';
import { InternalLink } from '../links/InternalLink';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const schema = yup.object().shape({
    item: yup.string().required('必須項目です'),
    employment_status: yup.string().required('必須項目です'),
    period: yup.string().required('必須項目です'),
    name: yup.string().required('必須項目です'),
    manager_name: yup.string().required('必須項目です'),
    manager_phone: yup.string().required('必須項目です'),
    email: yup
      .string()
      .email('有効なメールアドレスを入力してください')
      .required('必須項目です'),
    place: yup.string().required('必須項目です'),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  const [isChecked, setIsChecked] = useState(false);

  const Options = [
    { value: '掲載について', label: '掲載について' },
    { value: '料金プランについて', label: '料金プランについて' },
    { value: 'その他', label: 'その他' },
  ];

  const Options2 = [
    { value: '単発アルバイト', label: '単発アルバイト' },
    { value: 'アルバイト', label: 'アルバイト' },
    { value: '長期インターン', label: '長期インターン' },
  ];

  const Options3 = [
    { value: '1ヶ月以内の採用', label: '1ヶ月以内の採用' },
    { value: '3ヶ月以内の採用', label: '3ヶ月以内の採用' },
    { value: '3ヶ月以上先の採用', label: '3ヶ月以上先の採用' },
  ];

  const { executeRecaptcha: _ } = useGoogleReCaptcha();
  // const handleReCaptchaVerify = useCallback(async () => {
  //   if (!executeRecaptcha) {
  //     return;
  //   }

  // const recaptchaToken = await executeRecaptcha('yourAction');

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
            Options2={Options2}
            Options3={Options3}
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
