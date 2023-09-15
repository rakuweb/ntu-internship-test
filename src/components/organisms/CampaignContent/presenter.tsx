// import layer
import { VFC } from 'react';
import { Heading, Image, Text } from '@chakra-ui/react';
import { styles } from './styles';

// type layer
export type PresenterProps = Record<string, string>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <div css={styles}>
      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <h1 className="jobtitle">お祝い金キャンペーン！</h1>
          <Image src="/images/campaign/campaign.webp" mb={'15px'} alt={``} />
          <Text fontSize={'14px'} lineHeight={'1.4'}>
            新大生のための求人サイトForjobを利用して採用されると、先着10名様にお祝い金（Amazonギフト券最大3,000円分）をプレゼントします。
            <br />
            お祝い金は、求人によって異なっているため各ページをご確認ください。
          </Text>
          <Heading
            as={'h2'}
            m={'16px 0'}
            fontSize={{ base: '18px', lg: '20px' }}
          >
            For jobのお祝い金のここがすごい
          </Heading>

          <Text fontSize={'14px'} lineHeight={'1.4'}>
            よりたくさんの方に、Forjobを利用して欲しいとの思いから「お祝い金」を準備しております。
          </Text>

          <Image src="/images/campaign/moneyget.png" mb={'15px'} alt={``} />

          <Heading
            as={'h2'}
            m={'16px 0'}
            fontSize={{ base: '18px', lg: '20px' }}
          >
            お祝い金をゲットする方法
          </Heading>
          <Text fontSize={'14px'} lineHeight={'1.4'}>
            (1)求人にエントリー
            <br /> For
            jobのサイト上で、エントリーした方のみがお祝い金の対象となります。求人ごとにお祝い金が異なっていますのでご確認ください。
            <br />
            <br />
            (2)採用決定
            <br />
            応募先の担当者と面談・面接を行っていただき、その後採用に関する通知の連絡を待ちます。
            <br />
            <br />
            (3)申請
            <br />
            採用通知が確認できる媒体（書類やメール等）をもって、CAFEへご来店ください。
            <br />
            その場でお祝い金をお渡しいたします。 <br />
            ※Amazonが販売する「Amazonギフト券」を金券としてお渡しします。 <br />
            ※ご不明点がある場合は、公式LINEよりご連絡ください。
          </Text>

          <Image src="/images/campaign/method.png" mb={'15px'} alt={``} />
          {/* 
          <Box
            className={`znc yugothic-medium`}
            color={`#003968`}
            as={`article`}
            sx={{
              '& > hr': {
                borderTop: `1px solid #257fbf`,
              },
              '& > h2': {
                marginTop: { base: '16px', lg: '16px' },
                marginBottom: { base: '11px', lg: `16px` },
                width: '100%',
                fontSize: { base: '18px', lg: '20px' },
                color: '#000000',
                fontWeight: 'bold',
                lineHeight: '1.3em',
                borderBottom: `initial`,
              },
              '& > h3': {
                fontSize: { base: '13px', lg: `18px` },
                marginTop: { base: '15px', lg: `0` },
                marginBottom: { lg: `20px` },
                color: '#000000',
              },
              '& > p': {
                fontSize: {
                  base: `14px`,
                  lg: `14px`,
                },
                color: '#000000',
                fontWeight: 400,
                lineHeight: { base: `1.5em`, lg: `1.5em` },
                margin: { base: `15px 0`, lg: 0 },
              },
              '& > p > a': {
                fontSize: { base: `11px`, lg: `14px` },
                fontWeight: 400,
                lineHeight: `1.2em`,
                textDecorationLine: 'underline',
                color: `#003968`,
                display: `inline`,
                width: `fit-content`,
                textAlign: `right`,
                ':hover': {
                  filter: `opacity(50%)`,
                  transition: `all .3s`,
                },
              },
              '& > p > img:not(.emoji)': {
                marginY: { lg: `30px` },
                w: { base: `100%` },
              },
            }}
          /> */}
        </div>
      </section>
    </div>
  );
};
