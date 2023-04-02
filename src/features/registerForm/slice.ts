import { StateCreator } from 'zustand';

import { RegisterFormSlice, RegisterGradeFormSlice } from './types';

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
  toReceiveJobInfo: true,

  updateFormData: (data) => set(() => ({ ...data })),
  setIsChecked: (isChecked) => set(() => ({ isChecked: isChecked })),
  setIsSending: (isSending) => set(() => ({ isSending })),
  setEmail: (email) => set(() => ({ email })),
  startSending: () => set(() => ({ isSending: true })),
  successSending: () => set(() => ({ isComplete: true })),
  finishSending: () => set(() => ({ isSending: false })),
});

export const createRegisterGradeFormSlice: StateCreator<
  RegisterGradeFormSlice,
  [],
  [],
  RegisterGradeFormSlice
> = (set) => ({
  isChecked: false,
  isSending: false,
  isComplete: false,
  grade: '',
  toReceiveJobInfo: true,

  updateFormData: (data) => set(() => ({ ...data })),
  setIsChecked: (isChecked) => set(() => ({ isChecked: isChecked })),
  setIsSending: (isSending) => set(() => ({ isSending })),
  startSending: () => set(() => ({ isSending: true })),
  successSending: () => set(() => ({ isComplete: true })),
  finishSending: () => set(() => ({ isSending: false })),
});
