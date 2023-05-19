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
    // createdByid,
  } = props;
  const href = `${routes.offers}/${id}`;
  const currentDate = new Date();
  const startDateObj = new Date(startDate);
  const isNew =
    (currentDate.getTime() - startDateObj.getTime()) / (1000 * 3600 * 24);

  return (
    <div>
      <Box
        display={{ base: `none`, lg: `block` }}
        w={{ lg: `${700 / 19.2}vw` }}
        borderRadius={{ lg: `${15 / 19.2}vw` }}
        boxShadow={`0px 3px 6px #00000029`}
      >
        <InternalLink href={href}>
          {/* <Box display={'none'}>{createdByid}</Box> */}
          <Box
            transitionProperty={`box-shadow`}
            transitionDuration="0.3s"
            transitionTimingFunction="ease-in-out"
            m={'auto'}
            css={styles}
          >
            <Box
              bg={`white`}
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
                <NImage
                  w={`${309 / 19.2}vw`}
                  h={`${180 / 19.2}vw`}
                  mt={` ${23 / 19.2}vw`}
                  className={`photo`}
                  image={{ ...image }}
                />
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
              w={`${700 / 19.2}vw`}
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
        </InternalLink>
      </Box>

      {/* モバイルサイズ */}
      <Box
        w={{ base: `${335 / 3.75}vw`, md: `${335 / 7.68}vw` }}
        display={{ lg: `none` }}
        position={`relative`}
        borderRadius={{ base: `${15 / 3.75}vw`, md: `${15 / 7.68}vw` }}
        overflow={`hidden`}
        boxShadow={`0px ${3 / 3.75}vw ${6 / 3.75}vw #00000029`}
        css={styles}
      >
        <Box bg={`white`} fontFamily={`'Noto Sans JP', sans-serif`}>
          <Flex
            alignItems={`center`}
            justify={`center`}
            borderRadius={{ base: `${3 / 3.75}vw`, md: `${3 / 7.68}vw` }}
            w={{ base: `${40 / 3.75}vw`, md: `${40 / 7.68}vw` }}
            h={{ base: `${12 / 3.75}vw`, md: `${12 / 7.68}vw` }}
            position={`absolute`}
            top={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
            right={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
            color={`white`}
            bg={`#F26601`}
            fontWeight={`bold`}
            fontSize={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
          >
            NEW
          </Flex>
          <Box
            p={{ base: `${16 / 3.75}vw`, md: `${16 / 7.68}vw` }}
            pb={{ base: `${11 / 3.75}vw`, md: `${11 / 7.68}vw` }}
          >
            <Box
              mb={{ base: `${4 / 3.75}vw`, md: `${4 / 7.68}vw` }}
              fontSize={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
            >
              {companyName}
            </Box>
            <Box
              display={`inline`}
              fontSize={{ base: `${12 / 3.75}vw`, md: `${12 / 7.68}vw` }}
              fontWeight={`bold`}
              h={{ base: `${37 / 3.75}vw`, md: `${37 / 7.68}vw` }}
              overflow={`hidden`}
              textOverflow={`ellipsis`}
              lineHeight={`1.6em`}
              color={`#41A4FD`}
              borderBottom={`1px solid #41A4FD`}
            >
              {title}
            </Box>
            <Flex
              mt={{ base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` }}
              justify={`space-between`}
            >
              <NImage
                w={{ base: `${148 / 3.75}vw`, md: `${148 / 7.68}vw` }}
                h={{ base: `${86.2 / 3.75}vw`, md: `${86.2 / 7.68}vw` }}
                mt={{ base: `${5 / 3.75}vw`, md: `${5 / 7.68}vw` }}
                className={`photo`}
                image={{ ...image }}
              />
              <Flex direction={`column`} fontWeight={`500`}>
                <Box
                  textAlign={`end`}
                  fontSize={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
                  fontWeight={`400`}
                  mb={{ base: `${6 / 3.75}vw`, md: `${6 / 7.68}vw` }}
                  color={`#39414E`}
                >
                  掲載終了 : 2023年6月30日
                </Box>
                <Flex
                  // w={`${190 / 3.75}vw`}
                  fontWeight={`bold`}
                  color={`#F26601`}
                  fontSize={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
                  mb={{ base: `${5 / 3.75}vw`, md: `${5 / 7.68}vw` }}
                  py={{ base: `${3 / 3.75}vw`, md: `${3 / 7.68}vw` }}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={{
                    base: `${26 / 3.75}vw`,
                    md: `${26 / 7.68}vw`,
                  }}
                >
                  <Image
                    ml={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
                    mr={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
                    w={{ base: `${6 / 3.75}vw`, md: `${6 / 7.68}vw` }}
                    h={{ base: `${9 / 3.75}vw`, md: `${9 / 7.68}vw` }}
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
                    mr={{ base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` }}
                  >
                    時給
                  </Box>
                  1,000円
                </Flex>
                <Flex
                  fontSize={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
                  mb={{ base: `${5 / 3.75}vw`, md: `${5 / 7.68}vw` }}
                  py={{ base: `${3 / 3.75}vw`, md: `${3 / 7.68}vw` }}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={`${26 / 3.75}vw`}
                  color={`#39414E`}
                >
                  <Image
                    ml={{ base: `${9 / 3.75}vw`, md: `${9 / 7.68}vw` }}
                    mr={{ base: `${9 / 3.75}vw`, md: `${9 / 7.68}vw` }}
                    w={{ base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` }}
                    h={{ base: `${9 / 3.75}vw`, md: `${9 / 7.68}vw` }}
                    image={{
                      width: 24,
                      height: 30,
                      src: `/svg/user-solid.svg`,
                      alt: `人型アイコン`,
                    }}
                  />
                  <Box mr={{ base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` }}>
                    職種
                  </Box>
                  <Box
                    overflow={`hidden`}
                    textOverflow={`ellipsis`}
                    whiteSpace={`nowrap`}
                    w={{ base: `${90 / 3.75}vw`, md: `${90 / 7.68}vw` }}
                  >
                    エンジニア
                  </Box>
                </Flex>
                <Flex
                  fontSize={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
                  mb={{ base: `${5 / 3.75}vw`, md: `${5 / 7.68}vw` }}
                  py={{ base: `${3 / 3.75}vw`, md: `${3 / 7.68}vw` }}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={{
                    base: `${26 / 3.75}vw`,
                    md: `${26 / 7.68}vw`,
                  }}
                  color={`#39414E`}
                >
                  <Image
                    ml={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
                    mr={{ base: `${9 / 3.75}vw`, md: `${9 / 7.68}vw` }}
                    w={{ base: `${7 / 3.75}vw`, md: `${7 / 7.68}vw` }}
                    h={{ base: `${9 / 3.75}vw`, md: `${9 / 7.68}vw` }}
                    image={{
                      width: 24,
                      height: 30,
                      src: `/svg/location-dot-solid.svg`,
                      alt: `場所アイコン`,
                    }}
                  />
                  <Box mr={{ base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` }}>
                    場所
                  </Box>
                  <Box
                    overflow={`hidden`}
                    textOverflow={`ellipsis`}
                    whiteSpace={`nowrap`}
                    w={{ base: `${90 / 3.75}vw`, md: `${90 / 7.68}vw` }}
                  >
                    新潟市中央区天神
                  </Box>
                </Flex>
                <Flex
                  fontSize={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
                  mb={{ base: `${5 / 3.75}vw`, md: `${5 / 7.68}vw` }}
                  py={{ base: `${3 / 3.75}vw`, md: `${3 / 7.68}vw` }}
                  bg={`rgba(254,207,2,0.1)`}
                  borderRadius={{
                    base: `${26 / 3.75}vw`,
                    md: `${26 / 7.68}vw`,
                  }}
                  color={`#39414E`}
                >
                  <Image
                    mt={{ base: `${1 / 3.75}vw`, md: `${1 / 7.68}vw` }}
                    ml={{ base: `${9 / 3.75}vw`, md: `${9 / 7.68}vw` }}
                    mr={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
                    w={{ base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` }}
                    h={{ base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` }}
                    image={{
                      width: 24,
                      height: 30,
                      src: `/svg/clock-solid.svg`,
                      alt: `時間アイコン`,
                    }}
                  />
                  <Box mr={{ base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` }}>
                    時間
                  </Box>
                  <Box
                    overflow={`hidden`}
                    textOverflow={`ellipsis`}
                    whiteSpace={`nowrap`}
                    w={{ base: `${90 / 3.75}vw`, md: `${90 / 7.68}vw` }}
                  >
                    16:00-20:00
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Flex
            w={`100%`}
            h={{ base: `${30 / 3.75}vw`, md: `${30 / 7.68}vw` }}
            pl={{ base: `${16 / 3.75}vw`, md: `${16 / 7.68}vw` }}
            pr={{ base: `${15 / 3.75}vw`, md: `${15 / 7.68}vw` }}
            fontSize={{ base: `${10 / 3.75}vw`, md: `${10 / 7.68}vw` }}
            alignItems={`center`}
            justify={`space-between`}
            color={`white`}
            fontWeight={`500`}
            background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
          >
            <Box>
              掲載終了まであと
              <Box
                as={`span`}
                fontSize={{ base: `${13 / 3.75}vw`, md: `${13 / 7.68}vw` }}
                fontWeight={`bold`}
              >
                6
              </Box>
              日
            </Box>
            <Box
              mt={{ base: `${8 / 3.75}vw`, md: `${8 / 7.68}vw` }}
              fontFamily={`"Josefin Sans"`}
              fontStyle={`italic`}
              fontWeight={`bold`}
            >{`CHECK >>`}</Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

const styles = css`
  .photo {
    border-radius: 5px;
    overflow: hidden;
    ${mq[2]} {
      border-radius: 5px;
      object-fit: cover;
    }
  }
`;
