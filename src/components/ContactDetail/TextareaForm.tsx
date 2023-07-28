import { Textarea } from '@chakra-ui/react';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

type TextareaFormProps = {
  list: string;
  index: number;
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

const TextareaForm: FC<TextareaFormProps> = ({ list, index, control }) => {
  return (
    <Controller
      name="inquiry_content"
      control={control}
      rules={{ required: '必須項目です' }}
      render={({ field }) => (
        <Textarea
          {...field}
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
      )}
    />
  );
};

export default TextareaForm;
