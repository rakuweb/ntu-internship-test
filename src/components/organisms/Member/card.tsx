import { Box, Heading, Text } from '@chakra-ui/react';
import Ntu from '../../../../public/svg/ntucard.svg';
import { css } from '@emotion/react';

const Card = () => {
  return (
    <Box w={'333px'} m={'auto'} css={styles}>
      <Box
        h={'195px'}
        borderRadius={'20'}
        position={'relative'}
        boxShadow={'0px 4px 1px rgba(0, 0, 0, 0.1)'}
        // background={'#eaeaea'}
        // #eaeaeaの時のみ名前とGrade,IDを黒にする

        // background={'linear-gradient(#6494ed, #125dea)'}
        background={
          'linear-gradient(135deg, #b8751e 0%, #ffce08 37%, #e1ce08 63%, #c0a683 100%)'
        }
        // background={'linear-gradient(#545454, #000000)'}
        // background={'linear-gradient(135deg,#21D4FD, #B721FF)'}
      >
        <Box h={'195px'} className={'card'}>
          <Text
            fontFamily={"'Josefin Sans', sans-serif"}
            fontStyle={'italic'}
            color={'white'}
            fontSize={'16px'}
            textAlign={'right'}
            p={'10px'}
          >
            Member’sCard
          </Text>
          <Box
            bgColor={'white'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            p={'5px'}
          >
            <Ntu />
          </Box>
          <Box
            position={'absolute'}
            top={'0'}
            bottom={'0'}
            left={'0'}
            right={'0'}
            m={'auto'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Heading
              as={'h2'}
              fontFamily={"'Noto Sans JP', sans-serif"}
              fontWeight={'normal'}
              fontSize={'22px'}
              letterSpacing={'3px'}
              display={'flex'}
              alignItems={'flex-end'}
              color={'white'}
            >
              大橋乃々華
              <Text as={'span'} fontSize={'12px'}>
                様
              </Text>
            </Heading>
          </Box>
          <Box
            position={'absolute'}
            bottom={'10px'}
            left={'18px'}
            lineHeight={'1.4'}
            color={'white'}
          >
            <Text fontSize={'9px'} fontFamily={"'Noto Sans JP', sans-serif"}>
              Grade:
            </Text>
            <Text
              fontSize={'10px'}
              fontWeight={'bold'}
              fontFamily={"'Noto Sans JP', sans-serif"}
            >
              3rd Student
            </Text>
            <Text fontSize={'9px'} fontFamily={"'Noto Sans JP', sans-serif"}>
              Member ID:
            </Text>
            <Text
              fontSize={'10px'}
              fontWeight={'bold'}
              fontFamily={"'Noto Sans JP', sans-serif"}
            >
              3isdijsa78
            </Text>
          </Box>
        </Box>
      </Box>
      <Heading
        as={'h3'}
        fontSize={'12px'}
        color={'#707070'}
        textAlign={'right'}
        fontFamily={"'Noto Sans JP', sans-serif"}
        pt={'10px'}
        fontWeight={'normal'}
      >
        更新日：2023/03/12
      </Heading>
    </Box>
  );
};

export default Card;
// styles
const styles = css`
  .card {
    top: 0;
    border: 0;
    /* background: #eaeaea; */
    background: linear-gradient(#6494ed, #125dea);
    background-size: 600% 100%;
    background: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0) 50%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(0, 0, 0, 0) 70%
    );
    background-size: 600% 100%;
    -webkit-animation: shine 20s infinite;
    animation: shine 20s infinite;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }

  @-webkit-keyframes shine {
    0% {
      background-position-x: 400%;
    }
    50% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: -400%;
    }
  }

  @keyframes shine {
    0% {
      background-position-x: 400%;
    }
    50% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: -400%;
    }
  }
`;
