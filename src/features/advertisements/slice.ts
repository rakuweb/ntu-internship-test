import { StateCreator } from 'zustand';

import { AdvertisementsSlice } from './types';
import { parseToAdvertisements } from './utils';

export const createAdvertisementsSlice: StateCreator<
  AdvertisementsSlice,
  [],
  [],
  AdvertisementsSlice
> = (set) => ({
  list: [],

  setAdvertisements: (entities) => set(() => parseToAdvertisements(entities)),
});
