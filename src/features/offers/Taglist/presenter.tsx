// import layer
import { FC } from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { selectPoints, usePointsStore } from '~/features/point';
import { InternalLink } from '~/components/links/InternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const list = [
    `単発(1日)`,
    `短期(1ヶ月以内)`,
    `短期(3ヶ月以内)`,
    `長期(定めなし)`,
    `SNS運用`,
    `SNS運用`,
    `ダミー`,
    `二列目`,
  ];

  return (
    <Box w={`100%`} {...props}>
      <Box
        backgroundColor={{ base: `#ffffff` }}
        w={`100%`}
        pb={{ base: `${0 / 3.75}vw`, lg: `${60 / 19.2}vw` }}
        fontFamily={`'Noto Sans JP', sans-serif`}
      >
        <Box
          ml={{ base: `${20 / 3.75}vw`, lg: `${176 / 19.2}vw` }}
          mt={{ base: `${30 / 3.75}vw`, lg: `${51 / 19.2}vw` }}
          mb={{ base: `${24 / 3.75}vw`, lg: `${30 / 19.2}vw` }}
          fontSize={{ base: `${16 / 3.75}vw`, lg: `${30 / 19.2}vw` }}
          fontWeight={`800`}
        >
          かんたん検索機能
        </Box>
        <Box
          overflow={{ base: `hidden`, lg: `initial` }}
          overflowX={{ base: `scroll`, lg: `initial` }}
          h={{ base: `${100 / 3.75}vw`, lg: `fit-content` }}
        >
          <Flex
            w={{ base: `${600 / 3.75}vw`, lg: `initial` }}
            // h={{ base: `${70 / 3.75}vw`, lg: `${50 / 19.2}vw` }}
            pl={{ base: `${20 / 3.75}vw`, lg: `${235 / 19.2}vw` }}
            mr={{ lg: `${230 / 19.2}vw` }}
            flexWrap={{ base: `wrap`, lg: `wrap` }}
            // overflow={`hidden`}
            // overflowX={{ base: `scroll`, lg: `initial` }}
            flexShrink={`0`}
            // direction={`column`}
          >
            {/* 仮表示ね */}
            {list.map((list) => {
              return (
                <Box
                  key={`list`}
                  w={`fit-content`}
                  h={{ base: `${30 / 3.75}vw`, lg: `${51 / 19.2}vw` }}
                  mb={{ base: `${10 / 3.75}vw`, lg: `${18 / 19.2}vw` }}
                >
                  <InternalLink href="/" w={`fit-content`}>
                    <Box
                      whiteSpace={`nowrap`}
                      p={{
                        base: `${8 / 3.75}vw ${16 / 3.75}vw`,
                        lg: `${12 / 19.2}vw ${29 / 19.2}vw`,
                      }}
                      mr={{ base: `${8 / 3.75}vw`, lg: `${13 / 19.2}vw` }}
                      mb={{ base: `${8 / 3.75}vw`, lg: `${13 / 19.2}vw` }}
                      fontSize={{
                        base: `${13 / 3.75}vw`,
                        lg: `${25 / 19.2}vw`,
                      }}
                      fontWeight={`bold`}
                      border={{
                        base: `${2 / 3.75}vw solid #41A4FD`,
                        lg: `${3 / 19.2}vw solid #41A4FD`,
                      }}
                      borderRadius={{
                        base: `${25 / 3.75}vw`,
                        lg: `${26 / 19.2}vw`,
                      }}
                      color={`#41A4FD`}
                    >
                      {list}
                    </Box>
                  </InternalLink>
                </Box>
              );
            })}

            {/* {points &&
            points.list.map((points) => {
              return (
                <Box
                  key={points.name}
                  p={`${12 / 19.2}vw ${29 / 19.2}vw`}
                  mr={`${13 / 19.2}vw`}
                  mb={`${13 / 19.2}vw`}
                  fontSize={`${25 / 19.2}vw`}
                  fontWeight={`bold`}
                  border={`${3 / 19.2}vw solid #41A4FD`}
                  borderRadius={`${26 / 19.2}vw`}
                  color={`#41A4FD`}
                >
                  {points.name}
                </Box>
              );
            })} */}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
