import { create } from 'zustand';

import { createPointSlice, createPointsSlice } from './slice';
import { PointSlice, PointsSlice } from './types';

export const usePointStore = create<PointSlice>((...a) => ({
  ...createPointSlice(...a),
}));

export const usePointsStore = create<PointsSlice>((...a) => ({
  ...createPointsSlice(...a),
}));
