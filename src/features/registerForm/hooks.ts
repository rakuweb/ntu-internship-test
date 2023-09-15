import { create } from 'zustand';

import { RegisterFormSlice, RegisterGradeFormSlice } from './types';
import { createRegisterFormSlice, createRegisterGradeFormSlice } from './slice';

export const useRegisterFormStore = create<RegisterFormSlice>((...a) => ({
  ...createRegisterFormSlice(...a),
}));

export const useRegisterGradeFormStore = create<RegisterGradeFormSlice>(
  (...a) => ({
    ...createRegisterGradeFormSlice(...a),
  })
);
