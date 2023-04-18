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
    "query getAdvertisementArticles {\n  advertisementArticles(sort: \"publishedAt:desc\") {\n    data {\n      id\n      attributes {\n        title\n        banner {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        publishedAt\n        updatedAt\n      }\n    }\n  }\n}\n\nquery getAdvertisementArticleId($id: ID) {\n  advertisementArticle(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        body\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        banner {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        publishedAt\n        updatedAt\n      }\n    }\n  }\n}\n\nquery getadvertisementArticlePaths {\n  advertisementArticles {\n    data {\n      id\n    }\n  }\n}": types.GetAdvertisementArticlesDocument,
    "query getCompanies {\n  companies {\n    data {\n      id\n      attributes {\n        establishment_date\n        industry_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        address\n        map_url\n        mission\n        name\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        description\n        address\n        mission\n        company_id\n        founding\n        jobtype\n        employment\n        scale\n        outline\n        atmosphere\n        tostudents\n        cover_image {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        atmosphereimage {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        logo {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetCompaniesDocument,
    "query getRecruiterById($id: ID) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        cover_image {\n          data {\n            id\n            attributes {\n              url\n              width\n              height\n              alternativeText\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}\n\nquery getCompanyByID($id: ID!) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        business_details\n        office_atmosphere\n        message_for_students\n        employee_number\n        employee_statuses {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        establishment_date\n        industry_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        address\n        map_url\n        mission\n        name\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        description\n        address\n        mission\n        company_id\n        founding\n        jobtype\n        employment\n        scale\n        outline\n        atmosphere\n        tostudents\n        cover_image {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        atmosphereimage {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        logo {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetRecruiterByIdDocument,
    "query getNewsById($id: ID) {\n  news(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        date\n      }\n    }\n  }\n}": types.GetNewsByIdDocument,
    "query getNews {\n  newses(sort: \"date:desc\", pagination: {limit: 15}) {\n    data {\n      id\n      attributes {\n        title\n        date\n      }\n    }\n  }\n}": types.GetNewsDocument,
    "query getOfferById($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        form_url\n        title\n        place\n        hourly_wage\n        description\n        about_job\n        recruitment_terms\n        target\n        qualification\n        people\n        job_description\n        about_company\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        gallery {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getOfferPaths($today: Date) {\n  offers(sort: \"publishedAt:desc\", filters: {deadline: {gte: $today}}) {\n    data {\n      id\n    }\n  }\n}": types.GetOfferByIdDocument,
    "query getOffersAll {\n  offers(sort: \"publishedAt:desc\") {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        deadline\n        people\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        gallery {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getAdvertisements {\n  advertisements(sort: \"updatedAt:desc\") {\n    data {\n      id\n      attributes {\n        creative {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              alternativeText\n              url\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}": types.GetOffersAllDocument,
    "query getSinage {\n  signage {\n    data {\n      id\n      attributes {\n        videos(sort: \"id:asc\") {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetSinageDocument,
    "query getStudentByID($id: ID!) {\n  student(id: $id) {\n    data {\n      id\n      attributes {\n        grade_updated_at\n        name\n        line_id\n        grade_jp\n        registered_at\n      }\n    }\n  }\n}\n\nmutation updpateGrade($id: ID!, $grade: String, $to_receive_job_info: Boolean, $updated_at: Date) {\n  updateStudent(\n    id: $id\n    data: {grade_jp: $grade, to_receive_job_info: $to_receive_job_info, grade_updated_at: $updated_at}\n  ) {\n    data {\n      id\n      attributes {\n        grade_jp\n        grade_updated_at\n        name\n      }\n    }\n  }\n}\n\nmutation postStudent($name: String, $user_id: ID!, $phone: String, $line_id: String, $department_jp: String, $grade_jp: String, $is_interested_in_internship: Boolean, $will_start_working: Boolean, $grade_updated_at: Date, $to_receive_job_info: Boolean, $registered_at: DateTime) {\n  createStudent(\n    data: {name: $name, users_permissions_user: $user_id, phone: $phone, line_id: $line_id, department_jp: $department_jp, grade_jp: $grade_jp, is_interested_in_internship: $is_interested_in_internship, will_start_working: $will_start_working, grade_updated_at: $grade_updated_at, to_receive_job_info: $to_receive_job_info, registered_at: $registered_at}\n  ) {\n    data {\n      id\n    }\n  }\n}": types.GetStudentByIdDocument,
    "query getGrade($id: ID) {\n  usersPermissionsUser(id: $id) {\n    data {\n      id\n      attributes {\n        grade\n      }\n    }\n  }\n}": types.GetGradeDocument,
    "query getUsersByLineId($lineId: String) {\n  usersPermissionsUsers(filters: {line_id: {eq: $lineId}}) {\n    data {\n      id\n      attributes {\n        username\n        email\n        confirmed\n        grade\n        student {\n          data {\n            id\n            attributes {\n              line_id\n              to_receive_job_info\n              grade_jp\n              department_jp\n              grade_updated_at\n              name\n              registered_at\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetUsersByLineIdDocument,
    "mutation postVisitCount($id: ID!, $date: DateTime) {\n  createVisitCount(data: {student: $id, date: $date}) {\n    data {\n      id\n      attributes {\n        date\n      }\n    }\n  }\n}\n\nquery getVisitCountsByStudentId($id: ID!) {\n  visitCounts(filters: {student: {id: {eq: $id}}}, pagination: {limit: -1}) {\n    data {\n      id\n      attributes {\n        date\n      }\n    }\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}\n\nquery getVisitCountTotalByStudentId($id: ID!) {\n  visitCounts(filters: {student: {id: {eq: $id}}}, pagination: {limit: -1}) {\n    data {\n      id\n    }\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}\n\nquery getVisitCountsByStudentIdAndDates($id: ID!, $start_date: DateTime, $end_date: DateTime) {\n  visitCounts(\n    filters: {and: [{student: {id: {eq: $id}}}, {date: {lt: $end_date}}, {date: {gte: $start_date}}]}\n    pagination: {limit: -1}\n  ) {\n    data {\n      id\n      attributes {\n        date\n      }\n    }\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}": types.PostVisitCountDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getAdvertisementArticles {\n  advertisementArticles(sort: \"publishedAt:desc\") {\n    data {\n      id\n      attributes {\n        title\n        banner {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        publishedAt\n        updatedAt\n      }\n    }\n  }\n}\n\nquery getAdvertisementArticleId($id: ID) {\n  advertisementArticle(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        body\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        banner {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        publishedAt\n        updatedAt\n      }\n    }\n  }\n}\n\nquery getadvertisementArticlePaths {\n  advertisementArticles {\n    data {\n      id\n    }\n  }\n}"): (typeof documents)["query getAdvertisementArticles {\n  advertisementArticles(sort: \"publishedAt:desc\") {\n    data {\n      id\n      attributes {\n        title\n        banner {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        publishedAt\n        updatedAt\n      }\n    }\n  }\n}\n\nquery getAdvertisementArticleId($id: ID) {\n  advertisementArticle(id: $id) {\n    data {\n      id\n      attributes {\n        title\n        body\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        banner {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        publishedAt\n        updatedAt\n      }\n    }\n  }\n}\n\nquery getadvertisementArticlePaths {\n  advertisementArticles {\n    data {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getCompanies {\n  companies {\n    data {\n      id\n      attributes {\n        establishment_date\n        industry_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        address\n        map_url\n        mission\n        name\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        description\n        address\n        mission\n        company_id\n        founding\n        jobtype\n        employment\n        scale\n        outline\n        atmosphere\n        tostudents\n        cover_image {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        atmosphereimage {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        logo {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getCompanies {\n  companies {\n    data {\n      id\n      attributes {\n        establishment_date\n        industry_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        address\n        map_url\n        mission\n        name\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        description\n        address\n        mission\n        company_id\n        founding\n        jobtype\n        employment\n        scale\n        outline\n        atmosphere\n        tostudents\n        cover_image {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        atmosphereimage {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        logo {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getRecruiterById($id: ID) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        cover_image {\n          data {\n            id\n            attributes {\n              url\n              width\n              height\n              alternativeText\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}\n\nquery getCompanyByID($id: ID!) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        business_details\n        office_atmosphere\n        message_for_students\n        employee_number\n        employee_statuses {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        establishment_date\n        industry_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        address\n        map_url\n        mission\n        name\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        description\n        address\n        mission\n        company_id\n        founding\n        jobtype\n        employment\n        scale\n        outline\n        atmosphere\n        tostudents\n        cover_image {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        atmosphereimage {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        logo {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getRecruiterById($id: ID) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        cover_image {\n          data {\n            id\n            attributes {\n              url\n              width\n              height\n              alternativeText\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n}\n\nquery getCompanyByID($id: ID!) {\n  company(id: $id) {\n    data {\n      id\n      attributes {\n        business_details\n        office_atmosphere\n        message_for_students\n        employee_number\n        employee_statuses {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        establishment_date\n        industry_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        address\n        map_url\n        mission\n        name\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        description\n        address\n        mission\n        company_id\n        founding\n        jobtype\n        employment\n        scale\n        outline\n        atmosphere\n        tostudents\n        cover_image {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        atmosphereimage {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n        logo {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
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
export function graphql(source: "query getOfferById($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        form_url\n        title\n        place\n        hourly_wage\n        description\n        about_job\n        recruitment_terms\n        target\n        qualification\n        people\n        job_description\n        about_company\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        gallery {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getOfferPaths($today: Date) {\n  offers(sort: \"publishedAt:desc\", filters: {deadline: {gte: $today}}) {\n    data {\n      id\n    }\n  }\n}"): (typeof documents)["query getOfferById($id: ID) {\n  offer(id: $id) {\n    data {\n      id\n      attributes {\n        form_url\n        title\n        place\n        hourly_wage\n        description\n        about_job\n        recruitment_terms\n        target\n        qualification\n        people\n        job_description\n        about_company\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        gallery {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getOfferPaths($today: Date) {\n  offers(sort: \"publishedAt:desc\", filters: {deadline: {gte: $today}}) {\n    data {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getOffersAll {\n  offers(sort: \"publishedAt:desc\") {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        deadline\n        people\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        gallery {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getAdvertisements {\n  advertisements(sort: \"updatedAt:desc\") {\n    data {\n      id\n      attributes {\n        creative {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              alternativeText\n              url\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}"): (typeof documents)["query getOffersAll {\n  offers(sort: \"publishedAt:desc\") {\n    data {\n      id\n      attributes {\n        title\n        place\n        hourly_wage\n        deadline\n        people\n        job_points {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        job_categories {\n          data {\n            id\n            attributes {\n              name\n              en_name\n            }\n          }\n        }\n        createdBy {\n          id\n          firstname\n          lastname\n        }\n        image {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n        gallery {\n          data {\n            id\n            attributes {\n              width\n              height\n              url\n              alternativeText\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getAdvertisements {\n  advertisements(sort: \"updatedAt:desc\") {\n    data {\n      id\n      attributes {\n        creative {\n          data {\n            id\n            attributes {\n              width\n              height\n              formats\n              alternativeText\n              url\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getSinage {\n  signage {\n    data {\n      id\n      attributes {\n        videos(sort: \"id:asc\") {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getSinage {\n  signage {\n    data {\n      id\n      attributes {\n        videos(sort: \"id:asc\") {\n          data {\n            id\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getStudentByID($id: ID!) {\n  student(id: $id) {\n    data {\n      id\n      attributes {\n        grade_updated_at\n        name\n        line_id\n        grade_jp\n        registered_at\n      }\n    }\n  }\n}\n\nmutation updpateGrade($id: ID!, $grade: String, $to_receive_job_info: Boolean, $updated_at: Date) {\n  updateStudent(\n    id: $id\n    data: {grade_jp: $grade, to_receive_job_info: $to_receive_job_info, grade_updated_at: $updated_at}\n  ) {\n    data {\n      id\n      attributes {\n        grade_jp\n        grade_updated_at\n        name\n      }\n    }\n  }\n}\n\nmutation postStudent($name: String, $user_id: ID!, $phone: String, $line_id: String, $department_jp: String, $grade_jp: String, $is_interested_in_internship: Boolean, $will_start_working: Boolean, $grade_updated_at: Date, $to_receive_job_info: Boolean, $registered_at: DateTime) {\n  createStudent(\n    data: {name: $name, users_permissions_user: $user_id, phone: $phone, line_id: $line_id, department_jp: $department_jp, grade_jp: $grade_jp, is_interested_in_internship: $is_interested_in_internship, will_start_working: $will_start_working, grade_updated_at: $grade_updated_at, to_receive_job_info: $to_receive_job_info, registered_at: $registered_at}\n  ) {\n    data {\n      id\n    }\n  }\n}"): (typeof documents)["query getStudentByID($id: ID!) {\n  student(id: $id) {\n    data {\n      id\n      attributes {\n        grade_updated_at\n        name\n        line_id\n        grade_jp\n        registered_at\n      }\n    }\n  }\n}\n\nmutation updpateGrade($id: ID!, $grade: String, $to_receive_job_info: Boolean, $updated_at: Date) {\n  updateStudent(\n    id: $id\n    data: {grade_jp: $grade, to_receive_job_info: $to_receive_job_info, grade_updated_at: $updated_at}\n  ) {\n    data {\n      id\n      attributes {\n        grade_jp\n        grade_updated_at\n        name\n      }\n    }\n  }\n}\n\nmutation postStudent($name: String, $user_id: ID!, $phone: String, $line_id: String, $department_jp: String, $grade_jp: String, $is_interested_in_internship: Boolean, $will_start_working: Boolean, $grade_updated_at: Date, $to_receive_job_info: Boolean, $registered_at: DateTime) {\n  createStudent(\n    data: {name: $name, users_permissions_user: $user_id, phone: $phone, line_id: $line_id, department_jp: $department_jp, grade_jp: $grade_jp, is_interested_in_internship: $is_interested_in_internship, will_start_working: $will_start_working, grade_updated_at: $grade_updated_at, to_receive_job_info: $to_receive_job_info, registered_at: $registered_at}\n  ) {\n    data {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getGrade($id: ID) {\n  usersPermissionsUser(id: $id) {\n    data {\n      id\n      attributes {\n        grade\n      }\n    }\n  }\n}"): (typeof documents)["query getGrade($id: ID) {\n  usersPermissionsUser(id: $id) {\n    data {\n      id\n      attributes {\n        grade\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getUsersByLineId($lineId: String) {\n  usersPermissionsUsers(filters: {line_id: {eq: $lineId}}) {\n    data {\n      id\n      attributes {\n        username\n        email\n        confirmed\n        grade\n        student {\n          data {\n            id\n            attributes {\n              line_id\n              to_receive_job_info\n              grade_jp\n              department_jp\n              grade_updated_at\n              name\n              registered_at\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getUsersByLineId($lineId: String) {\n  usersPermissionsUsers(filters: {line_id: {eq: $lineId}}) {\n    data {\n      id\n      attributes {\n        username\n        email\n        confirmed\n        grade\n        student {\n          data {\n            id\n            attributes {\n              line_id\n              to_receive_job_info\n              grade_jp\n              department_jp\n              grade_updated_at\n              name\n              registered_at\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation postVisitCount($id: ID!, $date: DateTime) {\n  createVisitCount(data: {student: $id, date: $date}) {\n    data {\n      id\n      attributes {\n        date\n      }\n    }\n  }\n}\n\nquery getVisitCountsByStudentId($id: ID!) {\n  visitCounts(filters: {student: {id: {eq: $id}}}, pagination: {limit: -1}) {\n    data {\n      id\n      attributes {\n        date\n      }\n    }\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}\n\nquery getVisitCountTotalByStudentId($id: ID!) {\n  visitCounts(filters: {student: {id: {eq: $id}}}, pagination: {limit: -1}) {\n    data {\n      id\n    }\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}\n\nquery getVisitCountsByStudentIdAndDates($id: ID!, $start_date: DateTime, $end_date: DateTime) {\n  visitCounts(\n    filters: {and: [{student: {id: {eq: $id}}}, {date: {lt: $end_date}}, {date: {gte: $start_date}}]}\n    pagination: {limit: -1}\n  ) {\n    data {\n      id\n      attributes {\n        date\n      }\n    }\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}"): (typeof documents)["mutation postVisitCount($id: ID!, $date: DateTime) {\n  createVisitCount(data: {student: $id, date: $date}) {\n    data {\n      id\n      attributes {\n        date\n      }\n    }\n  }\n}\n\nquery getVisitCountsByStudentId($id: ID!) {\n  visitCounts(filters: {student: {id: {eq: $id}}}, pagination: {limit: -1}) {\n    data {\n      id\n      attributes {\n        date\n      }\n    }\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}\n\nquery getVisitCountTotalByStudentId($id: ID!) {\n  visitCounts(filters: {student: {id: {eq: $id}}}, pagination: {limit: -1}) {\n    data {\n      id\n    }\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}\n\nquery getVisitCountsByStudentIdAndDates($id: ID!, $start_date: DateTime, $end_date: DateTime) {\n  visitCounts(\n    filters: {and: [{student: {id: {eq: $id}}}, {date: {lt: $end_date}}, {date: {gte: $start_date}}]}\n    pagination: {limit: -1}\n  ) {\n    data {\n      id\n      attributes {\n        date\n      }\n    }\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}"];

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