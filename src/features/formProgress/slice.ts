import { StateCreator } from 'zustand';

import { FormProgressSlice } from './types';
import { Slice } from 'lib/store';

export const createFormProgressSlice: StateCreator<
  Slice,
  [],
  [],
  FormProgressSlice
> = (set) => ({
  progress: 0,
  proceedProgress: () => set((state) => ({ progress: state.progress + 1 })),
  backProgress: () => set((state) => ({ progress: state.progress - 1 })),
});
