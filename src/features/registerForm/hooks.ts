import create from 'zustand';
import { persist } from 'zustand/middleware';

import { RegisterFormSlice } from './types';
import { createRegisterFormSlice } from './slice';

export const useRegisterFormStore = create<RegisterFormSlice>((...a) => ({
  ...createRegisterFormSlice(...a),
}));
