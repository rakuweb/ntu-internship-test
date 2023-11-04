// import layer
import { z } from 'zod';

export const gradeList = [
  '大学1年生',
  '大学2年生',
  '大学3年生',
  '大学4年生',
  // '大学5年生',
  // '大学6年生',
  '修士1年生', // '大学院1年生',
  '修士2年生', // '大学院2年生',
  '博士1年生',
  '博士2年生',
  '博士3年生',
  '博士4年生',
  '上記以外',
];
export const genderList = ['男性', '女性'];

export const jobFormSchema = z
  .object({
    name: z
      .string({ required_error: '入力してください' })
      .min(1, '入力してください'),
    furigana: z
      .string({ required_error: '入力してください' })
      .regex(new RegExp(/^[ぁ-んー]+$/), 'ひらがなで入力してください')
      .min(1, '入力してください'),
    gender: z
      .string({ required_error: '選択してください' })
      .min(1, '選択してください'),
    birthday: z.date({
      invalid_type_error: '入力してください',
      required_error: '入力してください',
      coerce: true,
    }),
    phone: z
      .string()
      .regex(
        new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
        '電話番号を入力してください'
      )
      .min(1, '入力してください'),
    grade: z
      .string({ required_error: '選択してください' })
      .min(1, '選択してください'),
    email: z
      .string()
      .email('メールアドレスを入力してください')
      .min(1, '入力してください'),
    reason: z.string().min(1, '入力してください'),
    hopeday1: z
      .date({
        invalid_type_error: '入力してください',
        required_error: '入力してください',
        coerce: true,
      })
      .min(new Date(), '今日以降の日付を入力してください'),
    hopeday2: z
      .date({
        invalid_type_error: '入力してください',
        required_error: '入力してください',
        coerce: true,
      })
      .catch(undefined)
      .optional(),
    hopeday3: z
      .date({
        invalid_type_error: '入力してください',
        required_error: '入力してください',
        coerce: true,
      })
      .catch(undefined)
      .optional(),
  })
  .superRefine(({ hopeday1, hopeday2, hopeday3 }, ctx) => {
    const todayTime = new Date().getTime();
    if (hopeday2) {
      if (hopeday2.getTime() < todayTime) {
        ctx.addIssue({
          code: 'custom',
          message: '今日以降の日付を入力してください',
          path: ['hopeday2'],
        });
      } else if (hopeday2?.getTime() === hopeday1.getTime()) {
        ctx.addIssue({
          code: 'custom',
          message: '面接希望日1と同じです',
          path: ['hopeday2'],
        });
      }
    }
    if (hopeday3) {
      if (hopeday3.getTime() < todayTime) {
        ctx.addIssue({
          code: 'custom',
          message: '今日以降の日付を入力してください',
          path: ['hopeday3'],
        });
      } else if (
        hopeday3?.getTime() === hopeday1.getTime() ||
        hopeday3?.getTime() === hopeday2?.getTime()
      ) {
        ctx.addIssue({
          code: 'custom',
          message:
            hopeday3?.getTime() === hopeday1.getTime()
              ? '面接希望日1と同じです'
              : '面接希望日2と同じです',
          path: ['hopeday3'],
        });
      }
    }
  });

export type JobFormSchema = z.infer<typeof jobFormSchema>;
