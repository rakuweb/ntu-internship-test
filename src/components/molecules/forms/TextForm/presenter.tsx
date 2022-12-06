// import layer
import { VFC } from 'react';
import {
  Badge,
  FormControl,
  FormLabel,
  Input,
  FormControlProps,
  FormErrorMessage,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { SansSerifText as Text } from 'atoms/texts/SansSerifText';

// type layer
export type StyleProps = FormControlProps;
export type PresenterPropsWithoutStyle = {
  label: string;
  placeholder?: string;
  name: string;
  type: string;
  isRequired?: boolean;
  errorMessage?: string;
  autoComplete?: string;
  registers?: UseFormRegisterReturn;
};
export type PresenterProps = FormControlProps & PresenterPropsWithoutStyle;

// presenter
export const Presenter: VFC<PresenterProps> = ({
  label,
  placeholder,
  name,
  type,
  isRequired = false,
  errorMessage,
  autoComplete,
  registers,
  ...props
}) => {
  return (
    <FormControl isInvalid={errorMessage !== undefined} {...props}>
      <FormLabel htmlFor={name}>
        <Text
          fontSize={{ base: '0.875rem' }}
          letterSpacing="1px"
          whiteSpace={'nowrap'}
          fontWeight={'extrabold'}
        >
          {label}
        </Text>
        {isRequired && (
          <Badge background="none" color="red" py={['0.2rem']} px={['0.3rem']}>
            必須
          </Badge>
        )}
      </FormLabel>

      <Input
        type={type}
        h={{ base: '2.75rem' }}
        bg={'white'}
        borderRadius={0}
        placeholder={placeholder}
        _placeholder={{ fontSize: { base: '0.875rem' } }}
        autoComplete={autoComplete}
        {...registers}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
