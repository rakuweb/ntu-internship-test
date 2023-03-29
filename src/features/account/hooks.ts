import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { AccountSlice } from './types';
import { createAccountSlice } from './slice';

export const useAccountStore = create<AccountSlice>()(
  persist(
    (...a) => ({
      ...createAccountSlice(...a),
    }),
    { name: `account` }
  )
);
