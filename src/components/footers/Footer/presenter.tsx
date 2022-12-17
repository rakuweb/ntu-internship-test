// import layer
import { FC } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { Image } from 'components/Image';
import { InternalLink } from 'components/links/InternalLink';
import { HP_URL, INSTAGRAM_URL, TWITTER_URL } from 'constants/routes';
import { ExternalLink } from 'components/links/ExternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <Box
      w={{ lg: `${1000 / 19.2}vw` }}
      pt={{ base: `${80 / 3.75}vw`, lg: `${64 / 19.2}vw` }}
      pb={{ base: `${16 / 3.75}vw`, lg: `${24 / 19.2}vw` }}
      mx={`auto`}
      as={`footer`}
    >
      <Stack spacing={{ base: `${32 / 3.75}vw`, lg: `${80 / 19.2}vw` }}>
        <Stack
          justify={{ lg: `space-between` }}
          align={{ base: `center`, lg: `flex-start` }}
          direction={{ base: `column`, lg: `row` }}
          spacing={{ base: `${32 / 3.75}vw` }}
        >
          <InternalLink
            href={HP_URL}
            position={`relative`}
            w={{ base: `${160 / 3.75}vw`, lg: `${180 / 19.2}vw` }}
          >
            <Image
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
          <Stack
            direction={{ base: `row` }}
            spacing={{ base: `${24 / 3.75}vw`, lg: `${24 / 19.2}vw` }}
            justify={{ base: `center` }}
          >
            <ExternalLink href={INSTAGRAM_URL}>
              <Image
                w={{ base: `24px`, lg: `${32 / 19.2}vw` }}
                image={{
                  width: 33,
                  height: 33,
                  src: `/images/sns/instagram.png`,
                  alt: ``,
                }}
              />
            </ExternalLink>
            <ExternalLink href={TWITTER_URL}>
              <Image
                w={{ base: `24px`, lg: `${32 / 19.2}vw` }}
                image={{
                  width: 33,
                  height: 33,
                  src: `/images/sns/twitter.png`,
                  alt: ``,
                }}
              />
            </ExternalLink>
          </Stack>
        </Stack>
        <Box
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
        </Box>
      </Stack>
    </Box>
  );
};
