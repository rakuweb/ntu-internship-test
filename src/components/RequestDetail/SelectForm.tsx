import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { ChakraStylesConfig, GroupBase, Select } from 'chakra-react-select';
import { Control, Controller } from 'react-hook-form';

type SelectFormProps = {
  index: number;
  list: string;
  Options: { value: string; label: string }[];
  ChakraStylesDesktop: ChakraStylesConfig<unknown, boolean, GroupBase<unknown>>;
  control: Control<{
    mail: string;
    name: string;
    company: string;
    address: string;
    tel: string;
    inquiry_item: string;
    inquiry_content: string;
  }>;
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
      // ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
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
            onChange={(option) =>
              field.onChange((option as { value: string; label: string }).value)
            }
            value={Options.find((option) => option.value === field.value)}
          />
        )}
      />
    </Box>
  );
};

export default SelectForm;
