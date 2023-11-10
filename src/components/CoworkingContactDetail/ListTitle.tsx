import { Flex, Box } from '@chakra-ui/react';

import RequiredMark from './requiredMark';

const ListTitle = ({ required, title }) => {
  return (
    <Box bg={`#F9FCFE`} h={`100%`}>
      <Flex
        pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
        pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
        pl={{ base: `${8 / 3.75}vw`, md: `${40 / 19.2}vw` }}
        pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
        w={{ base: `${120 / 4.28}vw`, md: `${320 / 19.2}vw` }}
        h={`100%`}
        fontWeight={`bold`}
        flexWrap={`wrap`}
        justify={{ md: `space-between` }}
      >
        <Box
          w={{ base: `${116 / 4.28}vw`, md: `${170 / 19.2}vw` }}
          whiteSpace={`pre-wrap`}
        >
          {title}
        </Box>
        <RequiredMark required={required} />
      </Flex>
    </Box>
  );
};

export default ListTitle;