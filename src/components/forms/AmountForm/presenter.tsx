// import layer
import { FC } from 'react';
import { Input, Box, BoxProps, Flex } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Span } from '~/components/Span';

// type layer
export type StyleProps = BoxProps;
export type DataProps = {
  placeholder?: string;
  errorMessage?: string;
  registers: UseFormRegisterReturn;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  placeholder,
  errorMessage,
  registers,
  ...props
}) => {
  return (
    <Box {...props}>
      <Flex
        justifyContent={`space-between`}
        alignItems={`center`}
        w={{
          base: `${190 / 3.75}vw`,
          md: `${200 / 7.68}vw`,
          lg: `${500 / 19.2}vw`,
        }}
        fontSize={{
          base: `${10 / 3.75}vw`,
          md: `${12 / 7.68}vw`,
          lg: `${19 / 19.2}vw`,
        }}
        ml={{
          base: `${19 / 3.75}vw`,
          md: `${70 / 19.2}vw`,
        }}
      >
        <Input
          placeholder={placeholder}
          // eslint-disable-next-line
          {...registers}
          borderColor={`#999`}
          borderRadius={`0`}
          w={{
            base: `${190 / 3.75}vw`,
            md: `${200 / 7.68}vw`,
            lg: `${450 / 19.2}vw`,
          }}
          h={{
            base: `${25 / 3.75}vw`,
            md: `${20 / 7.68}vw`,
            lg: `${40 / 19.2}vw`,
          }}
        />
        <Span>円</Span>
      </Flex>
      {errorMessage && (
        <Box
          mt={{ base: `0.25rem` }}
          fontSize={{ base: `0.5rem`, md: `0.75rem` }}
          ml={{
            base: `${19 / 3.75}vw`,
            md: `${70 / 19.2}vw`,
          }}
          color={`red`}
        >
          {errorMessage}
        </Box>
      )}
    </Box>
  );
};
