// import layer
import { VFC } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Image } from 'atoms/Image';
import { InternalLink } from 'molecules/links/InternalLink';
import { Span } from '~/components/atoms/Span';
import { BlueButton } from '~/components/molecules/buttons/BlueButton';
import { ImageTitle } from '~/components/molecules/titles/ImageTitle';
import { FaqCard } from '~/components/organisms/cards/FaqCard';
import { mq } from '~/constants/styles';
import { OnlineConsultationCard } from '../../cards/OnlineConsultationCard';
import { QuestionBoxCard } from '../../cards/QuestionBoxCard';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <Box
      // w={{ lg: `fit-content` }}
      mx={{ lg: `auto` }}
      mt={{ lg: `7.5rem` }}
      pt={{ md: `5rem`, lg: `initial` }}
      // pt={{ base: `5rem`, lg: `initial` }}
      px={{ base: `1rem`, lg: `initial` }}
      bg={{ base: `var(--porcelain)`, lg: `initial` }}
      as={`section`}
    >
      <Box
        mx={{ base: `auto`, lg: `2rem`, '2xl': `auto` }}
        maxW={{
          base: `28rem`,
          lg: `1024px`,
          xl: `1200px`,
        }}
        position={`relative`}
      >
        <Box
          w={{ lg: `fit-content` }}
          mx={{ sm: `auto` }}
          maxW={{
            base: `28rem`,
            lg: `520px`,
            xl: `700px`,
            '2xl': 'initial',
          }}
        >
          <ImageTitle
            img={{
              src: `/dev/img/icon-2@1x.png`,
              // layout: `fill`,
              objectFit: `contain`,
              // width: 86,
              // height: 118,
            }}
          >
            歯<Span className="yugothic-bold-navy-blue-24px">の</Span>
            悩み相談
          </ImageTitle>
        </Box>
        <Box
          position={`absolute`}
          top={{ base: `-3.5rem`, md: `-5.5rem`, lg: `-8rem`, '2xl': `-8rem` }}
          right={{ base: `0rem`, md: `0rem`, lg: `2rem`, '2xl': `1rem` }}
          w={{ base: `8rem`, md: `10rem`, lg: `initial` }}
        >
          <Image
            width={335}
            height={302}
            src={`/dev/img/consul-image.png`}
            alt={``}
          />
        </Box>
      </Box>
      <Box
        mt={`1rem`}
        px={{ lg: `2rem` }}
        pt={{ lg: `2.5rem` }}
        pb={`2.5rem`}
        bg={`var(--porcelain)`}
        w={{ base: `100%`, lg: `fit-content` }}
        maxW={{
          base: `28rem`,
          lg: `1024px`,
          xl: `1200px`,
        }}
        mx={`auto`}
      >
        <div className="text-1 yugothic-bold-midnight-blue-16px" css={text1}>
          <span className="yugothic-bold-midnight-blue-16px">
            歯について普段聞けないことや気になっていることに関して専門家がお答えします。
            <br />
          </span>
          <span className="yugothic-bold-midnight-blue-16px">
            オンライン相談は、○○円で提供しております。
          </span>
        </div>
        <Stack
          spacing={{ base: `1rem`, lg: `0.5rem` }}
          my={`2rem`}
          direction={{ base: `column`, lg: `row` }}
        >
          <InternalLink href={`#`}>
            <FaqCard />
          </InternalLink>
          <InternalLink href={`#`}>
            <FaqCard />
          </InternalLink>
          <InternalLink href={`#`}>
            <FaqCard />
          </InternalLink>
        </Stack>
        <Box mx={`auto`} w={{ lg: `fit-content` }}>
          <InternalLink href={`#`}>
            <BlueButton>一覧を見る</BlueButton>
          </InternalLink>
        </Box>
        <Flex
          my={`2rem`}
          justify="center"
          direction={{ base: `column`, lg: `row` }}
        >
          <QuestionBoxCard />
          <Box w={`1rem`} h={`1rem`} />
          <OnlineConsultationCard />
        </Flex>
      </Box>
    </Box>
  );
};

// styles
const text1 = css`
  letter-spacing: 0;
  line-height: 26px;
  min-height: 44px;
  ${mq[2]} {
    white-space: nowrap;
  }
`;
