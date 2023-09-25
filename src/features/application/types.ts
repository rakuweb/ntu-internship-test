export type ApplicationSliceData = {
  isSending: boolean;
  isChecking: boolean;
};

export type ApplicationSlice = ApplicationSliceData & {
  setIsSending: (next: boolean) => void;
  setIsChecking: (next: boolean) => void;
};
