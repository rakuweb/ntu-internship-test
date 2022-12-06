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
        slidesPerView: 1,
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
      // pt={{ base: `2rem` }}
      // // pb={{ base: `5rem`, '2xl': `5rem` }}
      // px={{ base: `1rem`, lg: `initial` }}
      // bg={`var(--porcelain)`}
      // position={`relative`}
      // h={{
      //   // base: `300px`,
      //   // md: `28rem`,
      //   // lg: `480px`,
      //   // xl: `560px`,
      //   // '2xl': `initial`,
      // }}
      as={`section`}
      sx={{
        '.swiper-button-next': {
          // right: {
          //   base: `1rem`,
          //   lg: `250px`,
          //   xl: `320px`,
          //   '2xl': `500px`
          // },
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
          // left: {
          //   base: `1rem`,
          //   lg: `250px`,
          //   xl: `320px`,
          //   '2xl': `500px`
          // },
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
        // maxW={{
        //   base: `28rem`,
        //   md: `46rem`,
        //   lg: 'initial',
        // }}
        h={`fit-content`}
        position={`relative`}
        mx={`auto`}
      >
        <Swiper {...swiperProps}>
          {images.map((image) => (
            <SwiperSlide key={image.src}>
              <Box
                w={{ base: `100%` }}
                maxW={{
                  // lg: `520px`,
                  // xl: `700px`,
                  // '2xl': 'initial',
                }}
                h={`auto`}
                position={`relative`}
                sx={{
                  'img': {
                    maxWidth: {
                      base: 'calc(100% - 32px)',
                      lg: '80%',
                    },
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }}
              >
                <Image w={`100%`} h={`100%`} objectFit={`cover`} {...image} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
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
