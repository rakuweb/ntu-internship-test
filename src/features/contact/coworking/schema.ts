import { z } from 'zod';

export const itemList = [
  'お申し込み',
  '見学希望',
  'サービス説明希望',
  'その他',
];

export const contactSchema = z.object({
  item: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  desired_visit_date: z
    .date({
      invalid_type_error: `入力してください`,
      required_error: '入力してください',
      coerce: true,
    })
    .optional(),
  company_name: z
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
  department: z.string({ required_error: '入力してください' }).optional(),
  url: z.string({ required_error: '入力してください' }).optional(),
  listing_details: z.string({ required_error: '入力してください' }).optional(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
