import { StateCreator } from 'zustand';

import { RequestSlice } from './types';

export const createRequestSlice: StateCreator<
  RequestSlice,
  [],
  [],
  RequestSlice
> = (set) => ({
  company_name: ``,
  email: ``,

  job_type: ``,
  occupation: ``,
  target: ``,
  people: ``,
  hourly_wage: ``,
  hours_short: ``,
  shift: ``,
  min_period: ``,
  min_workingday: ``,
  holiday: ``,
  place_short: ``,
  interview_location: ``,
  qualification: ``,
  points: ``,
  desired_interview_date: ``,
  desired_interview_time: ``,
  interview_remarks: ``,
  flow: ``,
  url: ``,
  start_at: undefined,
  end_at: undefined,

  title: ``,
  image: undefined,
  job_description: ``,
  atmosphere_title: ``,
  atmosphere_image: undefined,
  atmosphere_text: ``,
  // atmosphere_title2: ``,
  // atmosphere_image2: z.string({ required_error: '入力してください' }),
  // atmosphere_text2: ``,
  // atmosphere_title3: ``,
  // atmosphere_image3: z.string({ required_error: '入力してください' }),
  // atmosphere_text3: ``,

  isSending: false,
  isChecking: false,
  progress: 0,

  setIsSending: (next) => set(() => ({ isSending: next })),
  setIsChecking: (next) => set(() => ({ isChecking: next })),
  proceedProgress: () => set((state) => ({ progress: state.progress + 1 })),
  backProgress: () => set((state) => ({ progress: state.progress - 1 })),
  updateFormData: (data) => set(() => ({ ...data })),
});
