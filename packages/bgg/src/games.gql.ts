import type * as Types from "../../../graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GamesQueryVariables = Types.Exact<{
	username?: Types.InputMaybe<Types.Scalars["String"]>;
}>;

export type GamesQuery = {
	__typename?: "Query";
	games: Array<{ __typename?: "BoardGame"; id: number; name: string }>;
};

export type UsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UsersQuery = {
	__typename?: "Query";
	users: Array<{ __typename?: "User"; username: string }>;
};

export const GamesDocument = gql`
	query Games($username: String) {
		games(username: $username) {
			id
			name
		}
	}
`;

/**
 * __useGamesQuery__
 *
 * To run a query within a React component, call `useGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGamesQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGamesQuery(
	baseOptions?: Apollo.QueryHookOptions<GamesQuery, GamesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GamesQuery, GamesQueryVariables>(GamesDocument, options);
}
export function useGamesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GamesQuery, GamesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GamesQuery, GamesQueryVariables>(GamesDocument, options);
}
export type GamesQueryHookResult = ReturnType<typeof useGamesQuery>;
export type GamesLazyQueryHookResult = ReturnType<typeof useGamesLazyQuery>;
export type GamesQueryResult = Apollo.QueryResult<GamesQuery, GamesQueryVariables>;
export const UsersDocument = gql`
	query Users {
		users {
			username
		}
	}
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
	baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
}
export function useUsersLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;

export interface PossibleTypesResultData {
	possibleTypes: {
		[key: string]: string[];
	};
}
const result: PossibleTypesResultData = {
	possibleTypes: {},
};
export default result;
