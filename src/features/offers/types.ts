import { ImageType } from 'lib/utils';
import { OfferEntity } from 'types/offers-gql/graphql';

export type Occupation = { id: string; name: string };
export type JobType = { id: string; name: string; gift: string };
export type MinPeriod = { id: string; name: string; gift: string };
export type Point = { id: string; name: string };
export type Period = { id: string; period: string };
export type Workingday = { id: string; days: string };
export type Atmosphere = { title: string; text: string; image: ImageType };
export type Company = {
  id: string;
  name: string;
  representative: string;
  establishment_date: string;
  number_of_employees: string;
  place: string;
};

export type OfferCard = {
  id: string;
  title: string;
  // createby: Createby;
  hourly_wage: string;
  place_short: string;
  hours_short: string;
  start_at: string;
  end_at: string;
  occupation: string;
  // occupation: Occupation;
  image?: ImageType;
  job_type: string;
  // job_type: JobType;
  min_period: string;
  // min_period: Period;
  min_workingday: string;
  points: string;
  // points: Point[];
  company: Company;
  company_name?: string;
};

export type OffersSlice = {
  list: OfferCard[];
  currentPage: number;

  setOffers: (entity: OfferEntity[]) => void;
};

export type OfferSliceData = {
  id: string;
  title: string;
  hourly_wage: string;
  // hourly_wage_detail: string;
  place_short: string;
  // place_detail: string;
  hours_short: string;
  // hours_detail: string;
  job_description: string;
  start_at: string;
  end_at: string;
  target: string;
  url: string;
  qualification: string;
  people: string;
  flow: string;
  shift: string;
  holiday: string;
  email: string;
  interview_location: string;
  // createby: Createby;
  min_working_hours: string;
  min_period: string;
  // min_period: Period;
  min_workingday: string;
  // min_workingday: Workingday;
  atmosphere: Atmosphere[];
  occupation: string;
  // occupation: Occupation;
  job_type: string;
  // job_type: JobType;
  points: string;
  // points: Point[];
  image?: ImageType;
  desired_interview_time: string;
  desired_interview_date: string;
  interview_remarks?: string;
  company: Company;
  company_name: string;
};

export type OfferSlice = OfferSliceData & {
  setTarget: (entity: OfferEntity) => void;
};
