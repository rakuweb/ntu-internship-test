// import layer
import { FC, useEffect, useState } from 'react';
import { Input, Select, Button, Box, Switch, Flex } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { styles } from './styles';
import { routes } from '~/constants/routes';
import { InternalLink } from '~/components/molecules/links/InternalLink';
import {
  useRegisterGradeFormStore,
  parseGrade,
  gradeList,
  RegisterGradeFormSchema,
} from 'features/registerForm';
import { useStudentStore, selectStudent } from 'features/student';

// type layer
export type DataProps = { onClick: () => void };
export type StyleProps = Record<string, unknown>;
export type PresenterProps = DataProps & StyleProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ onClick, ...props }) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<RegisterGradeFormSchema>();
  const { grade } = useStudentStore(selectStudent);
  const { toReceiveJobInfo } = watch();

  // setValue('toReceiveJobInfo', true)

  return (
    <div css={styles}>
      <section className="form">
        <form className="form__container" onSubmit={onClick}>
          <h1 className="h1">学年変更フォーム</h1>

          {/* 学年 */}
          <div className="form__container__item">
            <p className="form__container__item__left">
              新年度の学年<span className="red"> * </span>
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

          <div className="form__container__item__grade">
            <p className="form__container__item__left__grade">現在の学年:</p>
            <div className="form__container__item__right__grade">
              {parseGrade(grade)}
            </div>
          </div>

          {/* バイト情報が必要か確認 */}
          <div className="form__container__item">
            <p className="form__container__item__left">
              バイト情報を送信する<span className="red"> * </span>
            </p>
            <div className="form__container__item__right">
              <Flex align="center">
                <Switch
                  // id="send-job-info"
                  colorScheme="green"
                  size="lg"
                  // checked={sendJobInfo}
                  {...register('toReceiveJobInfo')}
                // onChange={(e) => setSendJobInfo(e.target.checked)}
                />
                <label
                  htmlFor="send-job-info"
                  className="form__container__item__right__label"
                >
                  {toReceiveJobInfo ? 'はい' : 'いいえ'}
                </label>
              </Flex>
            </div>
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
