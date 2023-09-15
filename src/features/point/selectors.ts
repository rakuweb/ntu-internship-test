import { PointSlice, PointsSlice } from './types';

export const selectSetPointItem = (state: PointSlice) => state.setPointItem;

export const selectPoint = (state: PointSlice) => {
  const { setPointItem: _, ...remain } = state;

  return remain;
};

export const selectSetPoints = (state: PointsSlice) => state.setPointsItem;

export const selectPoints = (state: PointsSlice) => {
  const { setPointsItem: _, ...remain } = state;

  return remain;
};
