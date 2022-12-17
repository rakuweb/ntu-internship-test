import { RecruitManagerSlice } from './types';

export const selectSetRecruitManager = (state: RecruitManagerSlice) =>
  state.setRecruitManager;
export const selectRecruitManager = (state: RecruitManagerSlice) => {
  const { setRecruitManager, ...remain } = state;

  return remain;
};
