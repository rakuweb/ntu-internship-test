// import layer
import { FC } from 'react';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  // const manager = useRecruitManagerStore(selectRecruitManager);
  //   const list = {
  //     title: `株式会社ラクウェブのマーケターを募集します！`,
  //     campanyname: `株式会社ラクウェブ`,
  //     occupation: `職種が入ります`,
  //     salary: `時給XXXX円`,
  //     area: `勤務エリア`,
  //     people: `募集人数X人`,
  //     interndescription: `日本の伝統産業をブランディングし、その価値を再定義するためのデザイナーインターンを募集！
  // デザイナーとして、代表の西尾を筆頭とするマーケティングチームでのデザイン制作業務を行っていただきます。
  // 具体的な業務は各個人の経験やスキルによって異なりますが、以下業務内容の一例となります。`,
  //     termsOccupation: `フロントエンジニア`,
  //     termsSalary: `XXXXX円`,
  //     termsArea: `東京都 渋谷区`,
  //     termsDuties: `同社は受託事業を中心に基盤システム／Webプラットフォーム／モバイルアプリ/
  // ゲームなど幅広く展開している企業です。
  // 今回は教育系のWebアプリケーションのフロントエンドを担当していただきます。
  // Vueをメインにお願いする予定で、案件終了後は案件のスライド検討可です。
  //
  // ※面談は弊社同席で1回行います。`,
  //     termsPeople: `6名程度`,
  //     termsSkill: `・Javaを用いた開発経験
  // ・JUnitを用いたテストコードを書いた経験
  // ・API設計／開発経験
  // ・モダンな開発経験（フロントReact/Vueなどを使用した経験）
  // ※現場はReact/Next環境`,
  //     termsApplication: `以下の1つでも当てはまれば歓迎です！
  // ◇ 成長したい！
  // ◇ 就活で自分を売込みたい！
  // ◇ 同世代より先んじたい！
  // ◇ 人が好き！
  // ◇ 学生時代にスポーツをやっていた！
  // ◇ 飲食でバイト経験がある！
  // ◇ 自分の価値を上げたい！
  // ◇ 将来起業してみたい！
  // ◇ 海外の仲間も作りたい
  // ※高校生の応募は受け付けておりません。`,
  //     cardImage: `/dev/img/clip-4@1x.png`,
  //     cardPost: `○○株式会社  採用担当`,
  //     cardName: `山田 太郎`,
  //     cardMain: `創業1-2年のスタートアップ企業です。
  // スタートアップ企業ではありますが、ミドルクラス～経験豊富エンジニアのメンバーが多く、テックに強みがあります。
  // スタートアップ案件に興味がある方は、とりあえずキープし、案件への申し込みをぜひ検討してみてください。`,
  //   };

  return (
    <>
      {/*
    <div css={styles}>
      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <p className="consultation-card-list__card__title">{list?.title}</p>
          <p className="consultation-card-list__card__count">
            {manager.companyName}
          </p>
          <div className="h3container">
            <h3 className="h3content">
              <Image src="/dev/img/人がたアイコン.png" className="h3icon" />
              {list.occupation}
            </h3>
            <h3 className="h3content">
              <Image src="/dev/img/お金アイコン.png" className="moneyicon" />
              {list.hourlyWage}
            </h3>
            <h3 className="h3content">
              <Image src="/dev/img/場所アイコン.png" className="h3icon" />
              {list.place}
            </h3>
            <h3 className="h3content">
              <Image src="/dev/img/人数アイコン.png" className="peopleicon" />
              {list.recruitmentNumber}
            </h3>
          </div>
          <Image src="/dev/img/recruit-test.png" className="bigImg"></Image>
          <h2 className="h2">
            インターンの概要
            <p className="internDescription">{list.description}</p>
          </h2>
          <div className="termsContainer">
            <p className="termsTitle">職種</p>
            <p className="termsMain">{list.occupation}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">日給</p>
            <p className="termsMain">{list.hourlyWage}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">勤務エリア</p>
            <p className="termsMain">{list.place}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">業務内容</p>
            <p className="termsMain">{list.aboutJob}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">募集人数</p>
            <p className="termsMain">{list.recruitmentNumber}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">必須スキル</p>
            <p className="termsMain">{list.requiredSkills}</p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">応募条件</p>
            <p className="termsMain">{list.recruitmentTerms}</p>
          </div>
          <div className="contactBlank">
            <ClinicsContact />
          </div>
        </div>
        <p className="minTitle">会社概要</p>
        <div className="cardContainer">
          {manager?.image && (
            <Image src={manager.image.src} className="cardImg"></Image>
          )}
          <div className="cardTextContainer">
            <p className="post">{manager.companyName}</p>
            <p className="cardName">{manager.name}</p>
            <p className="cardMain">{manager.introduction}</p>
          </div>
        </div>
      </section>
    </div>
      */}
    </>
  );
};
