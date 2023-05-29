// import layer
import { FC, useState } from 'react';
import { Box, Checkbox, Flex } from '@chakra-ui/react';
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

  const [active, setActive] = useState<boolean[]>(
    new Array(list.length).fill(false)
  );
  const buttonToggle = (index: number) => {
    setActive((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = !newColors[index];
      return newColors;
    });
  };

  const Options = [
    { value: '飲食店', label: '飲食店' },
    { value: 'インターンバイト', label: 'インターンバイト' },
    { value: 'SNS運用', label: 'SNS運用' },
    { value: 'マーケティング', label: 'マーケティング' },
  ];

  const Options2 = [
    { value: 'アルバイト', label: 'アルバイト' },
    { value: '長期インターン', label: '長期インターン' },
  ];

  const chakraStylesDesktop: ChakraStylesConfig = {
    control: (provided, state) => ({
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
      fontSize: {
        base: `${13 / 3.75}vw`,
        md: `${10 / 7.68}vw`,
        lg: `${20 / 19.2}vw`,
      },
    }),
  };

  // モバイル
  const chakraStylesMobile: ChakraStylesConfig = {
    control: (provided, state) => ({
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

    valueContainer: (provided, state) => ({
      ...provided,
      width: `${80 / 3.75}vw`,
      pl: `${5 / 3.75}vw`,
      pr: `0`,
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
    menu: (provided, state) => ({
      ...provided,
      fontSize: `${13 / 3.75}vw`,
    }),
  };
  return (
    <Box
      w={{ base: `100%`, md: `${1346 / 19.2}vw`, lg: `${1346 / 19.2}vw` }}
      px={{
        md: `${80 / 19.2}vw`,
        lg: `${110 / 19.2}vw`,
      }}
      pt={{
        base: `${32 / 3.75}vw`,
        md: `${48 / 19.2}vw`,
        lg: `${48 / 19.2}vw`,
      }}
      pb={{
        base: `${32 / 4.28}vw`,
        md: `${38 / 19.2}vw`,
        lg: `${38 / 19.2}vw`,
      }}
      bg={{ base: `#F2F2F2`, md: `rgba(103,182,253,0.18)` }}
      borderRadius={{
        base: `${0 / 3.75}vw`,
        md: `${15 / 7.68}vw`,
        lg: `${15 / 19.2}vw`,
      }}
      fontFamily={`'Noto Sans JP', sans-serif;`}
      {...props}
    >
      <Flex px={{ base: `${26 / 4.28}vw`, md: `initial` }}>
        <Flex alignItems={`center`}>
          <Box
            fontSize={{
              base: `${14 / 3.75}vw`,
              md: `${11 / 7.68}vw`,
              lg: `${20 / 19.2}vw`,
            }}
            fontWeight={`bold`}
          >
            職種
          </Box>
          <Box
            w={{
              base: `${140 / 4.28}vw`,
              md: `${413 / 19.2}vw`,
              lg: `${413 / 19.2}vw`,
            }}
            ml={{ base: `${8 / 3.75}vw`, md: `${33 / 19.2}vw` }}
          >
            <Select
              options={Options}
              chakraStyles={chakraStylesDesktop}
              placeholder={`職種を選択する`}
            />
            <Select
              options={Options}
              chakraStyles={chakraStylesMobile}
              placeholder={`選択する`}
            />
          </Box>
        </Flex>

        {/* モバイル */}
        <Flex
          alignItems={`center`}
          display={{ base: `flex`, md: `none` }}
          ml={`${10 / 4.28}vw`}
        >
          <Box
            fontSize={{
              base: `${14 / 3.75}vw`,
              md: `${11 / 7.68}vw`,
              lg: `${20 / 19.2}vw`,
            }}
            fontWeight={`bold`}
          >
            形態
          </Box>
          <Box
            w={{
              base: `${140 / 4.28}vw`,
              md: `${413 / 19.2}vw`,
              lg: `${413 / 19.2}vw`,
            }}
            ml={{ base: `${8 / 3.75}vw`, md: `${33 / 19.2}vw` }}
          >
            <Select
              options={Options}
              chakraStyles={chakraStylesDesktop}
              placeholder={`職種を選択する`}
            />
            <Select
              options={Options2}
              chakraStyles={chakraStylesMobile}
              placeholder={`選択する`}
            />
          </Box>
        </Flex>

        {/* /////////////// */}

        {/* タブレット、デスクトップ */}
        <Flex
          display={{ base: `none`, md: `flex` }}
          ml={{ md: `${86 / 19.2}vw`, lg: `${86 / 19.2}vw` }}
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
            defaultChecked
          />
          {`アルバイト`}
          <Checkbox
            mt={{ base: ``, md: `${3 / 19.2}vw`, lg: `${3 / 19.2}vw` }}
            ml={{ base: `${33 / 19.2}vw`, md: `${33 / 19.2}vw` }}
            mr={{ base: ``, md: `${14 / 19.2}vw`, lg: `${14 / 19.2}vw` }}
            size={{ base: ``, md: `sm`, '2xl': `md` }}
            borderColor={`#41A4FD`}
            defaultChecked
          />
          {`長期インターン`}
        </Flex>
        {/* ///////////////////// */}
      </Flex>
      <Box
        ml={{ base: `${28 / 4.28}vw`, md: `initial` }}
        mt={{
          base: `${30 / 4.28}vw`,
          md: `${10 / 7.68}vw`,
          lg: `${22 / 19.2}vw`,
        }}
        mb={{
          base: `${14 / 4.28}vw`,
          md: `${14 / 7.68}vw`,
          lg: `${14 / 19.2}vw`,
        }}
        fontSize={{
          base: `${14 / 4.28}vw`,
          md: `${11 / 7.68}vw`,
          lg: `${20 / 19.2}vw`,
        }}
        fontWeight={`bold`}
      >
        {`人気の検索方法`}
      </Box>
      <Box
        w={{ base: `100%` }}
        overflow={{ base: `hidden`, lg: `initial` }}
        overflowX={{ base: `scroll`, lg: `initial` }}
      >
        <Flex
          flexWrap={`wrap`}
          mx={{ base: `${28 / 4.28}vw`, md: `initial` }}
          w={{ base: `${550 / 3.75}vw`, md: `initial` }}
        >
          {list.map((list, index) => {
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
                  onClick={() => buttonToggle(index)}
                  color={active[index] ? `white` : `#41A4FD`}
                  bg={active[index] ? `#41A4FD` : `white`}
                  transition={`all .3s`}
                  _hover={{
                    cursor: `pointer`,
                    filter: `opacity(50%)`,
                    textDecoration: 'none',
                  }}
                >
                  {list}
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};
