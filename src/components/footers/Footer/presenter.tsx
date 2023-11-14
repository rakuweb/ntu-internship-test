// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { InternalLink } from 'components/links/InternalLink';
import { routes } from 'constants/routes';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <Box w={`100%`} bg={`#39414E`} as={`footer`}>
      <Box
        w={{ lg: `${1000 / 19.2}vw` }}
        pt={{ base: `${40 / 3.75}vw`, lg: `${70 / 19.2}vw` }}
        pb={{ base: `${40 / 3.75}vw`, lg: `${24 / 19.2}vw` }}
        mx={`auto`}
        fontFamily={`'yugothic', 'Zen Kaku Gothic New','Hiragino Sans'`}
      >
        <Box>
          <Box color="white">
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
            color={`white`}
            fontWeight={500}
            letterSpacing={`0.6px`}
            whiteSpace={`nowrap`}
            fontSize={`12px`}
            m={`0 auto`}
          >
            Copyright © 2023 NOT THE UNIVERSITY
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
