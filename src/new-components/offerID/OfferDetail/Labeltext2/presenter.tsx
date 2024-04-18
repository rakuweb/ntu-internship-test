// import layer
import { FC } from 'react';

import { routes } from 'constants/routes';
import { css } from 'styled-system/css';

// type layer
export type DataProps = any; // eslint-disable-line
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const { id, labeltext } = props;
  const href = `${routes.point}/${id}`;
  return (
    <div className={css({ margin: `0 4px 4px 0` })}>
      <a
        className={css({
          _hover: { opacity: 0.8, transition: `0.6s` },
        })}
        href={href}
      >
        <div
          className={css({
            bg: `white`,
            color: `#21D4FD`,
            border: `1px solid`,
            p: `4px 12px`,
            fontSize: `12px`,
            borderRadius: `4px`,
            fontWeight: `400`,
          })}
          {...props}
        >
          {labeltext}
        </div>
      </a>
    </div>
  );
};
