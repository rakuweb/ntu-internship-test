// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Image } from 'components/images/Image';
import { useLiff } from 'contexts/LineAuthContextInternship';
import { useAccountStore, selectSetPrevPath } from 'features/account';
import { useTargetOfferStore, selectTarget } from 'features/offers';
import { InternalLink } from '~/components/links/InternalLink';
import { routes } from '~/constants';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  const { liff } = useLiff();
  const setPrevPath = useAccountStore(selectSetPrevPath);
  const signin = () => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      offer?.id + `/jobform` && setPrevPath(decodeURI(offer.id + `/jobform`));
      window.localStorage.setItem('prevUrl', offer?.id + `/jobform`);
      liff.login(); //{ redirectUri: redirectUri });
    } else {
      window.location.href = offer.id + `/jobform`;
    }
  };

  return (
    <Box
      position={{ base: `relative`, md: `sticky` }}
      top={{ base: ``, md: `${90 / 768}vw`, lg: `${160 / 19.2}vw` }}
      w={{ base: ``, md: `${190 / 7.68}vw`, lg: `${395 / 19.2}vw` }}
      h={`fit-content`}
      {...props}
      boxShadow={`0px 3px 6px #00000029`}
      borderRadius={{ base: ``, md: `${5 / 19.2}vw` }}
    >
      <Box
        fontFamily={`'Noto Sans JP', sans-serif`}
        fontSize={{ base: ``, md: `${11 / 7.68}vw`, lg: `${19 / 19.2}vw` }}
        pt={{ base: ``, md: `${32 / 19.2}vw` }}
        pb={{ base: ``, md: `${13 / 19.2}vw` }}
        px={{ base: ``, md: `${40 / 19.2}vw` }}
        color={`#39414E`}
      >
        <Box
          fontSize={{ base: ``, md: `${11.5 / 7.68}vw`, lg: `${20 / 19.2}vw` }}
          fontWeight={`bold`}
          lineHeight={`1.65em`}
          mb={{ base: ``, md: `${46 / 19.2}vw` }}
          textDecoration={`underline`}
          textDecorationThickness={{ base: ``, md: `${1 / 19.2}vw` }}
          textUnderlineOffset={{ base: ``, md: `${3 / 19.2}vw` }}
        >
          {offer.title}
        </Box>
        <Flex
          mb={{ base: ``, md: `${14 / 19.2}vw` }}
          pl={{ base: ``, md: `${20 / 19.2}vw` }}
          py={{ base: ``, md: `${5 / 7.68}vw`, lg: `${7 / 19.2}vw` }}
          alignItems={`center`}
          fontWeight={`bold`}
          bg={`rgba(254,207,2,0.1)`}
          borderRadius={{ base: ``, md: `${26 / 19.2}vw` }}
        >
          <Image // eslint-disable-line
            w={{ base: ``, md: `${8 / 7.68}vw`, lg: `${13 / 19.2}vw` }}
            h={{ base: `auto` }}
            // h={{ base: ``, md: `${12 / 7.68}vw`, lg: `${19 / 19.2}vw` }}
            image={{
              width: 17,
              height: 22,
              src: `/svg/yen-sign-solid.svg`,
              alt: `お金アイコン`,
            }}
          />
          <Box ml={{ base: ``, md: `${17 / 19.2}vw` }}>時給</Box>
          <Box ml={{ base: ``, md: `${53 / 19.2}vw` }}>
            {offer.hourly_wage}円
          </Box>
        </Flex>
        <Flex
          mb={{ base: ``, md: `${14 / 19.2}vw` }}
          pl={{ base: ``, md: `${18 / 19.2}vw` }}
          py={{ base: ``, md: `${5 / 7.68}vw`, lg: `${7 / 19.2}vw` }}
          alignItems={`center`}
          fontWeight={`bold`}
          bg={`rgba(254,207,2,0.1)`}
          borderRadius={{ base: ``, md: `${26 / 19.2}vw` }}
        >
          <Image // eslint-disable-line
            w={{ base: ``, md: `${10 / 7.68}vw`, lg: `${19 / 19.2}vw` }}
            h={{ base: `auto` }}
            // h={{ base: ``, md: `${10 / 7.68}vw`, lg: `${21 / 19.2}vw` }}
            image={{
              width: 25,
              height: 24,
              src: `/svg/user-solid.svg`,
              alt: `職種アイコン`,
            }}
          />
          <Box ml={{ base: ``, md: `${14 / 19.2}vw` }}>職種</Box>
          <Box ml={{ base: ``, md: `${53 / 19.2}vw` }}>
            {offer.occupation}
            {/*offer.occupation.name*/}
          </Box>
        </Flex>
        <Flex
          mb={{ base: ``, md: `${14 / 19.2}vw` }}
          pl={{ base: ``, md: `${20 / 19.2}vw` }}
          py={{ base: ``, md: `${5 / 7.68}vw`, lg: `${7 / 19.2}vw` }}
          alignItems={`center`}
          fontWeight={`bold`}
          bg={`rgba(254,207,2,0.1)`}
          borderRadius={{ base: ``, md: `${26 / 19.2}vw` }}
        >
          <Image // eslint-disable-line
            w={{ base: ``, md: `${9 / 7.68}vw`, lg: `${16 / 19.2}vw` }}
            h={{ base: `auto` }}
            // h={{ base: ``, md: `${10 / 7.68}vw`, lg: `${21 / 19.2}vw` }}
            image={{
              width: 22,
              height: 26,
              src: `/svg/location-dot-solid.svg`,
              alt: `場所アイコン`,
            }}
          />
          <Box ml={{ base: ``, md: `${16 / 19.2}vw` }}>場所</Box>
          <Box
            ml={{
              base: ``,
              md: `${53 / 19.2}vw`,
            }}
            w={`${170 / 19.2}vw`}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {offer.place_short}
          </Box>
        </Flex>
        <Flex
          mb={{ base: ``, md: `${14 / 19.2}vw` }}
          pl={{ base: ``, md: `${18 / 19.2}vw` }}
          py={{ base: ``, md: `${5 / 7.68}vw`, lg: `${7 / 19.2}vw` }}
          alignItems={`center`}
          fontWeight={`bold`}
          bg={`rgba(254,207,2,0.1)`}
          borderRadius={{ base: ``, md: `${26 / 19.2}vw` }}
        >
          <Image // eslint-disable-line
            w={{ base: ``, md: `${11 / 7.68}vw`, lg: `${20 / 19.2}vw` }}
            h={{ base: `auto` }}
            // h={{ base: ``, md: `${11 / 7.68}vw`, lg: `${20 / 19.2}vw` }}
            image={{
              width: 24,
              height: 24,
              src: `/svg/clock-solid.svg`,
              alt: `時計アイコン`,
            }}
          />
          <Box ml={{ base: ``, md: `${16 / 19.2}vw` }}>時間</Box>
          <Box ml={{ base: ``, md: `${53 / 19.2}vw` }}>{offer.hours_short}</Box>
        </Flex>
        {/* <Flex
          alignItems={`center`}
          justify={`center`}
          fontWeight={`bold`}
          mt={{ base: ``, md: `${20 / 7.68}vw`, lg: `${44 / 19.2}vw` }}
          fontSize={{ base: ``, md: `${10 / 7.68}vw`, lg: `${18 / 19.2}vw` }}
        >
          この求人は採用が決まると
          <InternalLink href={`/`}>
            <Flex
              bg={`#39414E`}
              alignItems={`center`}
              justify={`center`}
              w={{ base: ``, md: `${10 / 7.68}vw`, lg: `${18 / 19.2}vw` }}
              h={{ base: ``, md: `${10 / 7.68}vw`, lg: `${18 / 19.2}vw` }}
              ml={{ base: ``, md: `${5 / 19.2}vw` }}
              borderRadius={`50%`}
            >
              <Image // eslint-disable-line
                w={{ base: ``, md: `${5 / 7.68}vw`, lg: `${8 / 19.2}vw` }}
                h={{ base: ``, md: `${8 / 7.68}vw`, lg: `${12 / 19.2}vw` }}
                image={{
                  width: 20,
                  height: 24,
                  src: `/svg/question-solid.svg`,
                  alt: `?アイコン`,
                }}
              />
            </Flex>
          </InternalLink>
        </Flex> */}
        {/* <Box
          mt={{ base: ``, md: `${6 / 19.2}vw` }}
          textAlign={`center`}
          color={`#41A4FD`}
          fontSize={{ base: ``, md: `${10 / 7.68}vw`, lg: `${19 / 19.2}vw` }}
          fontWeight={`bold`}
          whiteSpace={`nowrap`}
        >
          お祝い金
          <Box
            as={`span`}
            fontSize={{ md: `${15 / 7.68}vw`, lg: `${33 / 19.2}vw` }}
            fontFamily={`'Noto Sans', sans-serif`}
          >
            {offer.job_type}
            {/*offer.job_type.gift
          </Box>
          ポイントもらえる
        </Box> */}
      </Box>
      <InternalLink href={routes.offersJobForm(offer.id)}>
        <Box
        // onClick={() => {
        //   {
        //     signin();
        //   }
        // }}
        >
          <Flex
            alignItems={`center`}
            justify={`center`}
            py={{ base: ``, md: `${40 / 19.2}vw` }}
            background={`transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`}
            color={`white`}
            fontSize={{ base: ``, md: `${16 / 7.68}vw`, lg: `${27 / 19.2}vw` }}
            fontWeight={`bold`}
          >
            <Image // eslint-disable-line
              w={{ base: ``, md: `${16 / 7.68}vw`, lg: `${27 / 19.2}vw` }}
              h={{ base: ``, md: `${16 / 7.68}vw`, lg: `${27 / 19.2}vw` }}
              mr={{ base: ``, md: `${15 / 19.2}vw` }}
              image={{
                width: 35,
                height: 35,
                src: `/svg/paper-plane-solid.svg`,
                alt: `紙飛行機アイコン`,
              }}
            />
            応募する
          </Flex>
        </Box>
      </InternalLink>
    </Box>
  );
};
