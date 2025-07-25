/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query GetOrganization($login: String!) {\n  organization(login: $login) {\n    id\n    name\n    description\n  }\n}": typeof types.GetOrganizationDocument,
    "query GetRepo($id: ID!) {\n  node(id: $id) {\n    ... on Repository {\n      id\n      name\n      description\n      createdAt\n      url\n      stargazerCount\n      forkCount\n      owner {\n        login\n      }\n      primaryLanguage {\n        name\n        color\n      }\n    }\n  }\n}": typeof types.GetRepoDocument,
    "query GetRepos($login: String!) {\n  user(login: $login) {\n    repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {\n      nodes {\n        id\n        name\n        updatedAt\n      }\n    }\n  }\n}": typeof types.GetReposDocument,
};
const documents: Documents = {
    "query GetOrganization($login: String!) {\n  organization(login: $login) {\n    id\n    name\n    description\n  }\n}": types.GetOrganizationDocument,
    "query GetRepo($id: ID!) {\n  node(id: $id) {\n    ... on Repository {\n      id\n      name\n      description\n      createdAt\n      url\n      stargazerCount\n      forkCount\n      owner {\n        login\n      }\n      primaryLanguage {\n        name\n        color\n      }\n    }\n  }\n}": types.GetRepoDocument,
    "query GetRepos($login: String!) {\n  user(login: $login) {\n    repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {\n      nodes {\n        id\n        name\n        updatedAt\n      }\n    }\n  }\n}": types.GetReposDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOrganization($login: String!) {\n  organization(login: $login) {\n    id\n    name\n    description\n  }\n}"): (typeof documents)["query GetOrganization($login: String!) {\n  organization(login: $login) {\n    id\n    name\n    description\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRepo($id: ID!) {\n  node(id: $id) {\n    ... on Repository {\n      id\n      name\n      description\n      createdAt\n      url\n      stargazerCount\n      forkCount\n      owner {\n        login\n      }\n      primaryLanguage {\n        name\n        color\n      }\n    }\n  }\n}"): (typeof documents)["query GetRepo($id: ID!) {\n  node(id: $id) {\n    ... on Repository {\n      id\n      name\n      description\n      createdAt\n      url\n      stargazerCount\n      forkCount\n      owner {\n        login\n      }\n      primaryLanguage {\n        name\n        color\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRepos($login: String!) {\n  user(login: $login) {\n    repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {\n      nodes {\n        id\n        name\n        updatedAt\n      }\n    }\n  }\n}"): (typeof documents)["query GetRepos($login: String!) {\n  user(login: $login) {\n    repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {\n      nodes {\n        id\n        name\n        updatedAt\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;