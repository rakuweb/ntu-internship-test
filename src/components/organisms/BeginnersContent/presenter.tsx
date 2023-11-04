// import layer
import { VFC } from 'react';

import { Heading, Image, Text } from '@chakra-ui/react';
import { InternalLink } from '~/components/molecules/links/InternalLink';
import { routes } from '../../../constants/routes';
import { styles } from './styles';
// type layer
export type PresenterProps = Record<string, string>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <div css={styles}>
      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <h1 className="jobtitle">はじめての方へ</h1>
          <Image src="/images/beginners/top.webp" mb={'15px'} alt={``} />
          <Heading
            as={'h2'}
            m={'16px 0'}
            fontSize={{ base: '18px', lg: '20px' }}
          >
            For jobとは
          </Heading>
          <Text fontSize={'14px'} lineHeight={'1.4'}>
            For jobは、NOT THE
            UNIVERSITYがお届けする新大生のための求人サイトです。気軽に空いている時間を有効活用できるワンデーバイトから就活に役立つインターンシップ求人まで、他では体験できない求人や高時給アルバイトをお届けします。
          </Text>
          <Heading
            as={'h2'}
            m={'16px 0'}
            fontSize={{ base: '18px', lg: '20px' }}
          >
            Forjobを使うメリット
          </Heading>

          <Text fontSize={'14px'} lineHeight={'1.4'}>
            Forjobはたくさんのメリットがあります。あなたにピッタリの求人を見つけ、学業と両立をし、圧倒的成長を目指しましょう。
          </Text>

          <Image
            src="/images/beginners/howto.png"
            alt="For jobの使い方の画像"
            mb={'15px'}
          ></Image>
          <Heading
            as={'h2'}
            m={'16px 0'}
            fontSize={{ base: '18px', lg: '20px' }}
          >
            エントリーの進め方
          </Heading>

          <Text fontSize={'14px'} lineHeight={'1.4'}>
            <br />
            （会員登録をしていない場合）
            <br />
            会員登録後、求人エントリーに進めます。会員登録は下のURLからご確認ください。
            <br />
            <InternalLink href={routes.howToRegister}>
              https://nstudentwork.nottheuniversity.com/how-to-register
            </InternalLink>
            <br />
            <br />
            (1)エントリー
            <br />
            求人一覧より、お好きな求人を選びエントリーします。エントリーをする際には、フォームに必要事項を入力していただきます。
            <br />
            ・名前・メールアドレス・電話番号・年齢・面談日時
            <br />
            ・連絡の付く時間・興味を持った理由・自己PR等
            <br />
            <br />
            (2)面接・面談
            <br />
            登録いただいたメールアドレスに応募先の担当者からご連絡が届きますので、面談の日時等を決めてください。
            <br />
            連絡がこない場合はお手数ですが、公式LINEにてご連絡ください。
            <br />
            <br /> (3)スタート
            <br />
            応募先から採用連絡が届いたら、スタートです。また、現在お祝い金キャンペーンを行っております。申請してお祝い金をゲットしてください。
            <br />
            ※合否に関する問い合わせは応募先へお願いいたします※
          </Text>
          <Image
            src="/images/beginners/method.png"
            alt="For jobの使い方の画像"
            mb={'15px'}
          ></Image>

          <Heading
            as={'h2'}
            m={'16px 0'}
            fontSize={{ base: '18px', lg: '20px' }}
          >
            そもそも「インターン」って何？
          </Heading>

          <Text fontSize={'14px'} lineHeight={'1.4'}>
            インターンシップとは、学生が興味のある企業などで実際に働いたり、訪問したりする職業体験のことです。実際の業務や働く環境の体験を通じて、業務内容や働くことの理解を深めることを目的としています。
            インターンシップは、学生側・企業側のどちらにもメリットがあり、インターンシップを受け入れる企業は増えてきています。また大学側も推奨している場合が多いです。{' '}
            <br />
            <br />
            インターンシップには1日単位のものから、数ヵ月、あるいは数年の長期のものまで様々です。大学の長期休みを利用するのが一般的ですが、長期インターンシップなどでは、
            授業の少ない学年の大学生が平日にインターンシップを行うこともあります。インターンシップの経験は就活に有利となり、さらに経験を積むことで自身の成長にもつながります。
          </Text>
        </div>
      </section>
    </div>
  );
};
