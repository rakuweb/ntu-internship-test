import { z } from 'zod';

export const levelList = [
  '3日以内に掲載',
  '1週間以内に掲載',
  '2週間以内に掲載',
  '1ヶ月以内に掲載',
];

export const List = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日'];

export const agentSchema = z.object({
  name: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  email: z
    .string({ required_error: '入力してください' })
    .email('メールアドレスを入力してください'),
  manager_phone: z
    .string({ required_error: '入力してください' })
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      '電話番号を入力してください'
    )
    .min(1, '入力してください'),
  level: z
    .string({ required_error: '入力してください' })
    .min(1, '入力してください'),
  contact_request: z
    .array(z.string({ required_error: '選択してください' }))
    .min(1, '入力してください'),
  job_link: z.string(),
  remarks: z.string().optional(),
});

export type AgentSchema = z.infer<typeof agentSchema>;
