import { create } from 'zustand';

import { AgentSlice } from './types';
import { createAgentSlice } from './slice';

export const useAgentStore = create<AgentSlice>((...a) => ({
  ...createAgentSlice(...a),
}));
