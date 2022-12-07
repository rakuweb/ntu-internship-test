import { StateCreator } from 'zustand';

import { OffersSlice } from './types';
import { parseToOffers } from './utils';

export const createOffersSlice: StateCreator<
  OffersSlice,
  [],
  [],
  OffersSlice
> = (set) => ({
  list: [],
  currentPage: 1,

  setOffers: (entities) => {
    const result = parseToOffers(entities);
    set(() => ({ list: result }));
  },
});
