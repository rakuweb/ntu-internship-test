import { Input } from '@chakra-ui/react';

const InputForm = ({ list, index, register }) => {
  return (
    <Input
      {...register(list.name, list.validation)}
      display={index === 0 || index === 6 ? 'none' : 'block'}
      borderColor={`#999`}
      borderRadius={`0`}
      w={{
        base: `${190 / 3.75}vw`,
        md: `${200 / 7.68}vw`,
        lg: `${500 / 19.2}vw`,
      }}
      h={{
        base: `${25 / 3.75}vw`,
        md: `${20 / 7.68}vw`,
        lg: `${40 / 19.2}vw`,
      }}
      fontSize={{
        base: `${10 / 3.75}vw`,
        md: `${12 / 7.68}vw`,
        lg: `${19 / 19.2}vw`,
      }}
      ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
    />
  );
};

export default InputForm;
