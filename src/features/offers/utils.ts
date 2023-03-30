import { OfferEntity } from 'types/gql/graphql';
import { OfferCard, OfferSliceData } from './types';
import { parseDate, parseImage } from 'lib/utils';
import markdownToHtml from 'zenn-markdown-html';

export const parseToOffers = (data: OfferEntity[]): OfferCard[] => {
  const result = data.map((entity) => {
    const offer = entity.attributes;
    const result: OfferCard = {
      title: offer.title,
      companyName: offer.createdBy.lastname,
      id: entity.id,
      deadline: offer.deadline,
      image: offer?.image?.data?.attributes?.url
        ? parseImage(offer.image.data.attributes)
        : undefined,
      categories:
        offer?.job_categories?.data?.map((category) => ({
          id: category.id,
          name: category?.attributes?.name ?? '',
          enName: category?.attributes?.en_name ?? '',
        })) ?? [],
      points:
        offer?.job_points?.data?.map((point) => ({
          id: point.id,
          name: point?.attributes?.name ?? '',
          enName: point?.attributes?.en_name ?? '',
        })) ?? [],
      place: offer.place,
      hourlyWage: offer.hourly_wage,
    };
    return result;
  });
  return result;
};

export const parseToTarget = (entity: OfferEntity): Partial<OfferSliceData> => {
  const offer = entity?.attributes;

  const result = {
    title: offer.title,
    companyName: offer.createdBy.lastname,
    id: entity.id,
    image: offer?.image?.data?.attributes?.url
      ? parseImage(offer.image.data.attributes)
      : undefined,
    simage1: offer?.gallery?.data[0]?.attributes?.url
      ? parseImage(offer.gallery.data[0].attributes)
      : undefined,
    simage2: offer?.gallery?.data[1]?.attributes?.url
      ? parseImage(offer.gallery.data[1].attributes)
      : undefined,
    simage3: offer?.gallery?.data[2]?.attributes?.url
      ? parseImage(offer.gallery.data[2].attributes)
      : undefined,
    simage4: offer?.gallery?.data[3]?.attributes?.url
      ? parseImage(offer.gallery.data[3].attributes)
      : undefined,
    // jobType: offer.job_type,
    categories:
      offer?.job_categories?.data?.map((category) => ({
        id: category.id,
        name: category?.attributes?.name ?? '',
        enName: category?.attributes?.en_name ?? '',
      })) ?? [],
    points:
      offer?.job_points?.data?.map((point) => ({
        id: point.id,
        name: point?.attributes?.name ?? '',
        enName: point?.attributes?.en_name ?? '',
      })) ?? [],
    place: offer.place,
    target: offer?.target ?? '',
    hourlyWage: offer.hourly_wage,
    description: offer.description,
    aboutJob: offer.about_job,
    // gainedSkills: offer.gained_skills?.map((skill) => skill.name) ?? [],
    recruitmentTerms: offer.recruitment_terms,
    qualification: offer?.qualification ?? '',
    deadline: offer.deadline,
    formUrl: offer?.form_url ?? '',
    people: offer.people,
    jobDescription: offer.job_description
      ? markdownToHtml(offer.job_description)
      : '',
    aboutCompany: offer.about_company
      ? markdownToHtml(offer.about_company)
      : '',
  };

  return result;
};
