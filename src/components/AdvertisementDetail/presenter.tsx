// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { Image } from 'components/Image';
// import { Image } from 'atoms/Image';
import { Image as NImage } from 'components/images/Image';
import { useRouter } from 'next/router';

import { selectCompany, useCompanyStore } from 'features/company';
import { useTargetOfferStore, selectTarget } from 'features/offers';
import { useLiff } from 'contexts/LineAuthContextInternship';

import { styles } from './styles';
import { InternalLink } from '../links/InternalLink';
import { routes } from 'constants/routes';
import { useAccountStore, selectSetPrevPath } from 'features/account';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  const company = useCompanyStore(selectCompany);
  const { liff } = useLiff();
  const setPrevPath = useAccountStore(selectSetPrevPath);

  return (
    <div css={styles}>
      {/* <Box w={`100%`} bg={`#f5f5f5`}>
        <div className="search__container">
          <Box
            mx={`auto`}
            overflow={`hidden`}
            borderRadius={{ base: `${20 / 3.75}vw`, lg: `${50 / 19.2}vw` }}
            mt={`30px`}
            w={`100%`}
          >
            <Image
              w={`100%`}
              image={{
                width: 1180,
                height: 295,
                src: '/images/offers/kokoutest.png',
                layout: `responsive`,
                alt: '',
              }}
            />
          </Box>
        </div>
      </Box> */}
      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <h1 className="jobtitle">{`長期休みにおすすめの求人`}</h1>

          {/* <NImage image={{ ...offer.image }} className="bigImg" /> */}
          <Image
            mb={{ base: `${16 / 3.75}vw`, lg: `${16 / 19.2}vw` }}
            image={{
              width: 680,
              height: 400,
              src: `/images/offers/cover.png`,
              alt: ``,
            }}
          />
          <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
            {`前置きの文章の、ダミーテキストです。
前置きの文章の、ダミーテキストです。
`}
            <h2 className="h2">{`NOT THE UNIVERSITYとは`}</h2>
            <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
              {`NOT THE UNIVERSITYは大学内にある少し変わったコワーキングスペース.CAFEROOMでは、今日もたくさんの学生と企業が各々の時間を過ごします．
コーヒーを飲みながら、なにげない会話を楽しむ人やレポートに集中する人．
ときには、企業の人と話をする人や、起業を目指して頑張っている人の姿も．
そう、ここは縛りから開放されたあなたの居場所．自由な時間を過ごす場所.


`}
            </Box>
            <h2 className="h2">{`サブタイトルが入ります`}</h2>
            <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
              {`ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
`}
            </Box>
          </Box>
        </div>
      </section>
    </div>
  );
};
