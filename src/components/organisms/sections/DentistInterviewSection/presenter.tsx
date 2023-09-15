// import layer
import { VFC } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { ImageTitle } from '~/components/molecules/titles/ImageTitle';
import { DentistCard } from '~/components/organisms/cards/DentistCard';
import { BlueButton } from '~/components/molecules/buttons/BlueButton';
import { InternalLink } from 'molecules/links/InternalLink';
import { Span } from '~/components/atoms/Span';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { breakpointsByPx } from '~/constants/styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  const swiperProps: SwiperProps = {
    modules: [Navigation, Autoplay],
    navigation: true,
    loop: true,
    slidesPerView: 4,
    autoplay: true,
    breakpoints: {
      // [breakpointsByPx[1]]: {},
      [breakpointsByPx[2]]: {
        // centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 35,
      },
      [breakpointsByPx[3]]: { slidesPerView: 4, spaceBetween: 35 },
      //[breakpointsByPx[4]]: {  },
      //375px対応ため5を作りました
      [breakpointsByPx[5]]: { slidesPerView: 1, spaceBetween: 16 },
    },
  };

  return (
    <Box
      position="relative"
      px={{ base: `1rem`, lg: `initial` }}
      bg={{ base: `var(--porcelain)`, lg: `initial` }}
      pb={{ base: `5rem`, lg: `initial` }}
      as={`section`}
    >
      <Box
        h={`350px`}
        w={`100%`}
        position={`absolute`}
        bg={`var(--porcelain)`}
        zIndex={`-1`}
        display={{ base: `none`, lg: `initial` }}
      />
      <Box
        w={{ lg: `fit-content` }}
        mx={{ sm: `auto` }}
        pt={{ base: `5rem`, lg: `initial` }}
        maxW={{
          base: `28rem`,
          lg: `520px`,
          xl: `700px`,
          '2xl': 'initial',
        }}
      >
        <ImageTitle
          img={{
            src: `/dev/img/icon@1x.png`,
            // layout: `fill`,
            objectFit: `contain`,
            // width: 70,
            // height: 116,
          }}
        >
          <Span
            fontSize={{
              base: `var(--font-size-xxl)`,
              md: `var(--font-size-xxxl)`,
            }}
            className="yugothic-bold-navy-blue-32px"
          >
            歯医者
          </Span>
          <Span className="yugothic-bold-navy-blue-24px">さん</Span>
          <Span
            fontSize={{
              base: `var(--font-size-xxl)`,
              md: `var(--font-size-xxxl)`,
            }}
            className="yugothic-bold-navy-blue-32px"
          >
            インタビュー
          </Span>
        </ImageTitle>
      </Box>
      <Stack
        mt={`3rem`}
        direction={{ base: `column`, lg: `row` }}
        spacing={`2rem`}
        mx={`auto`}
        justify={`center`}
        maxW={{
          base: `28rem`,
          // lg: `100%`,
        }}
      >
        <Box
          display={{
            base: `block`,
            lg: `block `,
            xl: `block`,
          }}
          maxW={{
            base: `300px`,
            md: `430px`,
            lg: `950px`,
            xl: `1200px`,
          }}
          margin={{ base: `0 auto` }}
          sx={{
            '.swiper-button-next': {
              right: {
                base: `0rem`,
                lg: `0px`,
                xl: `0px`,
                '2xl': `0px`,
              },
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
              left: { base: `0rem`, lg: `0px`, xl: `0px`, '2xl': `0px` },
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
          <Swiper {...swiperProps}>
            <SwiperSlide>
              {/* <InternalLink href={`#`}> */}
              <DentistCard />
              {/* </InternalLink> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <InternalLink href={`#`}> */}
              <DentistCard />
              {/* </InternalLink> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <InternalLink href={`#`}> */}
              <DentistCard />
              {/* </InternalLink> */}
            </SwiperSlide>
            <Box display={{ lg: `none`, xl: `block` }}>
              <SwiperSlide>
                <InternalLink href={`#`}>
                  <DentistCard />
                </InternalLink>
              </SwiperSlide>
            </Box>
          </Swiper>
        </Box>

        {/* スマホサイズ用 */}
        {/* <Box display={{ base: `block`, lg: `none`, xl: `none` }}>
          <InternalLink href={`#`}>
            <DentistCard />
          </InternalLink>

          <InternalLink href={`#`}>
            <DentistCard />
          </InternalLink>

          <InternalLink href={`#`}>
            <DentistCard />
          </InternalLink>
        </Box> */}
      </Stack>
      <Box mx={`auto`} mt={`2.5rem`} w={{ lg: `fit-content` }}>
        <InternalLink href={`#`}>
          <BlueButton>一覧を見る</BlueButton>
        </InternalLink>
      </Box>
    </Box>
  );
};
