// import layer
import { FC } from 'react';
import { css } from '@emotion/react';
import { Box, Flex } from '@chakra-ui/react';

import { InternalLink } from '~/components/links/InternalLink';
import { OfferCard } from '~/features/offers/types';
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
        w={`${700 / 9.6}vw`}
        borderRadius={`${15 / 9.6}vw`}
        boxShadow={`0px 3px 6px #00000029`}
        overflow={`hidden`}
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
              h={`${363 / 9.6}vw`}
              py={`${30 / 9.6}vw`}
              pl={`${29 / 9.6}vw`}
              pr={`${33 / 9.6}vw`}
              fontFamily={`'Noto Sans JP', sans-serif`}
              position={`relative`}
            >
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
              <Box mb={`${10 / 9.6}vw`} fontSize={`${18 / 9.6}vw`}>
                {companyName}
              </Box>
              <Box
                display={`inline`}
                fontWeight={`bold`}
                fontSize={`${25 / 9.6}vw`}
                color={`#41A4FD`}
                borderBottom={`1px solid #41A4FD`}
                lineHeight={`1.5em`}
              >
                {title}
              </Box>
              <Flex justify={`space-between`}>
                <NImage
                  w={`${309 / 9.6}vw`}
                  h={`${180 / 9.6}vw`}
                  mt={` ${23 / 9.6}vw`}
                  className={`photo`}
                  image={{ ...image }}
                />
                <Box w={`${283 / 9.6}vw`}>
                  <Box
                    mt={`${25 / 9.6}vw`}
                    fontSize={`${13 / 9.6}vw`}
                    textAlign={`right`}
                    color={`#39414E`}
                  >
                    {`掲載終了 : 2023年06月23日`}
                  </Box>
                  <Box mt={`${15 / 9.6}vw`} color={`#39414E`}>
                    <Flex
                      pl={`${20 / 9.6}vw`}
                      py={`${3 / 9.6}vw`}
                      alignItems={`center`}
                      fontWeight={`bold`}
                      fontSize={`${17 / 9.6}vw`}
                      bg={`rgba(254,207,2,0.1)`}
                      borderRadius={`${26 / 9.6}vw`}
                    >
                      <Image
                        w={`${11.5 / 9.6}vw`}
                        h={`${16 / 9.6}vw`}
                        image={{
                          width: 11.5,
                          height: 16,
                          src: `/svg/yen-sign-solid.svg`,
                          alt: `お金アイコン`,
                        }}
                      />
                      <Box ml={`${13 / 9.6}vw`}>時給</Box>
                      <Box ml={`${50 / 9.6}vw`} color={`#F26601`}>
                        1,000円
                      </Box>
                    </Flex>
                  </Box>
                  <Box mt={`${15 / 9.6}vw`} color={`#39414E`}>
                    <Flex
                      pl={`${17 / 9.6}vw`}
                      py={`${3 / 9.6}vw`}
                      alignItems={`center`}
                      fontWeight={`bold`}
                      fontSize={`${17 / 9.6}vw`}
                      bg={`rgba(254,207,2,0.1)`}
                      borderRadius={`${26 / 9.6}vw`}
                    >
                      <Image
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
                      <Box ml={`${50 / 9.6}vw`}>エンジニア</Box>
                    </Flex>
                  </Box>
                  <Box mt={`${15 / 9.6}vw`} color={`#39414E`}>
                    <Flex
                      pl={`${18 / 9.6}vw`}
                      py={`${3 / 9.6}vw`}
                      alignItems={`center`}
                      fontWeight={`bold`}
                      fontSize={`${17 / 9.6}vw`}
                      bg={`rgba(254,207,2,0.1)`}
                      borderRadius={`${26 / 9.6}vw`}
                    >
                      <Image
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
                      <Box ml={`${50 / 9.6}vw`}>新潟市中央区天神</Box>
                    </Flex>
                  </Box>
                  <Box mt={`${15 / 9.6}vw`} color={`#39414E`}>
                    <Flex
                      pl={`${16 / 9.6}vw`}
                      py={`${3 / 9.6}vw`}
                      alignItems={`center`}
                      fontWeight={`bold`}
                      fontSize={`${17 / 9.6}vw`}
                      bg={`rgba(254,207,2,0.1)`}
                      borderRadius={`${26 / 9.6}vw`}
                    >
                      <Image
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
                      <Box ml={`${50 / 9.6}vw`}>16:00-20:00</Box>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
        </InternalLink>
      </Box>
    </div>
  );
};

const styles = css`
  .photo {
    border-radius: 5px;
    overflow: hidden;
  }
`;
