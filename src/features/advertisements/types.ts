import { ImageType } from 'lib/utils';
import { AdvertisementEntity } from 'types/gql/graphql';
import { AdvertisementArticleEntity } from 'types/gql/graphql';

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

///////////////////////////////////////
export type AdvertisementArticle = {
  id: string;
  title: string;
  body: string;
  image?: ImageType;
};

export type AdvertisementArticleSliceData = {
  id: string;
  title: string;
  body: string;
  image?: ImageType;
};

export type AdvertisementArticleSlice = AdvertisementArticleSliceData & {
  setAdvertisementArticle: (entity: AdvertisementArticleEntity) => void;
};
