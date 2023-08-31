import { Box, Flex } from '@chakra-ui/react';
import ListTitle from './ListTitle';
import SelectForm from './SelectForm';
import { ErrorMessage } from '@hookform/error-message';
import Message from './message';
import InputForm from './Input';
import TextareaForm from './TextareaForm';

const InquiryItem = ({ Options, control, ChakraStylesDesktop, errors }) => {
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
            <ListTitle index={0} list={'お問い合わせ項目'} />
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
                list={'お問い合わせ項目'}
                Options={Options}
                control={control}
                ChakraStylesDesktop={ChakraStylesDesktop}
              />
              <ErrorMessage
                errors={errors}
                name="inquiry_item"
                render={({ message }) => <Message message={message} />}
              />
            </Flex>
          </Flex>
        </Flex>
      </div>
      <div key="お名前">
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
            <ListTitle index={1} list={'お名前'} />
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
              <InputForm index={1} control={control} name={'company'} />
              <ErrorMessage
                errors={errors}
                name="company"
                render={({ message }) => <Message message={message} />}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
      <div key="住所">
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
            <ListTitle index={1} list={'住所'} />
            <Box
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <InputForm index={1} control={control} name={'address'} />
              <ErrorMessage
                errors={errors}
                name="address"
                render={({ message }) => <Message message={message} />}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
      <div key="電話番号">
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
            <ListTitle index={1} list={'電話番号'} />
            <Box
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <InputForm index={1} control={control} name={'tel'} />
              <ErrorMessage
                errors={errors}
                name="tel"
                render={({ message }) => <Message message={message} />}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
      <div key="メールアドレス">
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
            <ListTitle index={1} list={'メールアドレス'} />
            <Box
              alignItems={`center`}
              pt={{ base: `${8 / 3.75}vw`, md: `${24 / 19.2}vw` }}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <InputForm index={1} control={control} name={'mail'} />
              <ErrorMessage
                errors={errors}
                name="mail"
                render={({ message }) => <Message message={message} />}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
      <div key="お問い合わせ内容">
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
            <ListTitle index={2} list={'お問い合わせ内容'} />
            <Box
              alignItems={`center`}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <TextareaForm
                index={2}
                list={'お問い合わせ内容'}
                control={control}
              />
              <ErrorMessage
                errors={errors}
                name="inquiry_content"
                render={({ message }) => <Message message={message} />}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default InquiryItem;
