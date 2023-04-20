import { JobCategoryEntity } from 'types/gql/graphql';
import { JobCategorySliceData, JobCategorysCard } from './types';

export const parseToJobCategoryItem = (
  entity: JobCategoryEntity
): JobCategorySliceData => {
  const jobcategory = entity.attributes;
  const result = {
    id: entity?.id,
    name: jobcategory.name,
    en_name: jobcategory.en_name,
    offers:
      jobcategory?.offers?.data?.map((offer) => ({
        id: offer.id,
      })) ?? [],
  };

  return result;
};

export const parseToJobCategorys = (
  data: JobCategoryEntity[]
): JobCategorysCard[] => {
  const result = data.map((entity) => {
    const jobcategory = entity.attributes;
    const result: JobCategorysCard = {
      name: jobcategory.name,
      id: entity?.id,
    };
    return result;
  });
  return result;
};
