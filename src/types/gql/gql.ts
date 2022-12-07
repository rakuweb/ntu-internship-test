/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "query getRecruiterById($id: ID) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        recruiter_image {\n          data {\n            id\n            attributes {\n              url\n              width\n              height\n              alternativeText\n            }\n          }\n        }\n        recruiter_introduction\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}": types.GetRecruiterByIdDocument,
    "query getNewsById($id: ID) {\n  news(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        date\n      }\n    }\n  }\n}": types.GetNewsByIdDocument,
    "query getNews {\n  newses(sort: \"date:desc\", pagination: {limit: 15}) {\n    data {\n      id\n      attributes {\n        title\n        date\n      }\n    }\n  }\n}": types.GetNewsDocument,
    "query getOfferByID($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        createdBy {\n          lastname\n          firstname\n          id\n        }\n        occupation\n        hourly_wage\n        place\n        recruitment_number\n        description\n        about_job\n        required_skills\n        recruitment_terms\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetOfferByIdDocument,
    "query getOffers($today: Date, $page: Int) {\n  offers(\n    filters: {readline: {lte: $today}}\n    sort: \"publishedAt:desc\"\n    pagination: {page: $page, pageSize: 10}\n  ) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        occupation\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}\n\nquery getOffersSortedWage($today: Date, $page: Int) {\n  offers(\n    filters: {readline: {lte: $today}}\n    sort: \"hourly_wage:desc\"\n    pagination: {page: $page, pageSize: 10}\n  ) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        occupation\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}\n\nquery getOffersSortedReadline($today: Date, $page: Int) {\n  offers(\n    filters: {readline: {lte: $today}}\n    sort: \"readline:asc\"\n    pagination: {page: $page, pageSize: 10}\n  ) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        occupation\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}": types.GetOffersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getRecruiterById($id: ID) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        recruiter_image {\n          data {\n            id\n            attributes {\n              url\n              width\n              height\n              alternativeText\n            }\n          }\n        }\n        recruiter_introduction\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getRecruiterById($id: ID) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        recruiter_image {\n          data {\n            id\n            attributes {\n              url\n              width\n              height\n              alternativeText\n            }\n          }\n        }\n        recruiter_introduction\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getNewsById($id: ID) {\n  news(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        date\n      }\n    }\n  }\n}"): (typeof documents)["query getNewsById($id: ID) {\n  news(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        date\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getNews {\n  newses(sort: \"date:desc\", pagination: {limit: 15}) {\n    data {\n      id\n      attributes {\n        title\n        date\n      }\n    }\n  }\n}"): (typeof documents)["query getNews {\n  newses(sort: \"date:desc\", pagination: {limit: 15}) {\n    data {\n      id\n      attributes {\n        title\n        date\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getOfferByID($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        createdBy {\n          lastname\n          firstname\n          id\n        }\n        occupation\n        hourly_wage\n        place\n        recruitment_number\n        description\n        about_job\n        required_skills\n        recruitment_terms\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getOfferByID($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        createdBy {\n          lastname\n          firstname\n          id\n        }\n        occupation\n        hourly_wage\n        place\n        recruitment_number\n        description\n        about_job\n        required_skills\n        recruitment_terms\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getOffers($today: Date, $page: Int) {\n  offers(\n    filters: {readline: {lte: $today}}\n    sort: \"publishedAt:desc\"\n    pagination: {page: $page, pageSize: 10}\n  ) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        occupation\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}\n\nquery getOffersSortedWage($today: Date, $page: Int) {\n  offers(\n    filters: {readline: {lte: $today}}\n    sort: \"hourly_wage:desc\"\n    pagination: {page: $page, pageSize: 10}\n  ) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        occupation\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}\n\nquery getOffersSortedReadline($today: Date, $page: Int) {\n  offers(\n    filters: {readline: {lte: $today}}\n    sort: \"readline:asc\"\n    pagination: {page: $page, pageSize: 10}\n  ) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        occupation\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getOffers($today: Date, $page: Int) {\n  offers(\n    filters: {readline: {lte: $today}}\n    sort: \"publishedAt:desc\"\n    pagination: {page: $page, pageSize: 10}\n  ) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        occupation\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}\n\nquery getOffersSortedWage($today: Date, $page: Int) {\n  offers(\n    filters: {readline: {lte: $today}}\n    sort: \"hourly_wage:desc\"\n    pagination: {page: $page, pageSize: 10}\n  ) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        occupation\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}\n\nquery getOffersSortedReadline($today: Date, $page: Int) {\n  offers(\n    filters: {readline: {lte: $today}}\n    sort: \"readline:asc\"\n    pagination: {page: $page, pageSize: 10}\n  ) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        occupation\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;