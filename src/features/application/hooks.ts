import { create } from 'zustand';

import { createApplicationSlice } from './slice';
import { ApplicationSlice } from './types';

export const useApplicationStore = create<ApplicationSlice>((...a) => ({
  ...createApplicationSlice(...a),
}));
