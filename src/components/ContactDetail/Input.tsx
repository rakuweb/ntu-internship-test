import { Input } from '@chakra-ui/react';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

type InputFormProps = {
  control: Control<{
    name: string;
    manager_name: string;
    manager_phone: string;
    email: string;
    place: string;
    listing_details: string;
    department: string;
    url: string;
    remarks: string;
  }>;
  name:
    | 'name'
    | 'manager_name'
    | 'manager_phone'
    | 'email'
    | 'place'
    | 'listing_details'
    | 'department'
    | 'url'
    | 'remarks';
  index: number;
};

const InputForm: FC<InputFormProps> = ({ index, control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: '必須項目です' }}
      render={({ field }) => (
        <Input
          {...field}
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
          // ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
        />
      )}
    />
  );
};

export default InputForm;
