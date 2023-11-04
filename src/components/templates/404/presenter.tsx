// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/headers/Header';

import { InternalLink } from 'components/links/InternalLink';
import { TopButton } from '~/components/TopButtom';
import { Footer } from '~/components/footers/Footer';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const Massage = `お探しのページが見つかりませんでした。
削除されたか、入力されたURLが間違っている可能性があります。
お手数ですが、もう一度URLをご確認ください。`;
  return (
    <>
      <Header w={`100%`} />
      <Box
        as={`main`}
        bg={`#f5f5f5`}
        p={{ base: `${137 / 3.75}vw 0 ${160 / 3.75}vw 0`, lg: `0` }}
        fontFamily={`'Zen Kaku Gothic New',
        'Hiragino Sans'`}
      >
        <Box
          as={`h1`}
          pt={`10vw`}
          mx={`auto`}
          w={`fit-content`}
          fontSize={{ base: `${30 / 3.75}vw`, lg: `${70 / 19.2}vw` }}
          fontWeight={`700`}
        >
          404 Error Page
        </Box>
        <Box
          whiteSpace={`pre-wrap`}
          w={`fit-content`}
          mx={`auto`}
          textAlign={`center`}
          my={{ base: `5vw`, lg: `3vw` }}
          lineHeight={`2em`}
          fontSize={{ base: `${10 / 3.75}vw`, lg: `${20 / 19.2}vw` }}
        >
          {Massage}
        </Box>
        <Box pb={`10vw`}>
          <InternalLink
            w={{ base: `${270 / 3.75}vw`, lg: `auto` }}
            mx={`auto`}
            href="/"
          >
            <TopButton />
          </InternalLink>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
