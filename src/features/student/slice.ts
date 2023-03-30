import { StateCreator } from 'zustand';

import { StudentSlice } from './types';

export const createStudentSlice: StateCreator<
  StudentSlice,
  [],
  [],
  StudentSlice
> = (set) => ({
  username: '',
  id: '',
  grade: '',
  gradeUpdatedAt: new Date(), // undefined,
  visitCountOfMonth: 0,
  totalVisitCount: 0,
  registeredAt: new Date(),

  setStudent: (props) => set(() => ({ ...props })),
  setStudentId: (id: string) => set(() => ({ id })),
  setVisitCounts: (props) => set(() => ({ ...props })),
});
