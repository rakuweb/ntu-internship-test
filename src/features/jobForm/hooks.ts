import { create } from 'zustand';

import { createJobFormSlice } from './slice';
import { JobFormSlice } from './types';

export const useJobFormStore = create<JobFormSlice>((...a) => ({
  ...createJobFormSlice(...a),
}));
