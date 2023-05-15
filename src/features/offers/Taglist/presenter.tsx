// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { selectPoints, usePointsStore } from '~/features/point';
import { InternalLink } from '~/components/links/InternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const list = [
    `マーケティング`,
    `コミュニケーション能力`,
    `分析力`,
    `思考力`,
    `柔軟性`,
    `効率性`,
    `業務処理能力`,
    `情報収集力`,
    `トレンド察知力`,
    `継続力`,
    `デザイン制作スキル`,
    `表現力`,
    `語彙力`,
    `推進力`,
    `実行力`,
    `発信力`,
    `写真撮影スキル`,
    `アイデア力`,
    `コンサルティングスキル`,
    `エンジニアスキル`,
  ];

  return (
    <Box w={`100%`} {...props}>
      <Box
        backgroundColor={{ base: `#ffffff` }}
        w={`100%`}
        h={{ base: `80px`, lg: `${359 / 19.2}vw` }}
        fontFamily={`'Noto Sans JP', sans-serif`}
      >
        <Box
          ml={`${176 / 19.2}vw`}
          mt={`${51 / 19.2}vw`}
          mb={`${30 / 19.2}vw`}
          fontSize={`${30 / 19.2}vw`}
          fontWeight={`800`}
        >
          おすすめの検索軸
        </Box>
        <Flex ml={`${235 / 19.2}vw`} mr={`${240 / 19.2}vw`} flexWrap={`wrap`}>
          {/* 仮表示ね */}
          {list.map((list) => {
            return (
              <InternalLink key={list} href="/">
                <Box
                  p={`${12 / 19.2}vw ${29 / 19.2}vw`}
                  mr={`${13 / 19.2}vw`}
                  mb={`${13 / 19.2}vw`}
                  fontSize={`${25 / 19.2}vw`}
                  fontWeight={`bold`}
                  border={`${3 / 19.2}vw solid #41A4FD`}
                  borderRadius={`${26 / 19.2}vw`}
                  color={`#41A4FD`}
                >
                  {list}
                </Box>
              </InternalLink>
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
  );
};
