import { ChakraStylesConfig } from 'chakra-react-select';

const chakraStylesDesktop: ChakraStylesConfig = {
  control: (provided, _state) => ({
    ...provided,
    display: { base: `none`, md: `flex` },
    background: `white`,
    border: `0px`,
    borderRadius: { md: `${10 / 7.68}vw`, lg: `${10 / 19.2}vw` },
    minHeight: { md: `${60 / 19.2}vw`, lg: `${49 / 19.2}vw` },
    height: { md: `${60 / 19.2}vw`, lg: `${49 / 19.2}vw` },
    fontSize: {
      base: `${13 / 3.75}vw`,
      md: `${10 / 7.68}vw`,
      lg: `${20 / 19.2}vw`,
    },
    // transition: `all .3s`,
    _hover: {
      cursor: `pointer`,
      // filter: `opacity(50%)`,
      // textDecoration: 'none',
    },
    boxShadow: `0px 3px 6px #00000029`,
  }),

  valueContainer: (provided, _state) => ({
    ...provided,
  }),

  input: (provided, _state) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: (_state) => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, _state) => ({
    ...provided,
    height: { md: `${60 / 19.2}vw`, lg: `${49 / 19.2}vw` },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    w: { md: `${90 / 19.2}vw`, lg: `${70 / 19.2}vw` },
    color: `#41A4FD`,
    background: `white`,
    borderRadius: `0`,
  }),
  menu: (provided, _state) => ({
    ...provided,
    fontSize: {
      base: `${13 / 3.75}vw`,
      md: `${10 / 7.68}vw`,
      lg: `${20 / 19.2}vw`,
    },
  }),
};

export default chakraStylesDesktop;
