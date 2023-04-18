import { ImageType } from 'lib/utils';
import { CompanyEntity } from 'types/gql/graphql';

export type Category = { name: string; enName: string };

export type CompanySliceData = {
  id: string;
  image?: ImageType;
  atmosphereimage1?: ImageType;
  atmosphereimage2?: ImageType;
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
  founding: string;
  jobtype: string;
  employment: string;
  scale: string;
  outline: string;
  atmosphere: string;
  tostudents: string;
  createdByid: number;
};

export type CompanySlice = CompanySliceData & {
  setCompanyItem: (entity: CompanyEntity) => void;
};
