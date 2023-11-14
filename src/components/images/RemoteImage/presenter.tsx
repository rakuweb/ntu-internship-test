// import layer
import { FC } from 'react';
import { Box, BoxProps, Image, ImageProps } from '@chakra-ui/react';
// import type { ImageProps } from 'next/image';

// type layer
export type StyleProps = BoxProps;
export type DataProps = {
  image: { fill?: boolean } & Omit<ImageProps, 'fill'>;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ image, style, ...props }) => {
  const { fill, ..._image } = image;
  return (
    <Box position={`relative`} {...props}>
      <Image
        loading={`lazy`}
        sizes={`(max-width:1280px) 100vw, 60vw`}
        {..._image}
        style={style}
      />
    </Box>
  );
};
