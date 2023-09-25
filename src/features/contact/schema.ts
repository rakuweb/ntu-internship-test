import { z } from 'zod';

export const kindList = [
  { value: '掲載について', label: '掲載について' },
  { value: '料金プランについて', label: '料金プランについて' },
  { value: 'その他', label: 'その他' },
];

export const jobTypeList = [
  { value: '単発アルバイト', label: '単発アルバイト' },
  { value: 'アルバイト', label: 'アルバイト' },
  { value: '長期インターン', label: '長期インターン' },
];

export const periodList = [
  { value: '1ヶ月以内の採用', label: '1ヶ月以内の採用' },
  { value: '3ヶ月以内の採用', label: '3ヶ月以内の採用' },
  { value: '3ヶ月以上先の採用', label: '3ヶ月以上先の採用' },
];

export const contactSchema = z.object({
  item: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  employment_status: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  period: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  name: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  manager_name: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  manager_phone: z
    .string({ required_error: '入力してください' })
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      '電話番号を入力してください'
    )
    .min(1, '入力してください'),
  email: z
    .string({ required_error: '入力してください' })
    .email('メールアドレスを入力してください'),
  place: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  url: z
    .string({ required_error: '入力してください' })
    .optional(),
  department: z.string({ required_error: '入力してください' }).optional(),
  listing_details: z.string({ required_error: '入力してください' }).optional(),
  remarks: z.string({ required_error: '入力してください' }).optional(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
