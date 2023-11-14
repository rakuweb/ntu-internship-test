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
  hourly_wage: '',
  // hourly_wage_detail: '',
  place_short: '',
  // place_detail: '',
  hours_short: '',
  // hours_detail: '',
  job_description: '',
  start_at: '',
  end_at: '',
  target: '',
  url: '',
  qualification: '',
  people: '',
  flow: '',
  company_name: '',
  email: '',
  interview_location: '',
  // createby: { id: 0, firstname: '', lastname: '' },
  min_working_hours: '',
  min_period: '',
  // min_period: { id: '', period: '' },
  min_workingday: '',
  // min_workingday: { id: '', days: '' },
  atmosphere: [{ title: '', text: '', image: undefined }],
  occupation: '',
  // occupation: { id: '', name: '' },
  job_type: '',
  // job_type: { id: '', name: '', gift: '' },
  points: '',
  // points: [{ id: '', name: '' }],
  image: undefined,
  shift: '',
  holiday: '',
  desired_interview_time: '',
  desired_interview_date: '',
  interview_remarks: '',
  company: {
    id: '',
    name: '',
    representative: '',
    establishment_date: '',
    number_of_employees: '',
    place: '',
  },
  setTarget: (entity) => {
    const result = parseToTarget(entity);
    set(() => ({ ...result }));
  },
});
