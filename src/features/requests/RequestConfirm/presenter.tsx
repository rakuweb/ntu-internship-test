// import layer
import { FC } from 'react';
import { Box, Flex, Checkbox } from '@chakra-ui/react';
import axios from 'axios';
import { useFormContext } from 'react-hook-form';

import { Image } from 'components/images/Image';
import { ExternalLink } from 'components/links/ExternalLink';
import { useRequestStore } from 'features/requests';
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
    { title: '写真' },
    { title: '求人の詳細情報' },
    { title: '雰囲気の画像' },
    { title: '雰囲気のタイトル' },
    { title: '雰囲気の詳細' },
    // { title: '雰囲気の画像②' },
    // { title: '雰囲気のタイトル②' },
    // { title: '雰囲気の詳細②' },
    // { title: '雰囲気の画像③' },
    // { title: '雰囲気のタイトル③' },
    // { title: '雰囲気の詳細③' },
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
  ];

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
        body: formData,
      });
      const jsonImageAtmosphere = await resImageAtmosphere.json();
      const imageIdAtmosphere = jsonImageAtmosphere[0].id;

      const url = `${API_URL_OFFER}${apiRoutes.offer}`;
      const {
        atmosphere_image: _atmosphere_image,
        atmosphere_text,
        atmosphere_title,
        image: _image,
        ...others
      } = remain;
      const _res = await axios.post(url, {
        data: {
          ...others,
          image: imageId,
          atmosphere: [
            {
              title: atmosphere_title,
              text: atmosphere_text,
              image: imageIdAtmosphere,
            },
          ],
        },
      });
      alert('送信が完了しました。');
      reset();
      setProgress(0);
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
      <Box
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
      </Box>
      <Flex mb={{ base: `${12 / 3.75}vw`, md: `${20 / 19.2}vw` }}>
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
                  <Flex pt={{ base: `${15 / 3.75}vw`, md: `${18 / 19.2}vw` }}>
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
            checked={isChecking}
            onChange={(e) => setIsChecking(e.target.checked)}
          />
          <ExternalLink href={routes.terms} borderBottom={`2px solid #39414E`}>
            利用規約
          </ExternalLink>
          の取り扱いに同意する
        </Flex>

        <Flex mt={{ base: `${60 / 3.75}vw`, md: `${80 / 19.2}vw` }}>
          <FormButton
            isSending={false}
            isChecking={true}
            onClick={() => backProgress()}
          >{`戻る`}</FormButton>
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
