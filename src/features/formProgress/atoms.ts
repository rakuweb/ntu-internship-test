import { atom } from 'recoil';

import { FormProgress } from './types';

export const formProgressState = atom<FormProgress>({
  key: 'formProgressState',
  default: {
    progress: 0,
  },
});
