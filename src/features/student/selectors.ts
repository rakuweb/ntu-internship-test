import { StudentSlice } from './types';

export const selectStudent = (state: StudentSlice) => ({
  username: state.username,
  grade: state.grade,
  id: state.id,
  gradeUpdatedAt: state.gradeUpdatedAt,
  visitCountOfMonth: state.visitCountOfMonth,
  totalVisitCount: state.totalVisitCount,
});
export const selectStudentId = (state: StudentSlice) => state.id;

export const selectSetStudent = (state: StudentSlice) => state.setStudent;
export const selectSetStudentId = (state: StudentSlice) => state.setStudentId;
export const selectSetVisitCounts = (state: StudentSlice) =>
  state.setVisitCounts;
