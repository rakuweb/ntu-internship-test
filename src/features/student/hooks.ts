import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { createStudentSlice } from './slice';
import { StudentSlice } from './types';

export const useStudentStore = create<StudentSlice>()(
  persist(
    (...a) => ({
      ...createStudentSlice(...a),
    }),
    { name: `student` }
  )
);
