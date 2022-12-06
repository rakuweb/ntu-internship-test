// import layer
import { VFC } from 'react';
import NextImage, { ImageProps } from 'next/image';
import { Image as CImage, ImageProps as CImageProps } from '@chakra-ui/react';

// type layer
export type PresenterProps = CImageProps;
// export type PresenterProps = ImageProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ width, height, ...props }) => {
  return (
    <CImage
      loading={'lazy'}
      htmlWidth={width ? `${width}px` : 'initial'}
      htmlHeight={height ? `${height}px` : 'initial'}
      {...props}
    />
  );
};
