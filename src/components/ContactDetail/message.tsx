import { Box, Flex, Text } from '@chakra-ui/react';

const Message = ({ message }) => {
  return (
    <Text
      color={'red'}
      whiteSpace={'nowrap'}
      fontSize={'xs'}
      w={'25%'}
      pl={'0.5rem'}
    >
      {message}
    </Text>
  );
};

export default Message;
