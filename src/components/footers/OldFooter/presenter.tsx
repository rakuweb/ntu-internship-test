// import layer
import { FC } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { Image } from 'components/Image';
import { ExternalLink } from 'components/links/ExternalLink';
import { InternalLink } from 'components/links/InternalLink';
import { INSTAGRAM_URL, routes, TWITTER_URL } from 'constants/routes';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
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
          align={{ base: `center`, lg: `center` }}
          direction={{ base: `column`, lg: `row` }}
          spacing={{ base: `${32 / 3.75}vw` }}
        >
          <InternalLink
            href={routes.home}
            // position={`relative`}
            // w={{ base: `${160 / 3.75}vw`, lg: `${180 / 19.2}vw` }}
          >
            <Image // eslint-disable-line
              mx={{ lg: `auto` }}
              w={`100%`}
              image={{
                width: 267,
                height: 150,
                src: `/svg/ntu-job.svg`,
                // src: '/logo.png',
                // width: 384,
                // height: 198,
                alt: `NOT THE UNIVERSITY FOR JOB`,
              }}
            />
          </InternalLink>
          <Stack
            direction={{ base: `row` }}
            spacing={{ base: `${24 / 3.75}vw`, lg: `${24 / 19.2}vw` }}
            justify={{ base: `center` }}
          >
            <ExternalLink href={INSTAGRAM_URL}>
              <Image // eslint-disable-line
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
              <Image // eslint-disable-line
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
          Copyright © 2023 NOT THE UNIVERSITY
        </Box>
      </Stack>
    </Box>
  );
};
