import { create } from 'zustand';

import { createRegisterFormSlice, createRegisterGradeFormSlice } from './slice';
import { RegisterFormSlice, RegisterGradeFormSlice } from './types';

export const useRegisterFormStore = create<RegisterFormSlice>((...a) => ({
  ...createRegisterFormSlice(...a),
}));

export const useRegisterGradeFormStore = create<RegisterGradeFormSlice>(
  (...a) => ({
    ...createRegisterGradeFormSlice(...a),
  })
);
