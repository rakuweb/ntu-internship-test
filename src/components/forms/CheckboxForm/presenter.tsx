// import layer
import { FC } from 'react';
import {
  FormControl,
  Checkbox,
  FormControlProps,
  CheckboxGroup,
  Stack,
  Box,
  Wrap,
} from '@chakra-ui/react';
import { Control, Controller } from 'react-hook-form';

// type layer
export type StyleProps = FormControlProps;
export type DataProps = {
  checkboxes: string[];
  label?: string;
  placeholder?: string;
  name: string;
  // isRequired?: boolean;
  errorMessage?: string;
  autoComplete?: string;
  control: Control;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  checkboxes,
  errorMessage,
  name,
  control,
  ...props
}) => {
  return (
    <FormControl w={`100%`} isInvalid={errorMessage !== undefined} {...props}>
      <Stack w={`100%`} direction={{ base: `column`, lg: `row` }}>
        <Wrap
          direction={{ base: `row` }}
          fontSize={{ base: '0.875rem' }}
          fontWeight={700}
          w={{ lg: `90%`, xl: `70%` }}
          spacing={{ base: `4.26vw`, lg: `1.25rem` }}
        >
          <Controller
            name={name}
            control={control}
            render={({ field }) => {
              return (
                <CheckboxGroup {...field} defaultValue={[]}>
                  {checkboxes.map((checkbox) => (
                    <Box
                      key={checkbox}
                      // h={{ base: '2.75rem' }}
                    >
                      <Checkbox
                        name={name}
                        key={checkbox}
                        size={{ base: `sm`, '2xl': `md` }}
                        borderColor={`gray`}
                        w={{
                          lg: `15rem`,
                          xl: `15rem`,
                        }}
                        value={checkbox}
                        required={false}
                      >
                        {checkbox}
                      </Checkbox>
                    </Box>
                  ))}
                </CheckboxGroup>
              );
            }}
          />
        </Wrap>
      </Stack>
      <Box
        mt={{ base: `0.25rem` }}
        fontSize={{ base: `0.5rem`, md: `0.75rem` }}
        color={`red`}
      >
        {errorMessage}
      </Box>
    </FormControl>
  );
};
