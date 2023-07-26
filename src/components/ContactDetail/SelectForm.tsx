import { Box } from '@chakra-ui/react';
import { ChakraStylesConfig, GroupBase, Select } from 'chakra-react-select';
import { FC } from 'react';
import { Control, FieldValues, Controller } from 'react-hook-form';

type SelectFormProps = {
  index: number;
  list: string;
  Options: { value: string; label: string }[];
  control: Control<FieldValues, any>;
  ChakraStylesDesktop: ChakraStylesConfig<unknown, boolean, GroupBase<unknown>>;
};

const SelectForm: FC<SelectFormProps> = ({
  index,
  Options,
  control,
  ChakraStylesDesktop,
}) => {
  return (
    <Box
      display={index === 0 ? 'block' : 'none'}
      ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
      w={{ base: `${160 / 3.75}vw`, md: `initial` }}
    >
      <Controller
        name="inquiry_item"
        control={control}
        rules={{ required: '必須項目です' }}
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
