// import layer
import { VFC } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { InternalLink } from 'molecules/links/InternalLink';
import { Span } from '~/components/atoms/Span';
import { BlueButton } from '~/components/molecules/buttons/BlueButton';
import { ImageTitle } from '~/components/molecules/titles/ImageTitle';
import { InterviewCard } from '../../cards/InterviewCard';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <Box
      position="relative"
      px={{ base: `1rem`, lg: `initial` }}
      bg={{ base: `var(--porcelain)`, lg: `initial` }}
      pb={{ base: `5rem`, lg: `initial` }}
      as={`section`}
    >
      <Box
        h={`350px`}
        w={`100%`}
        position={`absolute`}
        bg={`var(--porcelain)`}
        zIndex={`-1`}
        display={{ base: `none`, lg: `initial` }}
      />
      <Box
        w={{ lg: `fit-content` }}
        mx={{ sm: `auto` }}
        pt={{ base: `5rem`, lg: `initial` }}
        maxW={{
          base: `28rem`,
          lg: `520px`,
          xl: `700px`,
          '2xl': 'initial',
        }}
      >
        <ImageTitle
          img={{
            src: `/dev/img/icon@1x.png`,
            // layout: `fill`,
            objectFit: `contain`,
            // width: 70,
            // height: 116,
          }}
        >
          <Span
            fontSize={{
              base: `var(--font-size-xxl)`,
              md: `var(--font-size-xxxl)`,
            }}
            className="yugothic-bold-navy-blue-32px"
          >
            作成したカードのテスト
          </Span>
        </ImageTitle>
      </Box>
      <Stack
        mt={`3rem`}
        direction={{ base: `column`, lg: `row` }}
        spacing={`2rem`}
        mx={`auto`}
        justify={`center`}
        maxW={{
          base: `28rem`,
        }}
      >
        {/*
        <OfferCard
        title={`test募集です。`}
          companyName={`test`}
          // occupation={`test`}
          place={`test`}
          hourlyWage={`1000円`}
          id={`000`}
        />
      */}
        <InterviewCard />
      </Stack>
      <Box mx={`auto`} mt={`2.5rem`} w={{ lg: `fit-content` }}>
        <InternalLink href={`#`}>
          <BlueButton>一覧を見る</BlueButton>
        </InternalLink>
      </Box>
    </Box>
  );
};
