// import layer
import { CSSProperties, FC } from 'react';
import NextImage from 'next/image';
import { css, cx } from 'styled-system/css';
import type { ImageProps } from 'next/image';

import type { SystemStyleObject } from 'styled-system/types';

// type layer
export type StyleProps = SystemStyleObject & {
  style?: CSSProperties;
  className?: string;
};
export type DataProps = { image: ImageProps };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  image,
  style,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        css(
          {
            position: `relative`,
          },
          props
        ),
        className
      )}
    >
      <NextImage loading={`lazy`} {...image} style={style} />
    </div>
  );
};
