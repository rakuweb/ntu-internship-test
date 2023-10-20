import { RequestSchema } from './schema';

export type RequestSliceData = {
  company_name: string;
  email: string;

  job_type: string;
  occupation: string;
  target: string;
  people: string;
  hourly_wage: string;
  hours_short: string;
  shift: string;
  min_period: string;
  min_workingday: string;
  holiday: string;
  place_short: string;
  interview_location: string;
  qualification: string;
  points: string;
  desired_interview_date: string;
  desired_interview_time: string;
  interview_remarks: string;
  flow: string;
  url: string;
  start_at: Date;
  end_at: Date;

  title: string;
  image: File;
  job_description: string;
  atmosphere_title: string;
  atmosphere_image: File;
  atmosphere_text: string;
  atmosphere_title2: string;
  atmosphere_image2: File;
  atmosphere_text2: string;
  atmosphere_title3: string;
  atmosphere_image3: File;
  atmosphere_text3: string;

  isSending: boolean;
  isChecking: boolean;
  progress: number;
};

export type RequestSlice = RequestSliceData & {
  setIsSending: (next: boolean) => void;
  setIsChecking: (next: boolean) => void;
  proceedProgress: () => void;
  backProgress: () => void;
  setProgress: (next: number) => void;
  updateFormData: (data: RequestSchema) => void;
};
