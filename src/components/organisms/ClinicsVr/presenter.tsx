// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <div css={styles}>
      <section className="clinics-vr">
        <div className="clinics-vr__container">
          <p className="clinics-vr__container__text">
            院内の設備や空間をご確認ください。
          </p>
          <div className="clinics-vr__container__vr">
            <br />
            <br />
            <br />
            ここに地図埋め込み
            {/* <iframe src="https://www.google.com/maps/embed?pb=!3m2!1sja!2sjp!4v1645971252016!5m2!1sja!2sjp!6m8!1m7!1sAM-8BOL8K-_cwyBpKxW55w!2m2!1d35.43839069493561!2d139.6440910434729!3f19.298091577166375!4f5.581296340152903!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
          </div>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .clinics-vr {
    display: flex;
    justify-content: center;
    margin: 48px 0 0;
    width: 100vw;
    font-family: var(--font-family-yugothic-medium);
  }

  .clinics-vr__container {
    display: flex;
    flex-direction: column;
    width: 1024px;
  }

  .clinics-vr__container__text {
    color: #003968;
    font-size: 18px;
    line-height: 1.6;
  }

  .clinics-vr__container__vr {
    /* height: 560px; */
    /* margin: 16px 0 0; */
    /* width: 1024px; */
  }

  ${mq[2]} {
  }
`;
