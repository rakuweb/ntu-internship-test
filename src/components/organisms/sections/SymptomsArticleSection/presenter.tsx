// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { Box, Stack } from '@chakra-ui/react';

import { ArticleCard } from '../../cards/ArticleCard';
import { InternalLink } from 'molecules/links/InternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <Box>
      <Box ml={{ lg: `2rem` }} as={`h3`}>
        <div className="text-1 yugothic-bold-midnight-blue-16px" css={text1}>
          病気症状について
        </div>
      </Box>
      <Stack spacing={`0.75rem`}>
        <InternalLink href={`#`}>
          <ArticleCard />
        </InternalLink>
        <InternalLink href={`#`}>
          <ArticleCard />
        </InternalLink>
        <InternalLink href={`#`}>
          <ArticleCard />
        </InternalLink>
      </Stack>
    </Box>
  );
};

// styles
const text1 = css`
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
`;
