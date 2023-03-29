import { create } from 'zustand';

import { CompanySlice } from './types';
import { createCompanySlice } from './slice';

export const useCompanyStore = create<CompanySlice>((...a) => ({
  ...createCompanySlice(...a),
}));
