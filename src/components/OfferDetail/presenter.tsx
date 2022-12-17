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
            <OfferButton />
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
  );
};
