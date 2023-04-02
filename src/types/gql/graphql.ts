/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Advertisement = {
  __typename?: 'Advertisement';
  createdAt?: Maybe<Scalars['DateTime']>;
  creative: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdvertisementArticle = {
  __typename?: 'AdvertisementArticle';
  banner: UploadFileEntityResponse;
  body: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  image: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdvertisementArticleEntity = {
  __typename?: 'AdvertisementArticleEntity';
  attributes?: Maybe<AdvertisementArticle>;
  id?: Maybe<Scalars['ID']>;
};

export type AdvertisementArticleEntityResponse = {
  __typename?: 'AdvertisementArticleEntityResponse';
  data?: Maybe<AdvertisementArticleEntity>;
};

export type AdvertisementArticleEntityResponseCollection = {
  __typename?: 'AdvertisementArticleEntityResponseCollection';
  data: Array<AdvertisementArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type AdvertisementArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AdvertisementArticleFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AdvertisementArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AdvertisementArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AdvertisementArticleInput = {
  banner?: InputMaybe<Scalars['ID']>;
  body?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AdvertisementEntity = {
  __typename?: 'AdvertisementEntity';
  attributes?: Maybe<Advertisement>;
  id?: Maybe<Scalars['ID']>;
};

export type AdvertisementEntityResponse = {
  __typename?: 'AdvertisementEntityResponse';
  data?: Maybe<AdvertisementEntity>;
};

export type AdvertisementEntityResponseCollection = {
  __typename?: 'AdvertisementEntityResponseCollection';
  data: Array<AdvertisementEntity>;
  meta: ResponseCollectionMeta;
};

export type AdvertisementFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AdvertisementFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AdvertisementFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AdvertisementFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AdvertisementInput = {
  creative?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Company = {
  __typename?: 'Company';
  address?: Maybe<Scalars['String']>;
  business_details?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['String']>;
  cover_image?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Creator>;
  description?: Maybe<Scalars['String']>;
  employee_number?: Maybe<Scalars['String']>;
  employee_statuses?: Maybe<EmployeeStatusRelationResponseCollection>;
  establishment_date?: Maybe<Scalars['Date']>;
  hp_url?: Maybe<Scalars['String']>;
  industry_categories?: Maybe<IndustryCategoryRelationResponseCollection>;
  logo?: Maybe<UploadFileEntityResponse>;
  map_url?: Maybe<Scalars['String']>;
  message_for_students?: Maybe<Scalars['String']>;
  mission?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  office_atmosphere?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type CompanyEmployee_StatusesArgs = {
  filters?: InputMaybe<EmployeeStatusFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CompanyIndustry_CategoriesArgs = {
  filters?: InputMaybe<IndustryCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CompanyEntity = {
  __typename?: 'CompanyEntity';
  attributes?: Maybe<Company>;
  id?: Maybe<Scalars['ID']>;
};

export type CompanyEntityResponse = {
  __typename?: 'CompanyEntityResponse';
  data?: Maybe<CompanyEntity>;
};

export type CompanyEntityResponseCollection = {
  __typename?: 'CompanyEntityResponseCollection';
  data: Array<CompanyEntity>;
  meta: ResponseCollectionMeta;
};

export type CompanyFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CompanyFiltersInput>>>;
  business_details?: InputMaybe<StringFilterInput>;
  company_id?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  employee_number?: InputMaybe<StringFilterInput>;
  employee_statuses?: InputMaybe<EmployeeStatusFiltersInput>;
  establishment_date?: InputMaybe<DateFilterInput>;
  hp_url?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  industry_categories?: InputMaybe<IndustryCategoryFiltersInput>;
  map_url?: InputMaybe<StringFilterInput>;
  message_for_students?: InputMaybe<StringFilterInput>;
  mission?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CompanyFiltersInput>;
  office_atmosphere?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<CompanyFiltersInput>>>;
  point?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type CompanyInput = {
  address?: InputMaybe<Scalars['String']>;
  business_details?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['String']>;
  cover_image?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  employee_number?: InputMaybe<Scalars['String']>;
  employee_statuses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  establishment_date?: InputMaybe<Scalars['Date']>;
  hp_url?: InputMaybe<Scalars['String']>;
  industry_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  logo?: InputMaybe<Scalars['ID']>;
  map_url?: InputMaybe<Scalars['String']>;
  message_for_students?: InputMaybe<Scalars['String']>;
  mission?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  office_atmosphere?: InputMaybe<Scalars['String']>;
  point?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  users_permissions_user?: InputMaybe<Scalars['ID']>;
};

export type CompanyRelationResponseCollection = {
  __typename?: 'CompanyRelationResponseCollection';
  data: Array<CompanyEntity>;
};

export type ComponentJobSkill = {
  __typename?: 'ComponentJobSkill';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Creator = {
  __typename?: 'Creator';
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type EmployeeStatus = {
  __typename?: 'EmployeeStatus';
  companies?: Maybe<CompanyRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  en_name: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EmployeeStatusCompaniesArgs = {
  filters?: InputMaybe<CompanyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EmployeeStatusEntity = {
  __typename?: 'EmployeeStatusEntity';
  attributes?: Maybe<EmployeeStatus>;
  id?: Maybe<Scalars['ID']>;
};

export type EmployeeStatusEntityResponse = {
  __typename?: 'EmployeeStatusEntityResponse';
  data?: Maybe<EmployeeStatusEntity>;
};

export type EmployeeStatusEntityResponseCollection = {
  __typename?: 'EmployeeStatusEntityResponseCollection';
  data: Array<EmployeeStatusEntity>;
  meta: ResponseCollectionMeta;
};

export type EmployeeStatusFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmployeeStatusFiltersInput>>>;
  companies?: InputMaybe<CompanyFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  en_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EmployeeStatusFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EmployeeStatusFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EmployeeStatusInput = {
  companies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  en_name?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EmployeeStatusRelationResponseCollection = {
  __typename?: 'EmployeeStatusRelationResponseCollection';
  data: Array<EmployeeStatusEntity>;
};

export type Entry = {
  __typename?: 'Entry';
  admission_year?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  department?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  furigana?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  graduate_date?: Maybe<Scalars['String']>;
  line_id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  offer_id?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EntryEntity = {
  __typename?: 'EntryEntity';
  attributes?: Maybe<Entry>;
  id?: Maybe<Scalars['ID']>;
};

export type EntryEntityResponse = {
  __typename?: 'EntryEntityResponse';
  data?: Maybe<EntryEntity>;
};

export type EntryEntityResponseCollection = {
  __typename?: 'EntryEntityResponseCollection';
  data: Array<EntryEntity>;
  meta: ResponseCollectionMeta;
};

export type EntryFiltersInput = {
  admission_year?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<EntryFiltersInput>>>;
  birthday?: InputMaybe<DateFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  department?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  furigana?: InputMaybe<StringFilterInput>;
  gender?: InputMaybe<StringFilterInput>;
  grade?: InputMaybe<StringFilterInput>;
  graduate_date?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  line_id?: InputMaybe<StringFilterInput>;
  message?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EntryFiltersInput>;
  offer_id?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<EntryFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EntryInput = {
  admission_year?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  department?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  furigana?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  grade?: InputMaybe<Scalars['String']>;
  graduate_date?: InputMaybe<Scalars['String']>;
  line_id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offer_id?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Advertisement | AdvertisementArticle | Company | ComponentJobSkill | EmployeeStatus | Entry | I18NLocale | IndustryCategory | JobCategory | MailTemplate | News | Offer | Point | Signage | Student | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VisitCount;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IndustryCategory = {
  __typename?: 'IndustryCategory';
  companies?: Maybe<CompanyRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  en_name: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type IndustryCategoryCompaniesArgs = {
  filters?: InputMaybe<CompanyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IndustryCategoryEntity = {
  __typename?: 'IndustryCategoryEntity';
  attributes?: Maybe<IndustryCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type IndustryCategoryEntityResponse = {
  __typename?: 'IndustryCategoryEntityResponse';
  data?: Maybe<IndustryCategoryEntity>;
};

export type IndustryCategoryEntityResponseCollection = {
  __typename?: 'IndustryCategoryEntityResponseCollection';
  data: Array<IndustryCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type IndustryCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IndustryCategoryFiltersInput>>>;
  companies?: InputMaybe<CompanyFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  en_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<IndustryCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IndustryCategoryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IndustryCategoryInput = {
  companies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  en_name?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IndustryCategoryRelationResponseCollection = {
  __typename?: 'IndustryCategoryRelationResponseCollection';
  data: Array<IndustryCategoryEntity>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type JobCategory = {
  __typename?: 'JobCategory';
  createdAt?: Maybe<Scalars['DateTime']>;
  en_name: Scalars['String'];
  name: Scalars['String'];
  offers?: Maybe<OfferRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type JobCategoryOffersArgs = {
  filters?: InputMaybe<OfferFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type JobCategoryEntity = {
  __typename?: 'JobCategoryEntity';
  attributes?: Maybe<JobCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type JobCategoryEntityResponse = {
  __typename?: 'JobCategoryEntityResponse';
  data?: Maybe<JobCategoryEntity>;
};

export type JobCategoryEntityResponseCollection = {
  __typename?: 'JobCategoryEntityResponseCollection';
  data: Array<JobCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type JobCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<JobCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  en_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<JobCategoryFiltersInput>;
  offers?: InputMaybe<OfferFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<JobCategoryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type JobCategoryInput = {
  en_name?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type JobCategoryRelationResponseCollection = {
  __typename?: 'JobCategoryRelationResponseCollection';
  data: Array<JobCategoryEntity>;
};

export type MailTemplate = {
  __typename?: 'MailTemplate';
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  html: Scalars['String'];
  name: Scalars['String'];
  reply_to?: Maybe<Scalars['String']>;
  subject: Scalars['String'];
  text: Scalars['String'];
  to?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MailTemplateEntity = {
  __typename?: 'MailTemplateEntity';
  attributes?: Maybe<MailTemplate>;
  id?: Maybe<Scalars['ID']>;
};

export type MailTemplateEntityResponse = {
  __typename?: 'MailTemplateEntityResponse';
  data?: Maybe<MailTemplateEntity>;
};

export type MailTemplateEntityResponseCollection = {
  __typename?: 'MailTemplateEntityResponseCollection';
  data: Array<MailTemplateEntity>;
  meta: ResponseCollectionMeta;
};

export type MailTemplateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MailTemplateFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  from?: InputMaybe<StringFilterInput>;
  html?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MailTemplateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MailTemplateFiltersInput>>>;
  reply_to?: InputMaybe<StringFilterInput>;
  subject?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  to?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MailTemplateInput = {
  from?: InputMaybe<Scalars['String']>;
  html?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  reply_to?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAdvertisement?: Maybe<AdvertisementEntityResponse>;
  createAdvertisementArticle?: Maybe<AdvertisementArticleEntityResponse>;
  createCompany?: Maybe<CompanyEntityResponse>;
  createEmployeeStatus?: Maybe<EmployeeStatusEntityResponse>;
  createEntry?: Maybe<EntryEntityResponse>;
  createIndustryCategory?: Maybe<IndustryCategoryEntityResponse>;
  createJobCategory?: Maybe<JobCategoryEntityResponse>;
  createMailTemplate?: Maybe<MailTemplateEntityResponse>;
  createNews?: Maybe<NewsEntityResponse>;
  createOffer?: Maybe<OfferEntityResponse>;
  createPoint?: Maybe<PointEntityResponse>;
  createStudent?: Maybe<StudentEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVisitCount?: Maybe<VisitCountEntityResponse>;
  deleteAdvertisement?: Maybe<AdvertisementEntityResponse>;
  deleteAdvertisementArticle?: Maybe<AdvertisementArticleEntityResponse>;
  deleteCompany?: Maybe<CompanyEntityResponse>;
  deleteEmployeeStatus?: Maybe<EmployeeStatusEntityResponse>;
  deleteEntry?: Maybe<EntryEntityResponse>;
  deleteIndustryCategory?: Maybe<IndustryCategoryEntityResponse>;
  deleteJobCategory?: Maybe<JobCategoryEntityResponse>;
  deleteMailTemplate?: Maybe<MailTemplateEntityResponse>;
  deleteNews?: Maybe<NewsEntityResponse>;
  deleteOffer?: Maybe<OfferEntityResponse>;
  deletePoint?: Maybe<PointEntityResponse>;
  deleteSignage?: Maybe<SignageEntityResponse>;
  deleteStudent?: Maybe<StudentEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVisitCount?: Maybe<VisitCountEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAdvertisement?: Maybe<AdvertisementEntityResponse>;
  updateAdvertisementArticle?: Maybe<AdvertisementArticleEntityResponse>;
  updateCompany?: Maybe<CompanyEntityResponse>;
  updateEmployeeStatus?: Maybe<EmployeeStatusEntityResponse>;
  updateEntry?: Maybe<EntryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateIndustryCategory?: Maybe<IndustryCategoryEntityResponse>;
  updateJobCategory?: Maybe<JobCategoryEntityResponse>;
  updateMailTemplate?: Maybe<MailTemplateEntityResponse>;
  updateNews?: Maybe<NewsEntityResponse>;
  updateOffer?: Maybe<OfferEntityResponse>;
  updatePoint?: Maybe<PointEntityResponse>;
  updateSignage?: Maybe<SignageEntityResponse>;
  updateStudent?: Maybe<StudentEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVisitCount?: Maybe<VisitCountEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAdvertisementArgs = {
  data: AdvertisementInput;
};


export type MutationCreateAdvertisementArticleArgs = {
  data: AdvertisementArticleInput;
};


export type MutationCreateCompanyArgs = {
  data: CompanyInput;
};


export type MutationCreateEmployeeStatusArgs = {
  data: EmployeeStatusInput;
};


export type MutationCreateEntryArgs = {
  data: EntryInput;
};


export type MutationCreateIndustryCategoryArgs = {
  data: IndustryCategoryInput;
};


export type MutationCreateJobCategoryArgs = {
  data: JobCategoryInput;
};


export type MutationCreateMailTemplateArgs = {
  data: MailTemplateInput;
};


export type MutationCreateNewsArgs = {
  data: NewsInput;
};


export type MutationCreateOfferArgs = {
  data: OfferInput;
};


export type MutationCreatePointArgs = {
  data: PointInput;
};


export type MutationCreateStudentArgs = {
  data: StudentInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVisitCountArgs = {
  data: VisitCountInput;
};


export type MutationDeleteAdvertisementArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAdvertisementArticleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmployeeStatusArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEntryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteIndustryCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteJobCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNewsArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOfferArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePointArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVisitCountArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAdvertisementArgs = {
  data: AdvertisementInput;
  id: Scalars['ID'];
};


export type MutationUpdateAdvertisementArticleArgs = {
  data: AdvertisementArticleInput;
  id: Scalars['ID'];
};


export type MutationUpdateCompanyArgs = {
  data: CompanyInput;
  id: Scalars['ID'];
};


export type MutationUpdateEmployeeStatusArgs = {
  data: EmployeeStatusInput;
  id: Scalars['ID'];
};


export type MutationUpdateEntryArgs = {
  data: EntryInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateIndustryCategoryArgs = {
  data: IndustryCategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateJobCategoryArgs = {
  data: JobCategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateMailTemplateArgs = {
  data: MailTemplateInput;
  id: Scalars['ID'];
};


export type MutationUpdateNewsArgs = {
  data: NewsInput;
  id: Scalars['ID'];
};


export type MutationUpdateOfferArgs = {
  data: OfferInput;
  id: Scalars['ID'];
};


export type MutationUpdatePointArgs = {
  data: PointInput;
  id: Scalars['ID'];
};


export type MutationUpdateSignageArgs = {
  data: SignageInput;
};


export type MutationUpdateStudentArgs = {
  data: StudentInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateVisitCountArgs = {
  data: VisitCountInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type News = {
  __typename?: 'News';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NewsEntity = {
  __typename?: 'NewsEntity';
  attributes?: Maybe<News>;
  id?: Maybe<Scalars['ID']>;
};

export type NewsEntityResponse = {
  __typename?: 'NewsEntityResponse';
  data?: Maybe<NewsEntity>;
};

export type NewsEntityResponseCollection = {
  __typename?: 'NewsEntityResponseCollection';
  data: Array<NewsEntity>;
  meta: ResponseCollectionMeta;
};

export type NewsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NewsFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<NewsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewsFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NewsInput = {
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Offer = {
  __typename?: 'Offer';
  about_company?: Maybe<Scalars['String']>;
  about_job: Scalars['String'];
  application_number?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Creator>;
  deadline: Scalars['Date'];
  description: Scalars['String'];
  end_at?: Maybe<Scalars['Date']>;
  form_url: Scalars['String'];
  gallery?: Maybe<UploadFileRelationResponseCollection>;
  hourly_wage: Scalars['String'];
  image: UploadFileEntityResponse;
  job_categories?: Maybe<JobCategoryRelationResponseCollection>;
  job_description?: Maybe<Scalars['String']>;
  job_points?: Maybe<PointRelationResponseCollection>;
  people?: Maybe<Scalars['String']>;
  place: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  qualification: Scalars['String'];
  recruitment_terms: Scalars['String'];
  start_at?: Maybe<Scalars['Date']>;
  target: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type OfferGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type OfferJob_CategoriesArgs = {
  filters?: InputMaybe<JobCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type OfferJob_PointsArgs = {
  filters?: InputMaybe<PointFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OfferEntity = {
  __typename?: 'OfferEntity';
  attributes?: Maybe<Offer>;
  id?: Maybe<Scalars['ID']>;
};

export type OfferEntityResponse = {
  __typename?: 'OfferEntityResponse';
  data?: Maybe<OfferEntity>;
};

export type OfferEntityResponseCollection = {
  __typename?: 'OfferEntityResponseCollection';
  data: Array<OfferEntity>;
  meta: ResponseCollectionMeta;
};

export type OfferFiltersInput = {
  about_company?: InputMaybe<StringFilterInput>;
  about_job?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<OfferFiltersInput>>>;
  application_number?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  deadline?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  end_at?: InputMaybe<DateFilterInput>;
  form_url?: InputMaybe<StringFilterInput>;
  hourly_wage?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  job_categories?: InputMaybe<JobCategoryFiltersInput>;
  job_description?: InputMaybe<StringFilterInput>;
  job_points?: InputMaybe<PointFiltersInput>;
  not?: InputMaybe<OfferFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OfferFiltersInput>>>;
  people?: InputMaybe<StringFilterInput>;
  place?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  qualification?: InputMaybe<StringFilterInput>;
  recruitment_terms?: InputMaybe<StringFilterInput>;
  start_at?: InputMaybe<DateFilterInput>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OfferInput = {
  about_company?: InputMaybe<Scalars['String']>;
  about_job?: InputMaybe<Scalars['String']>;
  application_number?: InputMaybe<Scalars['Int']>;
  deadline?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  end_at?: InputMaybe<Scalars['Date']>;
  form_url?: InputMaybe<Scalars['String']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  hourly_wage?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  job_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  job_description?: InputMaybe<Scalars['String']>;
  job_points?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  people?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  qualification?: InputMaybe<Scalars['String']>;
  recruitment_terms?: InputMaybe<Scalars['String']>;
  start_at?: InputMaybe<Scalars['Date']>;
  target?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type OfferRelationResponseCollection = {
  __typename?: 'OfferRelationResponseCollection';
  data: Array<OfferEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Point = {
  __typename?: 'Point';
  createdAt?: Maybe<Scalars['DateTime']>;
  en_name: Scalars['String'];
  name: Scalars['String'];
  offers?: Maybe<OfferRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PointOffersArgs = {
  filters?: InputMaybe<OfferFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PointEntity = {
  __typename?: 'PointEntity';
  attributes?: Maybe<Point>;
  id?: Maybe<Scalars['ID']>;
};

export type PointEntityResponse = {
  __typename?: 'PointEntityResponse';
  data?: Maybe<PointEntity>;
};

export type PointEntityResponseCollection = {
  __typename?: 'PointEntityResponseCollection';
  data: Array<PointEntity>;
  meta: ResponseCollectionMeta;
};

export type PointFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PointFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  en_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PointFiltersInput>;
  offers?: InputMaybe<OfferFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PointFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PointInput = {
  en_name?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type PointRelationResponseCollection = {
  __typename?: 'PointRelationResponseCollection';
  data: Array<PointEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  advertisement?: Maybe<AdvertisementEntityResponse>;
  advertisementArticle?: Maybe<AdvertisementArticleEntityResponse>;
  advertisementArticles?: Maybe<AdvertisementArticleEntityResponseCollection>;
  advertisements?: Maybe<AdvertisementEntityResponseCollection>;
  companies?: Maybe<CompanyEntityResponseCollection>;
  company?: Maybe<CompanyEntityResponse>;
  employeeStatus?: Maybe<EmployeeStatusEntityResponse>;
  employeeStatuses?: Maybe<EmployeeStatusEntityResponseCollection>;
  entries?: Maybe<EntryEntityResponseCollection>;
  entry?: Maybe<EntryEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  industryCategories?: Maybe<IndustryCategoryEntityResponseCollection>;
  industryCategory?: Maybe<IndustryCategoryEntityResponse>;
  jobCategories?: Maybe<JobCategoryEntityResponseCollection>;
  jobCategory?: Maybe<JobCategoryEntityResponse>;
  mailTemplate?: Maybe<MailTemplateEntityResponse>;
  mailTemplates?: Maybe<MailTemplateEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  news?: Maybe<NewsEntityResponse>;
  newses?: Maybe<NewsEntityResponseCollection>;
  offer?: Maybe<OfferEntityResponse>;
  offers?: Maybe<OfferEntityResponseCollection>;
  point?: Maybe<PointEntityResponse>;
  points?: Maybe<PointEntityResponseCollection>;
  signage?: Maybe<SignageEntityResponse>;
  student?: Maybe<StudentEntityResponse>;
  students?: Maybe<StudentEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  visitCount?: Maybe<VisitCountEntityResponse>;
  visitCounts?: Maybe<VisitCountEntityResponseCollection>;
};


export type QueryAdvertisementArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAdvertisementArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAdvertisementArticlesArgs = {
  filters?: InputMaybe<AdvertisementArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAdvertisementsArgs = {
  filters?: InputMaybe<AdvertisementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCompaniesArgs = {
  filters?: InputMaybe<CompanyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmployeeStatusArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmployeeStatusesArgs = {
  filters?: InputMaybe<EmployeeStatusFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEntriesArgs = {
  filters?: InputMaybe<EntryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEntryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryIndustryCategoriesArgs = {
  filters?: InputMaybe<IndustryCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryIndustryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryJobCategoriesArgs = {
  filters?: InputMaybe<JobCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryJobCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMailTemplatesArgs = {
  filters?: InputMaybe<MailTemplateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNewsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNewsesArgs = {
  filters?: InputMaybe<NewsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOfferArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOffersArgs = {
  filters?: InputMaybe<OfferFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPointArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPointsArgs = {
  filters?: InputMaybe<PointFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySignageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryStudentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryStudentsArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVisitCountArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryVisitCountsArgs = {
  filters?: InputMaybe<VisitCountFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Signage = {
  __typename?: 'Signage';
  createdAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<UploadFileRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  videos?: Maybe<UploadFileRelationResponseCollection>;
};


export type SignageImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SignageVideosArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SignageEntity = {
  __typename?: 'SignageEntity';
  attributes?: Maybe<Signage>;
  id?: Maybe<Scalars['ID']>;
};

export type SignageEntityResponse = {
  __typename?: 'SignageEntityResponse';
  data?: Maybe<SignageEntity>;
};

export type SignageInput = {
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  createdAt?: Maybe<Scalars['DateTime']>;
  department_jp: Scalars['String'];
  grade_jp: Scalars['String'];
  grade_updated_at?: Maybe<Scalars['Date']>;
  is_interested_in_internship: Scalars['Boolean'];
  line_id: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  registered_at?: Maybe<Scalars['DateTime']>;
  to_receive_job_info: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
  visit_counts?: Maybe<VisitCountRelationResponseCollection>;
  will_start_working: Scalars['Boolean'];
};


export type StudentVisit_CountsArgs = {
  filters?: InputMaybe<VisitCountFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StudentEntity = {
  __typename?: 'StudentEntity';
  attributes?: Maybe<Student>;
  id?: Maybe<Scalars['ID']>;
};

export type StudentEntityResponse = {
  __typename?: 'StudentEntityResponse';
  data?: Maybe<StudentEntity>;
};

export type StudentEntityResponseCollection = {
  __typename?: 'StudentEntityResponseCollection';
  data: Array<StudentEntity>;
  meta: ResponseCollectionMeta;
};

export type StudentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  department_jp?: InputMaybe<StringFilterInput>;
  grade_jp?: InputMaybe<StringFilterInput>;
  grade_updated_at?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  is_interested_in_internship?: InputMaybe<BooleanFilterInput>;
  line_id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<StudentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  registered_at?: InputMaybe<DateTimeFilterInput>;
  to_receive_job_info?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  visit_counts?: InputMaybe<VisitCountFiltersInput>;
  will_start_working?: InputMaybe<BooleanFilterInput>;
};

export type StudentInput = {
  department_jp?: InputMaybe<Scalars['String']>;
  grade_jp?: InputMaybe<Scalars['String']>;
  grade_updated_at?: InputMaybe<Scalars['Date']>;
  is_interested_in_internship?: InputMaybe<Scalars['Boolean']>;
  line_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  registered_at?: InputMaybe<Scalars['DateTime']>;
  to_receive_job_info?: InputMaybe<Scalars['Boolean']>;
  users_permissions_user?: InputMaybe<Scalars['ID']>;
  visit_counts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  will_start_working?: InputMaybe<Scalars['Boolean']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  company?: Maybe<CompanyEntityResponse>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  department: Scalars['String'];
  email: Scalars['String'];
  grade?: Maybe<Scalars['String']>;
  is_company?: Maybe<Scalars['Boolean']>;
  is_interested_in_internship?: Maybe<Scalars['Boolean']>;
  line_id: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  student?: Maybe<StudentEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  will_start_working?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  company?: InputMaybe<CompanyFiltersInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  department?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  grade?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  is_company?: InputMaybe<BooleanFilterInput>;
  is_interested_in_internship?: InputMaybe<BooleanFilterInput>;
  line_id?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  student?: InputMaybe<StudentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  will_start_working?: InputMaybe<BooleanFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  company?: InputMaybe<Scalars['ID']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  department?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  grade?: InputMaybe<Scalars['String']>;
  is_company?: InputMaybe<Scalars['Boolean']>;
  is_interested_in_internship?: InputMaybe<Scalars['Boolean']>;
  line_id?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  student?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
  will_start_working?: InputMaybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type VisitCount = {
  __typename?: 'VisitCount';
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  student?: Maybe<StudentEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VisitCountEntity = {
  __typename?: 'VisitCountEntity';
  attributes?: Maybe<VisitCount>;
  id?: Maybe<Scalars['ID']>;
};

export type VisitCountEntityResponse = {
  __typename?: 'VisitCountEntityResponse';
  data?: Maybe<VisitCountEntity>;
};

export type VisitCountEntityResponseCollection = {
  __typename?: 'VisitCountEntityResponseCollection';
  data: Array<VisitCountEntity>;
  meta: ResponseCollectionMeta;
};

export type VisitCountFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VisitCountFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<VisitCountFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VisitCountFiltersInput>>>;
  student?: InputMaybe<StudentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VisitCountInput = {
  date?: InputMaybe<Scalars['DateTime']>;
  student?: InputMaybe<Scalars['ID']>;
};

export type VisitCountRelationResponseCollection = {
  __typename?: 'VisitCountRelationResponseCollection';
  data: Array<VisitCountEntity>;
};

export type GetAdvertisementArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdvertisementArticlesQuery = { __typename?: 'Query', advertisementArticles?: { __typename?: 'AdvertisementArticleEntityResponseCollection', data: Array<{ __typename?: 'AdvertisementArticleEntity', id?: string | null, attributes?: { __typename?: 'AdvertisementArticle', title: string, publishedAt?: any | null, updatedAt?: any | null, banner: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, alternativeText?: string | null, formats?: any | null } | null } | null } } | null }> } | null };

export type GetAdvertisementArticleIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetAdvertisementArticleIdQuery = { __typename?: 'Query', advertisementArticle?: { __typename?: 'AdvertisementArticleEntityResponse', data?: { __typename?: 'AdvertisementArticleEntity', id?: string | null, attributes?: { __typename?: 'AdvertisementArticle', title: string, body: string, publishedAt?: any | null, updatedAt?: any | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, alternativeText?: string | null, formats?: any | null } | null } | null }, banner: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null };

export type GetadvertisementArticlePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetadvertisementArticlePathsQuery = { __typename?: 'Query', advertisementArticles?: { __typename?: 'AdvertisementArticleEntityResponseCollection', data: Array<{ __typename?: 'AdvertisementArticleEntity', id?: string | null }> } | null };

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', companies?: { __typename?: 'CompanyEntityResponseCollection', data: Array<{ __typename?: 'CompanyEntity', id?: string | null, attributes?: { __typename?: 'Company', establishment_date?: any | null, address?: string | null, map_url?: string | null, mission?: string | null, name?: string | null, description?: string | null, company_id?: string | null, industry_categories?: { __typename?: 'IndustryCategoryRelationResponseCollection', data: Array<{ __typename?: 'IndustryCategoryEntity', id?: string | null, attributes?: { __typename?: 'IndustryCategory', name: string, en_name: string } | null }> } | null, createdBy?: { __typename?: 'Creator', id?: number | null, firstname?: string | null, lastname?: string | null } | null, cover_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, formats?: any | null, url: string, alternativeText?: string | null } | null } | null } | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, formats?: any | null, url: string, alternativeText?: string | null } | null } | null } | null } | null }> } | null };

export type GetRecruiterByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetRecruiterByIdQuery = { __typename?: 'Query', company?: { __typename?: 'CompanyEntityResponse', data?: { __typename?: 'CompanyEntity', id?: string | null, attributes?: { __typename?: 'Company', cover_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, createdBy?: { __typename?: 'Creator', id?: number | null, firstname?: string | null, lastname?: string | null } | null } | null } | null } | null };

export type GetCompanyByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCompanyByIdQuery = { __typename?: 'Query', company?: { __typename?: 'CompanyEntityResponse', data?: { __typename?: 'CompanyEntity', id?: string | null, attributes?: { __typename?: 'Company', business_details?: string | null, office_atmosphere?: string | null, message_for_students?: string | null, employee_number?: string | null, establishment_date?: any | null, address?: string | null, map_url?: string | null, mission?: string | null, name?: string | null, description?: string | null, company_id?: string | null, employee_statuses?: { __typename?: 'EmployeeStatusRelationResponseCollection', data: Array<{ __typename?: 'EmployeeStatusEntity', id?: string | null, attributes?: { __typename?: 'EmployeeStatus', name: string, en_name: string } | null }> } | null, industry_categories?: { __typename?: 'IndustryCategoryRelationResponseCollection', data: Array<{ __typename?: 'IndustryCategoryEntity', id?: string | null, attributes?: { __typename?: 'IndustryCategory', name: string, en_name: string } | null }> } | null, createdBy?: { __typename?: 'Creator', id?: number | null, firstname?: string | null, lastname?: string | null } | null, cover_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, formats?: any | null, url: string, alternativeText?: string | null } | null } | null } | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, formats?: any | null, url: string, alternativeText?: string | null } | null } | null } | null } | null } | null } | null };

export type GetNewsByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetNewsByIdQuery = { __typename?: 'Query', news?: { __typename?: 'NewsEntityResponse', data?: { __typename?: 'NewsEntity', id?: string | null, attributes?: { __typename?: 'News', title: string, date: any } | null } | null } | null };

export type GetNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewsQuery = { __typename?: 'Query', newses?: { __typename?: 'NewsEntityResponseCollection', data: Array<{ __typename?: 'NewsEntity', id?: string | null, attributes?: { __typename?: 'News', title: string, date: any } | null }> } | null };

export type GetOfferByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetOfferByIdQuery = { __typename?: 'Query', offer?: { __typename?: 'OfferEntityResponse', data?: { __typename?: 'OfferEntity', id?: string | null, attributes?: { __typename?: 'Offer', form_url: string, title: string, place: string, hourly_wage: string, description: string, about_job: string, recruitment_terms: string, target: string, qualification: string, people?: string | null, job_description?: string | null, about_company?: string | null, job_points?: { __typename?: 'PointRelationResponseCollection', data: Array<{ __typename?: 'PointEntity', id?: string | null, attributes?: { __typename?: 'Point', name: string, en_name: string } | null }> } | null, job_categories?: { __typename?: 'JobCategoryRelationResponseCollection', data: Array<{ __typename?: 'JobCategoryEntity', id?: string | null, attributes?: { __typename?: 'JobCategory', name: string, en_name: string } | null }> } | null, createdBy?: { __typename?: 'Creator', id?: number | null, firstname?: string | null, lastname?: string | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, alternativeText?: string | null, formats?: any | null } | null } | null }, gallery?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, alternativeText?: string | null, formats?: any | null } | null }> } | null } | null } | null } | null };

export type GetOfferPathsQueryVariables = Exact<{
  today?: InputMaybe<Scalars['Date']>;
}>;


export type GetOfferPathsQuery = { __typename?: 'Query', offers?: { __typename?: 'OfferEntityResponseCollection', data: Array<{ __typename?: 'OfferEntity', id?: string | null }> } | null };

export type GetOffersAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOffersAllQuery = { __typename?: 'Query', offers?: { __typename?: 'OfferEntityResponseCollection', data: Array<{ __typename?: 'OfferEntity', id?: string | null, attributes?: { __typename?: 'Offer', title: string, place: string, hourly_wage: string, deadline: any, people?: string | null, job_points?: { __typename?: 'PointRelationResponseCollection', data: Array<{ __typename?: 'PointEntity', id?: string | null, attributes?: { __typename?: 'Point', name: string, en_name: string } | null }> } | null, job_categories?: { __typename?: 'JobCategoryRelationResponseCollection', data: Array<{ __typename?: 'JobCategoryEntity', id?: string | null, attributes?: { __typename?: 'JobCategory', name: string, en_name: string } | null }> } | null, createdBy?: { __typename?: 'Creator', id?: number | null, firstname?: string | null, lastname?: string | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, alternativeText?: string | null, formats?: any | null } | null } | null }, gallery?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, alternativeText?: string | null, formats?: any | null } | null }> } | null } | null }> } | null };

export type GetAdvertisementsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdvertisementsQuery = { __typename?: 'Query', advertisements?: { __typename?: 'AdvertisementEntityResponseCollection', data: Array<{ __typename?: 'AdvertisementEntity', id?: string | null, attributes?: { __typename?: 'Advertisement', publishedAt?: any | null, creative: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, formats?: any | null, alternativeText?: string | null, url: string } | null } | null } } | null }> } | null };

export type GetSinageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSinageQuery = { __typename?: 'Query', signage?: { __typename?: 'SignageEntityResponse', data?: { __typename?: 'SignageEntity', id?: string | null, attributes?: { __typename?: 'Signage', videos?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null } | null } | null } | null };

export type GetStudentByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetStudentByIdQuery = { __typename?: 'Query', student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', grade_updated_at?: any | null, name: string, line_id: string, grade_jp: string, registered_at?: any | null } | null } | null } | null };

export type UpdpateGradeMutationVariables = Exact<{
  id: Scalars['ID'];
  grade?: InputMaybe<Scalars['String']>;
  to_receive_job_info?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['Date']>;
}>;


export type UpdpateGradeMutation = { __typename?: 'Mutation', updateStudent?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', grade_jp: string, grade_updated_at?: any | null, name: string } | null } | null } | null };

export type PostStudentMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  user_id: Scalars['ID'];
  phone?: InputMaybe<Scalars['String']>;
  line_id?: InputMaybe<Scalars['String']>;
  department_jp?: InputMaybe<Scalars['String']>;
  grade_jp?: InputMaybe<Scalars['String']>;
  is_interested_in_internship?: InputMaybe<Scalars['Boolean']>;
  will_start_working?: InputMaybe<Scalars['Boolean']>;
  grade_updated_at?: InputMaybe<Scalars['Date']>;
  to_receive_job_info?: InputMaybe<Scalars['Boolean']>;
  registered_at?: InputMaybe<Scalars['DateTime']>;
}>;


export type PostStudentMutation = { __typename?: 'Mutation', createStudent?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null } | null } | null };

export type GetGradeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetGradeQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', grade?: string | null } | null } | null } | null };

export type GetUsersByLineIdQueryVariables = Exact<{
  lineId?: InputMaybe<Scalars['String']>;
}>;


export type GetUsersByLineIdQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, confirmed?: boolean | null, grade?: string | null, student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', line_id: string, to_receive_job_info: boolean, grade_jp: string, department_jp: string, grade_updated_at?: any | null, name: string, registered_at?: any | null } | null } | null } | null } | null }> } | null };

export type PostVisitCountMutationVariables = Exact<{
  id: Scalars['ID'];
  date?: InputMaybe<Scalars['DateTime']>;
}>;


export type PostVisitCountMutation = { __typename?: 'Mutation', createVisitCount?: { __typename?: 'VisitCountEntityResponse', data?: { __typename?: 'VisitCountEntity', id?: string | null, attributes?: { __typename?: 'VisitCount', date: any } | null } | null } | null };

export type GetVisitCountsByStudentIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetVisitCountsByStudentIdQuery = { __typename?: 'Query', visitCounts?: { __typename?: 'VisitCountEntityResponseCollection', data: Array<{ __typename?: 'VisitCountEntity', id?: string | null, attributes?: { __typename?: 'VisitCount', date: any } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type GetVisitCountTotalByStudentIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetVisitCountTotalByStudentIdQuery = { __typename?: 'Query', visitCounts?: { __typename?: 'VisitCountEntityResponseCollection', data: Array<{ __typename?: 'VisitCountEntity', id?: string | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type GetVisitCountsByStudentIdAndDatesQueryVariables = Exact<{
  id: Scalars['ID'];
  start_date?: InputMaybe<Scalars['DateTime']>;
  end_date?: InputMaybe<Scalars['DateTime']>;
}>;


export type GetVisitCountsByStudentIdAndDatesQuery = { __typename?: 'Query', visitCounts?: { __typename?: 'VisitCountEntityResponseCollection', data: Array<{ __typename?: 'VisitCountEntity', id?: string | null, attributes?: { __typename?: 'VisitCount', date: any } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };


export const GetAdvertisementArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAdvertisementArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advertisementArticles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"publishedAt:desc","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAdvertisementArticlesQuery, GetAdvertisementArticlesQueryVariables>;
export const GetAdvertisementArticleIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAdvertisementArticleId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advertisementArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAdvertisementArticleIdQuery, GetAdvertisementArticleIdQueryVariables>;
export const GetadvertisementArticlePathsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getadvertisementArticlePaths"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advertisementArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetadvertisementArticlePathsQuery, GetadvertisementArticlePathsQueryVariables>;
export const GetCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCompanies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"establishment_date"}},{"kind":"Field","name":{"kind":"Name","value":"industry_categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"en_name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"map_url"}},{"kind":"Field","name":{"kind":"Name","value":"mission"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"mission"}},{"kind":"Field","name":{"kind":"Name","value":"company_id"}},{"kind":"Field","name":{"kind":"Name","value":"cover_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const GetRecruiterByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRecruiterById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cover_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRecruiterByIdQuery, GetRecruiterByIdQueryVariables>;
export const GetCompanyByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCompanyByID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"business_details"}},{"kind":"Field","name":{"kind":"Name","value":"office_atmosphere"}},{"kind":"Field","name":{"kind":"Name","value":"message_for_students"}},{"kind":"Field","name":{"kind":"Name","value":"employee_number"}},{"kind":"Field","name":{"kind":"Name","value":"employee_statuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"en_name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"establishment_date"}},{"kind":"Field","name":{"kind":"Name","value":"industry_categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"en_name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"map_url"}},{"kind":"Field","name":{"kind":"Name","value":"mission"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"mission"}},{"kind":"Field","name":{"kind":"Name","value":"company_id"}},{"kind":"Field","name":{"kind":"Name","value":"cover_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCompanyByIdQuery, GetCompanyByIdQueryVariables>;
export const GetNewsByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getNewsById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"news"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNewsByIdQuery, GetNewsByIdQueryVariables>;
export const GetNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getNews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"date:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"15"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNewsQuery, GetNewsQueryVariables>;
export const GetOfferByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOfferById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"form_url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"place"}},{"kind":"Field","name":{"kind":"Name","value":"hourly_wage"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"about_job"}},{"kind":"Field","name":{"kind":"Name","value":"recruitment_terms"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"qualification"}},{"kind":"Field","name":{"kind":"Name","value":"people"}},{"kind":"Field","name":{"kind":"Name","value":"job_description"}},{"kind":"Field","name":{"kind":"Name","value":"about_company"}},{"kind":"Field","name":{"kind":"Name","value":"job_points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"en_name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"job_categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"en_name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOfferByIdQuery, GetOfferByIdQueryVariables>;
export const GetOfferPathsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOfferPaths"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"today"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"publishedAt:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"deadline"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetOfferPathsQuery, GetOfferPathsQueryVariables>;
export const GetOffersAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOffersAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"publishedAt:desc","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"place"}},{"kind":"Field","name":{"kind":"Name","value":"hourly_wage"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"people"}},{"kind":"Field","name":{"kind":"Name","value":"job_points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"en_name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"job_categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"en_name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOffersAllQuery, GetOffersAllQueryVariables>;
export const GetAdvertisementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAdvertisements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advertisements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"updatedAt:desc","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creative"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAdvertisementsQuery, GetAdvertisementsQueryVariables>;
export const GetSinageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSinage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"id:asc","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSinageQuery, GetSinageQueryVariables>;
export const GetStudentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStudentByID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade_updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"line_id"}},{"kind":"Field","name":{"kind":"Name","value":"grade_jp"}},{"kind":"Field","name":{"kind":"Name","value":"registered_at"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetStudentByIdQuery, GetStudentByIdQueryVariables>;
export const UpdpateGradeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updpateGrade"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"grade"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to_receive_job_info"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_at"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateStudent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"grade_jp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"grade"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"to_receive_job_info"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to_receive_job_info"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"grade_updated_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_at"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade_jp"}},{"kind":"Field","name":{"kind":"Name","value":"grade_updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdpateGradeMutation, UpdpateGradeMutationVariables>;
export const PostStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"line_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"department_jp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"grade_jp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"is_interested_in_internship"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"will_start_working"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"grade_updated_at"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to_receive_job_info"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registered_at"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStudent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"users_permissions_user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"line_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"line_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"department_jp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"department_jp"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"grade_jp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"grade_jp"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_interested_in_internship"},"value":{"kind":"Variable","name":{"kind":"Name","value":"is_interested_in_internship"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"will_start_working"},"value":{"kind":"Variable","name":{"kind":"Name","value":"will_start_working"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"grade_updated_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"grade_updated_at"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"to_receive_job_info"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to_receive_job_info"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"registered_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registered_at"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<PostStudentMutation, PostStudentMutationVariables>;
export const GetGradeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGrade"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersPermissionsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetGradeQuery, GetGradeQueryVariables>;
export const GetUsersByLineIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsersByLineId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lineId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersPermissionsUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"line_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lineId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"confirmed"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"line_id"}},{"kind":"Field","name":{"kind":"Name","value":"to_receive_job_info"}},{"kind":"Field","name":{"kind":"Name","value":"grade_jp"}},{"kind":"Field","name":{"kind":"Name","value":"department_jp"}},{"kind":"Field","name":{"kind":"Name","value":"grade_updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"registered_at"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersByLineIdQuery, GetUsersByLineIdQueryVariables>;
export const PostVisitCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postVisitCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createVisitCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"student"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PostVisitCountMutation, PostVisitCountMutationVariables>;
export const GetVisitCountsByStudentIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getVisitCountsByStudentId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"visitCounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"student"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetVisitCountsByStudentIdQuery, GetVisitCountsByStudentIdQueryVariables>;
export const GetVisitCountTotalByStudentIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getVisitCountTotalByStudentId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"visitCounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"student"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetVisitCountTotalByStudentIdQuery, GetVisitCountTotalByStudentIdQueryVariables>;
export const GetVisitCountsByStudentIdAndDatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getVisitCountsByStudentIdAndDates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"visitCounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"student"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetVisitCountsByStudentIdAndDatesQuery, GetVisitCountsByStudentIdAndDatesQueryVariables>;