import { ImageType } from 'lib/utils';
import { AdvertisementEntity } from 'types/gql/graphql';

export type Advertisement = {
  id: string;
  image: ImageType;
};

export type AdvertisementsSliceData = {
  list: Advertisement[];
};

export type AdvertisementsSlice = AdvertisementsSliceData & {
  setAdvertisements: (entities: AdvertisementEntity[]) => void;
};
