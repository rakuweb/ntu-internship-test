import create from 'zustand';
import { persist } from 'zustand/middleware';

import { createRegsiterFormSlice } from 'features/registerForm/slice';
import { RegisterFormSlice } from 'features/registerForm/types';
import { createFormProgressSlice } from 'features/formProgress/slice';
import { FormProgressSlice } from 'features/formProgress/types';

export type Slice = RegisterFormSlice &FormProgressSlice;

export const useBoundStore = create<Slice>()(
  persist(
    (...a) => ({
      ...createRegsiterFormSlice(...a),
      ...createFormProgressSlice(...a),
    }),
    { name: 'bound-store' }
  )
);

export type UseBoundState = ReturnType<typeof useBoundStore>;
