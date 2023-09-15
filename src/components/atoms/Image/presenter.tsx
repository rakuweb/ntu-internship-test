// import layer
import { FC } from 'react';
import { Image as CImage, ImageProps as CImageProps } from '@chakra-ui/react';

// type layer
export type PresenterProps = CImageProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ width, height, ...props }) => {
  return (
    <CImage
      loading={'lazy'}
      htmlWidth={width ? `${width}px` : 'initial'}
      htmlHeight={height ? `${height}px` : 'initial'}
      {...props}
    />
  );
};
