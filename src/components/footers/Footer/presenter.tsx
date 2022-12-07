// import layer
import { FC, ElementType } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { Image } from 'atoms/Image';
import { InternalLink } from 'molecules/links/InternalLink';
import { routes } from '~/constants';
import { styles } from './styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ as = `div`, ...props }) => {
  const Tag = as as ElementType;

  return (
    <footer css={styles}>
      <div className="footer">
        <div className="overlap-group">
          <Box
            my={{ base: `3rem`, lg: `initial` }}
            className="navi yugothic-bold-midnight-blue-16px"
          >
            <Box
              position={{ lg: `relative` }}
              w={{ lg: `17rem` }}
            >
              <InternalLink href={routes.index}>
                <Box className="logo" h={`fit-content`}>
                  <Image
                    w={`10rem`}
                    h={`auto`}
                    alt=""
                    htmlWidth={136}
                    htmlHeight={70}
                    src="/logo.png"
                  />
                </Box>
              </InternalLink>
              <Stack
                direction={{ base: `row` }}
                mt={{ base: `1.5rem`, lg: `initial` }}
                justify={{ base: `center`, lg: `flex-start` }}
                align={{ base: `center` }}
                spacing={{ base: `1rem`, lg: `0rem` }}
              >
                <InternalLink href={`#`}>
                  <div className="x636">
                    <Image
                      width={33}
                      height={33}
                      src={`/dev/img/file-----636@1x.png`}
                    />
                  </div>
                </InternalLink>
                <InternalLink href={`#`}>
                  <div className="x635">
                    <Image
                      width={33}
                      height={33}
                      src={`/dev/img/file-----635@1x.png`}
                    />
                  </div>
                </InternalLink>
              </Stack>
              <Box mt={{ base: `1.5rem`, lg: `initial` }} className="copyright">
                Copyright © 2022 NOT THE UNIVERSITY
              </Box>
            </Box>
            {/*
            <div className="text-4">
              <InternalLink href={`#`}>
                <div className="text yugothic-medium-midnight-blue-16px">
                  歯医者を探す
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  新着情報
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-2 yugothic-medium-midnight-blue-16px">
                  病気症状について
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  ニュース
                </div>
              </InternalLink>
            </div>
            <div className="text-5">
              <InternalLink href={`#`}>
                <div className="text yugothic-medium-midnight-blue-16px">
                  歯の辞典
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-2 yugothic-medium-midnight-blue-16px">
                  歯の悩み相談
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  歯の悩み相談箱
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  オンライン相談
                </div>
              </InternalLink>
            </div>
            <div className="text-6">
              <InternalLink href={`#`}>
                <div className="text yugothic-medium-midnight-blue-16px">
                  歯医者さんインタビュー
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-2 yugothic-medium-midnight-blue-16px">
                  お問い合わせ
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  プライバシーポリシー
                </div>
              </InternalLink>
              <InternalLink href={`#`}>
                <div className="text-1 yugothic-medium-midnight-blue-16px">
                  利用規約
                </div>
              </InternalLink>
            </div>
            */}
          </Box>
        </div>
      </div>
    </footer>
  );
};
