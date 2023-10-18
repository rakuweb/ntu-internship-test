// import layer
import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import NextImage from 'next/image';
import type { ImageProps } from 'next/image';

// type layer
export type StyleProps = BoxProps;
export type DataProps = { image: ImageProps };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ image, style,...props }) => {
  return (
    <Box position={`relative`} {...props}>
      <NextImage loading={`lazy`} {...image} style={style} />
    </Box>
  );
};
