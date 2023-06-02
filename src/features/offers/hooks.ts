import { create } from 'zustand';

import { OffersSlice, OfferSlice } from './types';
import { createOffersSlice, createTargetOfferSlice } from './slice';

export const useOffersStore = create<OffersSlice>((...a) => ({
  ...createOffersSlice(...a),
}));

export const useTargetOfferStore = create<OfferSlice>((...a) => ({
  ...createTargetOfferSlice(...a),
}));
