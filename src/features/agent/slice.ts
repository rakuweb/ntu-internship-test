import { StateCreator } from 'zustand';

import { AgentSlice } from './types';

export const createAgentSlice: StateCreator<AgentSlice, [], [], AgentSlice> = (
  set
) => ({
  isSending: false,
  isChecking: false,

  setIsSending: (next) => set(() => ({ isSending: next })),
  setIsChecking: (next) => set(() => ({ isChecking: next })),
});
