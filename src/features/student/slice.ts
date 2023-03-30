import { StateCreator } from 'zustand';

import { StudentSlice } from './types';

export const createStudentSlice: StateCreator<
  StudentSlice,
  [],
  [],
  StudentSlice
> = (set) => ({
  username: '熊澤隼斗',
  id: '111111',
  grade: '大学1年生',
  gradeUpdatedAt: new Date(), // undefined,
  visitCountOfMonth: 0,
  totalVisitCount: 0,

  setStudent: (props) => set(() => ({ ...props })),
  setStudentId: (id: string) => set(() => ({ id })),
  setVisitCounts: (props) => set(() => ({ ...props })),
});
