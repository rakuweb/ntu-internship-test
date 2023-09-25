// import layer
import { FC } from 'react';
import { Heading, Image, Text } from '@chakra-ui/react';
import { ExternalLink } from '~/components/links/ExternalLink';
import { styles } from './styles';

// type layer
export type PresenterProps = Record<string, string>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <div css={styles}>
      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <h1 className="jobtitle">会員登録方法</h1>
          <Image src="/images/register/top.webp" mb={'15px'} alt={``} />
          <Text fontSize={'14px'} lineHeight={'1.4'}>
            Forjobをご利用いただく場合は、会員登録が必須になります。会員登録は無料で行うことができ、Forjobのご利用の他、CAFEROOMの利用、会員限定イベントの招待、
            クーポン配布などなど、ここでしか入らない情報をGETすることができます。現在、会員登録で、CAFEROOMで利用できるドリンク無料クーポンも配布しています。登録はとっても簡単で、30秒で行えます。
          </Text>
          <Heading
            as={'h2'}
            m={'16px 0'}
            fontSize={{ base: '18px', lg: '20px' }}
          >
            会員登録のやり方
          </Heading>

          <Text fontSize={'14px'} lineHeight={'1.4'}>
            (1)公式LINEを追加
            <br />
            下記のリンクからLINEで友達の追加をしていただきます。
            <br />
            URL：
            <ExternalLink href={'https://lin.ee/CGmmc1F'}>
              https://lin.ee/CGmmc1F
            </ExternalLink>
            <br /> <br />
            (2)会員登録
            <br />
            （スマートフォンで行ってください）
            <br />
            LINEのトークからメニュー内にある「会員登録＆確認」をタップして、フォームをご入力ください。
            <br /> <br />
            (3)認証完了
            <br />
            ご登録いただいたメールアドレスにメールが届きますので、URLをタップして認証終了となります。
            《届かない場合》迷惑メールフォルダに分類されてしまう場合がございますので、一度ご確認ください。
            《登録ができない場合》公式ラインにてご連絡ください。また、 NOT THE
            UNIVERSITY CAFEROOMにご来店いただければCREWがご案内いたします。
            <br />
            ※LINEのトークからメニューの「会員登録＆確認」をタップすることで会員証が表示されます。
          </Text>

          <Image src="/images/register/method.png" mb={'15px'} alt={``} />
        </div>
      </section>
    </div>
  );
};
