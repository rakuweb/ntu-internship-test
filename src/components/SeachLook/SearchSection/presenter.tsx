// import layer
import { FC, useState } from 'react';
import { Box, Checkbox, Flex, BoxProps } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { selectOfferList, useOffersStore } from '~/features/offers';
import chakraStylesDesktop from './chakraStylesDesktop';
import chakraStylesMobile from './chakraStylesMobile';
import MyButton from './MyButton';
// type layer
export type DataProps = {
  occupationOptions: { value: string; label: string }[];
  onOccupationSelect: (occupation: string) => void;
  onEmploymentTypeSelect: (employmentTypes: string[]) => void;
};
export type StyleProps = BoxProps;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offers = useOffersStore(selectOfferList);
  const [clickedName, setClickedName] = useState<string | null>(null);

  const buttonToggle = (key: string, name: string) => {
    setActive((prevActive) => ({
      ...prevActive,
      [key]: !prevActive[key],
    }));
    setClickedName((prevClickedName) => {
      // 同じものがクリックされたら空白に
      if (prevClickedName === name) {
        return null;
      }
      return name;
    });
  };

  const Options2 = [
    {
      value: '長期インターン',
      label: '長期インターン',
      jobTypes: ['長期インターン'],
    },
    {
      value: 'アルバイト',
      label: 'アルバイト',
      jobTypes: ['アルバイト', '単発バイト'],
    },
  ];

  const occupationNames = offers.map((offer) => offer.occupation.name);
  const uniqueOccupationNames = [...new Set(occupationNames)];
  const occupationOptions = uniqueOccupationNames.map((name) => ({
    value: name,
    label: name,
  }));
  const [active, setActive] = useState<boolean[]>(
    new Array(occupationOptions.length).fill(false)
  );

  const jobTypeNames = offers.map((offer) => offer.job_type.name);
  const uniquejobTypeNames = [...new Set(jobTypeNames)];
  const jobTypeOptions = uniquejobTypeNames
    .filter((name) => name === '長期インターン' || name === 'アルバイト')
    .map((name) => ({
      value: name,
      label: name,
    }));
  const [employmentType, setEmploymentType] = useState('');

  const handleEmploymentTypeChange = (newType) => {
    if (employmentType === newType) {
      setEmploymentType('');
      props.onEmploymentTypeSelect([]);
    } else {
      setEmploymentType(newType);
      const selectedOption = Options2.find(
        (option) => option.value === newType
      );
      if (selectedOption) {
        props.onEmploymentTypeSelect(selectedOption.jobTypes);
      }
    }
  };

  const periodNames = offers.map((offer) => offer.min_period.period);
  const uniquePeriodNames = [...new Set(periodNames)];
  const minWorkingDayNames = offers.map((offer) => offer.min_workingday.days);
  const uniqueMinWorkingDayNames = [...new Set(minWorkingDayNames)];

  console.log(clickedName);

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
              options={occupationOptions}
              chakraStyles={chakraStylesDesktop}
              placeholder={`職種を選択する`}
              onChange={(option: { value: string }) =>
                props.onOccupationSelect(option.value)
              }
            />

            <Select
              options={occupationOptions}
              chakraStyles={chakraStylesMobile}
              placeholder={`選択する`}
              onChange={(option: { value: string }) =>
                props.onOccupationSelect(option.value)
              }
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
              options={Options2}
              chakraStyles={chakraStylesMobile}
              placeholder={`選択する`}
              onChange={(option: { value: string }) =>
                handleEmploymentTypeChange(option.value)
              }
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

          {jobTypeOptions.map((option) => (
            <Checkbox
              key={option.label}
              mt={{ base: ``, md: `${3 / 19.2}vw`, lg: `${3 / 19.2}vw` }}
              ml={{ base: `${33 / 19.2}vw`, md: `${33 / 19.2}vw` }}
              mr={{ base: ``, md: `${14 / 19.2}vw`, lg: `${14 / 19.2}vw` }}
              size={{ base: ``, md: `sm`, '2xl': `md` }}
              borderColor={`#41A4FD`}
              isChecked={employmentType === option.value}
              onChange={() => handleEmploymentTypeChange(option.value)}
            >
              {option.label}
            </Checkbox>
          ))}
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
          {uniquePeriodNames.map((period, index) => {
            const key = `period-${index}`;
            return (
              <MyButton
                key={index}
                active={!!active[key]}
                index={index}
                label={period}
                onClick={() => buttonToggle(key, period)}
              />
            );
          })}
          {uniqueMinWorkingDayNames.map((day, index) => {
            const key = `day-${index}`;
            return (
              <MyButton
                key={index}
                active={!!active[key]}
                index={index}
                label={day}
                onClick={() => buttonToggle(key, day)}
              />
            );
          })}
          {offers.map((offer, offerIndex) =>
            offer.points.map((point, pointIndex) => {
              const key = `offer-${offerIndex}-point-${pointIndex}`;
              return (
                <MyButton
                  key={pointIndex}
                  active={!!active[key]}
                  index={pointIndex}
                  label={point.name}
                  onClick={() => buttonToggle(key, point.name)}
                />
              );
            })
          )}
        </Flex>
      </Box>
    </Box>
  );
};
