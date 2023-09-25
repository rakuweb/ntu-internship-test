export type ContactFormData = {
  isChecked: boolean;
  isSending: boolean;
};

export type ContactFormSlice = ContactFormData & {
  setIsChecked: (isChecked: boolean) => void;
  setIsSending: (isSending: boolean) => void;
};
