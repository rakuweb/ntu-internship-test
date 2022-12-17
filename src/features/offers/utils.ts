import { OfferEntity } from 'types/gql/graphql';
import { OfferCard,  OfferSliceData } from './types';
import { parseDate, parseImage } from 'lib/utils';

export const parseToOffers = (data: OfferEntity[]): OfferCard[] => {
  const result = data.map((entity) => {
    const offer = entity.attributes;
    const result: OfferCard = {
      title: offer.title,
      companyName: offer.createdBy.lastname,
      id: entity.id,
      image: offer?.image?.data?.attributes?.url
        ? parseImage(offer.image.data.attributes)
        : undefined,
      occupation: offer.occupation,
      place: offer.place,
      hourlyWage: offer.hourly_wage,
    };
    return result;
  });
  return result;
};

export const parseToTarget = (entity: OfferEntity): OfferSliceData => {
  const offer = entity?.attributes;
  const result = {
    title: offer.title,
    companyName: offer.createdBy.lastname,
    id: entity.id,
    image: offer?.image?.data?.attributes?.url
      ? parseImage(offer.image.data.attributes)
      : undefined,
    occupation: offer.occupation,
    place: offer.place,
    hourlyWage: offer.hourly_wage,
    description: offer.description,
    aboutJob: offer.about_job,
    recruitmentNumber: offer.recruitment_number,
    requiredSkills: offer.required_skills,
    recruitmentTerms: offer.recruitment_terms,
    managerName: offer.createdBy.firstname,
  };

  return result;
};
