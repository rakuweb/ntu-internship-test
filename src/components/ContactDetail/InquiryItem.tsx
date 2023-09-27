import { Box, Flex } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { SelectForm } from 'components/forms/SelectForm';
import { kindList, jobTypeList, periodList } from 'features/contact';
import InputForm from './Input';
import ListTitle from './ListTitle';
import TextareaForm from './TextareaForm';
import Message from './message';

const InquiryItem = ({ control, errors, register }) => {
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
                placeholder={`選択してください`}
                selectList={kindList}
                errorMessage={errors?.item?.message}
                registers={register('item')}
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
                placeholder={`選択してください`}
                selectList={jobTypeList}
                errorMessage={errors?.employment_status?.message}
                registers={register('employment_status')}
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
                // index={0}
                // name={'period'}
                // list={'採用希望時期'}
                // Options={periodList}
                // control={control}
                // ChakraStylesDesktop={ChakraStylesDesktop}
                placeholder={`選択してください`}
                selectList={periodList}
                errorMessage={errors?.period?.message}
                registers={register('period')}
              />
              {/*
              <ErrorMessage
                errors={errors}
                name="period"
                render={({ message }) => <Message message={message} />}
              />
              */}
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
              <InputForm
                placeholder={`株式会社ラクウェブ`}
                index={1}
                control={control}
                name={'name'}
              />
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
              <InputForm
                placeholder={`新潟太郎`}
                index={1}
                control={control}
                name={'manager_name'}
              />
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
              <InputForm
                placeholder={`0012345678`}
                index={1}
                control={control}
                name={'manager_phone'}
              />
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
              <InputForm
                placeholder={`xxx@forjob.jp`}
                index={1}
                control={control}
                name={'email'}
              />
              <Box
                w={{
                  base: `${190 / 3.75}vw`,
                  md: `${200 / 7.68}vw`,
                  lg: `${500 / 19.2}vw`,
                }}
                fontSize={{ lg: `${13 / 19.2}vw` }}
                lineHeight={`1.5`}
                whiteSpace={{ base: `pre-wrap` }}
              >
                {`✓メールアドレス入力間違いにご注意ください。 
携帯の場合、ドメイン指定受信をしているとお問い合わせの返答が届きませんのでご注意下さい。`}
              </Box>
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
              <InputForm
                placeholder={`新潟県新潟市中央区天神1-1PLAKA3 2F`}
                index={1}
                control={control}
                name={'place'}
              />
              <ErrorMessage
                errors={errors}
                name="place"
                render={({ message }) => <Message message={message} />}
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
              <InputForm
                placeholder={`人事部`}
                index={8}
                control={control}
                name={'department'}
              />
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
              <InputForm
                placeholder={`https://forjob.nottheuniversity.com/`}
                index={8}
                control={control}
                name={'url'}
              />
              <ErrorMessage
                errors={errors}
                name="url"
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
            <ListTitle index={8} list={'お問い合わせ内容'} />
            <Box
              alignItems={`center`}
              pb={{ base: `${11 / 3.75}vw`, md: `${27 / 19.2}vw` }}
              pr={{ base: `${0 / 3.75}vw`, md: `${40 / 19.2}vw` }}
              ml={{ base: `${19 / 3.75}vw`, md: `${70 / 19.2}vw` }}
            >
              <TextareaForm
                name={`listing_details`}
                control={control}
                placeholder={`日中、電話に出ることができないのでメールで連絡欲しいです。`}
              />
            </Box>
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default InquiryItem;
