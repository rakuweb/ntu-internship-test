import { StateCreator } from 'zustand';

import { FormProgressSlice } from './types';

export const createFormProgressSlice: StateCreator<
  FormProgressSlice,
  [],
  [],
  FormProgressSlice
> = (set) => ({
  progress: 0,
  proceedProgress: () => set((state) => ({ progress: state.progress + 1 })),
  backProgress: () => set((state) => ({ progress: state.progress - 1 })),
});
