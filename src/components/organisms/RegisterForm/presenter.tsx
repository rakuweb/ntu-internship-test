// import layer
import { FC, useEffect, useState } from 'react';
import { Input, Select, Button, Box, Switch, Flex } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { useLiff } from 'contexts/LineAuthContext';
import { useRegisterFormStore } from 'features/registerForm/hooks';
import { selectSetEmail } from 'features/registerForm/selectors';
import { InternalLink } from '~/components/molecules/links/InternalLink';
import { routes } from '~/constants/routes';
import {
  birthplaceList,
  courseList,
  RegisterFormSchema,
} from '~/features/registerForm/schema';
import { gradeList, departmentList } from '~/features/registerForm/schema';
import { styles } from './styles';

// type layer
export type DataProps = { onClick: () => void };
export type StyleProps = Record<string, unknown>;
export type PresenterProps = DataProps & StyleProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ onClick }) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<RegisterFormSchema>();
  const { liff } = useLiff();
  const setEmail = useRegisterFormStore(selectSetEmail);
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);
  const { department } = watch();

  useEffect(() => {
    if (liff?.isLoggedIn()) {
      const profile = liff.getDecodedIDToken();
      if (profile?.email) {
        setEmail(profile.email);
        setValue('email', profile?.email);
        setInputDisabled(true);
      }
    }
  }, [liff?.isLoggedIn, liff]); // eslint-disable-line

  // setValue('toReceiveJobInfo', true);
  // setValue('isInterestedInInternship', true);

  return (
    <div css={styles}>
      <section className="form">
        <form className="form__container" onSubmit={onClick}>
          <h1 className="h1">学生会員登録フォーム</h1>
          <div className="form__container__item">
            <p className="form__container__item__left">
              名前<span className="red"> * </span>
            </p>
            <div className="form__container__item__right">
              <Input
                type="text"
                id={`name`}
                h={{ base: `40px` }}
                border={`solid 1px #251714`}
                placeholder=""
                {...register('name')}
              />
              {errors?.name?.message && (
                <Box
                  mt={{ base: `0.25rem` }}
                  fontSize={{ base: `0.75rem` }}
                  color={`red`}
                >
                  {errors.name.message}
                </Box>
              )}
            </div>
          </div>

          <div className="form__container__item">
            <p className="form__container__item__left">
              出身地<span className="red"> * </span>
            </p>
            <div className="form__container__item__right">
              <Select placeholder="--" {...register('birthplace')}>
                {birthplaceList.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </Select>
              {errors?.birthplace?.message && (
                <Box
                  mt={{ base: `0.25rem` }}
                  fontSize={{ base: `0.75rem` }}
                  color={`red`}
                >
                  {errors.birthplace.message}
                </Box>
              )}
            </div>
          </div>

          <div className="form__container__item">
            <p className="form__container__item__left">
              学年<span className="red"> * </span>
            </p>
            <div className="form__container__item__right">
              <Select placeholder="--" {...register('grade')}>
                {gradeList.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </Select>
              {errors?.grade?.message && (
                <Box
                  mt={{ base: `0.25rem` }}
                  fontSize={{ base: `0.75rem` }}
                  color={`red`}
                >
                  {errors.grade.message}
                </Box>
              )}
            </div>
          </div>

          <div className="form__container__item">
            <p className="form__container__item__left">
              学部<span className="red"> * </span>
            </p>
            <div className="form__container__item__right">
              <Select placeholder="--" {...register('department')}>
                {departmentList.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </Select>
              {errors?.department?.message && (
                <Box
                  mt={{ base: `0.25rem` }}
                  fontSize={{ base: `0.75rem` }}
                  color={`red`}
                >
                  {errors.department.message}
                </Box>
              )}
            </div>
          </div>
          {department && (
            <div className="form__container__item">
              <p className="form__container__item__left">
                学科・プログラム等<span className="red"> * </span>
              </p>
              <div className="form__container__item__right">
                <Select placeholder="--" {...register('corse')}>
                  {courseList
                    .filter(
                      (departments) => departments.department == department
                    )[0]
                    .corses.map((corse) => (
                      <option key={corse} value={corse}>
                        {corse}
                      </option>
                    ))}
                </Select>
                {errors?.corse?.message && (
                  <Box
                    mt={{ base: `0.25rem` }}
                    fontSize={{ base: `0.75rem` }}
                    color={`red`}
                  >
                    {errors.corse.message}
                  </Box>
                )}
              </div>
            </div>
          )}

          <div className="form__container__item">
            <p className="form__container__item__left">
              メールアドレス<span className="red"> * </span>
            </p>
            <div className="form__container__item__right">
              <Input
                type="text"
                h={{ base: `40px` }}
                border={`solid 1px #251714`}
                placeholder=""
                disabled={inputDisabled}
                {...register('email', { required: true })}
              />
              {errors?.email?.message && (
                <Box
                  mt={{ base: `0.25rem` }}
                  fontSize={{ base: `0.75rem` }}
                  color={`red`}
                >
                  {errors.email.message}
                </Box>
              )}
            </div>
          </div>

          <div className="form__container__item">
            <p className="form__container__item__left">
              電話番号<span className="red"> * </span>
            </p>
            <div className="form__container__item__right">
              <Input
                type="text"
                h={{ base: `40px` }}
                border={`solid 1px #251714`}
                placeholder=""
                {...register('phone')}
              />
              {errors?.phone?.message && (
                <Box
                  mt={{ base: `0.25rem` }}
                  fontSize={{ base: `0.75rem` }}
                  color={`red`}
                >
                  {errors.phone.message}
                </Box>
              )}
            </div>
          </div>

          <div className="form__container__item">
            <Flex align={`center`} className="form__container__item__left">
              就職予定ですか？
              <Switch ml={`0.5rem`} {...register('willStartWorking')} />
            </Flex>
          </div>

          <div className="form__container__item">
            <Flex align={`center`} className="form__container__item__left">
              インターンシップに興味がありますか？
              <Switch ml={`0.5rem`} {...register('isInterestedInInternship')} />
            </Flex>
          </div>

          <div className="form__container__item">
            <Flex align={`center`} className="form__container__item__left">
              バイト情報を受け取る<span className="red"> * </span>
              <Switch ml={`0.5rem`} {...register('toReceiveJobInfo')} />
            </Flex>
          </div>

          <div className="form__container__button">
            <InternalLink
              href={routes.home}
              className="form__container__button__cancel"
              w={{ base: `45vw` }}
              h={{ base: `40px` }}
            >
              TOPへ戻る
            </InternalLink>
            <Button
              type={`submit`}
              className="form__container__button__submit"
              w={{ base: `45vw` }}
            >
              入力内容を確認する
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};
