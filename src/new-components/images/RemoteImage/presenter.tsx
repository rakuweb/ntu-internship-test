// import layer
import { CSSProperties } from 'react';
import { Image, ImageProps } from '@chakra-ui/react';
import { css, cx } from 'styled-system/css';
import { SystemStyleObject } from 'styled-system/types';

// type layer
export type StyleProps = SystemStyleObject & {
  className?: string;
  style?: CSSProperties;
};
export type DataProps = {
  image: { fill?: boolean } & Omit<ImageProps, 'fill'>;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export function Presenter({
  image,
  className,
  style,
  ...props
}: PresenterProps) {
  const { fill: _fill, ..._image } = image;
  return (
    <div
      className={cx(
        css({
          position: `relative`,
          ...props,
        }),
        className
      )}
    >
      <Image
        alt={``}
        loading={`lazy`}
        sizes={`(max-width:1280px) 100vw, 60vw`}
        {..._image}
        style={style}
      />
    </div>
  );
}
