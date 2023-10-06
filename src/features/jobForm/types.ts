
export type JobFormItem = {
  readonly isChecked: boolean;
  readonly isSending: boolean;
  readonly isComplete: boolean;
};

export type JobFormSlice = JobFormItem & {
  setIsChecked: (isChecked: boolean) => void;
  setIsSending: (isSending: boolean) => void;
  startSending: () => void;
  successSending: () => void;
  finishSending: () => void;
};
