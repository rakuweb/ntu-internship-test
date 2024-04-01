// import layer
import * as yup from 'yup';

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
  '卒業生',
];
export const departmentList = [
  '人文学部',
  '教育学部',
  '法学部',
  '経済科学部',
  '理学部',
  '医学部医学科',
  '医学部保健学科',
  '歯学部',
  '工学部',
  '農学部',
  '創生学部',
  '養護教諭特別別科',
];

export const courseList = [
  {
    department: '人文学部',
    corses: [
      '心理・人間学プログラム',
      '社会文化学プログラム',
      '言語文化学プログラム',
    ],
  },
  {
    department: '教育学部',
    corses: ['学校教員養成プログラム'],
  },
  {
    department: '法学部',
    corses: ['法学プログラム', '法曹養成プログラム'],
  },
  {
    department: '経済科学部',
    corses: [
      '経済学プログラム',
      '経営学プログラム',
      '学際日本学プログラム',
      '地域リーダープログラム',
    ],
  },
  {
    department: '理学部',
    corses: [
      '数学プログラム',
      '物理学プログラム',
      '化学プログラム',
      '生物学プログラム',
      '地質科学プログラム',
      '自然環境科学プログラム',
      'フィールド科学人材育成プログラム',
    ],
  },
  {
    department: '医学部医学科',
    corses: ['医学教育プログラム'],
  },
  {
    department: '医学部保健学科',
    corses: [
      '看護学プログラム',
      '放射線技術科学プログラム',
      '検査技術科学プログラム',
    ],
  },
  {
    department: '歯学部',
    corses: ['歯学科', '口腔生命福祉学科'],
  },
  {
    department: '工学部',
    corses: [
      '機械システム工学プログラム',
      '社会基盤工学プログラム',
      '電子情報通信プログラム',
      '知能情報システムプログラム',
      '化学システム工学プログラム',
      '材料科学プログラム',
      '建築学プログラム',
      '人間支援感性科学プログラム',
      '協創経営プログラム',
    ],
  },
  {
    department: '農学部',
    corses: [
      '応用生命科学プログラム',
      '食品科学プログラム',
      '生物資源科学プログラム',
      '流域環境学プログラム',
      'フィールド科学人材育成プログラム',
    ],
  },
  {
    department: '創生学部',
    corses: ['創生学修課程'],
  },
  {
    department: '養護教諭特別別科',
    corses: ['なし'],
  },
];

export const birthplaceList = ['新潟県内', '新潟県外', '海外'];

export type RegisterFormSchema = {
  name: string;
  grade: string;
  department: string;
  phone: string;
  email: string;
  willStartWorking: boolean;
  isInterestedInInternship: boolean;
  toReceiveJobInfo: boolean;
  birthplace: string;
  corse: string;
};

export const registerFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('入力されていません。')
    .min(3, '3文字以上入力して下さい。'),
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
  reception: yup.bool(),
  graduation: yup.bool(),
  toReceiveJobInfo: yup.bool(),
  birthplace: yup
    .string()
    .oneOf([...birthplaceList], '選択してください。')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? '' : value
    ),
  corse: yup
    .string()
    .oneOf([...courseList.flatMap((item) => item.corses)], '選択してください。')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? '' : value
    ),
});

export type RegisterGradeFormSchema = {
  grade: string;
  corse: string;
  birthplace: string;
  toReceiveJobInfo: boolean;
};

export const registerGradeFormSchema = yup.object().shape({
  grade: yup
    .string()
    .oneOf([...gradeList], '学年を選択してください。')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? '' : value
    ),
  birthplace: yup
    .string()
    .oneOf([...birthplaceList], '選択してください。')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? '' : value
    ),
  corse: yup
    .string()
    .oneOf([...courseList.flatMap((item) => item.corses)], '選択してください。')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? '' : value
    ),
  toReceiveJobInfo: yup.bool(),
});
