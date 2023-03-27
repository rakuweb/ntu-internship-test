import { Box, Heading, Text } from '@chakra-ui/react';
import Ntu from '../../../../public/svg/ntucard.svg';
const Card = () => {
  return (
    <Box w={'333px'} m={'auto'}>
      <Box
        bgColor={'#EAEAEA'}
        // w={'333px'}
        h={'195px'}
        // m={'auto'}
        borderRadius={'20'}
        position={'relative'}
        boxShadow={'0px 4px 1px rgba(0, 0, 0, 0.1)'}
      >
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
        <Heading
          as={'h2'}
          fontFamily={"'Noto Sans JP', sans-serif"}
          fontWeight={'normal'}
          fontSize={'22px'}
          letterSpacing={'3px'}
          textAlign={'center'}
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
          大橋乃々華
          <Text as={'span'} fontSize={'12px'}>
            様
          </Text>
        </Heading>
        <Box
          position={'absolute'}
          bottom={'10px'}
          left={'10px'}
          lineHeight={'1.4'}
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
      <Heading
        as={'h3'}
        fontSize={'12px'}
        color={'#707070'}
        textAlign={'right'}
        fontFamily={"'Noto Sans JP', sans-serif"}
        pt={'10px'}
      >
        更新日：2023/03/12
      </Heading>
    </Box>
  );
};

export default Card;
