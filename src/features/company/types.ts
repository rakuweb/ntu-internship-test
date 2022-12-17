import { ImageType } from 'lib/utils';
import { CompanyEntity } from 'types/gql/graphql';

export type RecruitManagerSliceData = {
  id: string;
  image?: ImageType;
  introduction: string;
  name: string;
  companyName: string;
};

export type RecruitManagerSlice = RecruitManagerSliceData & {
  setRecruitManager: (entity: CompanyEntity) => void;
};
