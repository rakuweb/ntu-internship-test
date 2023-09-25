// import layer
import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import NextImage, { ImageProps } from 'next/image';

// type layer
export type StyleProps = BoxProps;
export type DataProps = {
  image: Omit<ImageProps, 'defaultValue' | 'lazyRoot'>;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ image, ...props }) => {
  return (
    <Box position={`relative`} {...props}>
      <NextImage quality={100} {...image} />
    </Box>
  );
};
