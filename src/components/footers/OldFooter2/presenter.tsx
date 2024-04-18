// import layer
import { FC } from 'react';
import { Box, Stack, Flex } from '@chakra-ui/react';

import { Image } from 'components/Image';
import { ExternalLink } from 'components/links/ExternalLink';
import { InternalLink } from 'components/links/InternalLink';
import { HP_URL, INSTAGRAM_URL, TWITTER_URL } from 'constants/routes';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <Box
      w={{ lg: `${1000 / 19.2}vw` }}
      pt={{ base: `${50 / 3.75}vw`, lg: `${53 / 19.2}vw` }}
      pb={{ base: `${16 / 3.75}vw`, lg: `${24 / 19.2}vw` }}
      mx={`auto`}
      as={`footer`}
    >
      <Stack spacing={{ base: `${32 / 3.75}vw`, lg: `${18 / 19.2}vw` }}>
        <Box
          color="rgba(0, 0, 0, 0.4)"
          borderBottom={{ base: '0px', lg: '1px solid' }}
        >
          <Flex pb={`${18 / 19.2}vw`} direction={{ base: 'column', lg: 'row' }}>
            <InternalLink href="https://rakuweb.jp/">
              <Box m={{ base: `0 0 ${16 / 3.75}vw 0` }}>運営会社</Box>
            </InternalLink>
            <InternalLink href="/">
              <Box
                m={{ base: `0 0 ${16 / 3.75}vw 0`, lg: `0 0 0 ${14 / 19.2}vw` }}
              >
                利用規約
              </Box>
            </InternalLink>
            <InternalLink href="/privacy-policy">
              <Box m={{ lg: `0 0 0 ${14 / 19.2}vw` }}>プライバシーポリシー</Box>
            </InternalLink>
          </Flex>
        </Box>
        <Stack
          justify={{ lg: `space-between` }}
          align={{ base: `center`, lg: `flex-start` }}
          direction={{ base: `column`, lg: `row` }}
          spacing={{ base: `${32 / 3.75}vw` }}
        >
          <Flex alignItems={'end'}>
            <InternalLink
              href={HP_URL}
              // position={`relative`}
              // w={{ base: `${160 / 3.75}vw`, lg: `${180 / 19.2}vw` }}
            >
              <Image // eslint-disable-line
                position={`initial`}
                w={`100%`}
                image={{
                  src: '/logo.png',
                  width: 384,
                  height: 198,
                  alt: `NOT THE UNIVERSITY`,
                }}
              />
            </InternalLink>
            <Box
              color={`rgba(0, 0, 0, 0.4)`}
              font-family={`var(--font-family-yugothic-medium)`}
              font-weight={500}
              letter-spacing={`0.6px`}
              white-space={`nowrap`}
              fontSize={{ base: `${12 / 3.75}vw`, lg: `${12 / 19.2}vw` }}
              ml={'8px'}
            >
              Copyright © 2022 NOT THE UNIVERSITY
            </Box>
          </Flex>

          <Stack
            direction={{ base: `row` }}
            spacing={{ base: `${24 / 3.75}vw`, lg: `${24 / 19.2}vw` }}
            justify={{ base: `center` }}
          >
            <ExternalLink href={INSTAGRAM_URL}>
              <Image // eslint-disable-line
                w={{ base: `24px`, lg: `${20 / 19.2}vw` }}
                image={{
                  width: 20,
                  height: 20,
                  src: `/images/sns/instagram.png`,
                  alt: ``,
                }}
              />
            </ExternalLink>
            <ExternalLink href={TWITTER_URL}>
              <Image // eslint-disable-line
                w={{ base: `24px`, lg: `${20 / 19.2}vw` }}
                image={{
                  width: 20,
                  height: 20,
                  src: `/images/sns/twitter.png`,
                  alt: ``,
                }}
              />
            </ExternalLink>
          </Stack>
        </Stack>
        {/* <Box
          mx={{ base: `auto` }}
          textAlign={`center`}
          color={`var(--midnight-blue)`}
          font-family={`var(--font-family-yugothic-medium)`}
          font-weight={500}
          letter-spacing={`0.6px`}
          white-space={`nowrap`}
          fontSize={{ base: `${12 / 3.75}vw`, lg: `${12 / 19.2}vw` }}
        >
          Copyright © 2022 NOT THE UNIVERSITY
        </Box> */}
      </Stack>
    </Box>
  );
};
