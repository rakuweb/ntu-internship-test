import { JobCategorySlice, JobCategorysSlice } from './types';

export const selectSetJobCategoryItem = (state: JobCategorySlice) =>
  state.setJobCategoryItem;

export const selectJobCategory = (state: JobCategorySlice) => {
  const { setJobCategoryItem: _, ...remain } = state;

  return remain;
};

export const selectSetJobCategorys = (state: JobCategorysSlice) =>
  state.setJobCategorysItem;

export const selectJobCategorys = (state: JobCategorysSlice) => {
  const { setJobCategorysItem: _, ...remain } = state;

  return remain;
};
