import { JobFormSlice } from './types';

export const selectRegisterFormItem = (state: JobFormSlice) => ({
  name: state.name,
  furigana: state.furigana,
  birthDate: state.birthDate,
  grade: state.grade,
  email: state.email,
  phone: state.phone,
  hopeday1: state.hopeday1,
  hopeday2: state.hopeday2,
  hopeday3: state.hopeday3,
  agreement: state.agreement,
});

export const selectRegisterFormFunctions = (state: JobFormSlice) => ({
  setIsChecked: state.setIsChecked,
  setIsSending: state.setIsSending,
  startSending: state.startSending,
  finishSending: state.finishSending,
  successSending: state.successSending,
});
