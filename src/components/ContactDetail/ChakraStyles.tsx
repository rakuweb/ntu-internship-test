import { ChakraStylesConfig } from 'chakra-react-select';

const ChakraStylesDesktop: ChakraStylesConfig = {
  control: (provided) => ({
    ...provided,
    background: `white`,
    borderColor: `#999`,
    borderRadius: `${0 / 7.68}vw`,
    minHeight: {
      base: `${28 / 3.75}vw`,
      md: `${62 / 19.2}vw`,
      lg: `${42 / 19.2}vw`,
    },
    height: {
      base: `${28 / 3.75}vw`,
      md: `${62 / 19.2}vw`,
      lg: `${42 / 19.2}vw`,
    },
    fontSize: {
      base: `${13 / 3.75}vw`,
      md: `${10 / 7.68}vw`,
      lg: `${19 / 19.2}vw`,
    },
    transition: `all .3s`,
    _hover: {
      cursor: `pointer`,
      filter: `opacity(50%)`,
      textDecoration: 'none',
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    pt: `0`,
  }),

  input: (provided) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: {
      base: `${27 / 3.75}vw`,
      md: `${60 / 19.2}vw`,
      lg: `${40 / 19.2}vw`,
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    w: { md: `${90 / 19.2}vw`, lg: `${70 / 19.2}vw` },
    background: `white`,
    borderRadius: `0`,
    pl: `0`,
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: {
      base: `${13 / 3.75}vw`,
      md: `${10 / 7.68}vw`,
      lg: `${19 / 19.2}vw`,
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    whiteSpace: `nowrap`,
  }),
};

export default ChakraStylesDesktop;
