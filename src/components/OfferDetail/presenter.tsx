// import layer
import { FC } from 'react';
import { Image } from 'atoms/Image';
import { OfferButton } from 'components/OfferButton';

import { useTargetOfferStore } from 'features/offers/hooks';
import { selectTarget } from 'features/offers/selectors';
import { useRecruitManagerStore } from 'features/company/hooks';
import { selectRecruitManager } from 'features/company/selectors';

import { styles } from './styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const list = useTargetOfferStore(selectTarget);
  const manager = useRecruitManagerStore(selectRecruitManager);

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

          <h3 className="h3content">
            <Image src="/images/offers/okaneIcon.png" className="moneyicon" />
            {list.hourlyWage}
            xxxxx円
          </h3>
          <h3 className="h3content">
            <Image src="/images/offers/basyoIcon.png" className="h3icon" />
            {list.place}
            新潟県新潟市
          </h3>

          <Image
            // cmsで使う用途
            // src={list.image}
            src="/images/offers/recruit-test.png"
            className="bigImg"
          ></Image>
          <h2 className="h2">
            インターンの概要
            <p className="internDescription">
              {list.description}
              インターンの概要が入ります。インターンの概要が入ります。インターンの概要が入ります。インターンの概要が入ります。インターンの概要が入ります。
              インターンの概要が入ります。インターンの概要が入ります。インターンの概要が入ります。インターンの概要が入ります。インターンの概要が入ります。インターンの概要が入ります。インターンの概要が入ります。インターンの概要が入ります。
            </p>
          </h2>
          <div className="termsContainer">
            <p className="termsTitle">職種</p>
            <p className="termsMain">
              {list.occupation}
              webエンジニア
            </p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">日給</p>
            <p className="termsMain">
              {list.hourlyWage}
              1万円
            </p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">勤務エリア</p>
            <p className="termsMain">
              {list.place}
              新潟県新潟市中央区xxxx朱鷺メッセ
            </p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">業務内容</p>
            <p className="termsMain">
              {list.aboutJob}
              {`業務内容が入ります業務内容が入ります業務内容が入ります業務内容が入ります
業務内容が入ります業務内容が入ります業務内容が入ります業務内容が入ります業務内容が入ります

業務内容が入ります業務内容が入ります業務内容が入ります`}
            </p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">募集人数</p>
            <p className="termsMain">
              {/* {list.recruitmentNumber} */}
              2名
            </p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">必須スキル</p>
            <p className="termsMain">
              {list.requiredSkills}
              {`reactに関する知識`}
            </p>
          </div>
          <div className="termsContainer2">
            <p className="termsTitle">応募条件</p>
            <p className="termsMain">
              {list.recruitmentTerms}
              {`応募条件が入ります。
応募条件が入ります。応募条件が入ります。
応募条件が入ります。
応募条件が入ります。応募条件が入ります。応募条件が入ります。`}
            </p>
          </div>
          <div className="contactBlank">
            <OfferButton />
          </div>
        </div>
        <p className="minTitle">会社概要</p>
        <div className="cardContainer">
          {/* {manager?.image && (
            <Image
              // src={manager.image.src}
              src={'/images/offers/clip-1@1x.png'}
              className="cardImg"
            ></Image>
          )} */}
          <Image
            // src={manager.image.src}
            src={'/images/offers/clip-1@1x.png'}
            className="cardImg"
          ></Image>
          <div className="cardTextContainer">
            <p className="post">
              {manager.companyName}
              株式会社ラクウェブ 取締役
            </p>
            <p className="cardName">{manager.name}山田 太郎</p>
            <p className="cardMain">
              {manager.introduction}
              {` 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。
 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。
 
 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。
 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。 企業情報が入ります。`}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
