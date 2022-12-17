import { StateCreator } from 'zustand';

import { OffersSlice, OfferSlice } from './types';
import { parseToOffers, parseToTarget } from './utils';

export const createOffersSlice: StateCreator<
  OffersSlice,
  [],
  [],
  OffersSlice
> = (set) => ({
  list: [],
  currentPage: 1,

  setOffers: (entities) => {
    const result = parseToOffers(entities);
    set(() => ({ list: result }));
  },
});

export const createTargetOfferSlice: StateCreator<
  OfferSlice,
  [],
  [],
  OfferSlice
> = (set) => ({
  id: '',
  title: '',
  occupation: '',
  place: '',
  hourlyWage: '',
  description: '',
  aboutJob: '',
  recruitmentNumber: 1,
  requiredSkills: '',
  recruitmentTerms: '',
  image: undefined,
  companyName: '',
  managerName: '',

  setTarget: (entity) => {
    const result = parseToTarget(entity);
    set(() => ({ ...result }));
  },
});
