import create from 'zustand';
import { persist } from 'zustand/middleware';

import { FormProgressSlice } from './types';
import { createFormProgressSlice } from './slice';

export const useFormProgressStore = create<FormProgressSlice>((...a) => ({
  ...createFormProgressSlice(...a),
}));
