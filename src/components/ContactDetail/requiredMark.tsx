import { Flex } from '@chakra-ui/react';

const RequiredMark = ({ index }) => {
  return (
    <Flex
      display={index === 8 ? `none` : `flex`}
      px={{
        base: `${3 / 3.75}vw`,
        md: `${5 / 7.68}vw`,
        lg: `${5 / 19.2}vw`,
      }}
      fontSize={{
        base: `${10 / 3.75}vw`,
        md: `${10 / 7.68}vw`,
        lg: `${16 / 19.2}vw`,
      }}
      alignItems={`center`}
      color={`white`}
      bg={`#F26601`}
      h={`fit-content`}
    >
      必須
    </Flex>
  );
};

export default RequiredMark;
