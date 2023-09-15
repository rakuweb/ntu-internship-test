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
  companyName: any; // eslint-disable-line
  createdByid: any; // eslint-disable-line
}

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const { id, companyName, title, image, createdByid } = props;
  const href = `${routes.offers}/${id}`;

  return (
    <InternalLink href={href}>
      <Box display={'none'}>{createdByid}</Box>
      {/* モバイルサイズ */}
      <Box
        display={{ lg: `none` }}
        pb={`${20 / 3.75}vw`}
        m={'auto'}
        position={`relative`}
        css={styles}
      >
        <Box
          bg={`white`}
          w={`${296 / 3.75}vw`}
          h={`${360 / 3.75}vw`}
          borderRadius={`${10 / 3.75}vw`}
          overflow={`hidden`}
          fontFamily={`'Noto Sans JP', sans-serif`}
        >
          <Flex
            w={`100%`}
            h={`${30 / 3.75}vw`}
            pr={`${8 / 3.75}vw`}
            fontSize={`${14 / 3.75}vw`}
            alignItems={`center`}
            justify={`end`}
            color={`white`}
            background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
          >
            掲載終了 : 2023年6月30日
          </Flex>
          <NImage className={`photo`} image={{ ...image }} />
          <Flex
            alignItems={`center`}
            h={`${20 / 3.75}vw`}
            px={`${8 / 3.75}vw`}
            position={`absolute`}
            top={`${195 / 3.75}vw`}
            left={`${20 / 3.75}vw`}
            color={`white`}
            bg={`#F26601`}
            fontWeight={`bold`}
            fontSize={`${11 / 3.75}vw`}
          >
            NEW
          </Flex>
          <Box
            mt={`${20 / 3.75}vw`}
            px={`${16 / 3.75}vw`}
            pb={`${14 / 3.75}vw`}
          >
            <Box mb={`${4 / 3.75}vw`} fontSize={`${13 / 3.75}vw`}>
              {companyName}
            </Box>
            <Box
              mb={`${8 / 3.75}vw`}
              fontSize={`${13 / 3.75}vw`}
              fontWeight={`bold`}
              h={`${55 / 3.75}vw`}
              overflow={`hidden`}
              lineHeight={`1.3em`}
            >
              {title}
            </Box>
            <Flex fontSize={`${13 / 3.75}vw`}>
              <Image // eslint-disable-line
                mr={`${8 / 3.75}vw`}
                w={`${12 / 3.75}vw`}
                h={`${15 / 3.75}vw`}
                image={{
                  width: 24,
                  height: 30,
                  src: `/images/offers/hitogataIcon.png`,
                  alt: `人型アイコン`,
                }}
              />
              エンジニア
            </Flex>
          </Box>
          <Flex
            w={`100%`}
            h={`${30 / 3.75}vw`}
            pr={`${8 / 3.75}vw`}
            fontSize={`${14 / 3.75}vw`}
            alignItems={`center`}
            justify={`end`}
            color={`white`}
            fontFamily={`"Josefin Sans", Bold Italic`}
            fontWeight={`bold`}
            background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
          >
            {`CHECK >>`}
          </Flex>
        </Box>
      </Box>
    </InternalLink>
  );
};

const styles = css`
  .photo {
    width: ${296 / 3.75}vw;
    height: ${173 / 3.75}vw;
    object-fit: cover;

    overflow: hidden;
    ${mq[2]} {
      width: ${309 / 19.2}vw;
      height: ${180 / 19.2}vw;
      margin-top: ${23 / 19.2}vw;
      border-radius: 5px;
    }
  }
`;
