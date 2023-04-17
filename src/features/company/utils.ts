import { parseImage } from '~/lib/utils';
import { CompanyEntity } from 'types/gql/graphql';
import { CompanySliceData } from './types';

export const parseToCompanyItem = (entity: CompanyEntity): CompanySliceData => {
  const company = entity.attributes;
  const result: CompanySliceData = {
    id: entity?.id,
    name: company.createdBy.firstname,
    companyName: company.createdBy?.lastname,
    coverImage:
      company?.cover_image?.data?.attributes &&
      parseImage(company.cover_image.data.attributes),
    description: company.description,
    logo:
      company?.logo?.data?.attributes &&
      parseImage(company.logo.data.attributes),
    mission: company?.mission ?? '',
    companyId: company?.company_id ?? '',
    establishmentDate: company?.establishment_date
      ? new Date(company.establishment_date)
      : null,
    industryCategories:
      company?.industry_categories?.data?.map((category) => ({
        name: category.attributes?.name ?? '',
        enName: category?.attributes?.en_name,
      })) ?? [],
    address: company?.address,
    mapUrl: company?.map_url ?? '',
  };

  return result;
};
