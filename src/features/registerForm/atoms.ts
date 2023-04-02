import { atom } from 'recoil';

import { RegisterFormItem } from './types';

export const registerFormState = atom<RegisterFormItem>({
  key: 'registerFormState',
  default: {
    isChecked: false,
    isSending: false,
    isComplete: false,
    name: '',
    grade: '',
    department: '',
    phone: '',
    email: '',
    willStartWorking: false, 
    isInterestedInInternship: false,
    toReceiveJobInfo: false,
  },
});

