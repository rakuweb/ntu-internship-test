import { OfferSlice, OffersSlice } from './types';

export const selectOfferList = (state: OffersSlice) => state.list;
export const selectSetOffers = (state: OffersSlice) => state.setOffers;
export const selectCurrentPage = (state: OffersSlice) => state.currentPage;
export const selectTarget = (state: OfferSlice) => {
  const { setTarget, ...remain } = state;

  return remain;
};
export const selectSetTarget = (state: OfferSlice) => state.setTarget;
