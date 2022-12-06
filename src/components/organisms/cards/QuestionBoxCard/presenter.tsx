// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { Box } from '@chakra-ui/react';

import { Image } from 'atoms/Image';
import { InternalLink } from 'molecules/links/InternalLink';
import { Span } from '~/components/atoms/Span';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <InternalLink href={`#`}>
      <Box
        w={{ base: `100%`, lg: `30rem`, xl: `34.75rem` }}
        h={{ lg: `10.625rem` }}
        _hover={{ boxShadow: `2xl` }}
        transitionProperty={`box-shadow`}
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
        position={`relative`}
        boxShadow={`box-shadow: -3.06e-16px 5px 10px #0000001a;`}
      >
        <Box w={`100%`} h={`auto`} position={`absolute`} top={0} left={0}>
          <Image
            src={`/dev/img/box-bg-image.png`}
            // layout={`fill`}
            objectFit={`cover`}
            // width={1172}
            // height={400}
          />
        </Box>
        <Box py={{ base: `0.5rem`, sm: `1rem` }}>
          <div className="text-9 yugothic-bold-midnight-blue-32px" css={text9}>
            <Span
              className="yugothic-bold-midnight-blue-32px"
              fontSize={{
                base: `var(--font-size-xl)`,
                sm: `var(--font-size-xxxl)`,
              }}
            >
              歯
            </Span>
            <Span
              className="yugothic-bold-midnight-blue-32px"
              fontSize={{
                base: `var(--font-size-xl)`,
                sm: `var(--font-size-xxxl)`,
              }}
            >
              の
            </Span>
            <Span
              className="yugothic-bold-midnight-blue-32px"
              fontSize={{
                base: `var(--font-size-xl)`,
                sm: `var(--font-size-xxxl)`,
              }}
            >
              悩み質問箱
            </Span>
          </div>
          <div
            className="text-8-1 yugothic-bold-midnight-blue-14px"
            css={text8_1}
          >
            <Span
              className="yugothic-bold-midnight-blue-14px"
              fontSize={{
                base: `var(--font-size-xs)`,
                sm: `var(--font-size-s)`,
              }}
            >
              症状や予防に関して気になっていることなど
            </Span>
            <br />
            <Span
              className="yugothic-bold-midnight-blue-14px"
              fontSize={{
                base: `var(--font-size-xs)`,
                sm: `var(--font-size-s)`,
              }}
            >
              専門家に聞いてみませんか？
            </Span>
          </div>
          <Box
            mt={{ base: `0.25rem`, sm: `0.5rem` }}
            mx={`auto`}
            w={`fit-content`}
          >
            <div className="btn-2 border-1px-malibu" css={btn2}>
              <Box className="x574-1">
                <Image
                  src="/dev/img/file----574@1x.png"
                  width={9}
                  height={14}
                />
              </Box>
              <Box
                className="text-10 yugothic-bold-white-15px"
                fontSize={{ base: `var(--font-size-xs)`, lg: `15px` }}
              >
                悩みを質問する
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
    </InternalLink>
  );
};

// styles
const text9 = css`
  width: fit-content;
  letter-spacing: 0;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  white-space: nowrap;
  position: relative;
  z-index: 1;
`;

const text8_1 = css`
  letter-spacing: 0.56px;
  margin-top: 0.25rem;
  min-height: 17px;
  text-align: center;
  white-space: nowrap;
  position: relative;
  z-index: 1;

  ${mq[0]} {
    letter-spacing: 0.56px;
    margin-top: 10px;
    min-height: 17px;
    text-align: center;
    white-space: nowrap;
    position: relative;
    z-index: 1;
    line-height: 1.25em;
  }
`;

const btn2 = css`
  width: fit-content;
  align-items: center;
  background-color: var(--mandy);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 0.25rem 1.5rem;
  position: relative;
  z-index: 1;

  x574-1 {
    align-self: center;
    height: 4px;
    margin-bottom: 3px;
    object-fit: cover;
    width: 3px;
  }

  .text-10 {
    letter-spacing: 0;
    margin-left: 4px;
    text-align: center;
    white-space: nowrap;
  }

  ${mq[0]} {
    width: fit-content;
    align-items: center;
    background-color: var(--mandy);
    border-radius: 10px;
    display: flex;
    height: 28px;
    justify-content: center;
    min-width: 176px;
    padding: 0 29px;
    position: relative;
    z-index: 1;

    x574-1 {
      align-self: center;
      height: 7px;
      margin-bottom: 3px;
      object-fit: cover;
      width: 4px;
    }
  }
`;
