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

  setAccount: (props) => set(() => ({ ...props })),
});
