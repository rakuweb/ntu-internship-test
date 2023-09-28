import { z } from 'zod';

export const employeeNumberList = [
  `1~49人`,
  `50~149人`,
  `150~249人`,
  `250~499人`,
  `500~749人`,
  `750~999人`,
  `1000人以上`,
];
export const planList = [
  '採用課金型（1名採用¥30,000円〜）',
  '月額プラン（掲載1枠¥月25,000円）',
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
  establishment_date: z.date({
    invalid_type_error: `入力してください`,
    required_error: '入力してください',
    coerce: true,
  }),
  number_of_employees: z
    .string({ required_error: '選択してください' })
    .min(1, '選択してください'),
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
    .string({ required_error: '選択してください' })
    .min(1, '選択してください'),
  remarks: z.string().optional(),
});

export type ApplicationSchema = z.infer<typeof applicationSchema>;
