/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Pagecircle } from './Pagecircle';

export type PresenterProps = Record<string, unknown>;

export const Presenter: FC = () => {
  const [pagenumber, setPagenumber] = useState(1);
  return (
    <Flex
      w={`fit-content`}
      h={{ md: `${37 / 19.2}vw`, lg: `${37 / 19.2}vw` }}
      letterSpacing={`0`}
      mx={`auto`}
      alignItems={`center`}
      fontSize={{
        base: `${16 / 3.75}vw`,
        md: `${12 / 7.68}vw`,
        lg: `${23 / 19.2}vw`,
      }}
      fontWeight={`bold`}
      color={`#39414E`}
      fontFamily={`'Noto Sans JP', sans-serif;`}
    >
      <Box
        display={pagenumber == 1 ? `none` : `block`}
        onClick={() => setPagenumber(pagenumber - 1)}
        _hover={{
          cursor: `pointer`,
          color: `#41A4FD`,
          borderBottom: `1px`,
        }}
      >{`戻る`}</Box>
      <Box
        display={pagenumber == 1 ? `none` : `block`}
        ml={{
          base: `${10 / 3.75}vw`,
          md: `${10 / 7.68}vw`,
          lg: `${10 / 19.2}vw`,
        }}
        mr={{
          base: `${17 / 3.75}vw`,
          md: `${17 / 7.68}vw`,
          lg: `${17 / 19.2}vw`,
        }}
      >{`…`}</Box>
      <Pagecircle
        pagenumber={pagenumber - 1}
        display={pagenumber == 1 ? `none` : `flex`}
        onClick={() => setPagenumber(pagenumber - 1)}
      />
      <Pagecircle pagenumber={pagenumber} _hover={{}} bg={`#41A4FD`} />
      <Pagecircle
        pagenumber={pagenumber + 1}
        onClick={() => setPagenumber(pagenumber + 1)}
      />
      <Pagecircle
        pagenumber={pagenumber + 2}
        onClick={() => setPagenumber(pagenumber + 2)}
      />

      <Box
        ml={{
          base: `${10 / 3.75}vw`,
          md: `${10 / 7.68}vw`,
          lg: `${10 / 19.2}vw`,
        }}
        mr={{
          base: `${17 / 3.75}vw`,
          md: `${17 / 7.68}vw`,
          lg: `${17 / 19.2}vw`,
        }}
      >{`…`}</Box>
      <Box
        onClick={() => setPagenumber(pagenumber + 1)}
        _hover={{
          cursor: `pointer`,
          color: `#41A4FD`,
          borderBottom: `1px`,
        }}
      >{`次へ`}</Box>
    </Flex>
  );
};
