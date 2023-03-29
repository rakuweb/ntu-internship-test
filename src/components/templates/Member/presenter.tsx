// import layer
// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { BreadcrumbOffers } from '~/components/organisms/BreadcrumbOffers';
import { Member } from '~/components/organisms/Member';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <Box as={`main`}>
        <BreadcrumbOffers title={`会員証`} />
        <Member />
      </Box>
    </>
  );
};
