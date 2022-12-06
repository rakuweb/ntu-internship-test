// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';
import { Image } from 'atoms/Image';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <div css={styles}>
      <section className="clinics-staff">
        <div className="clinics-staff__container">
          <div className="clinics-staff__container__left">
            <Image src="/dev/img/staff_1.png" alt="" className="clinics-staff__container__left__image" />
          </div>
          <div className="clinics-staff__container__right">
            <p className="clinics-staff__container__right__position">
              院長
            </p>
            <p className="clinics-staff__container__right__name">
              山田 太郎 先生
            </p>
            <div className="clinics-staff__container__right__description">
              <div className="clinics-staff__container__right__description__contents">
                <p className="clinics-staff__container__right__description__contents__left">
                  略歴
                </p>
                <p className="clinics-staff__container__right__description__contents__right">
                  1978年 東京歯科大学卒業<br />
                  1985年 椎貝歯科医院インプラントオフィス勤務<br />
                  1993年 医療法人社団清麗会理事長<br />
                  2003年 東京歯科大学歯学博士<br />
                  2005年 東京歯科大学インプラント科臨床教授<br />
                  2006年 銀座T&apos;sデンタルオフィスインプラントセンター開院
                </p>
              </div>
              <div className="clinics-staff__container__right__description__contents">
                <p className="clinics-staff__container__right__description__contents__left">
                  所属団体
                </p>
                <p className="clinics-staff__container__right__description__contents__right">
                  ・東京歯科大学卒歯学博士<br />
                  ・東京歯科大学インプラント科臨床教授<br />
                  ・Zinmmer Dental Implant 公認インストラクター<br />
                  ・医療法人社団清麗会理事長<br />
                  ・日本口腔インプラント学会専門医<br />
                  ・日本歯科補綴学会認定医・指導医<br />
                  ・AO(Academy of Osseointegration) Active Member<br />
                  ・青森インプラント研究会講師<br />
                  ・D.I.O.R（Dental Implant for Oral Rehabilitation）研究会主宰
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .clinics-staff {
    display: flex;
    font-family: var(--font-family-yugothic-medium);
    justify-content: center;
    margin: 48px 0 0;
    width: 100vw;
  }

  .clinics-staff__container {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 32px);
    flex-direction: column;
  }

  .clinics-staff__container__left__image {
    height: calc(100vw - 32px);
    width: calc(100vw - 32px);
  }

  .clinics-staff__container__right {
    display: flex;
    flex-direction: column;
    margin: 16px 0 0;
    width: 100%;
  }

  .clinics-staff__container__right__position {
    font-size: 16px;
    color: #003968;
    width: 100%;
    line-height: 1.6;
  }

  .clinics-staff__container__right__name {
    font-size: 20px;
    color: #003968;
    width: 100%;
    line-height: 1.6;
  }

  .clinics-staff__container__right__description {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 8px;
    border-bottom: 1px solid #257FBF;
    margin: 8px 0 0;
  }

  .clinics-staff__container__right__description__contents {
    margin: 8px 0 0;
    border-top: 1px solid #257FBF;
    padding: 8px 0 0;
    display: flex;
  }

  .clinics-staff__container__right__description__contents__left {
    font-size: 16px;
    color: #666;
    width: 100px;
    line-height: 1.7;
  }

  .clinics-staff__container__right__description__contents__right {
    font-size: 16px;
    color: #003968;
    width:  85%;
    line-height: 1.7;
  }

  ${mq[2]} {
    .clinics-staff__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 1024px;
    }

    .clinics-staff__container__left__image {
      height: 300px;
      width: 300px;
    }

    .clinics-staff__container__right {
      display: flex;
      flex-direction: column;
      margin: 0;
      width: calc(1024px - 300px - 28px);
    }

    .clinics-staff__container__right__description__contents__left {
      font-size: 16px;
      color: #666;
      width: 15%;
      line-height: 1.7;
    }
  }
`;
