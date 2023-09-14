import type { UploadFile } from 'types/offers-gql/graphql';
import type { UploadFile as UploadFile2 } from 'types/gql/graphql';
import { MEDIA_ROOT_URL } from 'constants/env';

export const parseDate = (stringDate: string): string => {
  const dateFromProp: Date = new Date(stringDate);
  const year = dateFromProp.getFullYear();
  const month = dateFromProp.getMonth() + 1;
  const date = dateFromProp.getDate();
  const result = `${year}.${month}.${date}`;

  return result;
};

export const getYearAndMonth = (
  stringDate: string
): { year: number; month: number } => {
  const dateFromProp: Date = new Date(stringDate);
  const year = dateFromProp.getFullYear();
  const month = dateFromProp.getMonth() + 1;
  const result = { year: year, month: month };

  return result;
};

export const getTodayString = (): string => {
  const today: Date = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const date = ('0' + today.getDate()).slice(-2);
  const result = `${year}-${month}-${date}`;

  return result;
};

export const parseStartDateTime = (year: number, month: number): Date => {
  const result = new Date(year, month - 1);

  return result;
};

export const parseEndDateTime = (year: number, month: number): Date => {
  const date = new Date(year, month - 1);
  const result = new Date(date.getFullYear(), date.getMonth() + 1);

  return result;
};

export const parseStartDate = (year: number, month: number): string => {
  const temp = new Date(year, month - 1);
  const result = `${temp.getFullYear()}-${(temp.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-01`;

  return result;
};

export const parseEndDate = (year: number, month: number): string => {
  const date = new Date(year, month - 1);
  const temp = new Date(date.getFullYear(), date.getMonth() + 1);
  const result = `${temp.getFullYear()}-${(temp.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-01`;

  return result;
};

// for image
export type ImageType = {
  width: number;
  height: number;
  alt: string;
  src: string;
  srcSet: string;
};

export const parseImage = (image: UploadFile | UploadFile2): ImageType => {
  const res = {
    width: Number(image.width) ?? undefined,
    height: Number(image.height) ?? undefined,
    alt: image.alternativeText ?? '',
    src: parseImageUrl(image.url ?? ``),
    srcSet: parseSrcSet(image.formats),
  };

  return res;
};

export const parseSrcSet = (formats: any): string =>
  formats
    ? `${formats.xsmall ? `${parseImageUrl(formats.xsmall.url)} 375w,` : ``}${formats.small ? `${parseImageUrl(formats.small.url)} 500w,` : ``
    }${formats.medium ? `${parseImageUrl(formats.medium.url)} 768w,` : ``}${formats.large ? `${parseImageUrl(formats.large.url)} 1000w` : ``
    }${formats.xlarge ? `${parseImageUrl(formats.xlarge.url)} 3000w` : ``}`
    : ``;

export const parseImageUrl = (path: string): string => toCMSPath(path);

export const toCMSPath = (path: string): string => `${MEDIA_ROOT_URL}${path}`;
