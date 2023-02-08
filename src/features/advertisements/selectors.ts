import { AdvertisementsSlice } from './types';

export const selectSetAdvertisements = (state: AdvertisementsSlice) =>
  state.setAdvertisements;
export const selectAdvertisements = (state: AdvertisementsSlice) => state.list;
