// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <div css={styles}>
      <section className="clinics-title">
        <p className="clinics-title__status">
          本日診療中
        </p>
        <div className="clinics-title__title">
          <h1 className="clinics-title__title__name">
            医療法人社団清麗会 銀座T&apos;Sデンタルオフィスインプラントセンター
          </h1>
          <a href="#" className="clinics-title__title__button">
            電話で予約<br />
            <span className="clinics-title__title__button__number">
              0066-0000-00000
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .clinics-title {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: var(--font-family-yugothic-medium);
    margin: 24px 0 0;
    width: 100vw;
  }

  .clinics-title__status {
    color: #003968;
    margin-bottom: 16px;
    width: calc(100% - 32px);
  }

  .clinics-title__title {
    align-items: flex-start;
    color: #003968;
    display: flex;
    flex-direction: column;
    width: calc(100% - 32px);
  }

  .clinics-title__title__name {
    color: #003968;
    font-size: 24px;
    line-height: 1.5;
  }

  .clinics-title__title__button {
    align-items: center;
    background-color: #2194E5;
    border-radius: 8px;
    color: #FFF;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    height: 72px;
    justify-content: center;
    margin: 16px 0 0;
    width: 100%;
  }

  .clinics-title__title__button:hover {
    opacity: 0.8;
  }

  .clinics-title__title__button__number {
    font-size: 16px;
    margin: 8px 0 0;
  }

  ${mq[2]} {
    .clinics-title {
      margin: 56px 0 0;
    }

    .clinics-title__status {
      width: 1024px;
    }

    .clinics-title__title {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      width: 1024px;
    }

    .clinics-title__title__button {
      margin: 0;
      width: 264px;
    }
  }
`;
