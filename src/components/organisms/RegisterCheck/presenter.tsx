// import layer
import { FC, useState, useEffect } from 'react';
import { Button, Checkbox } from '@chakra-ui/react';

import { routes } from 'constants/routes';
import { useFormProgressStore } from 'features/formProgress/hooks';
import { selectBackProgress } from 'features/formProgress/selectors';
import { useRegisterFormStore } from 'features/registerForm/hooks';
import { InternalLink } from '~/components/links/InternalLink';
import { styles } from './styles';

// type layer
export type DataProps = { onClick: () => void };
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps & DataProps> = ({ onClick }) => {
  const {
    name,
    grade,
    department,
    email,
    phone,
    isInterestedInInternship,
    willStartWorking,
    isSending,
    isChecked,
    setIsChecked,
    toReceiveJobInfo,
    birthplace,
    corse,
  } = useRegisterFormStore();
  const backProgress = useFormProgressStore(selectBackProgress);
  const [isCheckedPrivacyPolicy, setIsCheckedPrivacyPolicy] = useState(false);
  const [isCheckedStudent, setIsCheckedStudent] = useState(false);

  useEffect(() => {
    setIsChecked(isCheckedPrivacyPolicy && isCheckedStudent);
  }, [isCheckedPrivacyPolicy, isCheckedStudent]); // eslint-disable-line

  return (
    <div css={styles}>
      <section className="form">
        <form className="form__container">
          <h1 className="h1">送信内容の確認</h1>
          <div className="form__container__item">
            <p className="form__container__item__left">名前:</p>
            <div className="form__container__item__right">{name}</div>
          </div>
          <div className="form__container__item">
            <p className="form__container__item__left">出身地:</p>
            <div className="form__container__item__right">{birthplace}</div>
          </div>

          <div className="form__container__item">
            <p className="form__container__item__left">学年:</p>
            <div className="form__container__item__right">{grade}</div>
          </div>

          <div className="form__container__item">
            <p className="form__container__item__left">学部:</p>
            <div className="form__container__item__right">{department}</div>
          </div>
          <div className="form__container__item">
            <p className="form__container__item__left">学科・プログラム等:</p>
            <div className="form__container__item__right">{corse}</div>
          </div>

          <div className="form__container__item__address">
            <p className="form__container__item__left">メールアドレス:</p>
            <div className="form__container__item__address__right">{email}</div>
          </div>

          <div className="form__container__item">
            <p className="form__container__item__left">電話番号:</p>
            <div className="form__container__item__right">{phone}</div>
          </div>

          <div className="form__container__item">
            <p className="form__container__item__left">就職予定ですか？:</p>
            <div className="form__container__item__right">
              {willStartWorking ? `はい` : `いいえ`}
            </div>
          </div>

          <div className="form__container__address">
            <p className="form__container__item__left">
              インターンシップに興味がありますか？ :
            </p>
            <div className="form__container__item__address__right">
              {isInterestedInInternship ? `はい` : `いいえ`}
            </div>
          </div>
          <div className="form__container__address">
            <p className="form__container__item__left">バイト情報を受け取る</p>
            <div className="form__container__item__address__right">
              {toReceiveJobInfo ? `はい` : `いいえ`}
            </div>
          </div>

          <div className="form__container__privacy">
            <Checkbox
              id="check"
              name="checkbox"
              className="form__container__privacy__checkbox"
              isChecked={isCheckedPrivacyPolicy}
              onChange={(e) => setIsCheckedPrivacyPolicy(e.target.checked)}
              borderColor={`gray.400`}
            />
            <label htmlFor="check" className="form__container__privacy__text">
              <InternalLink
                href={routes.terms}
                className="form__container__privacy__text__link"
                display={`inline`}
                textDecoration={`underline`}
                color={`#003968`}
              >
                利用規約
              </InternalLink>
              に同意します。 <span className="red">*</span>
            </label>
          </div>

          <div className="form__container__student">
            <Checkbox
              // type="checkbox"
              id="studentcheck"
              name="studentcheckbox"
              className="form__container__privacy__checkbox"
              isChecked={isCheckedStudent}
              onChange={(e) => setIsCheckedStudent(e.target.checked)}
              borderColor={`gray.400`}
            />
            <label
              htmlFor="studentcheck"
              className="form__container__privacy__text"
            >
              私は新潟大学生です。<span className="red">*</span>
            </label>
          </div>

          <div className="form__container__button">
            <Button
              onClick={backProgress}
              className="form__container__button__cancel"
            >
              戻る
            </Button>
            <Button
              onClick={onClick}
              className="form__container__button__submit"
              isDisabled={isSending || !isChecked}
              isLoading={isSending}
            >
              送信
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};
