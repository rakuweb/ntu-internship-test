import { cx } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

export type PresenterProps = {
  pagenumber: number;
  className?: string;
  onClick: () => void;
};

export function Presenter({ pagenumber, className, ...props }: PresenterProps) {
  return (
    <div
      className={cx(
        flex({
          fontSize: {
            base: `${11 / 3.75}vw`,
            md: `${12 / 7.68}vw`,
            lg: `${16 / 19.2}vw`,
          },
          color: `#222526`,
          bg: `#DEDEDE`,
          w: {
            base: `${35 / 3.75}vw`,
            md: `${40 / 7.68}vw`,
            lg: `${63 / 19.2}vw`,
          },
          h: {
            base: `${35 / 3.75}vw`,
            md: `${40 / 7.68}vw`,
            lg: `${63 / 19.2}vw`,
          },
          borderRadius: `50%`,
          letterSpacing: `0`,
          alignItems: `center`,
          justify: `center`,
          mr: {
            base: `${8 / 3.75}vw`,
            md: `${8 / 7.68}vw`,
            lg: `${10 / 19.2}vw`,
          },
          ml: {
            base: `${8 / 3.75}vw`,
            md: `${8 / 7.68}vw`,
            lg: `${10 / 19.2}vw`,
          },
          fontWeight: `bold`,
          _hover: {
            transition: `0.1s`,
            cursor: `pointer`,
            border: `1px solid #41A4FD`,
          },
        }),
        className
      )}
      {...props}
    >
      {pagenumber}
    </div>
  );
}
