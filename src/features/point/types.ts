import { PointEntity } from 'types/offers-gql/graphql';

export type PointSliceData = {
  id: string;
  name: string;
  // en_name: string;
  // offers: { id: string }[];
};

export type PointSlice = PointSliceData & {
  setPointItem: (entity: PointEntity) => void;
};

export type PointsCard = {
  id: string;
  name: string;
};
export type PointsSlice = {
  list: PointsCard[];
  currentPage: number;

  setPointsItem: (entity: PointEntity[]) => void;
};
