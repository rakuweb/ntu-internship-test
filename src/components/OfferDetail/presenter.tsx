// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Image } from 'atoms/Image';

import { OfferButton } from 'components/OfferButton';
import { Labeltext } from '~/features/offers/OfferCard/Labeltext';
import { Labeltext2 } from './Labeltext2';

import { useTargetOfferStore } from 'features/offers/hooks';
import { selectTarget } from 'features/offers/selectors';
import { useRecruitManagerStore } from 'features/company/hooks';
import { selectRecruitManager } from 'features/company/selectors';

import { styles } from './styles';
import colors from '../../lib/theme/foundations/colors';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const list = useTargetOfferStore(selectTarget);
  const manager = useRecruitManagerStore(selectRecruitManager);

  const labeltext = [
    `フロントエンドエンジニア`,
    `バックエンドエンジニア`,
    `iosエンジニア`,
    `データサイエンティスト`,
    `コミュニケーションスキル`,
    `ライティングスキル`,
  ];

  return (
    <div css={styles}>
      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <p className="companyName">
            {manager.companyName}
            ソリマチ株式会社
          </p>
          <p className="jobtitle">
            {list?.title}
            Pythonとレゴマインドストームを使ったプログラミング体験
          </p>

          <Flex flexWrap={`wrap`} mb={{ lg: `20px` }}>
            <Labeltext labeltext={labeltext[0]}></Labeltext>
            <Labeltext labeltext={labeltext[1]}></Labeltext>
          </Flex>

          <h3 className="termstext">
            <Image
              className="icon"
              width={24}
              height={24}
              src={`/images/offers/mokutekitiIcon.png`}
            />
            <div className="placetext">
              {/* {place} */}
              東京都 品川区 東五反田3-18-6 反町第8ビル
            </div>
          </h3>
          <h3 className="termstext">
            <Image
              className="icon"
              width={24}
              height={24}
              src={`/images/offers/hukuroIkon.png`}
            />
            <div className="placetext">
              {/* {hourlyWage} */}
              時給 1,072円
            </div>
          </h3>

          <Image
            // cmsで使う用途
            // src={list.image}
            src="/images/offers/cardtest1.jpeg"
            className="bigImg"
            width={680}
          />
          <OfferButton />
        </div>
      </section>

      <Box
        w={`100vw`}
        bg={`#f5f5f5`}
        pt={`40px`}
        fontFamily={`'Noto Sans JP', sans-serif`}
      >
        <Box
          as={`h2`}
          w={{ base: `100%`, lg: `760px` }}
          m={{ base: `0 0 24px 0`, lg: `0 auto 24px auto` }}
          px={{ base: ` 16px`, lg: `0` }}
          fontSize={{ base: `18px`, lg: `25px` }}
          fontWeight={`700`}
          mb={{ base: `24px` }}
        >
          インターンシップ概要
        </Box>
        <div className="subsection">
          <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
            {`・登壇医師へのカスタマーサクセス
・勉強会企画、運営`}
          </Box>
        </div>
      </Box>

      <Box
        w={`100vw`}
        bg={`#f5f5f5`}
        pt={`40px`}
        fontFamily={`'Noto Sans JP', sans-serif`}
      >
        <Box
          as={`h2`}
          w={{ base: `100%`, lg: `760px` }}
          m={{ base: `0 0 24px 0`, lg: `0 auto 24px auto` }}
          px={{ base: ` 16px`, lg: `0` }}
          fontSize={{ base: `18px`, lg: `25px` }}
          fontWeight={`700`}
        >
          長期インターンシップで任せたいこと
        </Box>
        <div className="subsection">
          <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
            {`＊理想の人物像
・人とのコミュニケーションに抵抗がない
・柔軟性があり、人との調整系が得意
※黙々と作業するというよりは対人系の業務がメインで臨機応変さが一定求められる`}
          </Box>
        </div>
      </Box>

      <Box
        w={`100vw`}
        bg={`#f5f5f5`}
        pt={`40px`}
        fontFamily={`'Noto Sans JP', sans-serif`}
      >
        <Box
          as={`h2`}
          w={{ base: `100%`, lg: `760px` }}
          m={{ base: `0 0 24px 0`, lg: `0 auto 24px auto` }}
          px={{ base: ` 16px`, lg: `0` }}
          fontSize={{ base: `18px`, lg: `25px` }}
          fontWeight={`700`}
          mb={{ base: `24px` }}
        >
          この業務で身につくスキル
        </Box>
        <div className="subsection">
          <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
            <Flex flexWrap={`wrap`}>
              {labeltext.map((text) => (
                <Labeltext2 key={text} labeltext={text} />
              ))}
            </Flex>
          </Box>
        </div>
        <Box mt={`78px`}>
          <OfferButton />
        </Box>
      </Box>

      <Box
        w={`100vw`}
        bg={`#f5f5f5`}
        pt={`40px`}
        fontFamily={`'Noto Sans JP', sans-serif`}
      >
        <Box
          as={`h2`}
          w={{ base: `100%`, lg: `760px` }}
          m={{ base: `0 0 24px 0`, lg: `0 auto 24px auto` }}
          px={{ base: ` 16px`, lg: `0` }}
          fontSize={{ base: `18px`, lg: `25px` }}
          fontWeight={`700`}
          mb={{ base: `24px` }}
        >
          募集要項
        </Box>
        <div className="subsection">
          <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
            <div className="termsContainer">
              <p className="termsTitle">給与</p>
              <p className="termsMain">
                {list.hourlyWage}
                時給 1,072円
              </p>
            </div>
            <div className="termsContainer2">
              <p className="termsTitle">対象学年</p>
              <p className="termsMain">{`1~4年生`}</p>
            </div>
            <div className="termsContainer2">
              <p className="termsTitle">応募資格</p>
              <p className="termsMain">
                {`・人とのコミュニケーションに抵抗がない
・柔軟性があり、人との調整系が得意
※黙々と作業するというよりは対人系の業務がメインで臨機応変さが一定求められる`}
              </p>
            </div>
            <div className="termsContainer2">
              <p className="termsTitle">業務内容</p>
              <p className="termsMain">
                {list.aboutJob}
                {`業務内容が入ります業務内容が入ります業務内容が入ります業務内容が入ります
業務内容が入ります業務内容が入ります業務内容が入ります業務内容が入ります業務内容が入ります`}
              </p>
            </div>
            <div className="termsContainer2">
              <p className="termsTitle">勤務条件</p>
              <p className="termsMain">
                {`勤務可能日数：週 4 以上

勤務時間帯：10:00～21:00

1日あたりの勤務時間：4時間

勤務可能日： 月 火 水 木 金

出社前提。一部はリモート可`}
              </p>
            </div>
            <div className="termsContainer2">
              <p className="termsTitle">職種</p>
              <p className="termsMain">
                {list.occupation}
                webエンジニア
              </p>
            </div>
            <div className="termsContainer3">
              <p className="termsTitle">勤務地</p>
              <p className="termsMain">
                {list.place}
                {`〒111-0035
東京都台東区西浅草2丁目27番7号 浅草TFビル2階`}
              </p>
            </div>
          </Box>
        </div>
        <Box
          w={`100vw`}
          bg={`#f5f5f5`}
          pt={`40px`}
          fontFamily={`'Noto Sans JP', sans-serif`}
        >
          <Box pb={`40px`}>
            <div className="subsection">
              <Flex direction={`column`} alignItems={`center`}>
                <Image
                  mb={`8px`}
                  width={84}
                  height={84}
                  src={`/images/offers/trunkicon.jpeg`}
                />
                <Box fontSize={{ base: `24px` }} fontWeight={`700`} mb={`8px`}>
                  {manager.companyName}
                  TRUNK株式会社
                </Box>
                <Box fontSize={{ base: `12px` }} lineHeight={`18px`}>
                  生まれた環境に関係なく、
                  やる気次第で誰でも活躍できる世界をつくる
                </Box>
              </Flex>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
