import { Box, Input } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { SelectForm } from 'components/forms/SelectForm';
import { itemList } from 'features/contact/coworking';
import InputForm from './Input';
import TextareaForm from './TextareaForm';
import Message from './message';
import { InquiryItemContainer } from './InquiryItemContainer';

const InquiryItem = ({ control, errors, register }) => {
  return (
    <>
      <div key="お問い合わせ項目">
        <InquiryItemContainer title={`お問い合わせ項目`} required>
          <SelectForm
            placeholder={`選択してください`}
            selectList={itemList}
            errorMessage={errors?.item?.message}
            registers={register('item')}
          />
        </InquiryItemContainer>
      </div>
      <div key="見学希望日">
        <InquiryItemContainer title={`見学希望日`} required>
          <Input
            type={`date`}
            {...register('desired_visit_date')}
            borderColor={`#999`}
            borderRadius={`0`}
            w={{
              base: `${190 / 3.75}vw`,
              md: `${200 / 7.68}vw`,
              lg: `${500 / 19.2}vw`,
            }}
            h={{
              base: `${25 / 3.75}vw`,
              md: `${20 / 7.68}vw`,
              lg: `${40 / 19.2}vw`,
            }}
            fontSize={{
              base: `${10 / 3.75}vw`,
              md: `${12 / 7.68}vw`,
              lg: `${19 / 19.2}vw`,
            }}
          />
          {errors?.desired_visit_date?.message && (
            <Message message={`日付を入力してください`} />
          )}
        </InquiryItemContainer>
      </div>
      <div key="会社名">
        <InquiryItemContainer title={`会社名`} required>
          <Box>
            <InputForm
              placeholder={`株式会社ラクウェブ`}
              index={1}
              control={control}
              name={'company_name'}
            />
            <ErrorMessage
              errors={errors}
              name="company_name"
              render={({ message }) => <Message message={message} />}
            />
          </Box>
        </InquiryItemContainer>
      </div>
      <div key="ご担当者名">
        <InquiryItemContainer title={`ご担当者名`} required>
          <Box>
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
        </InquiryItemContainer>
      </div>
      <div key="ご担当者電話番号">
        <InquiryItemContainer title={`ご担当者電話番号`} required>
          <Box>
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
        </InquiryItemContainer>
      </div>
      <div key="ご担当者メールアドレス">
        <InquiryItemContainer title={`ご担当者メールアドレス`} required>
          <Box>
            <InputForm
              placeholder={`xxx@forjob.jp`}
              index={1}
              control={control}
              name={'email'}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <Message message={message} />}
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
          </Box>
        </InquiryItemContainer>
      </div>
      <div key="所在地">
        <InquiryItemContainer title={`所在地`} required>
          <Box>
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
        </InquiryItemContainer>
      </div>

      <div key="部署名">
        <InquiryItemContainer title={`部署名`}>
          <Box>
            <InputForm
              placeholder={`人事部`}
              index={8}
              control={control}
              name={'department'}
            />
          </Box>
        </InquiryItemContainer>
      </div>
      <div key="会社HP">
        <InquiryItemContainer title={`会社HP`}>
          <Box>
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
        </InquiryItemContainer>
      </div>
      <div key="お問い合わせ内容">
        <InquiryItemContainer title={`お問い合わせ内容`}>
          <TextareaForm
            name={`listing_details`}
            control={control}
            placeholder={`日中、電話に出ることができないのでメールで連絡欲しいです。`}
          />
        </InquiryItemContainer>
      </div>
    </>
  );
};

export default InquiryItem;
