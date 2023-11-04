import { CompanySlice } from './types';

export const selectSetCompanyItem = (state: CompanySlice) =>
  state.setCompanyItem;
export const selectCompany = (state: CompanySlice) => {
  const { setCompanyItem: _, ...remain } = state;

  return remain;
};
