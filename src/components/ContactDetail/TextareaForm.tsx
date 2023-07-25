import { Textarea } from '@chakra-ui/react';

const TextareaForm = ({ list, index, register }) => {
  return (
    <Textarea
      {...register(list.name, list.validation)}
      display={index === 6 ? 'block' : 'none'}
      borderRadius={`0`}
      borderColor={`#999`}
      w={{
        base: `${190 / 3.75}vw`,
        md: `${200 / 7.68}vw`,
        lg: `${500 / 19.2}vw`,
      }}
      h={{
        base: `${150 / 3.75}vw`,
        md: `${150 / 7.68}vw`,
        lg: `${200 / 19.2}vw`,
      }}
      fontSize={{
        base: `${10 / 3.75}vw`,
        md: `${12 / 7.68}vw`,
        lg: `${19 / 19.2}vw`,
      }}
      my={{ base: `${19 / 3.75}vw`, md: `${25 / 19.2}vw` }}
      ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
    />
  );
};

export default TextareaForm;
