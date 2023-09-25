import { StateCreator } from 'zustand';

import { ApplicationSlice } from './types';

export const createApplicationSlice: StateCreator<
  ApplicationSlice,
  [],
  [],
  ApplicationSlice
> = (set) => ({
  isSending: false,
  isChecking: false,

  setIsSending: (next) => set(() => ({ isSending: next })),
  setIsChecking: (next) => set(() => ({ isChecking: next })),
});
