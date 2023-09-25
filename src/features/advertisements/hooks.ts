import { create } from 'zustand';

import { createAdvertisementsSlice } from './slice';
import { createAdvertisementArticleSlice } from './slice';
import { AdvertisementsSlice } from './types';

import { AdvertisementArticleSlice } from './types';

export const useAdvertisementsStore = create<AdvertisementsSlice>((...a) => ({
  ...createAdvertisementsSlice(...a),
}));

export const useAdvertisementArticleStore = create<AdvertisementArticleSlice>(
  (...a) => ({
    ...createAdvertisementArticleSlice(...a),
  })
);
