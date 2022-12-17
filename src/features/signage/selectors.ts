import { SignageSlice } from './types';

export const selectVideos = (state: SignageSlice) => state.videos;

export const selectSetVideos = (state: SignageSlice) => state.setVideos;
