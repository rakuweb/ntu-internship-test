export type AgentSliceData = {
  isSending: boolean;
  isChecking: boolean;
};

export type AgentSlice = AgentSliceData & {
  setIsSending: (next: boolean) => void;
  setIsChecking: (next: boolean) => void;
};
