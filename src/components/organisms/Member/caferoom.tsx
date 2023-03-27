import { Box, Heading, Text } from '@chakra-ui/react';

const Caferoom = () => {
  return (
    <Box pt={'50px'}>
      <Heading fontSize={'19px'} textAlign={'center'}>
        CAFE ROOM
      </Heading>
      <Box
        bgColor={'white'}
        w={'333px'}
        m={'20px auto auto'}
        borderRadius={'50'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        p={'20px'}
      >
        <Text fontWeight={'bold'} fontFamily={"'Noto Sans JP', sans-serif"}>
          今月の来店数
        </Text>
        <Text
          fontWeight={'900'}
          fontFamily={"'Noto Sans JP', sans-serif"}
          textAlign={'center'}
          fontSize={'23px'}
        >
          2
          <Box fontSize={'10px'} color={'#707070'} fontWeight={'normal'}>
            （今までに2回ご来店）
          </Box>
        </Text>
      </Box>
      <Box
        bgColor={'white'}
        w={'333px'}
        m={'20px auto auto'}
        borderRadius={'50'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        p={'20px'}
      >
        <Text fontWeight={'bold'} fontFamily={"'Noto Sans JP', sans-serif"}>
          カフェランク
        </Text>
        <Text
          fontWeight={'900'}
          fontFamily={"'Noto Sans JP', sans-serif"}
          textAlign={'center'}
          fontSize={'23px'}
        >
          White
          <Box fontSize={'10px'} color={'#707070'} fontWeight={'normal'}>
            （あと32回でブラック）
          </Box>
        </Text>
      </Box>
      <Text
        textAlign={'center'}
        fontSize={'10px'}
        color={'#707070'}
        fontWeight={'normal'}
        mt={'15px'}
      >
        ※カフェランクの特典に関してはスタッフにご確認ください※
      </Text>
    </Box>
  );
};

export default Caferoom;
