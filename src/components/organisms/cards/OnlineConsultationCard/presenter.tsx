// import layer
import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Image } from 'atoms/Image';
import { InternalLink } from 'molecules/links/InternalLink';
import { Span } from '~/components/atoms/Span';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
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
          src={`/dev/img/online-bg-image.png`}
          // layout={`fill`}
          objectFit={`cover`}
          // width={1172}
          // height={400}
          alt={``}
        />
      </Box>
      <Box py={{ base: `0.5rem`, sm: `1rem` }}>
        <Box
          className="text-9 yugothic-bold-midnight-blue-32px"
          css={text9}
          fontSize={{
            base: `var(--font-size-xl)`,
            sm: `var(--font-size-xxxl)`,
          }}
        >
          オンライン相談
        </Box>
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
            有料会員登録で
          </Span>
          <br />
          <Span
            className="yugothic-bold-midnight-blue-14px"
            fontSize={{
              base: `var(--font-size-xs)`,
              sm: `var(--font-size-s)`,
            }}
          >
            月に何度でも相談可能です。
          </Span>
        </div>
        <Box mt={`0.5rem`} mx={`auto`} w={`fit-content`}>
          <InternalLink href={`#`}>
            <div className="btn-2 border-1px-malibu" css={btn2}>
              <Box className="x574-1">
                <Image
                  src="/dev/img/file----574@1x.png"
                  width={9}
                  height={14}
                  alt={``}
                />
              </Box>
              <Box
                className="text-10 yugothic-bold-white-15px"
                fontSize={{ base: `var(--font-size-xs)`, lg: `15px` }}
              >
                オンライン相談する
              </Box>
            </div>
          </InternalLink>
        </Box>
      </Box>
    </Box>
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
