import { ImageType } from 'lib/utils';
import { CompanyEntity } from 'types/gql/graphql';

export type CompanySliceData = {
  id: string;
  coverImage?: ImageType;
  description: string;
  name: string;
  companyName: string;
  mission: string;
  logo: ImageType;
  companyId: string;
};

export type CompanySlice = CompanySliceData & {
  setCompanyItem: (entity: CompanyEntity) => void;
};
