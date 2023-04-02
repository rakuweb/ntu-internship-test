import { Box, Heading, Text } from '@chakra-ui/react';

import { useStudentStore, selectStudent } from 'features/student';
import { useEffect, useState } from 'react';

const rankList = [
  { color: 'Black', count: 50, next: 0, nextColor: '' },
  { color: 'Gold', count: 10, next: 50, nextColor: 'Black' },
  { color: 'Blue', count: 3, next: 10, nextColor: 'Gold' },
  { color: 'White', count: 1, next: 3, nextColor: 'Blue' },
];

const Caferoom = () => {
  const student = useStudentStore(selectStudent);
  const [remainCount, setRemainCount] = useState<number>(0);
  const [target, setTarget] = useState(rankList[3]);

  useEffect(() => {
    if (!student?.id) return;
    const rank = rankList.find(({ count }) => student.totalVisitCount >= count);

    rank && setTarget(rank);
    rank &&
      setRemainCount(() => {
        const result = rank.next - student.totalVisitCount;

        return result;
      });
  }, [student]);

  return (
    <Box pt={'50px'}>
      <Heading
        fontSize={'19px'}
        textAlign={'center'}
        fontFamily={"'Noto Sans JP', sans-serif"}
      >
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
          lineHeight={'1.4'}
        >
          {student.visitCountOfMonth}
          <Box
            fontSize={'10px'}
            color={'#707070'}
            fontWeight={'normal'}
            w={'106px'}
          >
            {`（今までに${student.totalVisitCount}回ご来店）`}
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
          lineHeight={'1.4'}
        >
          {target?.color}
          <Box
            fontSize={'10px'}
            color={'#707070'}
            fontWeight={'normal'}
            w={'106px'}
          >
            {remainCount >= 0
              ? `（あと${remainCount}回で${target.nextColor}）`
              : ``}
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
