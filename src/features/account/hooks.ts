import create from 'zustand';

import { AccountSlice } from './types';
import { createAccountSlice } from './slice';

export const useAccountStore = create<AccountSlice>((...a) => ({
  ...createAccountSlice(...a),
}));
