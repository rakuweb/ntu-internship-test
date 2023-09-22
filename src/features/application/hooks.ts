import { create } from 'zustand';

import { ApplicationSlice } from './types';
import { createApplicationSlice } from './slice';

export const useApplicationStore = create<ApplicationSlice>((...a) => ({
  ...createApplicationSlice(...a),
}));
