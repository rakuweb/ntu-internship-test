import { z } from 'zod';

export const targetList = [
  '大学1年生',
  '大学2年生',
  '大学3年生',
  '大学4年生',
  '修士1年生',
  '修士2年生',
  '博士1年生',
  '博士2年生',
  '博士3年生',
  '博士4年生',
  '博士5年生',
];
export const peopleList = [
  '1人',
  '2人',
  '3人',
  '4人',
  '5人',
  '6人',
  '7人',
  '8人',
  '9人',
  '10人',
  '11人以上',
];
export const planList = [
  '採用課金型（1名採用¥30,000円〜）',
  '月額プラン（掲載1枠¥月25,000円）',
];
export const jobTypeList = [
  `単発アルバイト`,
  `通常アルバイト`,
  `長期インターン`,
];
export const occuationList = [
  '飲食/フード',
  '接客/販売',
  'SNS運用',
  'イベント',
  '事務',
  '広報',
  '営業',
  '教育',
  'エンジニア',
  'デザイナー',
  'ディレクター',
  'ライター',
  'その他',
];
export const shiftList = [
  `土日祝のみOK`,
  `平日のみOK`,
  `シフト自由・相談OK`,
  `該当なし`,
];
export const minPeriodList = [
  `単発（1日のみ）`,
  `1週間以内`,
  `1ヶ月以内`,
  `3ヶ月以内`,
  `3ヶ月以上（長期）`,
];
export const minWorkingdayList = [
  '週1日以上',
  '週2日以上',
  '週3日以上',
  '週4日以上',
];
export const holidayList = [
  '月曜日',
  '火曜日',
  '水曜日',
  '木曜日',
  '金曜日',
  '土曜日',
  '日曜日',
  '祝祭日',
  '不定休',
  'なし',
];
export const pointList = [
  '未経験者OK',
  '服装自由',
  '髪型/髪色自由',
  'ネイルOK',
  'ピアスOK',
  '履歴書不要',
  '職場見学応募OK',
  '在宅勤務可能',
  '大学周辺',
  '該当なし',
];
export const desiredInterviewDateList = [
  `月`,
  `火`,
  `水`,
  `木`,
  `金`,
  `土`,
  `日`,
  `面接なし`,
  `その他`,
];
export const desiredInterviewTimeList = [
  `10:00−11:00`,
  `11:00−12:00`,
  `13:00−14:00`,
  `14:00−15:00`,
  `15:00−16:00`,
  `16:00−17:00`,
  `面接なし`,
];

export const requestSchema = z.object({
  company_name: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  email: z
    .string({ required_error: '入力してください' })
    .email('メールアドレスを入力してください'),

  job_type: z
    .string({ required_error: '選択してください' })
    .min(1, '選択してください'),
  occupation: z
    .string({ required_error: '選択してください' })
    .min(1, '選択してください'),
  target: z
    .array(z.string({ required_error: '選択してください' }), {
      required_error: '選択してください',
      invalid_type_error: '選択してください',
    })
    .min(1, '選択してください'),
  people: z
    .string({ required_error: '選択してください' })
    .min(1, '選択してください'),
  hourly_wage: z
    .string({ required_error: '入力してください' })
    .regex(new RegExp(/^[0-9]+$/), '半角数字を入力してください')
    .min(1, '入力してください'),
  hours_short_start: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  hours_short_end: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  shift: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  min_period: z
    .string({ required_error: '選択してください' })
    .min(1, '選択してください'),
  min_workingday: z
    .string({ required_error: '選択してください' })
    .min(1, '選択してください'),
  holiday: z
    .array(z.string({ required_error: '選択してください' }), {
      required_error: '選択してください',
      invalid_type_error: '選択してください',
    })
    .min(1, '選択してください'),
  place_short: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  interview_location: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  qualification: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください')
    .max(36, '36文字以内で入力してください'),
  points: z
    .array(z.string({ required_error: '選択してください' }), {
      required_error: '選択してください',
      invalid_type_error: '選択してください',
    })
    .min(1, '選択してください'),
  desired_interview_date: z
    .array(z.string({ required_error: '選択してください' }), {
      required_error: '選択してください',
      invalid_type_error: '選択してください',
    })
    .min(1, '選択してください'),
  desired_interview_time: z
    .array(z.string({ required_error: '選択してください' }), {
      required_error: '選択してください',
      invalid_type_error: '選択してください',
    })
    .min(1, '選択してください'),
  interview_remarks: z
    .string({ required_error: '入力してください' })
    .optional(),
  flow: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください')
    .max(54, '54文字以内で入力してください'),
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
    .min(1, '入力してください')
    .max(23, '23文字以内で入力してください'),
  image: z
    .custom<FileList>()
    .transform((file) => file[0])
    .refine((file) => {
      if (file) {
        return true;
      }
      return false;
    }, '画像を選択してください')
    .refine(
      (file) => {
        if (!file) return true;
        return file.size < 4200000;
      },
      {
        message: 'ファイルサイズは最大4MBです',
      }
    ),
  job_description: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください')
    .max(108, '108文字以内で入力してください'),
  atmosphere_title: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください')
    .max(23, '23文字以内で入力してください'),
  atmosphere_image: z
    .custom<FileList>()
    .transform((file) => file[0])
    .refine((file) => {
      if (file) {
        return true;
      }
      return false;
    }, '画像を選択してください')
    .refine(
      (file) => {
        if (!file) return true;
        return file.size < 4200000;
      },
      {
        message: 'ファイルサイズは最大4MBです',
      }
    ),
  atmosphere_text: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください')
    .max(104, '104文字以内で入力してください'),
  atmosphere_title2: z
    .string({ required_error: '入力してください' })
    .max(23, '23文字以内で入力してください'),
  atmosphere_image2: z
    .custom<FileList>()
    .transform((file) => file?.[0])
    .refine(
      (file) => {
        if (!file) return true;
        return file.size < 4200000;
      },
      {
        message: 'ファイルサイズは最大4MBです',
      }
    ),
  atmosphere_text2: z
    .string({ required_error: '入力してください' })
    .max(104, '104文字以内で入力してください'),
  atmosphere_title3: z
    .string({ required_error: '入力してください' })
    .max(23, '23文字以内で入力してください'),
  atmosphere_image3: z
    .custom<FileList>()
    .transform((file) => file?.[0])
    .refine(
      (file) => {
        if (!file) return true;
        return file.size < 4200000;
      },
      {
        message: 'ファイルサイズは最大4MBです',
      }
    ),
  atmosphere_text3: z
    .string({ required_error: '入力してください' })
    .max(104, '104文字以内で入力してください'),
});

export type RequestSchema = z.infer<typeof requestSchema>;
