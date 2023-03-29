import { create } from 'zustand';

import { SignageSlice } from './types';
import { createSignageSlice } from './slice';

export const useSignageStore = create<SignageSlice>((...a) => ({
  ...createSignageSlice(...a),
}));
