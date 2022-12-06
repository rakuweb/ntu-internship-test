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
      <section className="clinics-button">
        <a href="#" className="clinics-button__button">
          応募する
        </a>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .clinics-button {
    display: flex;
    font-family: 'Noto Sans JP';
    justify-content: center;
    margin: 48px 0;
  }

  .clinics-button__button {
    align-items: center;
    background-color: #2194e5;
    border-radius: 8px;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    height: 50px;
    justify-content: center;
    width: calc(100% - 32px);
  }

  .clinics-button__button:hover {
    opacity: 0.8;
  }

  .clinics-button__button__number {
    font-size: 16px;
    margin: 12px 0 0;
  }

  ${mq[2]} {
    .clinics-button {
      margin: 48px 0;
    }

    .clinics-button__button {
      height: 50px;
      width: 260px;
    }
  }
`;
