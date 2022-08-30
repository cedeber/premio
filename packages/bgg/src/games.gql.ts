import type * as Types from './graphql';

import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type GamesQueryVariables = Types.Exact<{
  username?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GamesQuery = { __typename?: 'Query', games: Array<{ __typename?: 'BoardGame', id: number, name: string }> };

export type UsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', username: string }> };


export const GamesDocument = gql`
    query Games($username: String) {
  games(username: $username) {
    id
    name
  }
}
    `;
export const UsersDocument = gql`
    query Users {
  users {
    username
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Games(variables?: GamesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GamesQuery>(GamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Games', 'query');
    },
    Users(variables?: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Users', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    