// import layer
import { ReactNode, VFC } from 'react';
import { css, cx } from 'styled-system/css';
import { SystemStyleObject } from 'styled-system/types';

// type layer
export type StyleProps = SystemStyleObject;
export type PresenterProps = StyleProps & {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};
export type Presenter = VFC<PresenterProps>;

// presenter
export function Presenter({ children, onClick, className }: PresenterProps) {
  return (
    <button
      className={cx(
        css({
          display: `inline-flex`,
          alignItems: `center`,
          justifyContent: `center`,
          h: { base: `2.5rem` },
          px: { base: `1rem!` },
          borderRadius: `6px`,
          background: `transparent linear-gradient(270deg, #0EF4FF 0%, #41A4FD 100%) 0% 0% no-repeat padding-box!`,
          transition: `all .3s`,
          _hover: {
            cursor: 'pointer',
            filter: `opacity(50%)`,
          },
        }),
        className
      )}
      type={`button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
