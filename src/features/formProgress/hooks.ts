import { create } from 'zustand';

import { createFormProgressSlice } from './slice';
import { FormProgressSlice } from './types';

export const useFormProgressStore = create<FormProgressSlice>((...a) => ({
  ...createFormProgressSlice(...a),
}));
