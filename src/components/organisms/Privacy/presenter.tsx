// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, string>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  const firstsentence = `株式会社ラクウェブ(以下当社)は個人情報の保護に対する社会的責任を十分認識し、個人情報の適正な取り扱いを推進していくことが、重要な社会的責務と考えております。
このような責務を果たしていくため以下の方針にもとづき個人情報の保護に努めてまいります。`;

  const list = [
    {
      title: `第1条　法令・規範の遵守について`, // eslint-disable-line
      statements: `当社は個人情報の取り扱いに関する法令、国が定める指針、その他の規範を常に最新状態に維持するとともにこれを遵守いたします。
  `,
    },
    {
      title: `第2条　個人情報の取得について`, // eslint-disable-line
      statements: `当社は利用目的を明確にした上で取得し、特定された利用目的の達成に必要な範囲内で、適正に個人情報を取り扱います。`,
    },
    {
      title: `第3条　個人情報の利用目的について`, // eslint-disable-line
      statements: `当社は、取得した個人情報をお知らせした利用目的以外に利用をいたしません。`,
    },
    {
      title: `第4条　個人情報の安全管理について`, // eslint-disable-line
      statements: `当社は、取得した個人情報について不正アクセス、破壊、紛失、漏えい、改ざん等を防止するため、必要かつ適切な安全管理措置を講じます。また、万が一の問題発生に対しては早急に再発防止のための是正を行います。`,
    },
    {
      title: `第5条　個人情報の第三者への開示について`, // eslint-disable-line
      statements: `当社は、個人情報の管理を厳重に行い、法令に基づく場合、又はお客さまにご承諾いただいた場合を除き、第三者に対しデータを開示・提供することはいたしません。`,
    },
    {
      title: `第6条　個人情報の委託について`, // eslint-disable-line
      statements: `当社は、取得した個人情報の取り扱い・管理を外部へ委託する場合には、漏えい、および不正使用防止のために、契約により義務づけ、適切な管理を実施いたします。`,
    },
    {
      title: `第7条　個人情報保護方針の変更について`, // eslint-disable-line
      statements: `当社は、お客様の事前の了承を得ることなく本方針を随時変更することができるものとします。本方針の変更は、本サイト上での掲載後直ちに有効になるものとします。`,
    },
  ];

  const address = `住所:新潟県新潟市中央区天神1-1 PLAKA3 2F 
\u3000\u3000 株式会社ラクウェブ`;

  return (
    <div css={styles}>
      <section className="container">
        <h1 className="h1Style">プライバシーポリシー</h1>
        <p className="FirstSentence">{firstsentence}</p>
        <div className="listStyle">
          {list.map((list) => (
            <div key={list.title}>
              <h2 className="h2Style">{list.title}</h2>
              <p className="stateStyle">{list.statements}</p>
            </div>
          ))}
          <p className="addressStyle">{address}</p>
          <p className="dateStyle ">最終更新日: 2022年12月8日</p>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .container {
    background-color: #f0f3f5;
    width: 100vw;
    align-items: center;
    font-family: 'Noto Sans JP', sans-serif;
    margin: 0 0 -20px 0;
    padding: 32px 10px 64px;
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
`;
