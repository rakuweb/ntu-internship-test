import { StateCreator } from 'zustand';

import { RecruitManagerSlice } from './types';
import { parseToRecruitManager } from './utils';

export const createRecruitMangerSlice: StateCreator<
  RecruitManagerSlice,
  [],
  [],
  RecruitManagerSlice
> = (set) => ({
  id: '',
  image: undefined,
  introduction: '',
  name: '',
  companyName: '',

  setRecruitManager: (entity) => set(() => parseToRecruitManager(entity)),
});
