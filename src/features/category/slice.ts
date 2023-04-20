import { StateCreator } from 'zustand';

import { JobCategorySlice, JobCategorysSlice } from './types';
import { parseToJobCategoryItem, parseToJobCategorys } from './utils';

export const createJobCategorySlice: StateCreator<
  JobCategorySlice,
  [],
  [],
  JobCategorySlice
> = (set) => ({
  id: '',
  name: '',
  en_name: '',
  offers: [],
  setJobCategoryItem: (entity) => set(() => parseToJobCategoryItem(entity)),
});

export const createJobCategorysSlice: StateCreator<
  JobCategorysSlice,
  [],
  [],
  JobCategorysSlice
> = (set) => ({
  list: [],
  currentPage: 1,
  name: '',
  setJobCategorysItem: (entities) => {
    const result = parseToJobCategorys(entities);
    set(() => ({ list: result }));
  },
});
