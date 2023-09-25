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
  'query getOfferById($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        hourly_wage\n        hourly_wage_detail\n        place_short\n        place_detail\n        hours_short\n        hours_detail\n        job_description\n        start_at\n        end_at\n        target\n        url\n        qualification\n        people\n        interview_location\n        flow\n        shift\n        holiday\n        email\n        min_working_hours\n        min_period {\n          data {\n            id\n            attributes {\n              period\n            }\n          }\n        }\n        min_workingday {\n          data {\n            id\n            attributes {\n              days\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        atmosphere {\n          title\n          text\n          image {\n            data {\n              id\n              attributes {\n                width\n                height\n                url\n                alternativeText\n                formats\n              }\n            }\n          }\n        }\n        occupation {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        job_type {\n          data {\n            id\n            attributes {\n              name\n              gift\n            }\n          }\n        }\n        points {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getOfferPaths($today: Date) {\n  offers(sort: "publishedAt:desc", filters: {end_at: {gte: $today}}) {\n    data {\n      id\n    }\n  }\n}':
    types.GetOfferByIdDocument,
  'query getOffersAll {\n  offers(sort: "publishedAt:desc") {\n    data {\n      id\n      attributes {\n        title\n        hourly_wage\n        place_short\n        hours_short\n        start_at\n        end_at\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        occupation {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        job_type {\n          data {\n            id\n            attributes {\n              name\n              gift\n            }\n          }\n        }\n        min_period {\n          data {\n            id\n            attributes {\n              period\n            }\n          }\n        }\n        min_workingday {\n          data {\n            id\n            attributes {\n              days\n            }\n          }\n        }\n        points {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}':
    types.GetOffersAllDocument,
  'query getPoints {\n  points(pagination: {limit: 1000}) {\n    data {\n      id\n      attributes {\n        name\n        offer {\n          data {\n            id\n          }\n        }\n      }\n    }\n  }\n}':
    types.GetPointsDocument,
  'query getPointById($id: ID) {\n  point(id: $id) {\n    data {\n      id\n      attributes {\n        name\n        offer {\n          data {\n            id\n          }\n        }\n      }\n    }\n  }\n}':
    types.GetPointByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query getOfferById($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        hourly_wage\n        hourly_wage_detail\n        place_short\n        place_detail\n        hours_short\n        hours_detail\n        job_description\n        start_at\n        end_at\n        target\n        url\n        qualification\n        people\n        interview_location\n        flow\n        shift\n        holiday\n        email\n        min_working_hours\n        min_period {\n          data {\n            id\n            attributes {\n              period\n            }\n          }\n        }\n        min_workingday {\n          data {\n            id\n            attributes {\n              days\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        atmosphere {\n          title\n          text\n          image {\n            data {\n              id\n              attributes {\n                width\n                height\n                url\n                alternativeText\n                formats\n              }\n            }\n          }\n        }\n        occupation {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        job_type {\n          data {\n            id\n            attributes {\n              name\n              gift\n            }\n          }\n        }\n        points {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getOfferPaths($today: Date) {\n  offers(sort: "publishedAt:desc", filters: {end_at: {gte: $today}}) {\n    data {\n      id\n    }\n  }\n}'
): (typeof documents)['query getOfferById($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        hourly_wage\n        hourly_wage_detail\n        place_short\n        place_detail\n        hours_short\n        hours_detail\n        job_description\n        start_at\n        end_at\n        target\n        url\n        qualification\n        people\n        interview_location\n        flow\n        shift\n        holiday\n        email\n        min_working_hours\n        min_period {\n          data {\n            id\n            attributes {\n              period\n            }\n          }\n        }\n        min_workingday {\n          data {\n            id\n            attributes {\n              days\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        atmosphere {\n          title\n          text\n          image {\n            data {\n              id\n              attributes {\n                width\n                height\n                url\n                alternativeText\n                formats\n              }\n            }\n          }\n        }\n        occupation {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        job_type {\n          data {\n            id\n            attributes {\n              name\n              gift\n            }\n          }\n        }\n        points {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getOfferPaths($today: Date) {\n  offers(sort: "publishedAt:desc", filters: {end_at: {gte: $today}}) {\n    data {\n      id\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query getOffersAll {\n  offers(sort: "publishedAt:desc") {\n    data {\n      id\n      attributes {\n        title\n        hourly_wage\n        place_short\n        hours_short\n        start_at\n        end_at\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        occupation {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        job_type {\n          data {\n            id\n            attributes {\n              name\n              gift\n            }\n          }\n        }\n        min_period {\n          data {\n            id\n            attributes {\n              period\n            }\n          }\n        }\n        min_workingday {\n          data {\n            id\n            attributes {\n              days\n            }\n          }\n        }\n        points {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query getOffersAll {\n  offers(sort: "publishedAt:desc") {\n    data {\n      id\n      attributes {\n        title\n        hourly_wage\n        place_short\n        hours_short\n        start_at\n        end_at\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        occupation {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        job_type {\n          data {\n            id\n            attributes {\n              name\n              gift\n            }\n          }\n        }\n        min_period {\n          data {\n            id\n            attributes {\n              period\n            }\n          }\n        }\n        min_workingday {\n          data {\n            id\n            attributes {\n              days\n            }\n          }\n        }\n        points {\n          data {\n            id\n            attributes {\n              name\n            }\n          }\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query getPoints {\n  points(pagination: {limit: 1000}) {\n    data {\n      id\n      attributes {\n        name\n        offer {\n          data {\n            id\n          }\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query getPoints {\n  points(pagination: {limit: 1000}) {\n    data {\n      id\n      attributes {\n        name\n        offer {\n          data {\n            id\n          }\n        }\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query getPointById($id: ID) {\n  point(id: $id) {\n    data {\n      id\n      attributes {\n        name\n        offer {\n          data {\n            id\n          }\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query getPointById($id: ID) {\n  point(id: $id) {\n    data {\n      id\n      attributes {\n        name\n        offer {\n          data {\n            id\n          }\n        }\n      }\n    }\n  }\n}'];

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

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
