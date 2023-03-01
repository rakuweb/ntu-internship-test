import { parseImage } from '~/lib/utils';
import {
  AdvertisementEntity,
  AdvertisementArticleEntity,
} from 'types/gql/graphql';
import {
  AdvertisementsSliceData,
  AdvertisementArticleSliceData,
} from './types';

export const parseToAdvertisements = (
  entities: AdvertisementEntity[]
): AdvertisementsSliceData => {
  const advertisements = entities.map((entity) => {
    const ad = entity?.attributes;

    const result = {
      id: entity?.id,
      image:
        ad?.creative?.data?.attributes &&
        parseImage(ad.creative.data.attributes),
    };

    return result;
  });
  return { list: advertisements };
};

export const parseToAdvertisementArticle = (
  entity: AdvertisementArticleEntity
): Partial<AdvertisementArticleSliceData> => {
  const result = {
    id: entity.id,
    title: entity?.attributes.title,
    body: entity?.attributes.body,
    image: entity.attributes.image.data.attributes?.url
      ? parseImage(entity.attributes.image.data.attributes)
      : undefined,
  };
  return result;
};
