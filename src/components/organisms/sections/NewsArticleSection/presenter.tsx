// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { Box, Stack } from '@chakra-ui/react';
import { ArticleCard } from '../../cards/ArticleCard';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <Box>
      <Box ml={{ lg: `2rem` }} as={`h3`}>
        <div className="text-1 yugothic-bold-midnight-blue-16px" css={text1}>
          ニュース
        </div>
      </Box>
      <Stack spacing={`0.75rem`}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
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
