import create from 'zustand';
import { persist } from 'zustand/middleware';

import { RegisterFormSlice } from './types';
import { createRegisterFormSlice } from './slice';

export const useRegisterFormStore = create<RegisterFormSlice>()(
  persist(
    (...a) => ({
      ...createRegisterFormSlice(...a),
    }),
    { name: `register-form-store` }
  )
);
