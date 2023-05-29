// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { OfferSlider } from '~/components/OfferSlider';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <Box as={`main`}>
        <OfferSlider />
      </Box>
    </>
  );
};
