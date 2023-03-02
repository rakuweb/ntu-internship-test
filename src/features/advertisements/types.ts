import { ImageType } from 'lib/utils';
import { AdvertisementArticleEntity } from 'types/gql/graphql';

export type Advertisement = {
  id: string;
  image: ImageType;
};

export type AdvertisementsSliceData = {
  list: Advertisement[];
};

export type AdvertisementsSlice = AdvertisementsSliceData & {
  setAdvertisements: (entities: AdvertisementArticleEntity[]) => void;
};

export type AdvertisementArticleSliceData = {
  id: string;
  title: string;
  body: string;
  image: ImageType;
};

export type AdvertisementArticleSlice = AdvertisementArticleSliceData & {
  setAdvertisementArticle: (entity: AdvertisementArticleEntity) => void;
};
