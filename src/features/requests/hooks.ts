import { create } from 'zustand';

import { createRequestSlice } from './slice';
import { RequestSlice } from './types';

export const useRequestStore = create<RequestSlice>((...a) => ({
  ...createRequestSlice(...a),
}));
