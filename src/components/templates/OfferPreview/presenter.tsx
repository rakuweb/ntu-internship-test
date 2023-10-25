// import layer
import { FC, useState } from 'react';
import { Box, Button, Checkbox, Stack } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { useTargetOfferStore, selectTarget } from 'features/offers';
import { OfferDetailPreview } from '~/components/OfferDetailPreview';
import { Span } from '~/components/Span';
import { Footer } from '~/components/footers/Footer';

import { ExternalLink } from '~/components/links/ExternalLink';
import { routes } from '~/constants';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const offer = useTargetOfferStore(selectTarget);
  const router = useRouter();
  const [isCheckedTerm, setIsCheckedTerm] = useState<boolean>(false);
  const [isCheckedConfirm, setIsCheckedConfirm] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const fixMailTo = `modification-request@nottheuniversity.com`;
  const fixMailSubject = (id: string) =>
    `FORJOB求人原稿修正依頼 | 求人番号（仮）:${id}`;
  const fixMailBody = `原稿プレビューのご確認ありがとうございます。%0D%0A
原稿に修正がある場合は、%0D%0A
こちらのメールに修正部分の記載をし、%0D%0A
送信をお願いいたします。%0D%0A
%0D%0A
例：時給1,000円⇒時給：1,200円に変更`;

  const handleClick = async () => {
    setIsSending(true);

    try {
      const _res = await axios.put(routes.apiOffersCheck, { id: offer.id });
      const id = router.query.id as string;

      setIsCheckedTerm(false);
      setIsCheckedConfirm(false);

      router.push(routes.offerCheckComplete(id));
    } catch (e) {
      console.error(e);
      alert(`公開申請に失敗しました。
時間が経ってからもう一度お試しください。`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Box
        width={`100%`}
        position={`fixed`}
        top={0}
        py={{ base: `${40 / 19.2}vw` }}
        bg={`#000`}
        filter={`opacity(50%)`}
        zIndex={1000}
      >
        <Box
          fontSize={{ lg: `${20 / 19.2}vw` }}
          fontWeight={`bold`}
          textAlign={`center`}
          color={`#fff`}
        >
          こちらは、広告掲載確認用のプレビューページです。
        </Box>
      </Box>
      {/*
      <Header />
      */}
      <OfferDetailPreview />
      <Box
        width={`100%`}
        py={{ base: `${32 / 19.2}vw` }}
        bg={`#000`}
        opacity={`80%`}
        position={`fixed`}
        bottom={0}
      >
        <Stack
          color={`#fff`}
          direction={`column`}
          align={`center`}
          fontWeight={`bold`}
          spacing={{ lg: `${24 / 19.2}vw` }}
          fontSize={{ lg: `${16 / 19.2}vw` }}
        >
          <Box fontSize={{ lg: `${20 / 19.2}vw` }} textAlign={`center`}>
            下記の内容を確認し、チェックをした後に「掲載依頼を完了する」ボタンを押して、記事の入稿は完了となります。
          </Box>
          <Stack spacing={{ base: `${16 / 19.2}vw` }}>
            <Box>
              <Checkbox
                checked={isCheckedTerm}
                isInvalid
                onChange={(e) => setIsCheckedTerm(e.target.checked)}
              />
              <ExternalLink ml={{ base: `${8 / 19.2}vw` }}>
                利用規約の同意
              </ExternalLink>
            </Box>
            <Box>
              <Checkbox
                checked={isCheckedConfirm}
                isInvalid
                onChange={(e) => setIsCheckedConfirm(e.target.checked)}
              />
              <Span ml={{ base: `${8 / 19.2}vw` }}>
                原稿の文章および内容の確認
              </Span>
            </Box>
          </Stack>
          <Stack spacing={{ lg: `${32 / 19.2}vw` }} direction={`row`}>
            <ExternalLink
              href={`mailto:${fixMailTo}?subject=${fixMailSubject(
                offer?.id
              )}&body=${fixMailBody}`}
            >
              <Button
                // disabled={!isCheckedTerm || !isCheckedConfirm || isSending}
                isLoading={isSending}
                width={{ base: `${500 / 19.2}vw` }}
                py={{ base: `${40 / 19.2}vw` }}
                bg={`#bdbdbd`}
                borderRadius={0}
                fontSize={{ base: `${24 / 19.2}vw` }}
              >{`修正する`}</Button>
            </ExternalLink>
            <Button
              disabled={!isCheckedTerm || !isCheckedConfirm || isSending}
              isLoading={isSending}
              width={{ base: `${500 / 19.2}vw` }}
              py={{ base: `${40 / 19.2}vw` }}
              bg={`#ED6038`}
              borderRadius={0}
              fontSize={{ base: `${24 / 19.2}vw` }}
              onClick={() => handleClick()}
            >{`掲載依頼を完了する`}</Button>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};
