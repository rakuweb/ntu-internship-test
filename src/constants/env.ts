export const WRITE_API_KEY = process?.env?.WRITE_API_KEY ?? '';
export const READ_API_KEY = process?.env?.NEXT_PUBLIC_READ_API_KEY ?? '';

export const ORIGIN_URL = process?.env?.NEXT_PUBLIC_ORIGIN_URL ?? '';
export const CMS_URL = process?.env?.NEXT_PUBLIC_CMS_URL ?? '';
export const API_URL = `${process.env?.NEXT_PUBLIC_CMS_URL ?? ''}/api`;
export const GRAPHQL_URL = `${process?.env?.NEXT_PUBLIC_CMS_URL ?? ''}/gql`;
export const LIFF_ID = process?.env?.NEXT_PUBLIC_LIFF_ID ?? '';
