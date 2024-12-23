import { AdvertisementsSlice, AdvertisementArticleSlice } from './types';

export const selectSetAdvertisements = (state: AdvertisementsSlice) =>
  state.setAdvertisements;
export const selectAdvertisements = (state: AdvertisementsSlice) => state.list;

export const selectSetAdvertisementArticle = (
  state: AdvertisementArticleSlice
) => state.setAdvertisementArticle;

export const selectAdvertisementArticle = (
  state: AdvertisementArticleSlice
) => {
  const { setAdvertisementArticle: _, ...remain } = state;

  return remain;
};
