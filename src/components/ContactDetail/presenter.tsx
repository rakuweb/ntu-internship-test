// import layer
import { FC } from 'react';
import { Box, Checkbox, Flex } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { routes } from '~/constants';
import {
  contactSchema,
  ContactSchema,
  useContactFormStore,
} from '~/features/contact';
import { ExternalLink } from '../links/ExternalLink';
import FormName from './FormName';
import InquiryItem from './InquiryItem';
import SubmitButton from './SubmitButton';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const { isSending, isChecked, setIsChecked, setIsSending } =
    useContactFormStore();
  const { executeRecaptcha: _ } = useGoogleReCaptcha();

  const submitHandler = async (data: ContactSchema) => {
    const { ...remain } = data;
    setIsSending(true);

    try {
      const _res = await axios.post(routes.apiContact, { ...remain });
      reset({
        item: '',
        name: '',
        email: '',
        employment_status: '',
        period: '',
        manager_name: '',
        manager_phone: '',
        place: '',
        url: '',
        department: '',
        listing_details: '',
        remarks: '',
      });
      router.push(routes.contactComplete);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSending(false);
      setIsChecked(false);
    }
  };

  // const handleReCaptchaVerify = useCallback(async () => {
  //   if (!executeRecaptcha) {
  //     return;
  //   }

  // const recaptchaToken = await executeRecaptcha('yourAction');

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
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
          <InquiryItem control={control} errors={errors} register={register} />
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
            lg: `${18 / 19.2}vw`,
          }}
          fontWeight={`bold`}
        >
          <Checkbox
            checked={isChecked}
            size={{ base: `sm`, lg: `sm`, '2xl': `lg` }}
            mr={{ base: `${10 / 3.75}vw`, md: `${20 / 19.2}vw` }}
            isInvalid
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <ExternalLink href={routes.terms} borderBottom={`2px solid #39414E`}>
            利用規約
          </ExternalLink>
          ・
          <ExternalLink
            href={routes.privacyPolicy}
            borderBottom={`2px solid #39414E`}
          >
            プライバシーポリシー
          </ExternalLink>
          に同意いただき、内容をご確認いただいた上でご送信ください
        </Flex>
        <SubmitButton
          type={`submit`}
          disabled={isSending || !isChecked}
          isLoading={isSending}
        />
      </Box>
    </form>
  );
};
