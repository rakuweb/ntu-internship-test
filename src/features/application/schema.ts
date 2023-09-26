import { z } from 'zod';

export const planList = [
  '①採用課金型（1名採用¥30,000円〜）',
  '②月額プラン（掲載1枠¥月25,000円）',
];

export const applicationSchema = z.object({
  name: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  url: z
    .string({ required_error: '入力してください' })
    .url('URLを入力してください')
    .min(1, '入力してください'),
  email: z
    .string({ required_error: '入力してください' })
    .email('メールアドレスを入力してください'),
  place: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  representative: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  establishment_date: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  number_of_employees: z
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
  plan: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  remarks: z.string().optional(),
});

export type ApplicationSchema = z.infer<typeof applicationSchema>;
