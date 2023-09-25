import { create } from 'zustand';

import { createOffersSlice, createTargetOfferSlice } from './slice';
import { OffersSlice, OfferSlice } from './types';

export const useOffersStore = create<OffersSlice>((...a) => ({
  ...createOffersSlice(...a),
}));

export const useTargetOfferStore = create<OfferSlice>((...a) => ({
  ...createTargetOfferSlice(...a),
}));
