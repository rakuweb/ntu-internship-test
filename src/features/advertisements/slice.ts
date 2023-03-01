import { StateCreator } from 'zustand';

import { AdvertisementsSlice, AdvertisementArticleSlice } from './types';
import { parseToAdvertisements, parseToAdvertisementArticle } from './utils';

export const createAdvertisementsSlice: StateCreator<
  AdvertisementsSlice,
  [],
  [],
  AdvertisementsSlice
> = (set) => ({
  list: [],

  setAdvertisements: (entities) => set(() => parseToAdvertisements(entities)),
});

export const createAdvertisementArticleSlice: StateCreator<
  AdvertisementArticleSlice,
  [],
  [],
  AdvertisementArticleSlice
> = (set) => ({
  id: '',
  title: '',
  body: '',
  image: undefined,

  setAdvertisementArticle: (entity) => {
    const result = parseToAdvertisementArticle(entity);
    set(() => ({ ...result }));
  },
});
