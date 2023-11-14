import { parseImage } from 'lib/utils';
import { OfferEntity } from 'types/offers-gql/graphql';
import { OfferCard, OfferSliceData } from './types';

export const parseToOffers = (data: OfferEntity[]): OfferCard[] => {
  const result = data.map((entity) => {
    const offer = entity.attributes;
    const result: OfferCard = {
      title: offer.title,
      company_name: offer.company_name,
      // createby: {
      //   id: offer.createdBy.id,
      //   firstname: offer.createdBy.firstname,
      //   lastname: offer ? offer.createdBy.lastname : '',
      // },
      hourly_wage: offer.hourly_wage,
      place_short: offer.place_short,
      hours_short: offer.hours_short,
      start_at: offer.start_at,
      end_at: offer.end_at,
      id: entity.id,
      image: offer?.image?.data?.attributes?.url
        ? parseImage(offer?.image?.data?.attributes)
        : undefined,

      occupation: offer.occupation,
      min_period: offer.min_period,
      //   {
      //   id: offer?.min_period?.data.id,
      //   period: offer?.min_period?.data.attributes.period,
      // },
      job_type: offer.job_type,
      //   {
      //   id: offer.job_type.data.id,
      //   name: offer.job_type.data.attributes.name,
      //   gift: offer.job_type.data.attributes.gift,
      // },

      min_workingday: offer.min_workingday,
      //   {
      //   id: offer.min_workingday.data.id,
      //   days: offer.min_workingday.data.attributes.days,
      // },
      points: offer?.points,
      // offer?.points?.data?.map((point) => ({
      //   id: point.id,
      //   name: point?.attributes?.name ?? '',
      // })) ?? [],
      company: {
        id: offer?.company?.data?.id ?? '',
        name: offer?.company?.data?.attributes?.name ?? '',
        representative: offer?.company?.data?.attributes?.representative ?? '',
        establishment_date:
          offer?.company?.data?.attributes?.establishment_date ?? '',
        number_of_employees:
          offer?.company?.data?.attributes?.number_of_employees ?? '',
        place: offer?.company?.data?.attributes?.place ?? '',
      },
    };
    return result;
  });
  return result;
};

export const parseToTarget = (entity: OfferEntity): Partial<OfferSliceData> => {
  const offer = entity?.attributes;

  const result = {
    title: offer ? offer.title : '',
    id: entity.id,

    image: offer?.image?.data?.attributes?.url
      ? parseImage(offer.image.data.attributes)
      : undefined,
    // createby: {
    //   id: offer.createdBy.id,
    //   firstname: offer.createdBy.firstname,
    //   lastname: offer ? offer.createdBy.lastname : '',
    // },
    hourly_wage: offer.hourly_wage,
    // hourly_wage_detail: offer ? offer.hourly_wage_detail : '',
    place_short: offer.place_short,
    // place_detail: offer ? offer.place_detail : '',
    hours_short: offer.hours_short,
    // hours_detail: offer ? offer.hours_detail : '',
    job_description: offer.job_description,
    start_at: offer.start_at,
    end_at: offer.end_at,
    target: offer.target,
    url: offer.url,
    qualification: offer.qualification,
    people: offer.people,
    flow: offer.flow,
    holiday: offer ? offer.holiday : '',
    shift: offer ? offer.shift : '',
    company_name: offer?.company_name ?? '',
    email: offer.email,
    interview_location: offer.interview_location,
    min_working_hours: offer.min_working_hours,
    min_period: offer.min_period,
    //   {
    //   id: offer.min_period.data.id,
    //   period: offer.min_period.data.attributes.period,
    // },
    min_workingday: offer.min_workingday,
    //   {
    //   id: offer.min_workingday.data.id,
    //   days: offer.min_workingday.data.attributes.days,
    // },
    atmosphere:
      offer.atmosphere.map((atomosphere) => ({
        title: atomosphere.title,
        text: atomosphere.text,
        image: atomosphere?.image?.data?.attributes?.url
          ? parseImage(atomosphere.image.data.attributes)
          : undefined,
      })) ?? [],
    occupation: offer.occupation,
    //     {
    //   id: offer.occupation.data.id,
    //   name: offer.occupation.data.attributes.name,
    // },
    job_type: offer.job_type,
    //     {
    //   id: offer.job_type.data.id,
    //   name: offer.job_type.data.attributes.name,
    //   gift: offer.job_type.data.attributes.gift,
    // },

    points: offer?.points,
    // offer?.points?.data?.map((point) => ({
    //   id: point.id,
    //   name: point?.attributes?.name ?? '',
    // })) ?? [],
    desired_interview_date: offer.desired_interview_date,
    desired_interview_time: offer.desired_interview_time,
    company: {
      id: offer?.company?.data?.id ?? '',
      name: offer?.company?.data?.attributes?.name ?? '',
      representative: offer?.company?.data?.attributes?.representative ?? '',
      establishment_date:
        offer?.company?.data?.attributes?.establishment_date ?? '',
      number_of_employees:
        offer?.company?.data?.attributes?.number_of_employees ?? '',
      place: offer?.company?.data?.attributes?.place ?? '',
    },
  };

  return result;
};
