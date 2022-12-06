// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';
import { Image } from 'atoms/Image';
import { ClinicsContact } from '../ClinicsContact';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  const list = {
    title: `株式会社ラクウェブのマーケターを募集します！`,
    campanyname: `株式会社ラクウェブ`,
    occupation: `職種が入ります`,
    salary: `時給XXXX円`,
    area: `勤務エリア`,
    people: `募集人数X人`,
    interndescription: `日本の伝統産業をブランディングし、その価値を再定義するためのデザイナーインターンを募集！
デザイナーとして、代表の西尾を筆頭とするマーケティングチームでのデザイン制作業務を行っていただきます。
具体的な業務は各個人の経験やスキルによって異なりますが、以下業務内容の一例となります。`,
    termsOccupation: `フロントエンジニア`,
    termsSalary: `XXXXX円`,
    termsArea: `東京都 渋谷区`,
    termsDuties: `同社は受託事業を中心に基盤システム／Webプラットフォーム／モバイルアプリ/
ゲームなど幅広く展開している企業です。
今回は教育系のWebアプリケーションのフロントエンドを担当していただきます。
Vueをメインにお願いする予定で、案件終了後は案件のスライド検討可です。
    
※面談は弊社同席で1回行います。`,
    termsPeople: `6名程度`,
    termsSkill: `・Javaを用いた開発経験
・JUnitを用いたテストコードを書いた経験
・API設計／開発経験
・モダンな開発経験（フロントReact/Vueなどを使用した経験）
※現場はReact/Next環境`,
    termsApplication: `以下の1つでも当てはまれば歓迎です！
◇ 成長したい！
◇ 就活で自分を売込みたい！
◇ 同世代より先んじたい！
◇ 人が好き！
◇ 学生時代にスポーツをやっていた！
◇ 飲食でバイト経験がある！
◇ 自分の価値を上げたい！
◇ 将来起業してみたい！
◇ 海外の仲間も作りたい
※高校生の応募は受け付けておりません。`,
    cardImage: `/dev/img/clip-4@1x.png`,
    cardPost: `○○株式会社  採用担当`,
    cardName: `山田 太郎`,
    cardMain: `創業1-2年のスタートアップ企業です。
スタートアップ企業ではありますが、ミドルクラス～経験豊富エンジニアのメンバーが多く、テックに強みがあります。
スタートアップ案件に興味がある方は、とりあえずキープし、案件への申し込みをぜひ検討してみてください。`,
  };

  return (
    <div css={styles}>
      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <p className="consultation-card-list__card__title">{list.title}</p>
          <p className="consultation-card-list__card__count">
            {list.campanyname}
          </p>
          <div className="h3container">
            <h3 className="h3content">
              <Image src="/dev/img/人がたアイコン.png" className="h3icon" />
              {list.occupation}
            </h3>
            <h3 className="h3content">
              <Image src="/dev/img/お金アイコン.png" className="moneyicon" />
              {list.salary}
            </h3>
            <h3 className="h3content">
              <Image src="/dev/img/場所アイコン.png" className="h3icon" />
              {list.area}
            </h3>
            <h3 className="h3content">
              <Image src="/dev/img/人数アイコン.png" className="peopleicon" />
              {list.people}
            </h3>
          </div>
          <Image src="/dev/img/recruit-test.png" className="bigImg"></Image>
          <h2 className="h2">
            インターンの概要
            <p className="internDescription">{list.interndescription}</p>
          </h2>
          <div className="termsContainer">
            <p className="termsTitle">職種</p>
            <p className="termsMain">{list.termsOccupation}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">日給</p>
            <p className="termsMain">{list.termsSalary}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">勤務エリア</p>
            <p className="termsMain">{list.termsArea}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">業務内容</p>
            <p className="termsMain">{list.termsDuties}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">募集人数</p>
            <p className="termsMain">{list.termsPeople}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">必須スキル</p>
            <p className="termsMain">{list.termsSkill}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">応募条件</p>
            <p className="termsMain">{list.termsApplication}</p>
          </div>
          <div className="contactBlank">
            <ClinicsContact />
          </div>
        </div>
        <p className="minTitle">会社概要</p>
        <div className="cardContainer">
          <Image src={list.cardImage} className="cardImg"></Image>
          <div className="cardTextContainer">
            <p className="post">{list.cardPost}</p>
            <p className="cardName">{list.cardName}</p>
            <p className="cardMain">{list.cardMain}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// styles
const styles = css`
  .consultation-card-list {
    background-color: #f0f3f5;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Noto Sans JP', sans-serif;
    margin: 0 0 -20px 0;
    padding: 32px 0 64px;
  }

  .consultation-card-list__card {
    width: calc(100% - 32px);
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;
  }

  .consultation-card-list__card__title {
    padding: 0 0 0;
    width: 100%;
    font-size: 20px;
    color: #003968;
    font-weight: bold;
    line-height: 1.3em;
  }

  .consultation-card-list__card__count {
    color: #003968;
    font-size: 12px;
    padding: 0;
    width: fit-content;
    border-bottom: 1px solid #000000;
    margin: 15px 0 0 0;
  }

  .h2 {
    font-size: 20px;
    font-weight: bold;
    color: #003968;
  }

  .internDescription {
    font-size: 13px;
    font-weight: 400;
    color: #000000;
    white-space: pre-wrap;
    line-height: 1.8em;
    margin: 15px 0;
  }

  .h3container {
    display: flex;
    flex-wrap: wrap;
  }

  .h3content {
    display: flex;
    flex-direction: colmun;
    font-size: 13px;
    font-weight: bold;
    color: #003968;
    margin: 15px 0 0 0;
    align-items: center;
    width: 50%;
  }

  .h3icon {
    max-width: 12px;
    object-fit: scale-down;
    margin: 0 16px 0 0;
  }

  .peopleicon {
    max-height: 14px;
    object-fit: scale-down;
    margin: 0 16px 0 0;
  }

  .moneyicon {
    max-height: 14px;
    object-fit: scale-down;
    margin: 0 19px 0 4px;
  }

  .bigImg {
    margin: 30px 0;
  }

  .termsContainer {
    padding: 30px 0;
    border-top: solid 1px #707070;
    border-bottom: solid 1px #707070;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    color: #003968;
  }

  .termsContainer2 {
    margin: 30px 0 0 0;
    padding: 0 0 30px 0;
    border-bottom: solid 1px #707070;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    color: #003968;
  }

  .termsTitle {
    padding: 12px 0;
    font-size: 14px;
    line-height: 1.3;
    display: flex;
    vertical-align: top;
    min-width: 100px;
    white-space: nowrap;
  }

  .termsMain {
    display: flex;
    margin: auto 0;
    white-space: pre-wrap;
    line-height: 1.3;
    padding: 12px 0 12px 0;
    font-size: 14px;
  }

  .contactBlank {
    margin: 40px 0 0 0;
  }

  .minTitle {
    margin: 70px 0 30px 0;
    color: #003968;
    font-size: 20px;
    font-weight: bold;
  }

  .cardContainer {
    width: 91%;
    padding: 30px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 150px;
    color: #003968;
    font-size: 14px;
  }

  .cardTextContainer {
    display: flex;
    flex-direction: column;
  }

  .cardImg {
    max-width: 300px;
    border-radius: 10px;
  }

  .post {
    white-space: pre-wrap;
    margin: 15px 0;
  }

  .cardName {
    margin: 0 0 15px 0;
    // text-align: end;
    font-weight: bold;
    font-size: 20px;
  }

  .cardMain {
    white-space: pre-wrap;
    line-height: 1.5em;
  }

  ${mq[2]} {
    //

    .consultation-card-list__card {
      width: 1200px;
      padding: 50px 90px 50px 50px;
    }

    .consultation-card-list__card__title {
      padding: 0;
      font-size: 32px;
    }

    .consultation-card-list__card__count {
      padding: 0 0 0 0;
      margin: 21px 0 21px 0;
      font-size: 20px;
    }

    .h2 {
      font-size: 23px;
      font-weight: bold;
      color: #003968;
      margin: 0 0 0 0;
    }

    .h3content {
      display: flex;
      flex-direction: row;
      font-size: 20px;
      font-weight: bold;
      color: #003968;
      margin: 24px 0 0 0;
      width: 50%;
    }

    .h3icon {
      max-width: 15%;
      padding: 0 22px;
      margin: 0;
    }
    .peopleicon {
      max-height: 100%;
      margin: 0 20px 0 0;
    }

    .moneyicon {
      max-height: 100%;
      padding: 0 28px 0 6px;
      margin: 0;
    }

    .bigImg {
      margin: 45px 0 45px 0;
      padding: 0 0 0 7px;
    }

    .internDescription {
      font-size: 16px;
      font-weight: 400;
      color: #000000;
      white-space: pre-wrap;
      line-height: 2em;
      margin: 30px 0 30px 20px;
    }

    .termsContainer {
      margin: 24px 0 0 0;
      display: flex;
      flex-direction: row;
      padding: 60px 0;
      font-weight: bold;
      color: #003968;
    }

    .termsContainer2 {
      margin: 60px 0 0 0;
      display: flex;
      flex-direction: row;
      padding: 0 0 60px 0;
      font-weight: bold;
      color: #003968;
    }

    .termsTitle {
      padding: 12px 0;
      font-size: 20px;
      line-height: 1.3;
      display: flex;
      vertical-align: top;
      width: 100px;
    }

    .termsMain {
      display: flex;
      margin: auto 0;
      white-space: pre-wrap;
      line-height: 1.3;
      padding: 12px 0 12px 170px;
      font-size: 20px;
    }

    //

    .minTitle {
      margin: 100px 0 30px 360px;
      align-self: flex-start;
      color: #003968;
      font-size: 23px;
    }

    .cardContainer {
      width: 1200px;
      padding: 50px;
      background-color: #fff;
      display: flex;
      flex-direction: row;
      border-radius: 10px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 150px;
      color: #003968;
    }

    .cardTextContainer {
      display: flex;
      flex-direction: column;
    }

    .cardImg {
      max-width: 180px;
    }

    .post {
      margin: 0 30px;
      white-space: pre-wrap;
    }

    .cardName {
      margin: 15px 30px;
      font-weight: bold;
      font-size: 20px;
    }

    .cardMain {
      margin: 0 0 0 30px;
      white-space: pre-wrap;
      line-height: 1.5em;
    }

    .consultation-card-list {
      margin: 0 0 -120px 0;
    }
  }
`;
