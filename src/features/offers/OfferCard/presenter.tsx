// import layer
import { FC } from 'react';
import { css } from '@emotion/react';
import { Box, Flex } from '@chakra-ui/react';

import { InternalLink } from '~/components/links/InternalLink';
import { OfferCard } from '../types';
import { mq } from '~/constants/styles';
import { routes } from 'constants/routes';
import { Image as NImage } from 'components/images/Image';
import { Image } from '~/components/Image';

// type layer
export type DataProps = OfferCard;
export interface PresenterProps extends DataProps {
  deadline: number;
  startDate: string;
}

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const {
    id,
    companyName,
    categories,
    place,
    hourlyWage,
    startDate,
    title,
    image,
    points,
    deadline,
    createdByid,
  } = props;
  const href = `${routes.offers}/${id}`;
  const currentDate = new Date();
  const startDateObj = new Date(startDate);
  const isNew =
    (currentDate.getTime() - startDateObj.getTime()) / (1000 * 3600 * 24);

  return (
    <InternalLink href={href}>
      <Box display={'none'}>{createdByid}</Box>
      <Box
        display={{ base: `none`, lg: `block` }}
        transitionProperty={`box-shadow`}
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
        m={'auto'}
        css={styles}
      >
        <Box
          bg={`white`}
          w={`${700 / 19.2}vw`}
          h={`${363 / 19.2}vw`}
          py={`${30 / 19.2}vw`}
          pl={`${29 / 19.2}vw`}
          pr={`${33 / 19.2}vw`}
          fontFamily={`'Noto Sans JP', sans-serif`}
          position={`relative`}
        >
          <Flex
            position={`absolute`}
            top={`${20 / 19.2}vw`}
            right={`${33 / 19.2}vw`}
            color={`white`}
            bg={`#F26601`}
            border={`1px solid #F26601`}
            borderRadius={`${3 / 19.2}vw`}
            w={`${90 / 19.2}vw`}
            h={`${24 / 19.2}vw`}
            alignItems={`center`}
            justify={`center`}
            fontWeight={`bold`}
            fontSize={`${14 / 19.2}vw`}
          >
            NEW
          </Flex>
          <Box mb={`${10 / 19.2}vw`} fontSize={`${18 / 19.2}vw`}>
            {companyName}
          </Box>
          <Box
            display={`inline`}
            fontWeight={`bold`}
            fontSize={`${25 / 19.2}vw`}
            color={`#41A4FD`}
            borderBottom={`1px solid #41A4FD`}
            lineHeight={`1.5em`}
          >
            {title}
          </Box>
          <Flex justify={`space-between`}>
            <NImage className={`photo`} image={{ ...image }} />
            <Box w={`${283 / 19.2}vw`}>
              <Box
                mt={`${25 / 19.2}vw`}
                fontSize={`${13 / 19.2}vw`}
                textAlign={`right`}
                color={`#39414E`}
              >
                {`掲載終了 : 2023年06月23日`}
              </Box>
              <Box mt={`${15 / 19.2}vw`} color={`#39414E`}>
                <Flex
                  pl={`${20 / 19.2}vw`}
                  py={`${3 / 19.2}vw`}
                  alignItems={`center`}
                  fontWeight={`bold`}
                  fontSize={`${17 / 19.2}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 19.2}vw`}
                >
                  <Image
                    w={`${11.5 / 19.2}vw`}
                    h={`${16 / 19.2}vw`}
                    image={{
                      width: 11.5,
                      height: 16,
                      src: `/svg/yen-sign-solid.svg`,
                      alt: `お金アイコン`,
                    }}
                  />
                  <Box ml={`${13 / 19.2}vw`}>時給</Box>
                  <Box ml={`${50 / 19.2}vw`} color={`#F26601`}>
                    1,000円
                  </Box>
                </Flex>
              </Box>
              <Box mt={`${15 / 19.2}vw`} color={`#39414E`}>
                <Flex
                  pl={`${17 / 19.2}vw`}
                  py={`${3 / 19.2}vw`}
                  alignItems={`center`}
                  fontWeight={`bold`}
                  fontSize={`${17 / 19.2}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 19.2}vw`}
                >
                  <Image
                    w={`${16 / 19.2}vw`}
                    h={`${18.5 / 19.2}vw`}
                    image={{
                      width: 16,
                      height: 18.5,
                      src: `/svg/user-solid.svg`,
                      alt: `人型アイコン`,
                    }}
                  />
                  <Box ml={`${12 / 19.2}vw`}>職種</Box>
                  <Box ml={`${50 / 19.2}vw`}>エンジニア</Box>
                </Flex>
              </Box>
              <Box mt={`${15 / 19.2}vw`} color={`#39414E`}>
                <Flex
                  pl={`${18 / 19.2}vw`}
                  py={`${3 / 19.2}vw`}
                  alignItems={`center`}
                  fontWeight={`bold`}
                  fontSize={`${17 / 19.2}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 19.2}vw`}
                >
                  <Image
                    w={`${13.7 / 19.2}vw`}
                    h={`${18.3 / 19.2}vw`}
                    image={{
                      width: 13.7,
                      height: 18.3,
                      src: `/svg/location-dot-solid.svg`,
                      alt: `場所アイコン`,
                    }}
                  />
                  <Box ml={`${12 / 19.2}vw`}>場所</Box>
                  <Box ml={`${50 / 19.2}vw`}>新潟市中央区天神</Box>
                </Flex>
              </Box>
              <Box mt={`${15 / 19.2}vw`} color={`#39414E`}>
                <Flex
                  pl={`${16 / 19.2}vw`}
                  py={`${3 / 19.2}vw`}
                  alignItems={`center`}
                  fontWeight={`bold`}
                  fontSize={`${17 / 19.2}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 19.2}vw`}
                >
                  <Image
                    w={`${16 / 19.2}vw`}
                    h={`${16 / 19.2}vw`}
                    image={{
                      width: 16,
                      height: 16,
                      src: `/svg/clock-solid.svg`,
                      alt: `時間アイコン`,
                    }}
                  />
                  <Box ml={`${12 / 19.2}vw`}>時間</Box>
                  <Box ml={`${50 / 19.2}vw`}>16:00-20:00</Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Flex
          background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
          w={`100%`}
          h={`${57 / 19.2}vw`}
          borderRadius={` 0 0 ${15 / 19.2}vw ${15 / 19.2}vw`}
          justify={`space-between`}
          pl={`${28 / 19.2}vw`}
          pr={`${23 / 19.2}vw`}
          pb={`${14 / 19.2}vw`}
          fontWeight={`bold`}
          alignItems={`flex-end`}
          color={`white`}
          fontFamily={`'Noto Sans JP', sans-serif`}
        >
          <Box fontSize={`${15 / 19.2}vw`}>
            掲載終了まであと
            <Box as={`span`} fontSize={`${25 / 19.2}vw`}>
              6
            </Box>
            日
          </Box>
          <Box
            fontSize={`${18 / 19.2}vw`}
            fontFamily={`"Josefin Sans"`}
            fontStyle={`italic`}
          >{`CHECK >>`}</Box>
        </Flex>
      </Box>
      {/* ///////////////// */}

      {/* モバイルサイズ */}
      <Box
        display={{ lg: `none` }}
        pb={`${44 / 3.75}vw`}
        m={'auto'}
        position={`relative`}
        // overflow={`hidden`}
        css={styles}
      >
        <Box
          bg={`white`}
          w={`${335 / 3.75}vw`}
          h={`${200 / 3.75}vw`}
          borderRadius={`${10 / 3.75}vw ${10 / 3.75}vw 0 0`}
          fontFamily={`'Noto Sans JP', sans-serif`}
        >
          <Flex
            alignItems={`center`}
            justify={`center`}
            borderRadius={`${3 / 3.75}vw`}
            w={`${40 / 3.75}vw`}
            h={`${12 / 3.75}vw`}
            position={`absolute`}
            top={`${10 / 3.75}vw`}
            right={`${10 / 3.75}vw`}
            color={`white`}
            bg={`#F26601`}
            fontWeight={`bold`}
            fontSize={`${10 / 3.75}vw`}
          >
            NEW
          </Flex>
          <Box p={`${16 / 3.75}vw`} pb={`${11 / 3.75}vw`}>
            <Box mb={`${4 / 3.75}vw`} fontSize={`${10 / 3.75}vw`}>
              {companyName}
            </Box>
            <Box
              display={`inline`}
              fontSize={`${12 / 3.75}vw`}
              fontWeight={`bold`}
              h={`${37 / 3.75}vw`}
              overflow={`hidden`}
              textOverflow={`ellipsis`}
              lineHeight={`1.6em`}
              color={`#41A4FD`}
              borderBottom={`1px solid #41A4FD`}
            >
              {title}
            </Box>
            <Flex mt={`${8 / 3.75}vw`} justify={`space-between`}>
              <NImage
                mt={`${5 / 3.75}vw`}
                className={`photo`}
                image={{ ...image }}
              />
              <Flex direction={`column`} fontWeight={`500`}>
                <Box
                  textAlign={`end`}
                  fontSize={`${10 / 3.75}vw`}
                  fontWeight={`400`}
                  mb={`${6 / 3.75}vw`}
                  color={`#39414E`}
                >
                  掲載終了 : 2023年6月30日
                </Box>
                <Flex
                  // w={`${190 / 3.75}vw`}
                  fontWeight={`bold`}
                  color={`#F26601`}
                  fontSize={`${10 / 3.75}vw`}
                  mb={`${5 / 3.75}vw`}
                  py={`${3 / 3.75}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 3.75}vw`}
                >
                  <Image
                    ml={`${10 / 3.75}vw`}
                    mr={`${10 / 3.75}vw`}
                    w={`${6 / 3.75}vw`}
                    h={`${9 / 3.75}vw`}
                    image={{
                      width: 24,
                      height: 30,
                      src: `/svg/yen-sign-solid.svg`,
                      alt: `お金アイコン`,
                    }}
                  />
                  <Box
                    color={`#39414E`}
                    fontWeight={`500`}
                    mr={`${8 / 3.75}vw`}
                  >
                    時給
                  </Box>
                  1,000円
                </Flex>
                <Flex
                  fontSize={`${10 / 3.75}vw`}
                  mb={`${5 / 3.75}vw`}
                  py={`${3 / 3.75}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 3.75}vw`}
                  color={`#39414E`}
                >
                  <Image
                    ml={`${9 / 3.75}vw`}
                    mr={`${9 / 3.75}vw`}
                    w={`${8 / 3.75}vw`}
                    h={`${9 / 3.75}vw`}
                    image={{
                      width: 24,
                      height: 30,
                      src: `/svg/user-solid.svg`,
                      alt: `人型アイコン`,
                    }}
                  />
                  <Box mr={`${8 / 3.75}vw`}>職種</Box>
                  <Box
                    overflow={`hidden`}
                    textOverflow={`ellipsis`}
                    whiteSpace={`nowrap`}
                    w={`${90 / 3.75}vw`}
                  >
                    エンジニア
                  </Box>
                </Flex>
                <Flex
                  fontSize={`${10 / 3.75}vw`}
                  mb={`${5 / 3.75}vw`}
                  py={`${3 / 3.75}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 3.75}vw`}
                  color={`#39414E`}
                >
                  <Image
                    ml={`${10 / 3.75}vw`}
                    mr={`${9 / 3.75}vw`}
                    w={`${7 / 3.75}vw`}
                    h={`${9 / 3.75}vw`}
                    image={{
                      width: 24,
                      height: 30,
                      src: `/svg/location-dot-solid.svg`,
                      alt: `場所アイコン`,
                    }}
                  />
                  <Box mr={`${8 / 3.75}vw`}>場所</Box>
                  <Box
                    overflow={`hidden`}
                    textOverflow={`ellipsis`}
                    whiteSpace={`nowrap`}
                    w={`${90 / 3.75}vw`}
                  >
                    新潟市中央区天神
                  </Box>
                </Flex>
                <Flex
                  fontSize={`${10 / 3.75}vw`}
                  mb={`${5 / 3.75}vw`}
                  py={`${3 / 3.75}vw`}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 3.75}vw`}
                  color={`#39414E`}
                >
                  <Image
                    mt={`${1 / 3.75}vw`}
                    ml={`${9 / 3.75}vw`}
                    mr={`${10 / 3.75}vw`}
                    w={`${8 / 3.75}vw`}
                    h={`${8 / 3.75}vw`}
                    image={{
                      width: 24,
                      height: 30,
                      src: `/svg/clock-solid.svg`,
                      alt: `時間アイコン`,
                    }}
                  />
                  <Box mr={`${8 / 3.75}vw`}>時間</Box>
                  <Box
                    overflow={`hidden`}
                    textOverflow={`ellipsis`}
                    whiteSpace={`nowrap`}
                    w={`${90 / 3.75}vw`}
                  >
                    16:00-20:00
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Flex
            w={`100%`}
            h={`${30 / 3.75}vw`}
            pl={`${16 / 3.75}vw`}
            pr={`${15 / 3.75}vw`}
            borderRadius={`0 0 ${10 / 3.75}vw ${10 / 3.75}vw`}
            fontSize={`${10 / 3.75}vw`}
            alignItems={`center`}
            justify={`space-between`}
            color={`white`}
            fontWeight={`500`}
            background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
          >
            <Box>
              掲載終了まであと
              <Box as={`span`} fontSize={`${13 / 3.75}vw`} fontWeight={`bold`}>
                6
              </Box>
              日
            </Box>
            <Box
              mt={`${8 / 3.75}vw`}
              fontFamily={`"Josefin Sans"`}
              fontStyle={`italic`}
              fontWeight={`bold`}
            >{`CHECK >>`}</Box>
          </Flex>
        </Box>
      </Box>
    </InternalLink>
  );
};

const styles = css`
  .photo {
    width: ${148 / 3.75}vw;
    height: ${86.2 / 3.75}vw;
    border-radius: 5px;
    overflow: hidden;
    ${mq[2]} {
      width: ${309 / 19.2}vw;
      height: ${180 / 19.2}vw;
      margin-top: ${23 / 19.2}vw;
      border-radius: 5px;
      object-fit: cover;
    }
  }
`;
