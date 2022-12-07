import { StateCreator } from 'zustand';

import { RegisterFormSlice } from './types';

export const createRegisterFormSlice: StateCreator<
  RegisterFormSlice,
  [],
  [],
  RegisterFormSlice
> = (set) => ({
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

  updateFormData: (data) => set(() => ({ ...data })),
  setIsChecked: (isChecked) => set(() => ({ isChecked: isChecked })),
  setIsSending: (isSending) => set(() => ({ isSending })),
  startSending: () => set(() => ({ isSending: true })),
  successSending: () => set(() => ({ isComplete: true })),
  finishSending: () => set(() => ({ isSending: false })),
});
