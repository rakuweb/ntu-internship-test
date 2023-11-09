import { Box, Flex } from '@chakra-ui/react';
import DocumentIcon from './DocumentIcon';

const FormName = () => {
  return (
    <Flex
      mt={{ base: ``, md: `${80 / 19.2}vw` }}
      mb={{ base: `${12 / 3.75}vw`, md: `${40 / 19.2}vw` }}
    >
      <DocumentIcon />
      <Box
        mt={{ base: ``, md: `${3 / 19.2}vw` }}
        fontSize={{
          base: `${15 / 3.75}vw`,
          md: `${16 / 7.68}vw`,
          lg: `${24 / 19.2}vw`,
        }}
        fontWeight={`bold`}
      >
      COWORKINGに関するお問い合わせ
      </Box>
    </Flex>
  );
};

export default FormName;
