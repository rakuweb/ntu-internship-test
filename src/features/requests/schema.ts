import { z } from 'zod';

export const planList = [
  '①採用課金型（1名採用¥30,000円〜）',
  '②月額プラン（掲載1枠¥月25,000円）',
];

export const jobTypeList = [
  ` ①単発アルバイト`,
  `②通常アルバイト`,
  `③長期インターン`,
];
export const shiftList = [
  `①土日祝のみOK`,
  `②平日のみOK`,
  `③シフト自由・相談OK`,
  `④該当なし`,
];
export const minPeriodList = [
  `①単発（1日のみ）`,
  `②1周間以内`,
  `③1ヶ月以内`,
  `④3ヶ月以内`,
  `④3ヶ月以上（長期）`,
];
export const desiredInterviewDateList = [
  `①月`,
  `②火`,
  `③水`,
  `④木`,
  `⑤金`,
  `⑥土`,
  `⑦日`,
];
export const desiredInterviewTimeList = [
  `①10:00−11:00`,
  `②11:00−12:00`,
  `③13:00−14:00`,
  `④14:00−15:00`,
  `⑤15:00−16:00`,
  `⑥16:00−17:00`,
];

export const requestSchema = z.object({
  company_name: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  email: z
    .string({ required_error: '入力してください' })
    .email('メールアドレスを入力してください'),

  job_type: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  occupation: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  target: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  people: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  hourly_wage: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  hours_short: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  shift: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  min_period: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  min_workingday: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  holiday: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  place_short: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  interview_location: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  qualification: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  points: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  desired_interview_date: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  desired_interview_time: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  interview_remarks: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  flow: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  url: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  start_at: z.date({
    invalid_type_error: `入力してください`,
    required_error: '入力してください',
    coerce: true,
  }),
  end_at: z.date({
    invalid_type_error: `入力してください`,
    required_error: '入力してください',
    coerce: true,
  }),

  title: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  image: z
    .custom<FileList>()
    .transform((file) => file[0])
    .refine((file) => {
      if (file) {
        return true;
      }
      return false;
    }, '画像を選択してください'),
  job_description: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  atmosphere_title: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  atmosphere_image: z
    .custom<FileList>()
    .transform((file) => file[0])
    .refine((file) => {
      if (file) {
        return true;
      }
      return false;
    }, '画像を選択してください'),
  atmosphere_text: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  // atmosphere_title2: z.string({ required_error: '入力してください' }),
  // atmosphere_image2: z.custom<FileList>().transform((file) => file?.[0]),
  // atmosphere_text2: z.string({ required_error: '入力してください' }),
  // atmosphere_title3: z.string({ required_error: '入力してください' }),
  // atmosphere_image3: z.custom<FileList>().transform((file) => file?.[0]),
  // atmosphere_text3: z.string({ required_error: '入力してください' }),
});

export type RequestSchema = z.infer<typeof requestSchema>;
