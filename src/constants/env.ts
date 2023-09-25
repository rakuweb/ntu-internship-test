export const WRITE_API_KEY = process?.env?.WRITE_API_KEY ?? '';
export const READ_API_KEY = process?.env?.NEXT_PUBLIC_READ_API_KEY ?? '';
export const WRITE_API_KEY_OFFER = process.env?.WRITE_API_KEY_OFFER ?? '';

export const ORIGIN_URL = process?.env?.NEXT_PUBLIC_ORIGIN_URL ?? '';
export const CMS_URL = process?.env?.NEXT_PUBLIC_CMS_URL2 ?? '';
export const API_URL = `${process.env?.NEXT_PUBLIC_CMS_URL ?? ''}/api`;
export const API_URL_OFFER = `${process.env?.NEXT_PUBLIC_CMS_URL2 ?? ''}/api`;
export const GRAPHQL_URL = `${process?.env?.NEXT_PUBLIC_CMS_URL ?? ''}/gql`;
export const GRAPHQL_URL_offer = `${process?.env?.NEXT_PUBLIC_CMS_URL2 ?? ''
  }/graphql`;
export const LIFF_ID = process?.env?.NEXT_PUBLIC_LIFF_ID ?? '';
export const LIFF_ID_INTERNSHIP =
  process?.env?.NEXT_PUBLIC_LIFF_ID_INTERNSHIP ?? '';
export const CANONICAL_URL = process.env.NEXT_PUBLIC_ORIGIN_URL ?? ``;
export const MEDIA_ROOT_URL = CMS_URL;
export const GOOGLE_RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY ?? ``;
export const GOOGLE_RECAPTCHA_SECRET = process.env.GOOGLE_RECAPTCHA_SECRET ?? ``;
export const LINE_MESSAGING_ACCESS_TOKEN = process.env.LINE_MESSAGING_ACCESS_TOKEN ?? ``;
