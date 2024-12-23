import { ChakraStylesConfig } from 'chakra-react-select';

// モバイル
const chakraStylesMobile: ChakraStylesConfig = {
  control: (provided, _state) => ({
    ...provided,
    display: { base: `flex`, md: `none` },
    background: `white`,
    border: `0px`,
    borderRadius: `${10 / 3.75}vw`,
    minHeight: `${38 / 3.75}vw`,
    height: `${38 / 3.75}vw`,
    fontSize: `${13 / 4.28}vw`,
    boxShadow: `0px 3px 6px #00000029`,
  }),

  valueContainer: (provided, _state) => ({
    ...provided,
    width: `${80 / 3.75}vw`,
    pl: `${5 / 3.75}vw`,
    pr: `0`,
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
    height: `${38 / 3.75}vw`,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: `#41A4FD`,
    background: `white`,
    borderRadius: `0`,
    pl: `0`,
    pr: `${5 / 3.75}vw`,
  }),
  menu: (provided, _state) => ({
    ...provided,
    fontSize: `${13 / 3.75}vw`,
  }),
};
export default chakraStylesMobile;
