import { JobFormSlice } from './types';

export const selectJobFormFunctions = (state: JobFormSlice) => ({
  setIsChecked: state.setIsChecked,
  setIsSending: state.setIsSending,
  startSending: state.startSending,
  finishSending: state.finishSending,
  successSending: state.successSending,
});
