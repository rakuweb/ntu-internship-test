export const REGISTER_API_KEY = process?.env?.NEXT_PUBLIC_REGISTER_API ?? '';
export const READ_API_KEY = process?.env?.NEXT_PUBLIC_READ_API_KEY ?? '';

export const CMS_URL = process?.env?.NEXT_PUBLIC_CMS_URL ?? '';
export const API_URL = process?.env?.NEXT_PUBLIC_API_URL ?? process.env?.NEXT_PUBLIC_CMS_URL ?? '';
export const GRAPHQL_URL = `${process?.env?.NEXT_PUBLIC_CMS_URL ?? ''}/gql`;

export const LIFF_ID = process?.env?.NEXT_PUBLIC_GOOGLE_LIFF_ID ?? '';
