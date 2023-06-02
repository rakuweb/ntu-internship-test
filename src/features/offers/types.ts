import { OfferEntity } from 'types/gql/graphql';
import { ImageType } from 'lib/utils';

export type Occupation = { id: string; name: string };
export type JobType = { id: string; name: string; gift: string };
export type Point = { id: string; name: string };
export type Period = { id: string; period: string };
export type Workingday = { id: string; days: string };
export type Atmosphere = { title: string; text: string; image: ImageType };

export type OfferCard = {
  id: string;
  title: string;
  hourly_wage: string;
  place_short: string;
  hours_short: string;
  start_at: string;
  end_at: string;
  occupation: Occupation;
  image?: ImageType;
  // points: Point[];
  job_type: JobType;
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
  interview_location: string;
  min_working_hours: string;
  min_period: Period;
  min_workingday: Workingday;
  atmosphere: Atmosphere[];
  occupation: Occupation;
  job_type: JobType;
  points: Point[];
  image?: ImageType;
  // companyName: string;
};

export type OfferSlice = OfferSliceData & {
  setTarget: (entity: OfferEntity) => void;
};
