import { ImageType } from 'lib/utils';
import { OfferEntity } from 'types/offers-gql/graphql';

export type Occupation = { id: string; name: string };
export type JobType = { id: string; name: string; gift: string };
export type MinPeriod = { id: string; name: string; gift: string };
export type Point = { id: string; name: string };
export type Period = { id: string; period: string };
export type Workingday = { id: string; days: string };
export type Atmosphere = { title: string; text: string; image: ImageType };
export type Createby = { id: number; firstname: string; lastname: string };

export type OfferCard = {
  id: string;
  title: string;
  createby: Createby;
  hourly_wage: string;
  place_short: string;
  hours_short: string;
  start_at: string;
  end_at: string;
  occupation: Occupation;
  image?: ImageType;
  job_type: JobType;
  min_period: Period;
  min_workingday: Workingday;
  points: Point[];
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
  hourly_wage_detail: string;
  place_short: string;
  place_detail: string;
  hours_short: string;
  hours_detail: string;
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
  createby: Createby;
  min_working_hours: string;
  min_period: Period;
  min_workingday: Workingday;
  atmosphere: Atmosphere[];
  occupation: Occupation;
  job_type: JobType;
  points: Point[];
  image?: ImageType;
};

export type OfferSlice = OfferSliceData & {
  setTarget: (entity: OfferEntity) => void;
};
