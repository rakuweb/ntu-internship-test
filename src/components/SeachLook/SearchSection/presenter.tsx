// import layer
import { FC, useState } from 'react';
import { Box, Checkbox, Flex, Icon, Text } from '@chakra-ui/react';
import { Select, ChakraStylesConfig } from 'chakra-react-select';
import { InternalLink } from '~/components/links/InternalLink';
// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const list = [
    `単発(1日)`,
    `短期(1ヶ月以内)`,
    `短期(3ヶ月以内)`,
    `長期(定めなし)`,
    `SNS運用`,
    `SNS運用`,
    `ダミー`,
    `二列目`,
  ];

  const [active, setActive] = useState(false);
  const buttonToggle = () => {
    setActive(!active);
  };

  const Options = [
    { value: '飲食店', label: '飲食店' },
    { value: 'インターンバイト', label: 'インターンバイト' },
    { value: 'SNS運用', label: 'SNS運用' },
    { value: 'マーケティング', label: 'マーケティング' },
  ];

  const chakraStyles: ChakraStylesConfig = {
    control: (provided, state) => ({
      ...provided,
      background: `white`,
      border: `0px`,
      borderRadius: { md: `${10 / 7.68}vw`, lg: `${10 / 19.2}vw` },
      minHeight: { md: `${60 / 19.2}vw`, lg: `${49 / 19.2}vw` },
      height: { md: `${60 / 19.2}vw`, lg: `${49 / 19.2}vw` },
      fontSize: { md: `${10 / 7.68}vw`, lg: `${20 / 19.2}vw` },
      boxShadow: `0px 3px 6px #00000029`,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
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
      height: { md: `${60 / 19.2}vw`, lg: `${49 / 19.2}vw` },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      w: { md: `${90 / 19.2}vw`, lg: `${70 / 19.2}vw` },
      color: `#41A4FD`,
      background: `white`,
      borderRadius: `0`,
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: { md: `${10 / 7.68}vw`, lg: `${20 / 19.2}vw` },
    }),
  };

  return (
    <Box
      w={{ base: ``, md: `${1346 / 19.2}vw`, lg: `${1346 / 19.2}vw` }}
      px={{ base: ``, md: `${80 / 19.2}vw`, lg: `${110 / 19.2}vw` }}
      pt={{ base: ``, md: `${48 / 19.2}vw`, lg: `${48 / 19.2}vw` }}
      pb={{ base: ``, md: `${38 / 19.2}vw`, lg: `${38 / 19.2}vw` }}
      bg={`rgba(103,182,253,0.18)`}
      borderRadius={{
        base: `${15 / 3.75}vw`,
        md: `${15 / 7.68}vw`,
        lg: `${15 / 19.2}vw`,
      }}
      fontFamily={`'Noto Sans JP', sans-serif;`}
      {...props}
    >
      <Flex>
        <Flex alignItems={`center`}>
          <Box
            fontSize={{ base: ``, md: `${11 / 7.68}vw`, lg: `${20 / 19.2}vw` }}
            fontWeight={`bold`}
          >
            職種
          </Box>
          <Box
            w={{
              base: `${248 / 3.75}vw`,
              md: `${413 / 19.2}vw`,
              lg: `${413 / 19.2}vw`,
            }}
            ml={{ base: `${33 / 19.2}vw`, md: `${33 / 19.2}vw` }}
          >
            <Select
              options={Options}
              chakraStyles={chakraStyles}
              placeholder={`職種を選択する`}
            />
          </Box>
        </Flex>
        <Flex
          ml={{ base: ``, md: `${86 / 19.2}vw`, lg: `${86 / 19.2}vw` }}
          alignItems={`center`}
          fontSize={{ base: ``, md: `${11 / 7.68}vw`, lg: `${20 / 19.2}vw` }}
        >
          <Box as={`span`} fontWeight={`bold`}>{`雇用形態`}</Box>

          <Checkbox
            mt={{ base: ``, md: `${3 / 19.2}vw`, lg: `${3 / 19.2}vw` }}
            ml={{ base: `${33 / 19.2}vw`, md: `${33 / 19.2}vw` }}
            mr={{ base: ``, md: `${14 / 19.2}vw`, lg: `${14 / 19.2}vw` }}
            size={{ base: ``, md: `sm`, '2xl': `md` }}
            borderColor={`#41A4FD`}
          />
          {`アルバイト`}
          <Checkbox
            mt={{ base: ``, md: `${3 / 19.2}vw`, lg: `${3 / 19.2}vw` }}
            ml={{ base: `${33 / 19.2}vw`, md: `${33 / 19.2}vw` }}
            mr={{ base: ``, md: `${14 / 19.2}vw`, lg: `${14 / 19.2}vw` }}
            size={{ base: ``, md: `sm`, '2xl': `md` }}
            borderColor={`#41A4FD`}
          />
          {`長期インターン`}
        </Flex>
      </Flex>
      <Box
        mt={{ base: ``, md: `${10 / 7.68}vw`, lg: `${22 / 19.2}vw` }}
        mb={{ base: ``, md: `${14 / 7.68}vw`, lg: `${14 / 19.2}vw` }}
        fontSize={{ base: ``, md: `${11 / 7.68}vw`, lg: `${20 / 19.2}vw` }}
        fontWeight={`bold`}
      >
        {`人気の検索方法`}
      </Box>
      <Flex flexWrap={`wrap`}>
        {list.map((list) => {
          return (
            <Box key={`list`} w={`fit-content`}>
              <Box
                whiteSpace={`nowrap`}
                p={{
                  base: `${8 / 3.75}vw ${16 / 3.75}vw`,
                  md: `${10 / 19.2}vw ${18 / 19.2}vw`,
                  lg: `${7 / 19.2}vw ${25 / 19.2}vw`,
                }}
                mr={{
                  base: `${8 / 3.75}vw`,
                  md: `${12 / 19.2}vw`,
                  lg: `${12 / 19.2}vw`,
                }}
                mb={{
                  base: `${8 / 3.75}vw`,
                  md: `${10 / 19.2}vw`,
                  lg: `${10 / 19.2}vw`,
                }}
                fontSize={{
                  base: `${13 / 3.75}vw`,
                  md: `${20 / 19.2}vw`,
                  lg: `${20 / 19.2}vw`,
                }}
                fontWeight={`bold`}
                border={{
                  base: `${2 / 3.75}vw solid #41A4FD`,
                  md: `${3 / 19.2}vw solid #41A4FD`,
                  lg: `${3 / 19.2}vw solid #41A4FD`,
                }}
                borderRadius={{
                  base: `${25 / 3.75}vw`,
                  md: `${26 / 7.68}vw`,
                  lg: `${26 / 19.2}vw`,
                }}
                onClick={buttonToggle}
                color={active ? `white` : `#41A4FD`}
                bg={active ? `#41A4FD` : `white`}
              >
                {list}
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
