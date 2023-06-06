import { StateCreator } from 'zustand';

import { JobFormSlice } from './types';

export const createJobFormSlice: StateCreator<
  JobFormSlice,
  [],
  [],
  JobFormSlice
> = (set) => ({
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

  updateFormData: (data) => set(() => ({ ...data })),
  setIsChecked: (isChecked) => set(() => ({ isChecked: isChecked })),
  setIsSending: (isSending) => set(() => ({ isSending })),
  startSending: () => set(() => ({ isSending: true })),
  successSending: () => set(() => ({ isComplete: true })),
  finishSending: () => set(() => ({ isSending: false })),
});
