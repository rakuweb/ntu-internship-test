// import layer
import { z } from 'zod';

export const gradeList = [
  '大学1年生',
  '大学2年生',
  '大学3年生',
  '大学4年生',
  '大学5年生',
  '大学6年生',
  '修士1年生', // '大学院1年生',
  '修士2年生', // '大学院2年生',
  '博士1年生',
  '博士2年生',
  '博士3年生',
  '博士4年生',
];

export const jobFormSchema = z.object({
  name: z.string().min(1, '入力してください'),
  furigana: z.string().min(1, '入力してください'),
  gender: z.string(),
  birthDate: z.string().min(1, '入力してください'),
  phone: z.string().min(1, '入力してください'),
  grade: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  email: z
    .string()
    .email('メールアドレスを入力してください')
    .min(1, '入力してください'),
  reason: z.string().min(1, '入力してください'),
  hopeday1: z.string().min(1, '入力してください'),
  hopeday2: z.string(),
  hopeday3: z.string(),
  agreement: z.boolean(),
});

export type JobFormSchema = z.infer<typeof jobFormSchema>;

//   yup.object().shape({
//   name: yup
//     .string()
//     .required('入力されていません。')
//     .min(3, '3文字以上入力して下さい。'),
//
//   furigana: yup
//     .string()
//     .required('入力されていません。')
//     .min(3, '3文字以上入力して下さい。'),
//
//   phone: yup
//     .string()
//     .required('入力されていません。')
//     .matches(
//       /^(\d{2,4}-?\d{2,4}-?\d{4}|0[789]0-[0-9]{4}-[0-9]{4})$/,
//       '形式が正しくありません。'
//     ),
//
//   grade: yup
//     .string()
//     .oneOf([...gradeList], '学年を選択してください。')
//     .transform((value, originalValue) =>
//       String(originalValue).trim() === '' ? '' : value
//     ),
//
//   email: yup
//     .string()
//     .email('形式が正しくありません。')
//     .required('入力されていません。'),
//   reason: yup.string().required('入力されていません。'),
//   hopeday1: yup.string().required('入力されていません。'),
//   hopeday2: yup.string().required('入力されていません。'),
//   hopeday3: yup.string().required('入力されていません。'),
//   agreement: yup.bool(),
// });
