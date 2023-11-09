import { FC } from 'react';
import { Textarea } from '@chakra-ui/react';
import { Control, Controller } from 'react-hook-form';

type TextareaFormProps = {
  placeholder?: string;
  name: any; // eslint-disable-line
  control: Control<{
    mail: string;
    name: string;
    company: string;
    address: string;
    tel: string;
    inquiry_item: string;
    inquiry_content: string;
    remarks: string;
  }>;
};

const TextareaForm: FC<TextareaFormProps> = ({
  placeholder,
  name,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: '必須項目です' }}
      render={({ field }) => (
        <Textarea
          {...field}
          placeholder={placeholder}
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
        />
      )}
    />
  );
};

export default TextareaForm;
