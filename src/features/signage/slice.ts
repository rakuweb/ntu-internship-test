import { StateCreator } from 'zustand';

import { SignageSlice } from './types';
import { parseToVideos } from './utils';

export const createSignageSlice: StateCreator<
  SignageSlice,
  [],
  [],
  SignageSlice
> = (set) => ({
  videos: [],

  setVideos: (entities) => set(() => parseToVideos(entities)),
});
