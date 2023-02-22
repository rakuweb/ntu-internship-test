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
  jobType: '',
  deadline: '',
  points: [],
  categories: [],
  place: '',
  hourlyWage: '',
  description: '',
  aboutJob: '',
  target: '',
  gainedSkills: [],
  recruitmentTerms: '',
  image: undefined,
  companyName: '',
  mission: '',
  logo: undefined,
  qualification: '',

  setTarget: (entity) => {
    const result = parseToTarget(entity);
    set(() => ({ ...result }));
  },
});
