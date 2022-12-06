// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { Box, Flex } from '@chakra-ui/react';

import { SearchToothKnowledgeSection } from '~/components/organisms/sections/SearchToothKnowledgeSection';
import { SearchClinicSection } from '~/components/organisms/sections/SearchClinicSection';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <Flex
      justify={`center`}
      pt={{ base: `3rem`, sm: `5rem`, lg: `initial` }}
      pb={{ base: `5rem`, lg: `7.5rem` }}
      bg={'var(--porcelain)'}
    >
      <SearchToothKnowledgeSection />
      <Box
        display={{ base: `none`, lg: `initial` }}
        w={{ base: `1rem`, xl: `2.5rem` }}
      />
      <SearchClinicSection />
    </Flex>
  );
};
