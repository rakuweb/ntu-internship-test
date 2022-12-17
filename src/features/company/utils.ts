import { parseImage } from '~/lib/utils';
import { CompanyEntity } from 'types/gql/graphql';
import { RecruitManagerSliceData } from './types';

export const parseToRecruitManager = (
  entity: CompanyEntity
): RecruitManagerSliceData => {
  const company = entity.attributes;
  const result = {
    id: entity?.id,
    name: company.createdBy.firstname,
    companyName: company.createdBy?.lastname,
    image: company?.recruiter_image?.data?.attributes && parseImage(company.recruiter_image.data.attributes),
    introduction: company.recruiter_introduction,
  };

  return result;
};
