import { StateCreator } from 'zustand';

import { RecruitManagerSlice } from './types';

export const createRecruitMangerSlice: StateCreator<
  RecruitManagerSlice,
  [],
  [],
  RecruitManagerSlice
> = (set) => ({
  id: '',
  image: undefined,
  introduction: '',
});
