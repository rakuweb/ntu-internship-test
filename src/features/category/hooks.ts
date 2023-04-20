import { create } from 'zustand';

import { JobCategorySlice, JobCategorysSlice } from './types';
import { createJobCategorySlice, createJobCategorysSlice } from './slice';

export const useJobCategoryStore = create<JobCategorySlice>((...a) => ({
  ...createJobCategorySlice(...a),
}));

export const useJobCategorysStore = create<JobCategorysSlice>((...a) => ({
  ...createJobCategorysSlice(...a),
}));
