// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Image } from 'components/images/Image';
import { useTargetOfferStore, selectTarget } from 'features/offers';
import { InternalLink } from '~/components/links/InternalLink';
import { routes } from '~/constants';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthNum = currentDate.getMonth();
  const monthMap = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  const dayNum = currentDate.getDate();
  const dayMap = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];

  const month = monthMap[monthNum];
  const date = dayMap[dayNum];
  const today = `${year}-${month}-${date}`;

  return (
    <Box
      {...props}
      fontFamily={`'Noto Sans JP', sans-serif`}
      color={`#39414E`}
      display={{ md: `none` }}
    >
      {/* <Flex>
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
          </Box>
          ポイントもらえる
        </Box>
      </Flex> */}

      {today < offer.end_at ? (
        <InternalLink
          href={routes.offersJobForm(offer.id)}
          // w={`fit-content`}
          // mt={`${10 / 3.75}vw`}
          // mx={`auto`}
        >
          <Flex
            alignItems={`center`}
            pl={`${38 / 3.75}vw`}
            py={`${10 / 4.28}vw`}
            background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
            color={`white`}
            fontSize={`${18 / 3.75}vw`}
            fontWeight={`bold`}
            borderRadius={`${5 / 3.75}vw`}
            w={`${200 / 3.75}vw`}
          >
            <Image // eslint-disable-line
              w={`${20 / 3.75}vw`}
              h={`${20 / 3.75}vw`}
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
      ) : (
        <Box>
          <Flex
            alignItems={`center`}
            pl={`${38 / 3.75}vw`}
            py={`${10 / 4.28}vw`}
            background={`#d9d9d9`}
            color={`white`}
            fontSize={`${18 / 3.75}vw`}
            fontWeight={`bold`}
            borderRadius={`${5 / 3.75}vw`}
            w={`${200 / 3.75}vw`}
          >
            応募できません
          </Flex>
        </Box>
      )}
    </Box>
  );
};
