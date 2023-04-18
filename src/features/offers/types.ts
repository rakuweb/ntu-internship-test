import { OfferEntity } from 'types/gql/graphql';
import { ImageType } from 'lib/utils';

export type Category = { id: string; name: string; enName: string };
export type Point = { id: string; name: string; enName: string };

export type OfferCard = {
  companyName: string;
  createdByid: number;
  categories: Category[];
  place: string;
  hourlyWage: string;
  isNew?: boolean;
  id: string;
  title: string;
  image?: ImageType;
  points: Point[];
  deadline: any;
};

export type OffersSlice = {
  list: OfferCard[];
  currentPage: number;

  setOffers: (entity: OfferEntity[]) => void;
};

export type OfferSliceData = {
  id: string;
  title: string;
  jobType: string;
  deadline: any;
  points: Point[];
  categories: Category[];
  place: string;
  hourlyWage: string;
  description: string;
  aboutJob: string;
  gainedSkills: string[];
  recruitmentTerms: string;
  image?: ImageType;
  simage1?: ImageType;
  simage2?: ImageType;
  simage3?: ImageType;
  simage4?: ImageType;
  companyName: string;
  mission: string;
  logo: ImageType;
  target: string;
  qualification: string;
  formUrl: string;
  people: string;
  jobDescription: string;
  aboutCompany: string;
};

export type OfferSlice = OfferSliceData & {
  setTarget: (entity: OfferEntity) => void;
};
