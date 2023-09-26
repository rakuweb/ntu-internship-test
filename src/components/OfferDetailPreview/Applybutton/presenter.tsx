// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Image } from 'components/images/Image';
import { useTargetOfferStore, selectTarget } from 'features/offers';
import { InternalLink } from '~/components/links/InternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  return (
    <Box
      {...props}
      fontFamily={`'Noto Sans JP', sans-serif`}
      color={`#39414E`}
      display={{ md: `none` }}
    >
      <Flex>
        <Flex
          alignItems={`end`}
          fontWeight={`bold`}
          fontSize={`${11 / 4.28}vw`}
          ml={`${10 / 4.28}vw`}
        >
          この求人は採用が決まると
          <InternalLink href={`/`}>
            <Flex
              bg={`#39414E`}
              alignItems={`center`}
              justify={`center`}
              w={`${11 / 3.75}vw`}
              h={`${11 / 3.75}vw`}
              mr={`${10 / 4.28}vw`}
              borderRadius={`50%`}
            >
              <Image // eslint-disable-line
                w={`${5 / 3.75}vw`}
                h={`${7 / 3.75}vw`}
                image={{
                  width: 20,
                  height: 24,
                  src: `/svg/question-solid.svg`,
                  alt: `?アイコン`,
                }}
              />
            </Flex>
          </InternalLink>
        </Flex>
        <Box
          textAlign={`center`}
          color={`#41A4FD`}
          fontSize={`${11 / 4.28}vw`}
          fontWeight={`bold`}
          whiteSpace={`nowrap`}
        >
          お祝い金
          <Box
            as={`span`}
            fontSize={`${19 / 4.28}vw`}
            fontFamily={`'Noto Sans', sans-serif`}
          >
            {offer.job_type}
            {/*offer.job_type.gift*/}
          </Box>
          ポイントもらえる
        </Box>
      </Flex>

      <InternalLink href={`/jobform`} mt={`${10 / 3.75}vw`}>
        <Flex
          alignItems={`center`}
          justify={`center`}
          py={`${20 / 4.28}vw`}
          background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
          color={`white`}
          fontSize={`${27 / 3.75}vw`}
          fontWeight={`bold`}
          borderRadius={`${5 / 3.75}vw`}
        >
          <Image // eslint-disable-line
            w={`${27 / 3.75}vw`}
            h={`${27 / 3.75}vw`}
            mr={`${15 / 3.75}vw`}
            image={{
              width: 35,
              height: 35,
              src: `/svg/paper-plane-solid.svg`,
              alt: `紙飛行機アイコン`,
            }}
          />
          応募する
        </Flex>
      </InternalLink>
    </Box>
  );
};
