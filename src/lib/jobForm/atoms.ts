import { atom } from 'recoil';

import { JobFormItem } from './types';

export const registerFormState = atom<JobFormItem>({
  key: 'jobFormState',
  default: {
    isChecked: false,
    isSending: false,
    isComplete: false,
    name: '',
    furigana: '',
    birthDate: '',
    grade: '',
    phone: '',
    email: '',
    reason: '',
    hopeday1: '',
    hopeday2: '',
    hopeday3: '',
    agreement: false,
  },
});
