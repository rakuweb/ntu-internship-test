import {OffersSlice} from './types';

export const selectOfferList = (state: OffersSlice) => state.list;
export const selectSetOffers = (state: OffersSlice) => state.setOffers;
export const selectCurrentPage = (state: OffersSlice) => state.currentPage;
