// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { OfferSliderV2 } from '~/components/OfferSliderV2';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <Box as={`main`}>
      <OfferSliderV2 />
      <Box position={`absolute`} top={`-1000px`} opacity={0}>
        <video
          src={`/videos/amazon-background.mp4`}
          autoPlay
          muted
          playsInline
          loop
        />
      </Box>
    </Box>
  );
};
