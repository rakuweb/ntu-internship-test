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
    "query getadvertisementArticles {\n  advertisementArticle(id: 1) {\n    data {\n      id\n      attributes {\n        title\n        body\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getadvertisementArticlePaths {\n  advertisementArticles {\n    data {\n      id\n    }\n  }\n}": types.GetadvertisementArticlesDocument,
    "query getCompanies {\n  companies {\n    data {\n      id\n      attributes {\n        mission\n        name\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        description\n        address\n        mission\n        company_id\n        cover_image {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        logo {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetCompaniesDocument,
    "query getRecruiterById($id: ID) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        cover_image {\n          data {\n            id\n            attributes {\n              url\n              width\n              height\n              alternativeText\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}": types.GetRecruiterByIdDocument,
    "query getNewsById($id: ID) {\n  news(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        date\n      }\n    }\n  }\n}": types.GetNewsByIdDocument,
    "query getNews {\n  newses(sort: \"date:desc\", pagination: {limit: 15}) {\n    data {\n      id\n      attributes {\n        title\n        date\n      }\n    }\n  }\n}": types.GetNewsDocument,
    "query getOfferById($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        description\n        about_job\n        recruitment_terms\n        target\n        qualification\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getOfferPaths($today: Date) {\n  offers(sort: \"publishedAt:desc\", filters: {deadline: {gte: $today}}) {\n    data {\n      id\n    }\n  }\n}": types.GetOfferByIdDocument,
    "query getOffersAll {\n  offers(sort: \"publishedAt:desc\") {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        deadline\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getAdvertisements {\n  advertisements(sort: \"updatedAt:desc\") {\n    data {\n      id\n      attributes {\n        creative {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              alternativeText\n              url\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}": types.GetOffersAllDocument,
    "query getSinage {\n  signage {\n    data {\n      id\n      attributes {\n        videos(sort: \"id:asc\") {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetSinageDocument,
    "query getUsersByLineId($lineId: String) {\n  usersPermissionsUsers(filters: {line_id: {eq: $lineId}}) {\n    data {\n      id\n      attributes {\n        username\n        email\n        confirmed\n      }\n    }\n  }\n}": types.GetUsersByLineIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getadvertisementArticles {\n  advertisementArticle(id: 1) {\n    data {\n      id\n      attributes {\n        title\n        body\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getadvertisementArticlePaths {\n  advertisementArticles {\n    data {\n      id\n    }\n  }\n}"): (typeof documents)["query getadvertisementArticles {\n  advertisementArticle(id: 1) {\n    data {\n      id\n      attributes {\n        title\n        body\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getadvertisementArticlePaths {\n  advertisementArticles {\n    data {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getCompanies {\n  companies {\n    data {\n      id\n      attributes {\n        mission\n        name\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        description\n        address\n        mission\n        company_id\n        cover_image {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        logo {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getCompanies {\n  companies {\n    data {\n      id\n      attributes {\n        mission\n        name\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        description\n        address\n        mission\n        company_id\n        cover_image {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        logo {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getRecruiterById($id: ID) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        cover_image {\n          data {\n            id\n            attributes {\n              url\n              width\n              height\n              alternativeText\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getRecruiterById($id: ID) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        cover_image {\n          data {\n            id\n            attributes {\n              url\n              width\n              height\n              alternativeText\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}"];
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
export function graphql(source: "query getOfferById($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        description\n        about_job\n        recruitment_terms\n        target\n        qualification\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getOfferPaths($today: Date) {\n  offers(sort: \"publishedAt:desc\", filters: {deadline: {gte: $today}}) {\n    data {\n      id\n    }\n  }\n}"): (typeof documents)["query getOfferById($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        description\n        about_job\n        recruitment_terms\n        target\n        qualification\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getOfferPaths($today: Date) {\n  offers(sort: \"publishedAt:desc\", filters: {deadline: {gte: $today}}) {\n    data {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getOffersAll {\n  offers(sort: \"publishedAt:desc\") {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        deadline\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getAdvertisements {\n  advertisements(sort: \"updatedAt:desc\") {\n    data {\n      id\n      attributes {\n        creative {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              alternativeText\n              url\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}"): (typeof documents)["query getOffersAll {\n  offers(sort: \"publishedAt:desc\") {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        deadline\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getAdvertisements {\n  advertisements(sort: \"updatedAt:desc\") {\n    data {\n      id\n      attributes {\n        creative {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              alternativeText\n              url\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getSinage {\n  signage {\n    data {\n      id\n      attributes {\n        videos(sort: \"id:asc\") {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getSinage {\n  signage {\n    data {\n      id\n      attributes {\n        videos(sort: \"id:asc\") {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getUsersByLineId($lineId: String) {\n  usersPermissionsUsers(filters: {line_id: {eq: $lineId}}) {\n    data {\n      id\n      attributes {\n        username\n        email\n        confirmed\n      }\n    }\n  }\n}"): (typeof documents)["query getUsersByLineId($lineId: String) {\n  usersPermissionsUsers(filters: {line_id: {eq: $lineId}}) {\n    data {\n      id\n      attributes {\n        username\n        email\n        confirmed\n      }\n    }\n  }\n}"];

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