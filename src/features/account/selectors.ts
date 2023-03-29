import { AccountSlice } from './types';

export const selectAccount = (state: AccountSlice) => ({
  username: state.username,
  email: state.email,
  grade: state.grade,
  studentId: state.studentId,
  lineId: state.lineId,
});
export const selectSetAccount = (state: AccountSlice) => state.setAccount;
export const selectSignout = (state: AccountSlice) => state.signout;
export const selectSetPrevPath = (state: AccountSlice) => state.setPrevPath;
export const selectPrevPath = (state: AccountSlice) => state.prevPath;
export const selectSetLineId = (state: AccountSlice) => state.setLineId;
