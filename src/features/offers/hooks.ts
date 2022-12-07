import create from 'zustand';
import { persist } from 'zustand/middleware';

import { OffersSlice } from './types';
import { createOffersSlice } from './slice';

export const useOffersStore = create<OffersSlice>()(
  persist(
    (...a) => ({
      ...createOffersSlice(...a),
    }),
    { name: `offers-store` }
  )
);

