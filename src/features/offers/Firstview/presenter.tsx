// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { ChakraStylesConfig } from 'chakra-react-select';

import { Image } from '~/components/Image';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const Options = [
    { value: 'アルバイト', label: 'アルバイト' },
    { value: 'インターンバイト', label: 'インターンバイト' },
    { value: 'SNS運用', label: 'SNS運用' },
    { value: 'マーケティング', label: 'マーケティング' },
  ];

  const chakraStyles: ChakraStylesConfig = {
    control: (provided, _state) => ({
      ...provided,
      background: `white`,
      border: `0px`,
      borderRadius: {
        base: `${10 / 3.75}vw`,
        lg: `${10 / 19.2}vw`,
      },
      minHeight: {
        base: `${45 / 3.75}vw`,
        lg: `${53 / 19.2}vw`,
      },
      w: { base: `${299 / 3.75}vw`, lg: `${481 / 19.2}vw` },
      h: { base: `${45 / 3.75}vw`, lg: `${53 / 19.2}vw` },
      fontSize: { md: `${18 / 3.75}vw`, lg: `${18 / 19.2}vw` },
      textAlign: `start`,

      fontFamily: `'Noto Sans JP', sans-serif`,
    }),
    valueContainer: (provided, _state) => ({
      ...provided,
      color: 'black',
    }),
    indicatorSeparator: (_state) => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, _state) => ({
      ...provided,
      h: { base: `${45 / 3.75}vw`, lg: `${53 / 19.2}vw` },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      w: { base: `${52 / 3.75}vw`, lg: `${80 / 19.2}vw` },
      background: `transparent linear-gradient(270deg, #0EDAFFBC 0%, #41A4FD 100%) 0% 0% no-repeat padding-box;`,
      borderRadius: `0`,
    }),
    menu: (_state) => ({
      color: 'black',
      position: `absolute`,
      fontWeight: `500`,

      w: `100%`,
    }),
  };

  return (
    <Box w={`100%`} {...props} position={`relative`} overflow={`hidden`}>
      <Box as={`h1`} display={`none`}>{`新大生のための求人サイトFORJOB`}</Box>
      <Image // eslint-disable-line
        display={{ base: `none`, lg: `block` }}
        position={`absolute`}
        top={0}
        left={0}
        w={`100%`}
        h={`100%`}
        objectFit={`cover`}
        image={{
          width: 2024,
          height: 743,
          src: `/images/offers/firstview.png`,
          alt: `カバー画像`,
        }}
      />
      <Image // eslint-disable-line
        display={{ lg: `none` }}
        position={`absolute`}
        top={`0`}
        left={0}
        w={`100%`}
        h={`${396 / 3.75}vw`}
        image={{
          width: 991,
          height: 1046,
          src: `/images/offers/fvmobile.png`,
          alt: `カバー画像`,
        }}
      />
      <Flex
        backgroundColor={{ base: `#ffffff`, lg: 'var(--white)' }}
        w={`100%`}
        h={{ base: `${396 / 3.75}vw`, lg: `${705 / 19.2}vw` }}
        mx={{ lg: `auto` }}
        fontFamily={`'Noto Sans JP', sans-serif`}
      >
        <Box
          mx={{ lg: `auto` }}
          mt={{ base: `${40 / 3.75}vw`, lg: `${186 / 19.2}vw` }}
          position={`relative`}
        >
          <Image // eslint-disable-line
            display={{ base: `none`, lg: `block` }}
            top={0}
            left={0}
            w={`${1467 / 19.2}vw`}
            h={`${319 / 19.2}vw`}
            objectFit={`cover`}
            image={{
              width: 1546,
              height: 339,
              src: `/images/offers/fvlogo.png`,
              alt: `カバー画像`,
            }}
          />
          {/* <Box
            bg={`#39414E`}
            mx={{ base: `${20 / 3.75}vw`, lg: `0` }}
            w={{ base: `${335 / 3.75}vw`, lg: `${676 / 19.2}vw` }}
            h={{
              base: `${150 / 3.75}vw`,
              lg: `initial`,
            }}
            borderRadius={{ base: `${5 / 3.75}vw`, lg: `${5 / 19.2}vw` }}
            p={{
              base: `${15 / 3.75}vw`,
              lg: `${27 / 19.2}vw ${40 / 19.2}vw ${30 / 19.2}vw`,
            }}
            color={`white`}
            fontSize={{ base: `${16 / 3.75}vw`, lg: `${18 / 19.2}vw` }}
            fontWeight={`bold`}
            textAlign={`center`}
          >
            \ここでしか出会えない求人がたくさん/
            <Box
              zIndex={`0`}
              my={{ base: `${15 / 3.75}vw`, lg: `${16 / 19.2}vw` }}
              mx={{ lg: `auto` }}
              w={`fit-content`}
              border={{
                base: `${3 / 3.75}vw solid #41A4FD`,
                lg: `3px solid #41A4FD`,
              }}
              borderRadius={{
                base: `${13 / 3.75}vw`,
                lg: `${15 / 19.2}vw`,
                '2xl': `${13 / 19.2}vw`,
              }}
            >
              <Select
                options={Options}
                chakraStyles={chakraStyles}
                placeholder={`飲食アルバイト`}
              />
            </Box>
            <Box w={`fit-content`} mx={`auto`}>
              <InternalLink href={`/`}>
                <Box
                  display={`inline`}
                  borderBottom={{
                    base: `${2 / 3.75}vw solid #A8A8A8`,
                    lg: `${2 / 19.2}vw solid #A8A8A8`,
                  }}
                  mt={`${0 / 3.75}vw`}
                  fontSize={{ base: `${16 / 3.75}vw`, lg: `${18 / 19.2}vw` }}
                  color={`#A8A8A8`}
                >{`会員登録（無料）はこちら`}</Box>
              </InternalLink>
            </Box>
          </Box> */}
        </Box>
      </Flex>
    </Box>
  );
};
