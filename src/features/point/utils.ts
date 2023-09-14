import { PointEntity } from 'types/offers-gql/graphql';
import { PointSliceData, PointsCard } from './types';

export const parseToPointItem = (entity: PointEntity): PointSliceData => {
  const point = entity.attributes;
  const result = {
    id: entity?.id,
    name: point.name,
    // en_name: point.en_name,
    // offers:
    //   point?.offers?.data?.map((offer) => ({
    //     id: offer.id,
    //   })) ?? [],
  };

  return result;
};

export const parseToPoints = (data: PointEntity[]): PointsCard[] => {
  const result = data.map((entity) => {
    const point = entity.attributes;
    const result: PointsCard = {
      name: point.name,
      id: entity?.id,
    };
    return result;
  });
  return result;
};
