// import layer
import { FC } from 'react';
import { Box, Stack, Flex } from '@chakra-ui/react';

import { Image } from 'components/Image';
import { InternalLink } from 'components/links/InternalLink';
import { HP_URL, INSTAGRAM_URL, TWITTER_URL, routes } from 'constants/routes';
import { ExternalLink } from 'components/links/ExternalLink';
import { addApolloState } from '../../../lib/apollo/client';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <Box
      w={{ lg: `${1000 / 19.2}vw` }}
      pt={{ base: `${40 / 3.75}vw`, lg: `${70 / 19.2}vw` }}
      pb={{ base: `${40 / 3.75}vw`, lg: `${24 / 19.2}vw` }}
      mx={`auto`}
      as={`footer`}
      fontFamily={`'yugothic', 'Zen Kaku Gothic New','Hiragino Sans'`}
    >
      <Box>
        <Box color="rgba(0, 0, 0, 0.4)">
          <Flex
            pb={{ base: `${20 / 3.75}vw`, lg: `0` }}
            direction={{ base: 'column', lg: 'row' }}
            justifyContent={`center`}
          >
            <Box m={{ base: `0 auto`, lg: `0` }}>
              <InternalLink href="https://rakuweb.jp/">
                <Box m={{ base: `0 0 ${16 / 3.75}vw 0` }}>運営会社</Box>
              </InternalLink>
            </Box>
            <Box m={{ base: `0 auto`, lg: `0` }}>
              <InternalLink href={routes.terms}>
                <Box
                  m={{
                    base: `0 0 ${16 / 3.75}vw 0`,
                    lg: `0 0 0 ${14 / 19.2}vw`,
                  }}
                >
                  利用規約
                </Box>
              </InternalLink>
            </Box>
            <Box m={{ base: `0 auto`, lg: `0` }}>
              <InternalLink href={routes.privacyPolicy}>
                <Box m={{ lg: `0 0 0 ${14 / 19.2}vw` }}>
                  プライバシーポリシー
                </Box>
              </InternalLink>
            </Box>
          </Flex>
        </Box>
        <Flex
          justifyContent={`center`}
          color={`rgba(0, 0, 0, 0.4)`}
          font-weight={500}
          letter-spacing={`0.6px`}
          white-space={`nowrap`}
          fontSize={`12px`}
          m={`0 auto`}
        >
          Copyright © 2023 NOT THE UNIVERSITY
        </Flex>
      </Box>
    </Box>
  );
};
