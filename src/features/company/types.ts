import { ImageType } from 'lib/utils';
import { CompanyEntity } from 'types/gql/graphql';

export type Category = { name: string; enName: string };

export type CompanySliceData = {
  id: string;
  coverImage?: ImageType;
  description: string;
  name: string;
  companyName: string;
  mission: string;
  logo: ImageType;
  companyId: string;
  establishmentDate: Date;
  industryCategories: Category[];
  address: string;
  mapUrl: string;
};

export type CompanySlice = CompanySliceData & {
  setCompanyItem: (entity: CompanyEntity) => void;
};
