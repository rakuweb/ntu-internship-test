// import layer
import { FC } from 'react';
import { Box, Flex, Checkbox } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { Image } from 'components/images/Image';
import { ExternalLink } from 'components/links/ExternalLink';
import { useRequestStore } from 'features/requests';
import { BackButton } from '~/components/buttons/BackButton';
import { FormButton } from '~/components/buttons/FormButton';
import { apiRoutes, routes } from '~/constants';
import { API_URL_OFFER } from '~/constants/env';
import { parseDate } from '~/lib/utils';
import { RequestSchema } from '../schema';

// type layer
export type DataProps = {
  isHidden: boolean;
};
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ isHidden, ...props }) => {
  const router = useRouter();
  const { reset } = useFormContext<RequestSchema>();
  const { isSending, setIsSending, isChecking, setIsChecking, ...remain } =
    useRequestStore();
  const { backProgress, setProgress } = useRequestStore();

  const list = [
    { title: `会社名` },
    { title: `登録メールアドレス` },

    { title: `雇用形態` },
    { title: '職種' },
    { title: '募集する学生の学年' },
    { title: '募集人数' },
    { title: '時給' },
    { title: '勤務時間' },
    { title: 'シフト詳細' },
    { title: `最低勤務時間` },
    { title: '最低勤務日数' },
    { title: '休日・休暇' },
    { title: '勤務地' },
    { title: '面接場所' },
    { title: '歓迎' },
    { title: 'おすすめポイント' },
    { title: '面談希望日' },
    { title: '面談希望時間' },
    { title: '面談希望時間（備考）' },
    { title: '選考方法' },
    { title: '会社HP' },
    { title: '掲載日' },
    { title: '締切日' },

    { title: '求人タイトル' },
    { title: 'メイン写真' },
    { title: '求人の詳細内容' },
    { title: '雰囲気情報の写真①' },
    { title: '雰囲気情報のタイトル①' },
    { title: '雰囲気情報の詳細①' },
    { title: '雰囲気情報の写真②' },
    { title: '雰囲気情報のタイトル②' },
    { title: '雰囲気情報の詳細②' },
    { title: '雰囲気情報の写真③' },
    { title: '雰囲気情報のタイトル③' },
    { title: '雰囲気情報の詳細③' },
  ];
  const datalist = [
    remain.company_name,
    remain.email,
    remain.job_type,
    remain.occupation,
    remain.target,
    remain.people,
    remain.hourly_wage,
    remain.hours_short,
    remain.shift,
    remain.min_period,
    remain.min_workingday,
    remain.holiday,
    remain.place_short,
    remain.interview_location,
    remain.qualification,
    remain.points,
    remain.desired_interview_date,
    remain.desired_interview_time,
    remain.interview_remarks,
    remain.flow,
    remain.url,
    parseDate(remain?.start_at?.toString()),
    parseDate(remain?.end_at?.toString()),
    remain.title,
    '画像選択済み', // remain.image,
    remain.job_description,
    '画像選択済み', // remain.atmosphere_image,
    remain.atmosphere_title,
    remain.atmosphere_text,
    remain.atmosphere_image2 ? '画像選択済み' : '', // remain.atmosphere_image2,
    remain.atmosphere_title2,
    remain.atmosphere_text2,
    remain.atmosphere_image3 ? '画像選択済み' : '', // remain.atmosphere_image2,
    remain.atmosphere_title3,
    remain.atmosphere_text3,
  ];
  console.log(remain);

  const handleClick = async () => {
    setIsSending(true);
    try {
      // upload image
      const formData = new FormData();
      formData.append(`files`, remain.image);
      const resImage = await fetch(`${API_URL_OFFER}/upload`, {
        method: 'post',
        body: formData,
      });
      const jsonImage = await resImage.json();
      const imageId = jsonImage[0].id;

      // upload atmosphere image
      const formDataAtmosphere = new FormData();
      formDataAtmosphere.append(`files`, remain.atmosphere_image);
      const resImageAtmosphere = await fetch(`${API_URL_OFFER}/upload`, {
        method: 'post',
        body: formDataAtmosphere,
      });
      const jsonImageAtmosphere = await resImageAtmosphere.json();
      const imageIdAtmosphere = jsonImageAtmosphere[0].id;
      // upload atmosphere image2
      const formDataAtmosphere2 = new FormData();
      remain.atmosphere_image2 &&
        formDataAtmosphere2.append(`files`, remain.atmosphere_image2);
      const resImageAtmosphere2 = remain.atmosphere_image2
        ? await fetch(`${API_URL_OFFER}/upload`, {
            method: 'post',
            body: formDataAtmosphere2,
          })
        : undefined;
      const jsonImageAtmosphere2 =
        (await resImageAtmosphere2?.json()) ?? undefined;
      const imageIdAtmosphere2 = jsonImageAtmosphere2?.[0]?.id ?? undefined;
      // upload atmosphere image3
      const formDataAtmosphere3 = new FormData();
      remain.atmosphere_image3 &&
        formDataAtmosphere3.append(`files`, remain.atmosphere_image3);
      const resImageAtmosphere3 = remain.atmosphere_image3
        ? await fetch(`${API_URL_OFFER}/upload`, {
            method: 'post',
            body: formDataAtmosphere3,
          })
        : undefined;
      const jsonImageAtmosphere3 =
        (await resImageAtmosphere3?.json()) ?? undefined;
      const imageIdAtmosphere3 = jsonImageAtmosphere3?.[0]?.id ?? undefined;

      const url = `${API_URL_OFFER}${apiRoutes.offer}`;
      const {
        atmosphere_image: _atmosphere_image,
        atmosphere_text,
        atmosphere_title,
        atmosphere_image2: _atmosphere_image2,
        atmosphere_text2,
        atmosphere_title2,
        atmosphere_image3: _atmosphere_image3,
        atmosphere_text3,
        atmosphere_title3,
        image: _image,
        ...others
      } = remain;
      const _res = await axios.post(url, {
        data: {
          ...others,
          publishedAt: null,
          image: imageId,
          atmosphere: [
            {
              title: atmosphere_title,
              text: atmosphere_text,
              image: imageIdAtmosphere,
            },
            imageIdAtmosphere2
              ? {
                  title: atmosphere_title2,
                  text: atmosphere_text2,
                  image: imageIdAtmosphere2,
                }
              : undefined,
            imageIdAtmosphere3
              ? {
                  title: atmosphere_title3,
                  text: atmosphere_text3,
                  image: imageIdAtmosphere3,
                }
              : undefined,
          ].filter((item) => !!item),
        },
      });
      reset();
      setProgress(0);

      const id = router?.query?.id as string;
      router.push(routes.requestComplete(id));
    } catch (e) {
      console.error(e);
    } finally {
      setIsSending(false);
      setIsChecking(false);
    }
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
      display={isHidden ? 'none' : `block`}
      {...props}
    >
      {/* <Box
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
      >
        {`お申し込み情報の確認`}
      </Box> */}
      <Flex
        mt={{ base: ``, md: `${80 / 19.2}vw` }}
        mb={{ base: `${12 / 3.75}vw`, md: `${20 / 19.2}vw` }}
      >
        <Image // eslint-disable-line
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
          入力データの確認
        </Box>
      </Flex>
      <Box>
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
                      pl={{ base: `${14 / 3.75}vw`, md: `${40 / 19.2}vw` }}
                      pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
                      w={{ base: `${116 / 4.28}vw`, md: `${320 / 19.2}vw` }}
                      fontWeight={`bold`}
                      flexWrap={`wrap`}
                      justify={{ md: `space-between` }}
                    >
                      <Box
                        w={{ base: `${116 / 4.28}vw`, md: `${163 / 19.2}vw` }}
                        whiteSpace={`pre-wrap`}
                      >
                        {list.title}
                      </Box>
                    </Flex>
                  </Box>
                  <Flex py={{ base: `${15 / 3.75}vw`, md: `${18 / 19.2}vw` }}>
                    <Box>
                      <Box
                        borderColor={`#999`}
                        borderRadius={`0`}
                        whiteSpace={`pre-wrap`}
                        w={{
                          base: `${190 / 3.75}vw`,
                          md: `${200 / 7.68}vw`,
                          lg: `${500 / 19.2}vw`,
                        }}
                        fontSize={{
                          base: `${10 / 3.75}vw`,
                          md: `${12 / 7.68}vw`,
                          lg: `${19 / 19.2}vw`,
                        }}
                        ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
                      >
                        {datalist[index]?.toString()}
                      </Box>
                    </Box>
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
          mt={{ base: `${30 / 3.75}vw`, md: `${40 / 19.2}vw` }}
          mb={{ base: `${10 / 3.75}vw`, md: `${60 / 19.2}vw` }}
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
            checked={isChecking}
            onChange={(e) => setIsChecking(e.target.checked)}
          />
          <ExternalLink href={routes.terms} borderBottom={`2px solid #39414E`}>
            利用規約
          </ExternalLink>
          ・
          <ExternalLink
            href={routes.publicationCriteria}
            borderBottom={`2px solid #39414E`}
          >
            広告掲載基準
          </ExternalLink>
          ・
          <ExternalLink
            href={routes.privacyPolicy}
            borderBottom={`2px solid #39414E`}
          >
            プライバシーポリシー
          </ExternalLink>
          に同意の上でご送信ください
        </Flex>

        <Flex mt={{ base: `${60 / 3.75}vw`, md: `${80 / 19.2}vw` }}>
          <BackButton
            isSending={false}
            isChecking={true}
            onClick={() => {
              backProgress();
              window.scroll({ top: 0 });
            }}
          >{`戻る`}</BackButton>
          <FormButton
            onClick={() => handleClick()}
            isSending={isSending}
            isChecking={isChecking}
            isLoading={isSending}
          >
            {`依頼する`}
          </FormButton>
        </Flex>
      </Box>
    </Box>
  );
};
