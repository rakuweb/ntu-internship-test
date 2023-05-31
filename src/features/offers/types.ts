import { OfferEntity } from 'types/gql/graphql';
import { ImageType } from 'lib/utils';

export type Occupation = { id: string; name: string };
export type JobType = { id: string; name: string; gift: string };
export type Point = { id: string; name: string; enName: string };

export type OfferCard = {
  title: string;
  hourly_wage: string;
  place_short: string;
  hours_short: string;
  start_at: string;
  end_at: string;
  occupation: Occupation;
  id: string;
  image?: ImageType;
  // points: Point[];
  job_type: JobType;
};

export type OffersSlice = {
  list: OfferCard[];
  currentPage: number;

  setOffers: (entity: OfferEntity[]) => void;
};

// export type OfferSliceData = {
//   id: string;
//   title: string;
//   jobType: string;
//   deadline: any;
//   createdAt: string;
//   points: Point[];
//   place: string;
//   hourlyWage: string;
//   description: string;
//   aboutJob: string;
//   gainedSkills: string[];
//   recruitmentTerms: string;
//   image?: ImageType;
//   simage1?: ImageType;
//   simage2?: ImageType;
//   simage3?: ImageType;
//   simage4?: ImageType;
//   companyName: string;
//   mission: string;
//   logo: ImageType;
//   target: string;
//   qualification: string;
//   formUrl: string;
//   people: string;
//   jobDescription: string;
//   aboutCompany: string;
// };

// export type OfferSlice = OfferSliceData & {
//   setTarget: (entity: OfferEntity) => void;
// };
