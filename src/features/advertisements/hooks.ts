import create from 'zustand';

import { AdvertisementsSlice } from './types';
import { createAdvertisementsSlice } from './slice';

export const useAdvertisementsStore = create<AdvertisementsSlice>((...a) => ({
  ...createAdvertisementsSlice(...a),
}));
