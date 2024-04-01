/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
  /** A time string with format HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Agent = {
  __typename?: 'Agent';
  contact_request?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  job_link?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  manager_phone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  remarks?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AgentEntity = {
  __typename?: 'AgentEntity';
  attributes?: Maybe<Agent>;
  id?: Maybe<Scalars['ID']>;
};

export type AgentEntityResponse = {
  __typename?: 'AgentEntityResponse';
  data?: Maybe<AgentEntity>;
};

export type AgentEntityResponseCollection = {
  __typename?: 'AgentEntityResponseCollection';
  data: Array<AgentEntity>;
  meta: ResponseCollectionMeta;
};

export type AgentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AgentFiltersInput>>>;
  contact_request?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  job_link?: InputMaybe<StringFilterInput>;
  level?: InputMaybe<StringFilterInput>;
  manager_phone?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AgentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AgentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  remarks?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AgentInput = {
  contact_request?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  job_link?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['String']>;
  manager_phone?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  remarks?: InputMaybe<Scalars['String']>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  establishment_date?: Maybe<Scalars['String']>;
  manager_name?: Maybe<Scalars['String']>;
  manager_phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  number_of_employees?: Maybe<Scalars['String']>;
  offers?: Maybe<OfferRelationResponseCollection>;
  place: Scalars['String'];
  plan?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  representative?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type CompanyOffersArgs = {
  filters?: InputMaybe<OfferFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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
  and?: InputMaybe<Array<InputMaybe<CompanyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  establishment_date?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  manager_name?: InputMaybe<StringFilterInput>;
  manager_phone?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CompanyFiltersInput>;
  number_of_employees?: InputMaybe<StringFilterInput>;
  offers?: InputMaybe<OfferFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CompanyFiltersInput>>>;
  place?: InputMaybe<StringFilterInput>;
  plan?: InputMaybe<StringFilterInput>;
  remarks?: InputMaybe<StringFilterInput>;
  representative?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type CompanyInput = {
  email?: InputMaybe<Scalars['String']>;
  establishment_date?: InputMaybe<Scalars['String']>;
  manager_name?: InputMaybe<Scalars['String']>;
  manager_phone?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  number_of_employees?: InputMaybe<Scalars['String']>;
  offers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  place?: InputMaybe<Scalars['String']>;
  plan?: InputMaybe<Scalars['String']>;
  remarks?: InputMaybe<Scalars['String']>;
  representative?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentAtmosphereAtmosphere = {
  __typename?: 'ComponentAtmosphereAtmosphere';
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentAtmosphereAtmosphereFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentAtmosphereAtmosphereFiltersInput>>
  >;
  not?: InputMaybe<ComponentAtmosphereAtmosphereFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAtmosphereAtmosphereFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentAtmosphereAtmosphereInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt?: Maybe<Scalars['DateTime']>;
  department?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employment_status?: Maybe<Scalars['String']>;
  item?: Maybe<Scalars['String']>;
  listing_details?: Maybe<Scalars['String']>;
  manager_name?: Maybe<Scalars['String']>;
  manager_phone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  remarks?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactEntityResponseCollection = {
  __typename?: 'ContactEntityResponseCollection';
  data: Array<ContactEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  department?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  employment_status?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  item?: InputMaybe<StringFilterInput>;
  listing_details?: InputMaybe<StringFilterInput>;
  manager_name?: InputMaybe<StringFilterInput>;
  manager_phone?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  period?: InputMaybe<StringFilterInput>;
  place?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  remarks?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ContactInput = {
  department?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  employment_status?: InputMaybe<Scalars['String']>;
  item?: InputMaybe<Scalars['String']>;
  listing_details?: InputMaybe<Scalars['String']>;
  manager_name?: InputMaybe<Scalars['String']>;
  manager_phone?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  remarks?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CoworkingContact = {
  __typename?: 'CoworkingContact';
  company_name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  department?: Maybe<Scalars['String']>;
  desired_visit_date?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  item?: Maybe<Scalars['String']>;
  listing_details?: Maybe<Scalars['String']>;
  manager_name?: Maybe<Scalars['String']>;
  manager_phone?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type CoworkingContactEntity = {
  __typename?: 'CoworkingContactEntity';
  attributes?: Maybe<CoworkingContact>;
  id?: Maybe<Scalars['ID']>;
};

export type CoworkingContactEntityResponse = {
  __typename?: 'CoworkingContactEntityResponse';
  data?: Maybe<CoworkingContactEntity>;
};

export type CoworkingContactEntityResponseCollection = {
  __typename?: 'CoworkingContactEntityResponseCollection';
  data: Array<CoworkingContactEntity>;
  meta: ResponseCollectionMeta;
};

export type CoworkingContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CoworkingContactFiltersInput>>>;
  company_name?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  department?: InputMaybe<StringFilterInput>;
  desired_visit_date?: InputMaybe<DateFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  item?: InputMaybe<StringFilterInput>;
  listing_details?: InputMaybe<StringFilterInput>;
  manager_name?: InputMaybe<StringFilterInput>;
  manager_phone?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CoworkingContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CoworkingContactFiltersInput>>>;
  place?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type CoworkingContactInput = {
  company_name?: InputMaybe<Scalars['String']>;
  department?: InputMaybe<Scalars['String']>;
  desired_visit_date?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  item?: InputMaybe<Scalars['String']>;
  listing_details?: InputMaybe<Scalars['String']>;
  manager_name?: InputMaybe<Scalars['String']>;
  manager_phone?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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

export type GenericMorph =
  | Agent
  | Company
  | ComponentAtmosphereAtmosphere
  | Contact
  | CoworkingContact
  | I18NLocale
  | JobType
  | LineAdDistributionSetting
  | MailTemplate
  | MinPeriod
  | MinWorkingday
  | Occupation
  | Offer
  | Point
  | Submission
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

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

export type JobType = {
  __typename?: 'JobType';
  createdAt?: Maybe<Scalars['DateTime']>;
  gift?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobTypeEntity = {
  __typename?: 'JobTypeEntity';
  attributes?: Maybe<JobType>;
  id?: Maybe<Scalars['ID']>;
};

export type JobTypeEntityResponse = {
  __typename?: 'JobTypeEntityResponse';
  data?: Maybe<JobTypeEntity>;
};

export type JobTypeEntityResponseCollection = {
  __typename?: 'JobTypeEntityResponseCollection';
  data: Array<JobTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type JobTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<JobTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  gift?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<JobTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<JobTypeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type JobTypeInput = {
  gift?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LineAdDistributionSetting = {
  __typename?: 'LineAdDistributionSetting';
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_date: Scalars['Int'];
  delivery_time: Scalars['Time'];
  is_allowed: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LineAdDistributionSettingEntity = {
  __typename?: 'LineAdDistributionSettingEntity';
  attributes?: Maybe<LineAdDistributionSetting>;
  id?: Maybe<Scalars['ID']>;
};

export type LineAdDistributionSettingEntityResponse = {
  __typename?: 'LineAdDistributionSettingEntityResponse';
  data?: Maybe<LineAdDistributionSettingEntity>;
};

export type LineAdDistributionSettingInput = {
  delivery_date?: InputMaybe<Scalars['Int']>;
  delivery_time?: InputMaybe<Scalars['Time']>;
  is_allowed?: InputMaybe<Scalars['Boolean']>;
};

export type MailTemplate = {
  __typename?: 'MailTemplate';
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
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

export type MinPeriod = {
  __typename?: 'MinPeriod';
  createdAt?: Maybe<Scalars['DateTime']>;
  period?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MinPeriodEntity = {
  __typename?: 'MinPeriodEntity';
  attributes?: Maybe<MinPeriod>;
  id?: Maybe<Scalars['ID']>;
};

export type MinPeriodEntityResponse = {
  __typename?: 'MinPeriodEntityResponse';
  data?: Maybe<MinPeriodEntity>;
};

export type MinPeriodEntityResponseCollection = {
  __typename?: 'MinPeriodEntityResponseCollection';
  data: Array<MinPeriodEntity>;
  meta: ResponseCollectionMeta;
};

export type MinPeriodFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MinPeriodFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MinPeriodFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MinPeriodFiltersInput>>>;
  period?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MinPeriodInput = {
  period?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MinWorkingday = {
  __typename?: 'MinWorkingday';
  createdAt?: Maybe<Scalars['DateTime']>;
  days?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MinWorkingdayEntity = {
  __typename?: 'MinWorkingdayEntity';
  attributes?: Maybe<MinWorkingday>;
  id?: Maybe<Scalars['ID']>;
};

export type MinWorkingdayEntityResponse = {
  __typename?: 'MinWorkingdayEntityResponse';
  data?: Maybe<MinWorkingdayEntity>;
};

export type MinWorkingdayEntityResponseCollection = {
  __typename?: 'MinWorkingdayEntityResponseCollection';
  data: Array<MinWorkingdayEntity>;
  meta: ResponseCollectionMeta;
};

export type MinWorkingdayFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MinWorkingdayFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  days?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MinWorkingdayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MinWorkingdayFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MinWorkingdayInput = {
  days?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAgent?: Maybe<AgentEntityResponse>;
  createCompany?: Maybe<CompanyEntityResponse>;
  createContact?: Maybe<ContactEntityResponse>;
  createCoworkingContact?: Maybe<CoworkingContactEntityResponse>;
  createJobType?: Maybe<JobTypeEntityResponse>;
  createMailTemplate?: Maybe<MailTemplateEntityResponse>;
  createMinPeriod?: Maybe<MinPeriodEntityResponse>;
  createMinWorkingday?: Maybe<MinWorkingdayEntityResponse>;
  createOccupation?: Maybe<OccupationEntityResponse>;
  createOffer?: Maybe<OfferEntityResponse>;
  createPoint?: Maybe<PointEntityResponse>;
  createSubmission?: Maybe<SubmissionEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAgent?: Maybe<AgentEntityResponse>;
  deleteCompany?: Maybe<CompanyEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteCoworkingContact?: Maybe<CoworkingContactEntityResponse>;
  deleteJobType?: Maybe<JobTypeEntityResponse>;
  deleteLineAdDistributionSetting?: Maybe<LineAdDistributionSettingEntityResponse>;
  deleteMailTemplate?: Maybe<MailTemplateEntityResponse>;
  deleteMinPeriod?: Maybe<MinPeriodEntityResponse>;
  deleteMinWorkingday?: Maybe<MinWorkingdayEntityResponse>;
  deleteOccupation?: Maybe<OccupationEntityResponse>;
  deleteOffer?: Maybe<OfferEntityResponse>;
  deletePoint?: Maybe<PointEntityResponse>;
  deleteSubmission?: Maybe<SubmissionEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
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
  updateAgent?: Maybe<AgentEntityResponse>;
  updateCompany?: Maybe<CompanyEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateCoworkingContact?: Maybe<CoworkingContactEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateJobType?: Maybe<JobTypeEntityResponse>;
  updateLineAdDistributionSetting?: Maybe<LineAdDistributionSettingEntityResponse>;
  updateMailTemplate?: Maybe<MailTemplateEntityResponse>;
  updateMinPeriod?: Maybe<MinPeriodEntityResponse>;
  updateMinWorkingday?: Maybe<MinWorkingdayEntityResponse>;
  updateOccupation?: Maybe<OccupationEntityResponse>;
  updateOffer?: Maybe<OfferEntityResponse>;
  updatePoint?: Maybe<PointEntityResponse>;
  updateSubmission?: Maybe<SubmissionEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationCreateAgentArgs = {
  data: AgentInput;
};

export type MutationCreateCompanyArgs = {
  data: CompanyInput;
};

export type MutationCreateContactArgs = {
  data: ContactInput;
};

export type MutationCreateCoworkingContactArgs = {
  data: CoworkingContactInput;
};

export type MutationCreateJobTypeArgs = {
  data: JobTypeInput;
};

export type MutationCreateMailTemplateArgs = {
  data: MailTemplateInput;
};

export type MutationCreateMinPeriodArgs = {
  data: MinPeriodInput;
};

export type MutationCreateMinWorkingdayArgs = {
  data: MinWorkingdayInput;
};

export type MutationCreateOccupationArgs = {
  data: OccupationInput;
};

export type MutationCreateOfferArgs = {
  data: OfferInput;
};

export type MutationCreatePointArgs = {
  data: PointInput;
};

export type MutationCreateSubmissionArgs = {
  data: SubmissionInput;
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

export type MutationDeleteAgentArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCompanyArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCoworkingContactArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteJobTypeArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteMailTemplateArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteMinPeriodArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteMinWorkingdayArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteOccupationArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteOfferArgs = {
  id: Scalars['ID'];
};

export type MutationDeletePointArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSubmissionArgs = {
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

export type MutationUpdateAgentArgs = {
  data: AgentInput;
  id: Scalars['ID'];
};

export type MutationUpdateCompanyArgs = {
  data: CompanyInput;
  id: Scalars['ID'];
};

export type MutationUpdateContactArgs = {
  data: ContactInput;
  id: Scalars['ID'];
};

export type MutationUpdateCoworkingContactArgs = {
  data: CoworkingContactInput;
  id: Scalars['ID'];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateJobTypeArgs = {
  data: JobTypeInput;
  id: Scalars['ID'];
};

export type MutationUpdateLineAdDistributionSettingArgs = {
  data: LineAdDistributionSettingInput;
};

export type MutationUpdateMailTemplateArgs = {
  data: MailTemplateInput;
  id: Scalars['ID'];
};

export type MutationUpdateMinPeriodArgs = {
  data: MinPeriodInput;
  id: Scalars['ID'];
};

export type MutationUpdateMinWorkingdayArgs = {
  data: MinWorkingdayInput;
  id: Scalars['ID'];
};

export type MutationUpdateOccupationArgs = {
  data: OccupationInput;
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

export type MutationUpdateSubmissionArgs = {
  data: SubmissionInput;
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

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Occupation = {
  __typename?: 'Occupation';
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OccupationEntity = {
  __typename?: 'OccupationEntity';
  attributes?: Maybe<Occupation>;
  id?: Maybe<Scalars['ID']>;
};

export type OccupationEntityResponse = {
  __typename?: 'OccupationEntityResponse';
  data?: Maybe<OccupationEntity>;
};

export type OccupationEntityResponseCollection = {
  __typename?: 'OccupationEntityResponseCollection';
  data: Array<OccupationEntity>;
  meta: ResponseCollectionMeta;
};

export type OccupationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OccupationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<OccupationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OccupationFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OccupationInput = {
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Offer = {
  __typename?: 'Offer';
  atmosphere?: Maybe<Array<Maybe<ComponentAtmosphereAtmosphere>>>;
  check?: Maybe<Scalars['Boolean']>;
  company?: Maybe<CompanyEntityResponse>;
  company_name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Creator>;
  desired_interview_date?: Maybe<Scalars['String']>;
  desired_interview_time?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  end_at: Scalars['Date'];
  flow?: Maybe<Scalars['String']>;
  holiday?: Maybe<Scalars['String']>;
  hourly_wage?: Maybe<Scalars['String']>;
  hourly_wage_detail?: Maybe<Scalars['String']>;
  hours_detail?: Maybe<Scalars['String']>;
  hours_short: Scalars['String'];
  image?: Maybe<UploadFileEntityResponse>;
  interview_location: Scalars['String'];
  interview_remarks?: Maybe<Scalars['String']>;
  job_description: Scalars['String'];
  job_type?: Maybe<Scalars['String']>;
  min_period?: Maybe<Scalars['String']>;
  min_working_hours?: Maybe<Scalars['String']>;
  min_workingday?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  people: Scalars['String'];
  place_detail?: Maybe<Scalars['String']>;
  place_short: Scalars['String'];
  points?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  qualification?: Maybe<Scalars['String']>;
  shift?: Maybe<Scalars['String']>;
  start_at: Scalars['Date'];
  submissions?: Maybe<SubmissionRelationResponseCollection>;
  target: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type OfferAtmosphereArgs = {
  filters?: InputMaybe<ComponentAtmosphereAtmosphereFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OfferSubmissionsArgs = {
  filters?: InputMaybe<SubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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
  and?: InputMaybe<Array<InputMaybe<OfferFiltersInput>>>;
  atmosphere?: InputMaybe<ComponentAtmosphereAtmosphereFiltersInput>;
  check?: InputMaybe<BooleanFilterInput>;
  company?: InputMaybe<CompanyFiltersInput>;
  company_name?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  desired_interview_date?: InputMaybe<StringFilterInput>;
  desired_interview_time?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  end_at?: InputMaybe<DateFilterInput>;
  flow?: InputMaybe<StringFilterInput>;
  holiday?: InputMaybe<StringFilterInput>;
  hourly_wage?: InputMaybe<StringFilterInput>;
  hourly_wage_detail?: InputMaybe<StringFilterInput>;
  hours_detail?: InputMaybe<StringFilterInput>;
  hours_short?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  interview_location?: InputMaybe<StringFilterInput>;
  interview_remarks?: InputMaybe<StringFilterInput>;
  job_description?: InputMaybe<StringFilterInput>;
  job_type?: InputMaybe<StringFilterInput>;
  min_period?: InputMaybe<StringFilterInput>;
  min_working_hours?: InputMaybe<StringFilterInput>;
  min_workingday?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<OfferFiltersInput>;
  occupation?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<OfferFiltersInput>>>;
  people?: InputMaybe<StringFilterInput>;
  place_detail?: InputMaybe<StringFilterInput>;
  place_short?: InputMaybe<StringFilterInput>;
  points?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  qualification?: InputMaybe<StringFilterInput>;
  shift?: InputMaybe<StringFilterInput>;
  start_at?: InputMaybe<DateFilterInput>;
  submissions?: InputMaybe<SubmissionFiltersInput>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type OfferInput = {
  atmosphere?: InputMaybe<
    Array<InputMaybe<ComponentAtmosphereAtmosphereInput>>
  >;
  check?: InputMaybe<Scalars['Boolean']>;
  company?: InputMaybe<Scalars['ID']>;
  company_name?: InputMaybe<Scalars['String']>;
  desired_interview_date?: InputMaybe<Scalars['String']>;
  desired_interview_time?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  end_at?: InputMaybe<Scalars['Date']>;
  flow?: InputMaybe<Scalars['String']>;
  holiday?: InputMaybe<Scalars['String']>;
  hourly_wage?: InputMaybe<Scalars['String']>;
  hourly_wage_detail?: InputMaybe<Scalars['String']>;
  hours_detail?: InputMaybe<Scalars['String']>;
  hours_short?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  interview_location?: InputMaybe<Scalars['String']>;
  interview_remarks?: InputMaybe<Scalars['String']>;
  job_description?: InputMaybe<Scalars['String']>;
  job_type?: InputMaybe<Scalars['String']>;
  min_period?: InputMaybe<Scalars['String']>;
  min_working_hours?: InputMaybe<Scalars['String']>;
  min_workingday?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  people?: InputMaybe<Scalars['String']>;
  place_detail?: InputMaybe<Scalars['String']>;
  place_short?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  qualification?: InputMaybe<Scalars['String']>;
  shift?: InputMaybe<Scalars['String']>;
  start_at?: InputMaybe<Scalars['Date']>;
  submissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  target?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PointFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PointFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PointInput = {
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query';
  agent?: Maybe<AgentEntityResponse>;
  agents?: Maybe<AgentEntityResponseCollection>;
  companies?: Maybe<CompanyEntityResponseCollection>;
  company?: Maybe<CompanyEntityResponse>;
  contact?: Maybe<ContactEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  coworkingContact?: Maybe<CoworkingContactEntityResponse>;
  coworkingContacts?: Maybe<CoworkingContactEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  jobType?: Maybe<JobTypeEntityResponse>;
  jobTypes?: Maybe<JobTypeEntityResponseCollection>;
  lineAdDistributionSetting?: Maybe<LineAdDistributionSettingEntityResponse>;
  mailTemplate?: Maybe<MailTemplateEntityResponse>;
  mailTemplates?: Maybe<MailTemplateEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  minPeriod?: Maybe<MinPeriodEntityResponse>;
  minPeriods?: Maybe<MinPeriodEntityResponseCollection>;
  minWorkingday?: Maybe<MinWorkingdayEntityResponse>;
  minWorkingdays?: Maybe<MinWorkingdayEntityResponseCollection>;
  occupation?: Maybe<OccupationEntityResponse>;
  occupations?: Maybe<OccupationEntityResponseCollection>;
  offer?: Maybe<OfferEntityResponse>;
  offers?: Maybe<OfferEntityResponseCollection>;
  point?: Maybe<PointEntityResponse>;
  points?: Maybe<PointEntityResponseCollection>;
  submission?: Maybe<SubmissionEntityResponse>;
  submissions?: Maybe<SubmissionEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryAgentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryAgentsArgs = {
  filters?: InputMaybe<AgentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCompaniesArgs = {
  filters?: InputMaybe<CompanyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryContactsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCoworkingContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryCoworkingContactsArgs = {
  filters?: InputMaybe<CoworkingContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryJobTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryJobTypesArgs = {
  filters?: InputMaybe<JobTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryMailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryMailTemplatesArgs = {
  filters?: InputMaybe<MailTemplateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryMinPeriodArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryMinPeriodsArgs = {
  filters?: InputMaybe<MinPeriodFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryMinWorkingdayArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryMinWorkingdaysArgs = {
  filters?: InputMaybe<MinWorkingdayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryOccupationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryOccupationsArgs = {
  filters?: InputMaybe<OccupationFiltersInput>;
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
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuerySubmissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QuerySubmissionsArgs = {
  filters?: InputMaybe<SubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
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

export type Submission = {
  __typename?: 'Submission';
  birthday?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  furigana?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  hopeday1?: Maybe<Scalars['DateTime']>;
  hopeday2?: Maybe<Scalars['DateTime']>;
  hopeday3?: Maybe<Scalars['DateTime']>;
  lineid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  offer?: Maybe<OfferEntityResponse>;
  phone?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reason?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubmissionEntity = {
  __typename?: 'SubmissionEntity';
  attributes?: Maybe<Submission>;
  id?: Maybe<Scalars['ID']>;
};

export type SubmissionEntityResponse = {
  __typename?: 'SubmissionEntityResponse';
  data?: Maybe<SubmissionEntity>;
};

export type SubmissionEntityResponseCollection = {
  __typename?: 'SubmissionEntityResponseCollection';
  data: Array<SubmissionEntity>;
  meta: ResponseCollectionMeta;
};

export type SubmissionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SubmissionFiltersInput>>>;
  birthday?: InputMaybe<DateFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  furigana?: InputMaybe<StringFilterInput>;
  gender?: InputMaybe<StringFilterInput>;
  grade?: InputMaybe<StringFilterInput>;
  hopeday1?: InputMaybe<DateTimeFilterInput>;
  hopeday2?: InputMaybe<DateTimeFilterInput>;
  hopeday3?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lineid?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SubmissionFiltersInput>;
  offer?: InputMaybe<OfferFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SubmissionFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reason?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SubmissionInput = {
  birthday?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  furigana?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  grade?: InputMaybe<Scalars['String']>;
  hopeday1?: InputMaybe<Scalars['DateTime']>;
  hopeday2?: InputMaybe<Scalars['DateTime']>;
  hopeday3?: InputMaybe<Scalars['DateTime']>;
  lineid?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offer?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  reason?: InputMaybe<Scalars['String']>;
};

export type SubmissionRelationResponseCollection = {
  __typename?: 'SubmissionRelationResponseCollection';
  data: Array<SubmissionEntity>;
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
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
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
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetOfferByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;

export type GetOfferByIdQuery = {
  __typename?: 'Query';
  offer?: {
    __typename?: 'OfferEntityResponse';
    data?: {
      __typename?: 'OfferEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Offer';
        check?: boolean | null;
        title?: string | null;
        hourly_wage?: string | null;
        hourly_wage_detail?: string | null;
        place_short: string;
        hours_short: string;
        job_description: string;
        start_at: any;
        end_at: any;
        target: string;
        url?: string | null;
        qualification?: string | null;
        people: string;
        interview_location: string;
        flow?: string | null;
        shift?: string | null;
        holiday?: string | null;
        company_name?: string | null;
        email: string;
        min_working_hours?: string | null;
        min_period?: string | null;
        min_workingday?: string | null;
        desired_interview_date?: string | null;
        desired_interview_time?: string | null;
        occupation?: string | null;
        job_type?: string | null;
        points?: string | null;
        atmosphere?: Array<{
          __typename?: 'ComponentAtmosphereAtmosphere';
          title?: string | null;
          text?: string | null;
          image?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              id?: string | null;
              attributes?: {
                __typename?: 'UploadFile';
                width?: number | null;
                height?: number | null;
                url: string;
                alternativeText?: string | null;
                formats?: any | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        company?: {
          __typename?: 'CompanyEntityResponse';
          data?: {
            __typename?: 'CompanyEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Company';
              name: string;
              representative?: string | null;
              establishment_date?: string | null;
              number_of_employees?: string | null;
              place: string;
            } | null;
          } | null;
        } | null;
        image?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UploadFile';
              width?: number | null;
              height?: number | null;
              url: string;
              alternativeText?: string | null;
              formats?: any | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetOfferPathsQueryVariables = Exact<{
  today?: InputMaybe<Scalars['Date']>;
}>;

export type GetOfferPathsQuery = {
  __typename?: 'Query';
  offers?: {
    __typename?: 'OfferEntityResponseCollection';
    data: Array<{ __typename?: 'OfferEntity'; id?: string | null }>;
  } | null;
};

export type GetOffersAllQueryVariables = Exact<{ [key: string]: never }>;

export type GetOffersAllQuery = {
  __typename?: 'Query';
  offers?: {
    __typename?: 'OfferEntityResponseCollection';
    data: Array<{
      __typename?: 'OfferEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Offer';
        title?: string | null;
        company_name?: string | null;
        hourly_wage?: string | null;
        place_short: string;
        hours_short: string;
        start_at: any;
        end_at: any;
        occupation?: string | null;
        job_type?: string | null;
        min_period?: string | null;
        min_workingday?: string | null;
        points?: string | null;
        image?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UploadFile';
              width?: number | null;
              height?: number | null;
              url: string;
              alternativeText?: string | null;
              formats?: any | null;
            } | null;
          } | null;
        } | null;
        company?: {
          __typename?: 'CompanyEntityResponse';
          data?: {
            __typename?: 'CompanyEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Company';
              name: string;
              representative?: string | null;
              establishment_date?: string | null;
              number_of_employees?: string | null;
              place: string;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetPointsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPointsQuery = {
  __typename?: 'Query';
  points?: {
    __typename?: 'PointEntityResponseCollection';
    data: Array<{
      __typename?: 'PointEntity';
      id?: string | null;
      attributes?: { __typename?: 'Point'; name?: string | null } | null;
    }>;
  } | null;
};

export type GetPointByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;

export type GetPointByIdQuery = {
  __typename?: 'Query';
  point?: {
    __typename?: 'PointEntityResponse';
    data?: {
      __typename?: 'PointEntity';
      id?: string | null;
      attributes?: { __typename?: 'Point'; name?: string | null } | null;
    } | null;
  } | null;
};

export const GetOfferByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getOfferById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'offer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'check' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'hourly_wage' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'hourly_wage_detail',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'place_short' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'hours_short' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'job_description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'start_at' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'end_at' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'target' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'qualification' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'people' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'interview_location',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'flow' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'shift' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'holiday' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'company_name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'email' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'min_working_hours',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'min_period' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'min_workingday' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'desired_interview_date',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'desired_interview_time',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'atmosphere' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'title' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'text' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'image' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'data' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'id',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'attributes',
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'width',
                                                      },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'height',
                                                      },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'url',
                                                      },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value:
                                                          'alternativeText',
                                                      },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'formats',
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'occupation' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'job_type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'points' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'company' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'attributes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'name',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'representative',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'establishment_date',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'number_of_employees',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'place',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'attributes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'width',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'height',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'url',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'alternativeText',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'formats',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOfferByIdQuery, GetOfferByIdQueryVariables>;
export const GetOfferPathsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getOfferPaths' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'today' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Date' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'offers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'StringValue',
                  value: 'publishedAt:desc',
                  block: false,
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'end_at' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'gte' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'today' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOfferPathsQuery, GetOfferPathsQueryVariables>;
export const GetOffersAllDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getOffersAll' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'offers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'StringValue',
                  value: 'publishedAt:desc',
                  block: false,
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '-1' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'company_name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'hourly_wage' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'place_short' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'hours_short' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'start_at' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'end_at' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'occupation' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'job_type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'min_period' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'min_workingday' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'points' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'attributes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'width',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'height',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'url',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'alternativeText',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'formats',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'company' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'attributes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'name',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'representative',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'establishment_date',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'number_of_employees',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'place',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOffersAllQuery, GetOffersAllQueryVariables>;
export const GetPointsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPoints' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'points' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '1000' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPointsQuery, GetPointsQueryVariables>;
export const GetPointByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPointById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'point' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPointByIdQuery, GetPointByIdQueryVariables>;
