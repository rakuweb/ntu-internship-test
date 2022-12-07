// import layer
import * as yup from 'yup';

export const gradeList = [
  '大学1年生',
  '大学2年生',
  '大学3年生',
  '大学4年生',
  '大学5年生',
  '大学6年生',
  '大学院1年生',
  '大学院2年生',
];
export const departmentList = [
  '人文学部',
  '教育学部',
  '法学部',
  '経済学部',
  '理学部',
  '医学部医学科',
  '医学部保健学科',
  '歯学部',
  '工学部',
  '農学部',
  '創生学部',
];

export type RegisterFormSchema = {
  name: string;
  grade: string;
  department: string;
  phone: string;
  email: string;
  willStartWorking: boolean;
  isInterestedInInternship: boolean;
};

export const registerFormSchema = yup.object().shape({
  name: yup.string().required('入力されていません。').min(3, '3文字以上入力して下さい。'),
  grade: yup
    .string()
    .oneOf([...gradeList], '学年を選択してください。')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? '' : value
    ),
  department: yup
    .string()
    .oneOf([...departmentList], '学部を選択してください。')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? '' : value
    ),
  phone: yup
    .string()
    .required('入力されていません。')
    .matches(
      /^(\d{2,4}-?\d{2,4}-?\d{4}|0[789]0-[0-9]{4}-[0-9]{4})$/,
      '形式が正しくありません。'
    ),
  email: yup
    .string()
    .email('形式が正しくありません。')
    .required('入力されていません。'),
  willStartWorking: yup.bool(),
  isInterestedInInternship: yup.bool(),
});
