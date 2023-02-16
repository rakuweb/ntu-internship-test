import { OfferEntity } from 'types/gql/graphql';
import { ImageType } from 'lib/utils';

export type Category = { id: string; name: string; enName: string };
export type Point = { id: string; name: string; enName: string };

export type OfferCard = {
  companyName: string;
  categories: Category[];
  place: string;
  hourlyWage: string;
  isNew?: boolean;
  id: string;
  title: string;
  image?: ImageType;
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
  jobType: string;
  points: Point[];
  categories: Category[];
  place: string;
  hourlyWage: string;
  description: string;
  aboutJob: string;
  gainedSkills: string[];
  recruitmentTerms: string;
  image?: ImageType;
  companyName: string;
  mission: string;
  logo: ImageType;
  target: string;
  qualification: string;
};

export type OfferSlice = OfferSliceData & {
  setTarget: (entity: OfferEntity) => void;
};
