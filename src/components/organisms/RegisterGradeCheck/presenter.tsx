// import layer
import { FC, useState, useEffect } from 'react';
import { Button, Checkbox } from '@chakra-ui/react';

import { styles } from './styles';
import { useRegisterGradeFormStore } from 'features/registerForm/hooks';
import { useFormProgressStore } from 'features/formProgress/hooks';
import { selectBackProgress } from 'features/formProgress/selectors';
import { routes } from 'constants/routes';
import { InternalLink } from '~/components/links/InternalLink';

// type layer
export type DataProps = { onClick: () => void };
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps & DataProps> = ({ onClick }) => {
  const { grade, setIsChecked, toReceiveJobInfo, isChecked } =
    useRegisterGradeFormStore();
  const backProgress = useFormProgressStore(selectBackProgress);
  const [isCheckedPrivacyPolicy, setIsCheckedPrivacyPolicy] = useState(false);

  useEffect(() => {
    setIsChecked(isCheckedPrivacyPolicy);
  }, [isCheckedPrivacyPolicy]); // eslint-disable-line

  // useEffect(() => {
  //   const postData = async () => {
  //     const data = { grade };
  //     try {
  //       await axios.post('/api/update', data);
  //       alert('送信が完了しました。');
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   postData();
  // }, []);

  return (
    <div css={styles}>
      <section className="form">
        <form className="form__container">
          <h1 className="h1">送信内容の確認</h1>

          <div className="form__container__item">
            <p className="form__container__item__left">学年:</p>
            <div className="form__container__item__right">{grade}</div>
          </div>

          <div className="form__container__item__address">
            <p className="form__container__item__left">バイト情報を受信する:</p>
            <div className="form__container__item__address__right">
              {toReceiveJobInfo ? 'はい' : 'いいえ'}
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
              isDisabled={!isChecked}
            >
              送信
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};
