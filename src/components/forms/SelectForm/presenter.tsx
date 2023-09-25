// import layer
import { FC } from 'react';
import {
  FormControl,
  Select,
  FormControlProps,
  Stack,
  Box,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

// type layer
export type StyleProps = FormControlProps;
export type DataProps = {
  placeholder?: string;
  selectList: string[] | number[];
  isRequired?: boolean;
  errorMessage?: string;
  registers?: UseFormRegisterReturn;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  placeholder,
  selectList,
  errorMessage,
  registers,
  ...props
}) => {
  return (
    <FormControl isInvalid={errorMessage !== undefined} {...props}>
      <Stack align={{ lg: `center` }} direction={{ base: `column`, lg: `row` }}>
        <Box w={{ lg: `12.5rem` }}>
          <Select
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
            bg={'white'}
            placeholder={placeholder}
            borderColor={`#999`}
            borderRadius={`0`}
            {...registers}
          >
            {selectList.map((val) => (
              <option value={val} key={val}>
                {val}
              </option>
            ))}
          </Select>
          {errorMessage && (
            <Box
              mt={{ base: `0.25rem` }}
              color={`red`}
            >
              {errorMessage}
            </Box>
          )}
        </Box>
      </Stack>
    </FormControl>
  );
};
