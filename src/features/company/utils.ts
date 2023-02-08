import { parseImage } from '~/lib/utils';
import { CompanyEntity } from 'types/gql/graphql';
import { CompanySliceData } from './types';

export const parseToCompanyItem = (entity: CompanyEntity): CompanySliceData => {
  const company = entity.attributes;
  const result = {
    id: entity?.id,
    name: company.createdBy.firstname,
    companyName: company.createdBy?.lastname,
    image:
      company?.cover_image?.data?.attributes &&
      parseImage(company.cover_image.data.attributes),
    description: company.description,
    logo:
      company?.logo?.data?.attributes &&
      parseImage(company.logo.data.attributes),
    mission: company?.mission ?? '',
    companyId: company?.company_id ?? '',
  };

  return result;
};
