import { StateCreator } from 'zustand';

import { PointSlice, PointsSlice } from './types';
import { parseToPointItem, parseToPoints } from './utils';

export const createPointSlice: StateCreator<PointSlice, [], [], PointSlice> = (
  set
) => ({
  id: '',
  name: '',
  en_name: '',
  offers: [],
  setPointItem: (entity) => set(() => parseToPointItem(entity)),
});

export const createPointsSlice: StateCreator<
  PointsSlice,
  [],
  [],
  PointsSlice
> = (set) => ({
  list: [],
  currentPage: 1,
  name: '',
  setPointsItem: (entities) => {
    const result = parseToPoints(entities);
    set(() => ({ list: result }));
  },
});
