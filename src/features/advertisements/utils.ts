import { parseImage } from '~/lib/utils';
import { AdvertisementEntity } from 'types/gql/graphql';
import { AdvertisementsSliceData } from './types';

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
