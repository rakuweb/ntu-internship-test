// import layer
import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/router';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { FormProvider, useForm } from 'react-hook-form';

import { Header } from 'components/headers/Header';
import { GOOGLE_RECAPTCHA_SITE_KEY, API_URL_OFFER } from 'constants/env';
import {
  genderList,
  JobFormSchema,
  jobFormSchema,
} from 'features/jobForm/schema';
import { JobForm } from '~/components/JobForm';
import { Footer } from '~/components/footers/Footer';
import { routes, apiRoutes } from '~/constants';
import { selectAccount, useAccountStore } from '~/features/account';
import { selectJobFormFunctions, useJobFormStore } from '~/features/jobForm';
import { selectTarget, useTargetOfferStore } from '~/features/offers';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const offer = useTargetOfferStore(selectTarget);
  const router = useRouter();
  const { setIsSending, setIsChecked } = useJobFormStore(
    selectJobFormFunctions
  );
  const methods = useForm<JobFormSchema>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: { gender: genderList[0] },
  });
  const { lineId } = useAccountStore(selectAccount);

  const submitHandler = async (data: JobFormSchema) => {
    const { ...remain } = data;
    setIsSending(true);

    try {
      const id = router.query.id as string;
      const resFilteredSubmissions = await axios.get(
        `${API_URL_OFFER}${apiRoutes.submissions}?filters[lineid]=${lineId}&filters[offer]=${id}`
      );
      const { data: filteredSubmissions } = resFilteredSubmissions.data;
      if (filteredSubmissions.length > 0) {
        const sendedData = filteredSubmissions[0];
        const _resLine = await axios.post(routes.apiOffersJobformLine, {
          ...sendedData.attributes,
          lineid: lineId,
          offer: sendedData.id,
          offer_title: offer.title,
          offer_image: offer.image.src,
        });
        alert(`すでに同様の求人へ応募されています。
再度LINEへ通知を送信しました。
お客様のLINEアカウントへ通知が届いているかご確認ください。`);
        return;
      }

      const _res = await axios.post(routes.apiJobform, {
        ...remain,
        lineid: lineId,
        offer: id,
      });
      methods.reset();
      const _resLine = await axios.post(routes.apiOffersJobformLine, {
        ...remain,
        // lineid: 'U9fb70816e41a16058f487996e2e19701',
        // lineid: `Ufb211660bd898efefbfd690e75ae227c`,
        // lineid: `U24ba9dc6a8ee18ab540103b724203831`,
        lineid: lineId,
        offer: id,
        offer_title: offer.title,
        offer_image: offer.image.src,
      });

      router.push(routes.offersJobFormComplete(id));
    } catch (e) {
      console.error(e);
    } finally {
      setIsSending(false);
      setIsChecked(false);
    }
  };
  return (
    <>
      <Header />
      <GoogleReCaptchaProvider
        reCaptchaKey={GOOGLE_RECAPTCHA_SITE_KEY}
        language={`ja`}
      >
        <FormProvider {...methods}>
          <JobForm submitHandler={submitHandler} />
        </FormProvider>
      </GoogleReCaptchaProvider>
      <Footer />
    </>
  );
};
