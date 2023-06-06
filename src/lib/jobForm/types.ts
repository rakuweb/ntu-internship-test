import { JobFormSchema } from './schema';

export type JobFormItem = {
  readonly isChecked: boolean;
  readonly isSending: boolean;
  readonly isComplete: boolean;
} & JobFormSchema;

export type JobFormSlice = {
  isChecked: boolean;
  isSending: boolean;
  isComplete: boolean;
  updateFormData: (data: JobFormSchema) => void;
  setIsChecked: (isChecked: boolean) => void;
  setIsSending: (isSending: boolean) => void;
  startSending: () => void;
  successSending: () => void;
  finishSending: () => void;
} & JobFormSchema;
