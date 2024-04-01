// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Image } from '~/components/Image';
import { OfferCard } from '~/features/offers/types';
import { RemoteImage } from '../../images/RemoteImage';

// type layer
export type DataProps = OfferCard;
export interface PresenterProps extends DataProps {
  deadline: number;
  startDate: string;
}

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const {
    startDate,
    title,
    image,
    hourly_wage,
    place_short,
    end_at,
    job_type,
    hours_short,
    company_name,
  } = props;
  const currentDate = new Date();
  const startDateObj = new Date(startDate);
  const endDate = new Date(end_at);
  const endDateY = endDate.getFullYear();
  const endDateM = endDate.getMonth() + 1;
  const endDateD = endDate.getDate();
  const isNew =
    (currentDate.getTime() - startDateObj.getTime()) / (1000 * 3600 * 24);
  const isEnd = Math.ceil(
    (endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );

  return (
    <Box
      w={`${589 / 9.6}vw`}
      borderRadius={`${15 / 9.6}vw`}
      boxShadow={`0px 3px 6px #00000029`}
      overflow={`hidden`}
      mx={`auto`}
    >
      <Box
        transitionProperty={`box-shadow`}
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
        m={'auto'}
        css={styles}
      >
        <Box
          bg={`white`}
          h={`${305 / 9.6}vw`}
          py={`${25 / 9.6}vw`}
          pl={`${25 / 9.6}vw`}
          pr={`${27 / 9.6}vw`}
          fontFamily={`'Noto Sans JP', sans-serif`}
          position={`relative`}
        >
          {isNew <= 7 ? (
            <Flex
              position={`absolute`}
              top={`${20 / 9.6}vw`}
              right={`${33 / 9.6}vw`}
              color={`white`}
              bg={`#F26601`}
              border={`1px solid #F26601`}
              borderRadius={`${3 / 9.6}vw`}
              w={`${90 / 9.6}vw`}
              h={`${24 / 9.6}vw`}
              alignItems={`center`}
              justify={`center`}
              fontWeight={`bold`}
              fontSize={`${14 / 9.6}vw`}
            >
              NEW
            </Flex>
          ) : isEnd <= 10 ? (
            <Flex
              position={`absolute`}
              top={`${20 / 9.6}vw`}
              right={`${33 / 9.6}vw`}
              color={`#F26601`}
              alignItems={`end`}
              fontWeight={`bold`}
              fontSize={`${14 / 9.6}vw`}
            >
              掲載終了まであと
              <Box as={`span`} fontSize={`${25 / 9.6}vw`}>
                {isEnd}
              </Box>
              日
            </Flex>
          ) : null}
          <Box mb={`${10 / 9.6}vw`} fontSize={`${15 / 9.6}vw`}>
            {company_name}
          </Box>
          <Box
            display={`inline`}
            fontWeight={`bold`}
            fontSize={`${21 / 9.6}vw`}
            color={`#41A4FD`}
            borderBottom={`1px solid #41A4FD`}
            lineHeight={`1.5em`}
          >
            {title}
          </Box>
          <Flex justify={`space-between`}>
            <RemoteImage
              w={`${262 / 9.6}vw`}
              h={`${151 / 9.6}vw`}
              mt={` ${14 / 9.6}vw`}
              className={`photo`}
              image={{
                ...image,
                width: undefined,
                height: undefined,
                htmlWidth: image.width,
                htmlHeight: image.height,
                fill: true,
              }}
            />
            <Box w={`${238 / 9.6}vw`}>
              <Box
                mt={`${15 / 9.6}vw`}
                fontSize={`${13 / 9.6}vw`}
                textAlign={`right`}
                color={`#39414E`}
              >
                掲載終了 : {endDateY}年{endDateM}月{endDateD}日
              </Box>
              <Box mt={`${15 / 9.6}vw`} color={`#39414E`}>
                <Flex
                  pl={`${20 / 9.6}vw`}
                  py={`${3 / 9.6}vw`}
                  alignItems={`center`}
                  fontWeight={`bold`}
                  fontSize={`${14 / 9.6}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 9.6}vw`}
                >
                  <Image // eslint-disable-line
                    w={`${11.5 / 9.6}vw`}
                    h={`${16 / 9.6}vw`}
                    image={{
                      width: 11.5,
                      height: 16,
                      src: `/svg/yen-sign-solid.svg`,
                      alt: `お金アイコン`,
                    }}
                  />
                  <Box ml={`${13 / 9.6}vw`}>給与</Box>
                  <Box ml={`${35 / 9.6}vw`} color={`#F26601`}>
                    {hourly_wage}円
                  </Box>
                </Flex>
              </Box>
              <Box mt={`${10 / 9.6}vw`} color={`#39414E`}>
                <Flex
                  pl={`${17 / 9.6}vw`}
                  py={`${3 / 9.6}vw`}
                  alignItems={`center`}
                  fontWeight={`bold`}
                  fontSize={`${14 / 9.6}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 9.6}vw`}
                >
                  <Image // eslint-disable-line
                    w={`${16 / 9.6}vw`}
                    h={`${18.5 / 9.6}vw`}
                    image={{
                      width: 16,
                      height: 18.5,
                      src: `/svg/user-solid.svg`,
                      alt: `人型アイコン`,
                    }}
                  />
                  <Box ml={`${12 / 9.6}vw`}>職種</Box>
                  <Box ml={`${35 / 9.6}vw`}>{job_type}</Box>
                </Flex>
              </Box>
              <Box mt={`${10 / 9.6}vw`} color={`#39414E`}>
                <Flex
                  pl={`${18 / 9.6}vw`}
                  py={`${3 / 9.6}vw`}
                  alignItems={`center`}
                  fontWeight={`bold`}
                  fontSize={`${14 / 9.6}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 9.6}vw`}
                >
                  <Image // eslint-disable-line
                    w={`${13.7 / 9.6}vw`}
                    h={`${18.3 / 9.6}vw`}
                    image={{
                      width: 13.7,
                      height: 18.3,
                      src: `/svg/location-dot-solid.svg`,
                      alt: `場所アイコン`,
                    }}
                  />
                  <Box ml={`${12 / 9.6}vw`}>場所</Box>
                  <Box
                    ml={`${35 / 9.6}vw`}
                    w={`${130 / 9.6}vw`}
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                  >
                    {place_short}
                  </Box>
                </Flex>
              </Box>
              <Box mt={`${10 / 9.6}vw`} color={`#39414E`}>
                <Flex
                  pl={`${16 / 9.6}vw`}
                  py={`${3 / 9.6}vw`}
                  alignItems={`center`}
                  fontWeight={`bold`}
                  fontSize={`${14 / 9.6}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 9.6}vw`}
                >
                  <Image // eslint-disable-line
                    w={`${16 / 9.6}vw`}
                    h={`${16 / 9.6}vw`}
                    image={{
                      width: 16,
                      height: 16,
                      src: `/svg/clock-solid.svg`,
                      alt: `時間アイコン`,
                    }}
                  />
                  <Box ml={`${12 / 9.6}vw`}>時間</Box>
                  <Box ml={`${35 / 9.6}vw`}>{hours_short}</Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Flex
          background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
          w={`${589 / 9.6}vw`}
          h={`${48 / 9.6}vw`}
          borderRadius={` 0 0 ${15 / 9.6}vw ${15 / 9.6}vw`}
          justify={`flex-end`}
          pl={`${28 / 9.6}vw`}
          pr={`${23 / 9.6}vw`}
          pb={`${14 / 9.6}vw`}
          fontWeight={`bold`}
          alignItems={`flex-end`}
          color={`white`}
          fontFamily={`'Noto Sans JP', sans-serif`}
        >
          {/* <Box fontSize={`${15 / 19.2}vw`}>
                お祝い金
                <Box as={`span`} fontSize={`${25 / 19.2}vw`}>
                  {job_type}
                  {/*job_type.gift
                </Box>
                ポイントもらえる
              </Box> */}
          <Box
            fontSize={`${18 / 9.6}vw`}
            fontFamily={`"Josefin Sans"`}
            fontStyle={`italic`}
          >{`CHECK >>`}</Box>
        </Flex>
      </Box>
    </Box>
  );
};

const styles = css`
  .photo {
    border-radius: 5px;
    overflow: hidden;
  }
`;
