import create from 'zustand';

import { OffersSlice } from './types';
import { createOffersSlice } from './slice';

export const useOffersStore = create<OffersSlice>((...a) => ({
  ...createOffersSlice(...a),
}));
