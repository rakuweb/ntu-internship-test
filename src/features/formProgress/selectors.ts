import { FormProgressSlice } from './types';

export const selectBackProgress = (state: FormProgressSlice) =>
  state.backProgress;
