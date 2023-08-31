import { Box } from '@chakra-ui/react';
import React from 'react';
import { FC } from 'react';

type MyButtonProps = {
  active: boolean;
  index: string | number;
  label: string;
  onClick: (index: string | number) => void;
};

const MyButton: FC<MyButtonProps> = ({ active, index, label, onClick }) => (
  <Box key={`list`} w={`fit-content`}>
    <Box
      whiteSpace={`nowrap`}
      p={{
        base: `${8 / 3.75}vw ${16 / 3.75}vw`,
        md: `${10 / 19.2}vw ${18 / 19.2}vw`,
        lg: `${7 / 19.2}vw ${25 / 19.2}vw`,
      }}
      mr={{
        base: `${8 / 3.75}vw`,
        md: `${12 / 19.2}vw`,
        lg: `${12 / 19.2}vw`,
      }}
      mb={{
        base: `${8 / 3.75}vw`,
        md: `${10 / 19.2}vw`,
        lg: `${10 / 19.2}vw`,
      }}
      fontSize={{
        base: `${13 / 3.75}vw`,
        md: `${20 / 19.2}vw`,
        lg: `${20 / 19.2}vw`,
      }}
      fontWeight={`bold`}
      border={{
        base: `${2 / 3.75}vw solid #41A4FD`,
        md: `${3 / 19.2}vw solid #41A4FD`,
        lg: `${3 / 19.2}vw solid #41A4FD`,
      }}
      borderRadius={{
        base: `${25 / 3.75}vw`,
        md: `${26 / 7.68}vw`,
        lg: `${26 / 19.2}vw`,
      }}
      onClick={() => onClick(index)}
      color={active ? `white` : `#41A4FD`}
      bg={active ? `#41A4FD` : `white`}
      transition={`all .3s`}
      _hover={{
        cursor: `pointer`,
        filter: `opacity(50%)`,
        textDecoration: 'none',
      }}
    >
      {label}
    </Box>
  </Box>
);

export default MyButton;
