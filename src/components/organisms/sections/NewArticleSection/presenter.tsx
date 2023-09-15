// import layer
import { VFC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { ImageTitle } from '~/components/molecules/titles/ImageTitle';
import { BlueButton } from '~/components/molecules/buttons/BlueButton';
import { SymptomsArticleSection } from '../SymptomsArticleSection';
import { NewsArticleSection } from '../NewsArticleSection';
import { InternalLink } from 'molecules/links/InternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <Box
      w={`100%`}
      mt={{ lg: `7.5rem` }}
      py={{ lg: `7.25rem` }}
      px={{ base: `1rem`, lg: `initial` }}
      bg={`var(--porcelain)`}
      as={`section`}
    >
      <Box
        mx={{ sm: `auto` }}
        w={{ lg: `fit-content` }}
        maxW={{
          base: `28rem`,
          lg: `520px`,
          xl: `700px`,
          '2xl': 'initial',
        }}
      >
        <ImageTitle
          img={{
            src: `/dev/img/icon-1@1x.png`,
            // layout: `fill`,
            objectFit: `contain`,
            // width: 94,
            // height: 116,
          }}
        >
          新着記事
        </ImageTitle>
      </Box>
      <Flex
        direction={{ base: `column`, lg: `row` }}
        justify={{ lg: `center` }}
        mt={`2rem`}
        maxW={{
          base: `28rem`,
          lg: `initial`,
        }}
        mx={`auto`}
      >
        <SymptomsArticleSection />
        <Box w={`0.75rem`} h={`1rem`} />
        <NewsArticleSection />
      </Flex>
      <Box mx={`auto`} mt={`2.5rem`} w={{ lg: `fit-content` }}>
        <InternalLink href={`#`}>
          <BlueButton>一覧を見る</BlueButton>
        </InternalLink>
      </Box>
    </Box>
  );
};
