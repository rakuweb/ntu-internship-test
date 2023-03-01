import create from 'zustand';

import { AdvertisementsSlice } from './types';
import { createAdvertisementsSlice } from './slice';

import { AdvertisementArticleSlice } from './types';
import { createAdvertisementArticleSlice } from './slice';

export const useAdvertisementsStore = create<AdvertisementsSlice>((...a) => ({
  ...createAdvertisementsSlice(...a),
}));

export const useAdvertisementArticleStore = create<AdvertisementArticleSlice>(
  (...a) => ({
    ...createAdvertisementArticleSlice(...a),
  })
);
