import { RegisterFormSlice } from './types';

export const selectRegisterFormItem = (state: RegisterFormSlice) => ({
  name: state.name,
  grade: state.grade,
  department: state.department,
  email: state.email,
  phone: state.phone,
  isInterestedInInternship: state.isInterestedInInternship,
  willStartWorking: state.willStartWorking,
});

export const selectRegisterFormFunctions = (state: RegisterFormSlice) => ({
  setIsChecked: state.setIsChecked,
  setIsSending: state.setIsSending,
  startSending: state.startSending,
  finishSending: state.finishSending,
  successSending: state.successSending,
});
