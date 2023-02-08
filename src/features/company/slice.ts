import { StateCreator } from 'zustand';

import { CompanySlice } from './types';
import { parseToCompanyItem } from './utils';

export const createCompanySlice: StateCreator<
  CompanySlice,
  [],
  [],
  CompanySlice
> = (set) => ({
  id: '',
  coverImage: undefined,
  description: '',
  name: '',
  companyName: '',
  logo: undefined,
  mission: '',
  companyId: '',

  setCompanyItem: (entity) => set(() => parseToCompanyItem(entity)),
});
