import { create } from 'zustand';

import { createSignageSlice } from './slice';
import { SignageSlice } from './types';

export const useSignageStore = create<SignageSlice>((...a) => ({
  ...createSignageSlice(...a),
}));
