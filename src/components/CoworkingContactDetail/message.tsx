import { Text } from '@chakra-ui/react';

const Message = ({ message }) => {
  return (
    <Text
      color={'red'}
      whiteSpace={'nowrap'}
      fontSize={{ base: `${10 / 3.75}vw`, lg: `${12 / 19.2}vw` }}
      w={'25%'}
    >
      {message}
    </Text>
  );
};

export default Message;
