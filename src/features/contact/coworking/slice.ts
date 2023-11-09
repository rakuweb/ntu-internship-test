import { StateCreator } from 'zustand';

import { ContactFormSlice } from './types';

export const createContactFormSlice: StateCreator<
  ContactFormSlice,
  [],
  [],
  ContactFormSlice
> = (set) => ({
  isChecked: false,
  isSending: false,

  setIsChecked: (isChecked) => set(() => ({ isChecked })),
  setIsSending: (isSending) => set(() => ({ isSending })),
});
