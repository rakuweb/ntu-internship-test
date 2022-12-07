import { AccountSlice } from './types';

export const selectAccount = (state: AccountSlice) => ({
  username: state.username,
  email: state.email,
});
export const selectSetAccount = (state: AccountSlice) => state.setAccount;
