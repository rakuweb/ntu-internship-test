import { Box } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { Controller } from 'react-hook-form';

const SelectForm = ({ index, Options, control, ChakraStylesDesktop, list }) => {
  return (
    <Box
      display={index === 0 ? 'block' : 'none'}
      ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
      w={{ base: `${160 / 3.75}vw`, md: `initial` }}
    >
      <Controller
        name={list.name}
        control={control}
        rules={list.validation}
        render={({ field }) => (
          <Select
            {...field}
            options={Options}
            chakraStyles={ChakraStylesDesktop}
            placeholder={`項目を選択する`}
          />
        )}
      />
    </Box>
  );
};

export default SelectForm;
