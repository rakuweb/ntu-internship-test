import { create } from 'zustand';

import { FormProgressSlice } from './types';
import { createFormProgressSlice } from './slice';

export const useFormProgressStore = create<FormProgressSlice>((...a) => ({
  ...createFormProgressSlice(...a),
}));
