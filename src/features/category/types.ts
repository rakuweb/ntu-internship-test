import { ImageType } from 'lib/utils';
import { JobCategoryEntity } from 'types/gql/graphql';

export type JobCategorySliceData = {
  id: string;
  name: string;
  en_name: string;
  offers: { id: string }[];
};

export type JobCategorySlice = JobCategorySliceData & {
  setJobCategoryItem: (entity: JobCategoryEntity) => void;
};

export type JobCategorysCard = {
  id: string;
  name: string;
};
export type JobCategorysSlice = {
  list: JobCategorysCard[];
  currentPage: number;

  setJobCategorysItem: (entity: JobCategoryEntity[]) => void;
};
