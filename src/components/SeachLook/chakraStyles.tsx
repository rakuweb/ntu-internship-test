import { ChakraStylesConfig } from 'chakra-react-select';
const chakraStyles: ChakraStylesConfig = {
  control: (provided, state) => ({
    ...provided,
    background: `white`,
    border: { base: `${2 / 3.75}vw solid #F2F2F2`, md: `0px` },
    borderColor: `#F2F2F2`,
    borderRadius: {
      base: `${10 / 3.75}vw`,
      md: `${10 / 7.68}vw`,
      lg: `${10 / 19.2}vw`,
    },
    minHeight: {
      md: `${22 / 7.68}vw`,
      lg: `${22 / 10.2}vw`,
      '2xl': `${34 / 19.2}vw`,
    },
    h: {
      md: `${22 / 7.68}vw`,
      lg: `${22 / 10.2}vw`,
      '2xl': `${34 / 19.2}vw`,
    },
    w: {
      base: `${390 / 4.28}vw`,
      md: `${170 / 7.68}vw`,
      lg: `${170 / 10.2}vw`,
      '2xl': `${250 / 19.2}vw`,
    },
    fontSize: { md: `${10 / 7.68}vw`, lg: `${13 / 19.2}vw` },
    _hover: {
      cursor: `pointer`,
    },
    boxShadow: { md: `0px 3px 6px #00000029` },
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    ml: { '2xl': `${40 / 19.2}vw` },
    whiteSpace: `pre-wrap`,
  }),

  input: (provided, state) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: (state) => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    h: {
      md: `${22 / 7.68}vw`,
      lg: `${22 / 10.2}vw`,
      '2xl': `${34 / 19.2}vw`,
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    w: { md: `${30 / 7.68}vw`, lg: `${40 / 19.2}vw` },
    color: `#39414E`,
    background: `white`,
    borderRadius: `0`,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontWeight: `bold`,
    color: `#39414E`,
  }),
};

export default chakraStyles;
