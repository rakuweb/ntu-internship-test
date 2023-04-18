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
  image: undefined,
  description: '',
  name: '',
  companyName: '',
  logo: undefined,
  mission: '',
  companyId: '',
  establishmentDate: null,
  industryCategories: [],
  address: '',
  mapUrl: '',
  founding: '',
  jobtype: '',
  employment: '',
  scale: '',
  outline: '',
  atmosphere: '',
  tostudents: '',
  createdByid: undefined,

  setCompanyItem: (entity) => set(() => parseToCompanyItem(entity)),
});
