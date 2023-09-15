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
      <section className="clinics-schedule">
        <div className="clinics-schedule__container">
          <h2 className="clinics-schedule__container__h2">診療時間</h2>

          <table className="clinics-schedule__container__table">
            <tr>
              <th className="clinics-schedule__container__table__time">時間</th>
              <th className="clinics-schedule__container__table__day">日</th>
              <th className="clinics-schedule__container__table__day">月</th>
              <th className="clinics-schedule__container__table__day">火</th>
              <th className="clinics-schedule__container__table__day">水</th>
              <th className="clinics-schedule__container__table__day">木</th>
              <th className="clinics-schedule__container__table__day">金</th>
              <th className="clinics-schedule__container__table__day">土</th>
            </tr>
            <tr>
              <td className="clinics-schedule__container__table__time">
                9:00 ～ 12:45
              </td>
              <td className="clinics-schedule__container__table__day">ー</td>
              <td className="clinics-schedule__container__table__day">○</td>
              <td className="clinics-schedule__container__table__day">○</td>
              <td className="clinics-schedule__container__table__day">○</td>
              <td className="clinics-schedule__container__table__day">○</td>
              <td className="clinics-schedule__container__table__day">○</td>
              <td className="clinics-schedule__container__table__day">○</td>
            </tr>
            <tr>
              <td className="clinics-schedule__container__table__time">
                14:00 ～ 17:45
              </td>
              <td className="clinics-schedule__container__table__day">ー</td>
              <td className="clinics-schedule__container__table__day">○</td>
              <td className="clinics-schedule__container__table__day">○</td>
              <td className="clinics-schedule__container__table__day">○</td>
              <td className="clinics-schedule__container__table__day">○</td>
              <td className="clinics-schedule__container__table__day">○</td>
              <td className="clinics-schedule__container__table__day">△</td>
            </tr>
          </table>

          <p className="clinics-schedule__container__text">
            ※日曜日と祝日は休診日です。
          </p>
          <p className="clinics-schedule__container__text">
            ※最終受付時間はXX:XXです。
          </p>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .clinics-schedule {
    display: flex;
    font-family: var(--font-family-yugothic-medium);
    justify-content: center;
    margin: 64px 0 0;
    width: 100vw;
  }

  .clinics-schedule__container {
    width: calc(100% - 32px);
  }

  .clinics-schedule__container__h2 {
    color: #003968;
    font-size: 18px;
    width: 100%;
    line-height: 1.6;
  }

  .clinics-schedule__container__table {
    border: 1px solid #ddd;
    color: #003968;
    font-size: 14px;
    width: 100%;
    margin: 16px 0;
  }

  .clinics-schedule__container__table__time {
    border: 1px solid #ddd;
    text-align: center;
    width: 30%;
    padding: 16px 0;
  }

  .clinics-schedule__container__table__day {
    border: 1px solid #ddd;
    text-align: center;
  }

  .clinics-schedule__container__text {
    color: #003968;
    font-size: 16px;
    line-height: 1.6;
    margin: 2px 0 0;
  }

  ${mq[2]} {
    .clinics-schedule__container {
      width: 1024px;
    }

    .clinics-schedule__container__table {
      font-size: 16px;
    }
  }
`;
