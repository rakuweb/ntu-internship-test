import create from 'zustand';

import { RecruitManagerSlice } from './types';
import { createRecruitMangerSlice } from './slice';

export const useRecruitManagerStore = create<RecruitManagerSlice>((...a) => ({
  ...createRecruitMangerSlice(...a),
}));
