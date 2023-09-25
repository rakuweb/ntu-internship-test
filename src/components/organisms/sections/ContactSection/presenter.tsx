// import layer
import { VFC } from 'react';
import { Box, Center } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Image } from 'atoms/Image';
import { InternalLink } from 'molecules/links/InternalLink';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <Box
      bg={`#2194E5`}
      px={{ base: `1rem`, lg: `initial` }}
      py={{ base: `4rem`, sm: `5rem`, lg: `initial` }}
      mt={{ lg: `7.5rem` }}
      h={{ lg: `400px`, xl: `500px`, '2xl': `550px` }}
      position={`relative`}
      css={styles}
      as={`section`}
      overflowX={`hidden`}
    >
      <Center
        w={`100%`}
        h={{ lg: `400px`, xl: `500px` }}
        maxW={{
          base: `28rem`,
          lg: `initial`,
        }}
        mx={`auto`}
      >
        <div className="view">
          <h2 className="text-3 yugothic-bold-white-32px">お問い合わせ</h2>
          <div className="overlap-group">
            <div className="text-2 yugothic-bold-white-16px">
              <span className="yugothic-bold-white-16px">
                オンライン相談に関してや、新規会員登録方法など、
                <Box display={{ base: `none`, lg: `initial` }} as={`br`} />
              </span>
              <span className="yugothic-bold-white-16px">
                ご不明点がございましたらお気軽にお問い合わせください。
              </span>
            </div>
          </div>
          <Box
            w={{ base: `100%`, md: `fit-content` }}
            mx={`auto`}
            mt={{ base: `1rem`, md: `2rem` }}
          >
            <InternalLink href={`#`}>
              <Box
                _hover={{
                  bg: `var(--curious-blue)`,
                  boxShadow: `2xl`,
                  '.text-1': {
                    color: `white`,
                  },
                }}
                transitionProperty={`box-shadow`}
                transitionDuration="0.3s"
                transitionTimingFunction="ease-in-out"
                className="btn border-1px-malibu"
              >
                <div className="text-1">お問い合わせフォームへ</div>
              </Box>
            </InternalLink>
          </Box>
        </div>
      </Center>
      <Box
        w={{ base: `125%`, md: `100%` }}
        bottom={`0`}
        left={0}
        position={'absolute'}
      >
        <Image
          src={`/dev/img/file-----638@1x.png`}
          // layout={`fill`}
          width={1882}
          height={172}
          w={`100%`}
          objectFit={`cover`}
          alt={``}
        />
      </Box>
    </Box>
  );
};

// styles
const styles = css`
  .view {
    display: flex;
    flex-direction: column;
  }

  .text-3 {
    letter-spacing: 0;
    white-space: nowrap;
  }

  .overlap-group {
    margin-top: 17px;
    position: relative;
  }

  .btn {
    background-color: var(--white);
    width: 100%;
    padding: 0.5rem 1rem;
  }

  .text-1 {
    color: #267fbe;
    font-family: var(--font-family-yugothic-bold);
    font-size: var(--font-size-m);
    font-weight: 700;
    letter-spacing: 0;
    text-align: center;
    white-space: nowrap;
  }

  .text-2 {
    left: 1px;
    letter-spacing: 0;
    line-height: 23px;
  }

  ${mq[1]} {
    .view {
      align-items: flex-end;
      display: flex;
      flex-direction: column;
    }

    .text-3 {
      align-self: center;
      letter-spacing: 0;
      line-height: 26px;
      margin-left: 2px;
      margin-top: 17px;
      min-height: 34px;
      min-width: 194px;
      white-space: nowrap;
    }

    .overlap-group {
      margin-top: 17px;
      position: relative;
    }

    .btn {
      align-items: center;
      background-color: var(--white);
      border-radius: 10px;
      display: flex;
      height: 50px;
      justify-content: center;
      min-width: 262px;
      padding: 0 41px;
    }

    .text-1 {
      color: #267fbe;
      font-family: var(--font-family-yugothic-bold);
      font-size: var(--font-size-m);
      font-weight: 700;
      letter-spacing: 0;
      text-align: center;
      white-space: nowrap;
    }

    .text-2 {
      left: 1px;
      letter-spacing: 0;
      line-height: 23px;
      text-align: center;
    }
  }
`;
