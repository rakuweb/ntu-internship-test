import { Box, Flex } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import ListTitle from './ListTitle';
import SelectForm from './SelectForm';
import Message from './message';
import InputForm from './Input';
import TextareaForm from './TextareaForm';
import { kindList, jobTypeList, periodList } from 'features/contact';

const InquiryItem = ({ control, ChakraStylesDesktop, errors }) => {
  return (
    <>
      <div key="お問い合わせ項目">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle index={0} list={'お問い合わせ内容'} />
            <Flex
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
              flexWrap={'wrap'}
            >
              <SelectForm
                index={0}
                name={'item'}
                list={'お問い合わせ内容'}
                Options={kindList}
                control={control}
                ChakraStylesDesktop={ChakraStylesDesktop}
              />
              <ErrorMessage
                errors={errors}
                name="item"
                render={({ message }) => <Message message={message} />}
              />
            </Flex>
          </Flex>
        </Flex>
      </div>
      <div key="採用雇用形態">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle index={0} list={'採用雇用形態'} />
            <Flex
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
              flexWrap={'wrap'}
            >
              <SelectForm
                index={0}
                name={'employment_status'}
                list={'採用雇用形態'}
                Options={jobTypeList}
                control={control}
                ChakraStylesDesktop={ChakraStylesDesktop}
              />
              <ErrorMessage
                errors={errors}
                name="employment_status"
                render={({ message }) => <Message message={message} />}
              />
            </Flex>
          </Flex>
        </Flex>
      </div>
      <div key="採用希望時期">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle index={0} list={'採用希望時期'} />
            <Flex
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
              flexWrap={'wrap'}
            >
              <SelectForm
                index={0}
                name={'period'}
                list={'採用希望時期'}
                Options={periodList}
                control={control}
                ChakraStylesDesktop={ChakraStylesDesktop}
              />
              <ErrorMessage
                errors={errors}
                name="period"
                render={({ message }) => <Message message={message} />}
              />
            </Flex>
          </Flex>
        </Flex>
      </div>

      <div key="会社名">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle index={1} list={'会社名'} />
            <Box
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <InputForm index={1} control={control} name={'name'} />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => <Message message={message} />}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
      <div key="ご担当者名">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle index={1} list={'ご担当者名'} />
            <Box
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <InputForm index={1} control={control} name={'manager_name'} />
              <ErrorMessage
                errors={errors}
                name="manager_name"
                render={({ message }) => <Message message={message} />}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
      <div key="ご担当者電話番号">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle index={1} list={'ご担当者電話番号'} />
            <Box
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <InputForm index={1} control={control} name={'manager_phone'} />
              <ErrorMessage
                errors={errors}
                name="manager_phone"
                render={({ message }) => <Message message={message} />}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
      <div key="ご担当者メールアドレス">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle
              index={1}
              list={`ご担当者
メールアドレス`}
            />
            <Box
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <InputForm index={1} control={control} name={'email'} />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <Message message={message} />}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
      <div key="所在地">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle index={1} list={'所在地'} />
            <Box
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <InputForm index={1} control={control} name={'place'} />
              <ErrorMessage
                errors={errors}
                name="place"
                render={({ message }) => <Message message={message} />}
              />
            </Box>
          </Flex>
        </Flex>
      </div>

      <div key="掲載内容">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle index={8} list={'掲載内容'} />
            <Box
              alignItems={`center`}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <TextareaForm
                name={`listing_details`}
                index={8}
                list={'掲載内容'}
                control={control}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
      <div key="部署名">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle index={8} list={'部署名'} />
            <Box
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <InputForm index={8} control={control} name={'department'} />
            </Box>
          </Flex>
        </Flex>
      </div>
      <div key="会社HP">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle index={8} list={'会社HP'} />
            <Box
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <InputForm index={8} control={control} name={'url'} />
              <ErrorMessage
                errors={errors}
                name="url"
                render={({ message }) => <Message message={message} />}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
      <div key="備考">
        <Flex
          borderBottom={{
            base: `${2 / 3.75}vw solid rgba(65,164,253,0.25)`,
            md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
          }}
          fontSize={{
            base: `${12 / 3.75}vw`,
            md: `${13 / 7.68}vw`,
            lg: `${18 / 19.2}vw`,
          }}
          lineHeight={`1.4em`}
        >
          <Flex>
            <ListTitle index={8} list={'備考'} />
            <Box
              alignItems={`center`}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <TextareaForm
                index={8}
                list={'お問い合わせ内容'}
                name={`remarks`}
                control={control}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default InquiryItem;
