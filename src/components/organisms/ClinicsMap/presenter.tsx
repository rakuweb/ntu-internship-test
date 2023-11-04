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
      <br />
      <br />
      <br />
      ここにGoogle Map
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30607.09489567341!2d139.6440910434729!3d35.43839069493561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185ce6b8c1c6e5%3A0x2ed603cdac2db594!2z5bCP6I-F5Yy76Zmi!5e0!3m2!1sja!2sjp!4v1645971798890!5m2!1sja!2sjp" width="600px" height="450px" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
    </div>
  );
};
// styles
const styles = css`
  ${mq[2]} {
  }
`;
