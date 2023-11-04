import { create } from 'zustand';

import { createAgentSlice } from './slice';
import { AgentSlice } from './types';

export const useAgentStore = create<AgentSlice>((...a) => ({
  ...createAgentSlice(...a),
}));
