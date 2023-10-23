// import layer
import { FC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, string>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const title = `FORJOB求人広告掲載基準`;

  const firstsentence = `FORJOBでは、求人情報の内容や表記方法について独自の規定を定め、情報を掲載いたします。作成していただいた求人情報が下記に該当する場合は広告の非掲載、内容の変更、削除、改善の指導をさせていただきます。指導に応じていただけない場合、登録企業の了承を得ることなく、当社で求人情報を削除、またはアカウントを削除・停止することがあります。また、影響範囲が広いと当社が判断した場合、登録企業の了承を得ることなく求人広告の掲載を無期限に保留または中止できるものとします。`;

  const list = [
    {
      title: `第 1 条 （企業登録審査基準・求人広告掲載基準等）`,
      statements: `１．下記の業態、組織に該当する、または該当するおそれがあると判断した求人情報は掲載しないものとします。
  ・出会い系（出会い系サイト、サクラ、チャットレディー関係など）
  ・ナイトワーク系（キャバクラ、アダルト産業、ホストクラブ、ガールズバーなど）
  ・許認可や資格、免許が必要な業務において、無許可や無資格・無免許の場合。
  ・FORJOBと競合するサービスを主力事業として営んでいる業態。
  （例：求人サイト、求人ポータルサイトの運営）
  ・海外法人となり日本国内に現地法人がない場合。
  ・会社の実態が不明確、または確認が困難な企業、団体、組織の場合。
  ・暴力団その他、法律で規制されている組織の場合。
２．下記の募集条件に該当する、または該当するおそれがあると判断した求人情報は掲載しないものとします。
  ・有料職業紹介の求人。
  ・求人内容、業務内容、労働時間および賃金が不明確な求人。
  ・あらかじめ試用期間がある場合に、期間賃金等の条件を明記されていない求人。
  ・応募者に費用負担（研修、登録費用）を強いる求人。
  ・法律で定められた最低賃金以下の求人。
  ・初期費用がかかる、または、商品の購入を必要とする求人。
  ・ねずみ講、マルチ商法まがい、またはその疑いがある求人。
  ・求職者からのクレームが多発する求人情報、またはその恐れがある求人。
  ・法律、条令、政令、条約に抵触する業務内容、また、公序良俗に反する恐れがある内容の求人。
３．下記の募集条件に該当する、または該当するおそれがあると判断した求人情報は、原則として掲載しないものとします。
  ・派遣の求人。
  ・完全歩合制の求人。
  ・業務委託、請負の求人。
  ・18 歳未満の立ち入りが法律、条令等で禁止されている施設内での労働その他風営法で規制されている業種の求人。
ただし、上記求人については、事務局が過去の求人実績や企業情報、派遣先企業、福利厚生状況等を審査し、総合判断の上、掲載する場合があります。
４．本条規程の他、事務局の判断により求人情報を掲載しない、または取りやめる場合があります。`,
    },
    {
      title: `第２条 （記述内容）`,
      statements: `当社が下記の記述に該当する、または該当するおそれのあると判断した求人情報は、内容の変更、削除、改善の指導をする場合があります。また、当社は、掲載されている情報に下記の記述を発見した場合、当社の判断により、掲載を中止することができるものとします。
・募集職種名・仕事内容にそぐわない職種カテゴリを選択している。
・客観的事実のない法人格の変更や上場予定の表記を使用している。
（例：株式上場予定、1 年後株式上場予定）
・客観的事実のない表記をしている。
（例：No.1、日本一、業界初、最大、唯一）
・短縮 URL や HTML タグ、Java スクリプトを記載している。
・求人広告でなく、店舗の宣伝広告と同一視できる記載をしている。
・性別、年齢、国籍等による応募制限の記載をしている。
・半角カタカナ、丸付き数字などの機種依存文字を使用している。
・他者（個人・法人）が著作権を有する画像を使用している。
・出会い系サイト・アダルトを連想させる画像を使用している。
・文字のみから構成される画像を使用している。
・18 歳未満の方が閲覧するにあたり不適切な表現を行っている。
・第三者の名誉、財産権、プライバシーその他の権利を不当に侵害する恐れがある。
・選挙事前活動、宗教団体の布教活動又はこれに類する恐れがある。
・残虐、または猟奇的で不快感・犯罪的行為の誘発する恐れがある。
・詐欺的なもの、もしくはこれに類する恐れがある。
・その他、公序良俗に反する表現を含んでいる。
・FORJOBの運営を妨げる恐れがある。
上記以外でも当社の判断により、掲載をお断りする場合や掲載内容の変更、削除、改善を指導させていただく場合がありますのでご了承ください。`,
    },
    {
      title: `第３条 （変更）`,
      statements: `本規定は予告なく変更でき、原則、その時より効力が発生するものとします。 変更後に登録企業が本サービスを利用した場合には、 登録企業は、本規定の内容の変更に同意したものとみなします。`,
    },
  ];

  const address = `住所:新潟県新潟市中央区天神1-1 PLAKA3 2F 
\u3000\u3000 株式会社ラクウェブ`;

  return (
    <div css={styles}>
      <section className="container">
        <div className="xlcontainer">
          <h1 className="h1Style">{title}</h1>
          <p className="FirstSentence">{firstsentence}</p>
          <div className="listStyle">
            {list.map((list) => (
              <div key={list.title}>
                <h2 className="h2Style">{list.title}</h2>
                <p className="stateStyle">{list.statements}</p>
              </div>
            ))}
            <p className="addressStyle">{address}</p>
            <p className="dateStyle ">最終更新日: 2023年10月23日</p>
          </div>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .container {
    background-color: #f5f5f5;
    width: 100vw;
    align-items: center;
    font-family: 'Noto Sans JP', sans-serif;
    margin: 0 0 -20px 0;
    padding: 32px 10px 64px;
    display: flex;
    flex-direction: column;
  }

  .h1Style {
    font-size: ${26 / 3.75}vw;
    font-weight: bold;
    text-align: center;
    margin-bottom: ${32 / 3.75}vw;
  }

  .FirstSentence {
    white-space: pre-wrap;
    line-height: 2em;
    font-size: ${12 / 3.75}vw;
  }

  .listStyle {
    display: flex;
    flex-direction: column;
  }

  .h2Style {
    margin-top: 10vw;
    font-size: ${20 / 3.75}vw;
    line-height: 1.2em;
    font-weight: bold;
  }
  .stateStyle {
    margin: 5vw 0 0 0;
    font-size: ${12 / 3.75}vw;
    line-height: 2em;
    letter-spacing: 0.2em;
    white-space: pre-wrap;
  }

  .addressStyle {
    margin-top: 5vw;
    font-size: ${12 / 3.75}vw;
    line-height: 2em;
    letter-spacing: 0.2em;
    white-space: pre-wrap;
  }

  .dateStyle {
    text-align: right;
    font-size: ${12 / 3.75}vw;
    line-height: 2em;
    letter-spacing: 0.2em;
  }

  ${mq[2]} {
    .container {
      // padding: 32px 0px 64px;
    }
    .xlcontainer {
      width: ${1180 / 19.2}vw;
    }

    .h1Style {
      font-size: ${40 / 19.2}vw;
      margin-bottom: ${32 / 19.2}vw;
    }

    .FirstSentence {
      margin-top: 5vw;
      font-size: ${22 / 19.2}vw;
    }

    .h2Style {
      margin-top: 5vw;
      font-size: ${32 / 19.2}vw;
    }

    .stateStyle {
      margin-top: 2vw;
      font-size: ${22 / 19.2}vw;
      line-height: 2em;
      letter-spacing: 0.2em;
      white-space: pre-wrap;
    }

    .addressStyle {
      margin-top: 5vw;
      font-size: ${22 / 19.2}vw;
      line-height: 2em;
      letter-spacing: 0.2em;
      white-space: pre-wrap;
    }

    .dateStyle {
      text-align: right;
      font-size: ${22 / 19.2}vw;
      line-height: 2em;
      letter-spacing: 0.2em;
    }
  }
`;
