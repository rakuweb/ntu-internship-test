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
  const list = [
    {
      name: `時給`,
      main: hourlyWage,
      src: `/images/offers/okaneIcon.png`,
      alt: `お金のアイコン`,
    },
    {
      name: `職種`,
      main: categories[0],
      src: `/images/offers/hitogataIcon.png`,
      alt: `人型のアイコン`,
    },
    {
      name: `場所`,
      main: `中央区天神`,
      src: `public/images/offers/basyoIcon.png`,
      alt: `場所のアイコン`,
    },
    {
      name: `時間`,
      main: `16:00-20:00`,
      src: `public/svg/clock-solid.svg`,
      alt: `時間のアイコン`,
    },
  ];
  const href = `${routes.offers}/${id}`;
  const currentDate = new Date();
  const startDateObj = new Date(startDate);
  const isNew =
    (currentDate.getTime() - startDateObj.getTime()) / (1000 * 3600 * 24);

  return (
    <InternalLink href={href}>
      <Box display={'none'}>{createdByid}</Box>
      <Box
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
          <Box
            position={`absolute`}
            top={`${20 / 19.2}vw`}
            right={`${33 / 19.2}vw`}
            color={`white`}
            bg={`#F26601`}
            border={`1px solid #F26601`}
            borderRadius={`${3 / 19.2}vw`}
            w={`${90 / 19.2}vw`}
            h={`${24 / 19.2}vw`}
            pt={`${3 / 19.2}vw`}
            textAlign={`center`}
            fontWeight={`bold`}
            fontSize={`${14 / 19.2}vw`}
          >
            NEW
          </Box>
          <Box mb={`${10 / 19.2}vw`} fontSize={`${18 / 19.2}vw`}>
            {companyName}
          </Box>
          <Box
            display={`inline`}
            fontWeight={`bold`}
            fontSize={`${25 / 19.2}vw`}
            color={`#41A4FD`}
            borderBottom={`1px solid #41A4FD`}
            lineHeight={`1.6em`}
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
              >
                掲載終了 : 2023年06月23日
              </Box>
              <Box mt={`${15 / 19.2}vw`}>
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
                      src: `/images/offers/okaneIcon.png`,
                      alt: `お金アイコン`,
                    }}
                  />
                  <Box ml={`${12 / 19.2}vw`}>時給</Box>
                  <Box ml={`${50 / 19.2}vw`} color={`#F26601`}>
                    1,000円
                  </Box>
                </Flex>
              </Box>
              <Box mt={`${15 / 19.2}vw`}>
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
                      src: `/images/offers/hitogataIcon.png`,
                      alt: `人型アイコン`,
                    }}
                  />
                  <Box ml={`${12 / 19.2}vw`}>職種</Box>
                  <Box ml={`${50 / 19.2}vw`}>エンジニア</Box>
                </Flex>
              </Box>
              <Box mt={`${15 / 19.2}vw`}>
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
                      src: `/images/offers/basyoIcon.png`,
                      alt: `場所アイコン`,
                    }}
                  />
                  <Box ml={`${12 / 19.2}vw`}>職種</Box>
                  <Box ml={`${50 / 19.2}vw`}>新潟市中央区天神</Box>
                </Flex>
              </Box>
              <Box mt={`${15 / 19.2}vw`}>
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
        >
          <Box fontSize={`${15 / 19.2}vw`}>
            掲載終了まであと
            <Box as={`span`} fontSize={`${25 / 19.2}vw`}>
              6
            </Box>
            日
          </Box>
          <Box fontFamily={`"Josefin Sans", Bold Italic`}>{`CHECK >>`}</Box>
        </Flex>
      </Box>
    </InternalLink>
  );
};

const styles = css`
  .photo {
    width: ${309 / 19.2}vw;
    height: ${180 / 19.2}vw;
    object-fit: cover;
    border-radius: 5px;
    overflow: hidden;
    ${mq[3]} {
      width: ${309 / 19.2}vw;
      height: ${180 / 19.2}vw;
      margin-top: ${23 / 19.2}vw;
    }
  }
`;
