// import layer
import { VFC, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { Image } from 'atoms/Image';
import { breakpointsByPx } from '~/constants/styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  const [_index, setIndex] = useState<number>(0);
  const images = [
    { src: `/dev/img/clip-11@1x.png`, width: 874, height: 500 },
    { src: `/dev/img/clip-11@1x.png`, width: 874, height: 500 },
    { src: `/dev/img/clip-11@1x.png`, width: 874, height: 500 },
    { src: `/dev/img/clip-11@1x.png`, width: 874, height: 500 },
  ];
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
                maxW={
                  {
                    // lg: `520px`,
                    // xl: `700px`,
                    // '2xl': 'initial',
                  }
                }
                h={`auto`}
                position={`relative`}
                sx={{
                  img: {
                    maxWidth: {
                      base: 'calc(100% - 32px)',
                      lg: '80%',
                    },
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }}
              >
                <Image
                  w={`100%`}
                  h={`100%`}
                  objectFit={`cover`}
                  {...image}
                  alt={``}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
