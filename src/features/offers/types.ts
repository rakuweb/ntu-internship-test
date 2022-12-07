import { OfferEntity } from 'types/gql/graphql';
import {ImageType} from 'lib/utils';

export type OfferCard = {
  companyName: string;
  occupation: string;
  place: string;
  hourlyWage: string;
  isNew?: boolean;
  id: string;
  title: string;
  image?: ImageType,
};

export type OffersSlice = {
  list: OfferCard[];
  currentPage: number;

  setOffers: (entity: OfferEntity[]) => void;
};
