import { create } from 'zustand';

import { JobFormSlice } from './types';
import { createJobFormSlice } from './slice';

export const useJobFormStore = create<JobFormSlice>((...a) => ({
  ...createJobFormSlice(...a),
}));
