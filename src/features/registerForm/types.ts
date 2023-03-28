import { RegisterFormSchema, RegisterGradeFormSchema } from './schema';

export type RegisterFormItem = {
  readonly isChecked: boolean;
  readonly isSending: boolean;
  readonly isComplete: boolean;
} & RegisterFormSchema;

export type RegisterFormSlice = {
  isChecked: boolean;
  isSending: boolean;
  isComplete: boolean;
  updateFormData: (data: RegisterFormSchema) => void;
  setIsChecked: (isChecked: boolean) => void;
  setIsSending: (isSending: boolean) => void;
  setEmail: (email: string) => void;
  startSending: () => void;
  successSending: () => void;
  finishSending: () => void;
} & RegisterFormSchema;

/// for grade
export type RegisterGradeFormItem = {
  readonly isChecked: boolean;
  readonly isSending: boolean;
  readonly isComplete: boolean;
} & RegisterGradeFormSchema;

export type RegisterGradeFormSlice = {
  isChecked: boolean;
  isSending: boolean;
  isComplete: boolean;

  updateFormData: (data: RegisterGradeFormSchema) => void;
  setIsChecked: (isChecked: boolean) => void;
  setIsSending: (isSending: boolean) => void;
  startSending: () => void;
  successSending: () => void;
  finishSending: () => void;
} & RegisterGradeFormSchema;
