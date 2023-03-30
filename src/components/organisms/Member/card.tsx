import { Box, Heading, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import useSound from 'use-sound';
import { useEffect, useState } from 'react';

import { useStudentStore, selectStudent } from 'features/student';

import Ntu from '../../../../public/svg/ntucard.svg';

const formatDate = (_date: Date): string => {
  const date = new Date(_date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
};

const Card = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const student = useStudentStore(selectStudent);
  const [play] = useSound('/music/card.mp3', {
    onend: () => {
      console.log('Sound ended');
    },
  });

  useEffect(() => {
    if (!loaded) return;
    play();
  }, [loaded]);

  useEffect(() => {
    if (!student?.username || !student?.grade || !student?.gradeUpdatedAt)
      return;

    const timeoutId = setTimeout(function() {
      setLoaded(true);
    }, 1000 * 1);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [student]);

  const gradeList = {
    大学1年生: '1st',
    大学2年生: '2nd',
    大学3年生: '3rd',
    大学4年生: '4th',
    大学5年生: '5th',
    大学6年生: '6th',
    修士1年生: 'Master1',
    修士2年生: 'Master2',
    博士1年生: 'Doctor1',
    博士2年生: 'Doctor2',
    博士3年生: 'Doctor3',
    博士4年生: 'Doctor4',
    大学１年生: '1st',
    大学２年生: '2nd',
    大学３年生: '3rd',
    大学４年生: '4th',
    大学５年生: '5th',
    大学６年生: '6th',
    修士１年生: 'Master1',
    修士２年生: 'Master2',
    博士１年生: 'Doctor1',
    博士２年生: 'Doctor2',
    博士３年生: 'Doctor3',
    博士４年生: 'Doctor4',
    卒業生: 'OB・OG',
  };

  return loaded ? (
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
              {student.username}
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
              {gradeList[student.grade]} Student
            </Text>
            <Text fontSize={'9px'} fontFamily={"'Noto Sans JP', sans-serif"}>
              Member ID:
            </Text>
            <Text
              fontSize={'10px'}
              fontWeight={'bold'}
              fontFamily={"'Noto Sans JP', sans-serif"}
            >
              {student.id}
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
        更新日：{formatDate(student.gradeUpdatedAt)}
      </Heading>
    </Box>
  ) : (
    <></>
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
