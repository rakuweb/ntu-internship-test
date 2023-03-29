import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { StudentSlice } from './types';
import { createStudentSlice } from './slice';

export const useStudentStore = create<StudentSlice>()(
  persist(
    (...a) => ({
      ...createStudentSlice(...a),
    }),
    { name: `student` }
  )
);
