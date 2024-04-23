import { StateCreator } from 'zustand';

import { genderList } from './schema';
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
  gender: genderList[0],
  birthDate: undefined,
  grade: '',
  phone: '',
  email: '',
  reason: '',
  where: '',
  hopeday1: undefined,
  hopeday2: undefined,
  hopeday3: undefined,

  updateFormData: (data) => set(() => ({ ...data })),
  setIsChecked: (isChecked) => set(() => ({ isChecked })),
  setIsSending: (isSending) => set(() => ({ isSending })),
  startSending: () => set(() => ({ isSending: true })),
  successSending: () => set(() => ({ isComplete: true })),
  finishSending: () => set(() => ({ isSending: false })),
});
