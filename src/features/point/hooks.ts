import { create } from 'zustand';

import { PointSlice, PointsSlice } from './types';
import { createPointSlice, createPointsSlice } from './slice';

export const usePointStore = create<PointSlice>((...a) => ({
  ...createPointSlice(...a),
}));

export const usePointsStore = create<PointsSlice>((...a) => ({
  ...createPointsSlice(...a),
}));
