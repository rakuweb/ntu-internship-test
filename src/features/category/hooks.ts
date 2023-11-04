import { create } from 'zustand';

import { createJobCategorySlice, createJobCategorysSlice } from './slice';
import { JobCategorySlice, JobCategorysSlice } from './types';

export const useJobCategoryStore = create<JobCategorySlice>((...a) => ({
  ...createJobCategorySlice(...a),
}));

export const useJobCategorysStore = create<JobCategorysSlice>((...a) => ({
  ...createJobCategorysSlice(...a),
}));
