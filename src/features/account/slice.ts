import { StateCreator } from 'zustand';

import { AccountSlice } from './types';

export const createAccountSlice: StateCreator<
  AccountSlice,
  [],
  [],
  AccountSlice
> = (set) => ({
  username: '',
  email: '',
  prevPath: '',

  setAccount: (props) => set(() => ({ ...props })),
  signout: () => set({ username: '', email: '' }),
  setPrevPath: (props) => set(() => ({ prevPath: props })),
});
