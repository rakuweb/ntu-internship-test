// import layer
import { VFC, useState } from 'react';
import { css } from '@emotion/react';
import { Box, Progress, Flex } from '@chakra-ui/react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import { Image } from 'atoms/Image';
import { zeroPadding } from '~/lib';
import { breakpointsByPx } from '~/constants/styles';
import { mq } from '~/constants/styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  const [index, setIndex] = useState<number>(0);
  const images = [
    { src: `/dev/img/clip-11@1x.png`, width: 874, height: 500 },
    { src: `/dev/img/clip-11@1x.png`, width: 874, height: 500 },
    { src: `/dev/img/clip-11@1x.png`, width: 874, height: 500 },
    { src: `/dev/img/clip-11@1x.png`, width: 874, height: 500 },
  ];
  const slideTotal = images.length;
  const swiperProps: SwiperProps = {
    modules: [Navigation, Autoplay],

    loop: true,
    centeredSlides: true,
    navigation: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      // [breakpointsByPx[0]]: {},
      // [breakpointsByPx[1]]: {},
      [breakpointsByPx[2]]: {
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 40,
      },
      // [breakpointsByPx[3]]: {},
      // [breakpointsByPx[4]]: {},
    },
    onSlideChange: (swiper) => {
      setIndex(swiper.realIndex);
    },
  };

  return (
    <Box
      pt={{ base: `2rem` }}
      pb={{ base: `5rem`, '2xl': `5rem` }}
      px={{ base: `1rem`, lg: `initial` }}
      bg={`var(--porcelain)`}
      position={`relative`}
      h={{
        base: `300px`,
        md: `28rem`,
        lg: `480px`,
        xl: `560px`,
        '2xl': `initial`,
      }}
      as={`section`}
      sx={{
        '.swiper-button-next': {
          right: { base: `1rem`, lg: `250px`, xl: `320px`, '2xl': `500px` },
          backgroundColor: `var(--white)`,
          borderWidth: `2px`,
          borderStyle: `solid`,
          borderRadius: `50%`,
          borderColor: `var(--navy-blue)`,
          width: { base: `2rem`, lg: `44px` },
          height: { base: `2rem`, lg: `44px` },
          textAlign: `center`,
          verticalAlign: `middle`,
          ':after': {
            fontSize: { base: `1rem`, lg: `1.5rem` },
            color: `var(--navy-blue)`,
            fontWeight: `bold`,
          },
        },
        '.swiper-button-prev': {
          left: { base: `1rem`, lg: `250px`, xl: `320px`, '2xl': `500px` },
          backgroundColor: `var(--white)`,
          borderWidth: `2px`,
          borderStyle: `solid`,
          borderRadius: `50%`,
          borderColor: `var(--navy-blue)`,
          width: { base: `2rem`, lg: `44px` },
          height: { base: `2rem`, lg: `44px` },
          textAlign: `center`,
          verticalAlign: `middle`,
          ':after': {
            fontSize: { base: `1rem`, lg: `1.5rem` },
            color: `var(--navy-blue)`,
            fontWeight: `bold`,
          },
        },
      }}
    >
      <Box
        maxW={{
          base: `28rem`,
          md: `46rem`,
          lg: 'initial',
        }}
        h={`fit-content`}
        position={`relative`}
        mx={`auto`}
      >
        <Swiper {...swiperProps}>
          {images.map((image) => (
            <SwiperSlide key={image.src}>
              <Box
                w={{ base: `100%`, lg: `50vw` }}
                maxW={{
                  lg: `520px`,
                  xl: `700px`,
                  '2xl': 'initial',
                }}
                h={`auto`}
                position={`relative`}
              >
                <Image w={`100%`} h={`100%`} objectFit={`cover`} {...image} />

                <Box
                  display={{ base: `none`, md: `block` }}
                  position={`absolute`}
                  right={{ md: `1rem` }}
                  left={{ base: `50%`, md: `initial` }}
                  transform={{ base: `translate(-50%)`, md: `initial` }}
                  bottom={{ base: `-2rem`, md: `3rem` }}
                  zIndex={1}
                  css={imageText1}
                  w={`fit-content`}
                >
                  虫歯や歯周病を「治す」から「防ぐ」へ
                </Box>

                <Box
                  display={{ base: `none`, md: `block` }}
                  position={`absolute`}
                  right={`1rem`}
                  bottom={`1rem`}
                  zIndex={1}
                  css={imageText2}
                >
                  <div className="date-and-category yugothic-medium-white-12px">
                    <div className="date">2021.09.01</div>
                    <div className="line"></div>
                    <div className="text-1">病気症状について</div>
                  </div>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        <Box w={`100%`} height={`5rem`} position={`relative`}>
          <Box
            position={`absolute`}
            // right={{ lg: `1rem` }}
            top={`-0.5rem`}
            left={{ base: `1rem`, lg: `initial` }}
            // transform={{ base: `translate(-50%)`, lg: `initial` }}
            // bottom={{ base: `-2rem`, lg: `3rem` }}
            zIndex={1}
            css={imageText3}
            display={{ md: `none` }}
            w={`fit-content`}
          >
            ここは文字の部分です
          </Box>

          <Box
            display={{ md: `none` }}
            position={`absolute`}
            top={`1.75rem`}
            left={`1rem`}
            zIndex={1}
            css={imageText2}
          >
            <Flex
              h={`fit-content`}
              p={`0.25rem 0.5rem`}
              className="yugothic-medium-white-12px"
              align={`flex-start`}
              bg={`var(--green-blue)`}
              justify={`flex-end`}
              width={`fit-content`}
            >
              <div className="date">2021.09.01</div>
              <div className="line"></div>
              <div className="text-1">病気症状について</div>
            </Flex>
          </Box>

          {/* 番号の部分 */}
          <Box
            left={{ base: `1rem`, lg: `280px`, xl: `400px`, '2xl': `30vw` }}
            bottom={{ base: `5.5rem`, lg: `2rem` }}
            zIndex={1}
            css={overlap}
          >
            <Box css={number}>{zeroPadding(index + 1)}</Box>
            <Box css={line}>
              <Image src={`/dev/img/line@1x.png`} width={145} height={145} />
            </Box>
            <Box css={styleTotal}>{zeroPadding(slideTotal)}</Box>
          </Box>

          <Box
            zIndex={1}
            position={`absolute`}
            bottom={`2rem`}
            right={{ base: `280px`, xl: `380px`, '2xl': `30vw` }}
            display={{ base: `none`, lg: `block` }}
          >
            <Progress value={((index + 1) / slideTotal) * 100} css={arrow} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// styles
const overlap = css`
  height: 108px;
  margin-bottom: -10px;
  position: relative;
  width: 133px;

  ${mq[2]} {
    margin-bottom: -10px;
  }
`;

const number = css`
  color: var(--navy-blue);
  font-family: var(--font-family-roboto);
  font-size: 3rem;
  font-style: italic;
  left: 0;
  letter-spacing: 0;
  position: absolute;
  top: 0;
  white-space: nowrap;

  ${mq[2]} {
    font-size: 5rem;
    line-height: 36px;
  }
`;

const line = css`
  height: 50px;
  left: 35px;
  object-fit: cover;
  position: absolute;
  top: 25px;
  width: 50px;

  ${mq[2]} {
    height: 72px;
    left: 49px;
    top: 20px;
    width: 72px;
  }
`;

const styleTotal = css`
  font-family: var(--font-family-roboto);
  font-size: 1.5rem;
  font-style: italic;
  left: 60px;
  letter-spacing: 0;
  position: absolute;
  top: 50px;
  white-space: nowrap;
  color: var(--navy-blue);

  ${mq[2]} {
    color: #8ac9ff;
    left: 98px;
    font-size: 2rem;
    line-height: 36px;
    top: 60px;
  }
`;

const arrow = css`
  height: 3px;
  width: 190px;
  background-color: #89c9fef0;
  & > div {
    transition-property: var(--navy-blue);
    transition-duration: var(--navy-blue);
    background-color: var(--navy-blue);
  }
`;

const imageText1 = css`
  align-items: flex-start;
  background-color: var(--green-blue);
  display: flex;
  justify-content: flex-end;
  color: var(--white);
  padding: 0.5rem 1rem;
  letter-spacing: 0;
  white-space: nowrap;
  font-size: var(--font-size-m);
  font-weight: 700;

  ${mq[2]} {
    align-items: flex-start;
    background-color: var(--green-blue);
    display: flex;
    padding: 9px 18px;
    color: var(--white);
    font-family: var(--font-family-yugothic-bold);
    font-size: var(--font-size-xxl);
    letter-spacing: 0;
    white-space: nowrap;
    width: fit-content;
    font-weight: 700;
  }
`;

const imageText2 = css`
  .date-and-category {
    align-items: flex-start;
    background-color: var(--green-blue);
    display: flex;
    height: 28px;
    justify-content: flex-end;
    padding: 0 19px;
    width: fit-content;
  }

  .date {
    align-self: center;
    letter-spacing: 0;
    min-width: 62px;
    white-space: nowrap;
  }

  .line {
    align-self: center;
    background-color: var(--alto);
    height: 12px;
    margin-left: 8px;
    width: 1px;
  }

  .text-1 {
    align-self: center;
    letter-spacing: 0;
    margin-left: 10px;
    white-space: nowrap;
  }
`;

const imageText3 = css`
  align-items: flex-start;
  background-color: var(--green-blue);
  display: flex;
  justify-content: flex-end;
  color: var(--white);
  padding: 0.5rem 1rem;
  letter-spacing: 0;
  white-space: nowrap;
  font-size: var(--font-size-m);
  font-weight: 700;

  ${mq[2]} {
    align-items: flex-start;
    background-color: var(--green-blue);
    padding: 9px 18px;
    color: var(--white);
    font-family: var(--font-family-yugothic-bold);
    font-size: var(--font-size-xxl);
    letter-spacing: 0;
    white-space: nowrap;
    width: fit-content;
    font-weight: 700;
  }
`;
