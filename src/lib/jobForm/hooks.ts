import create from 'zustand';
import { persist } from 'zustand/middleware';

import { JobFormSlice } from './types';
import { createJobFormSlice } from './slice';

export const useJobFormStore = create<JobFormSlice>((...a) => ({
  ...createJobFormSlice(...a),
}));
