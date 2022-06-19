import { useGamesQuery } from "./games.gql.js";
import type { FC } from "react";
import { useParams } from "react-router";
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
	uri: "http://localhost:4000/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
		);

	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
	link: from([errorLink, httpLink]),
	cache: new InMemoryCache(),
});

const Inside: FC = () => {
	const { username } = useParams<{ username: string }>();
	const { loading, error, data } = useGamesQuery({ variables: { username } });

	return (
		<main>
			<h1 className="text-3xl font-bold underline">Games for {username}</h1>
			<div>
				{loading && "Loading..."}
				{error && <p>Error: {error.message}</p>}
				<>
					{data?.games?.map((game) => (
						<p key={game.id}>{game.name}</p>
					))}
				</>
			</div>
		</main>
	);
};

const Games: FC = () => {
	return (
		<ApolloProvider client={client}>
			<Inside />
		</ApolloProvider>
	);
};

export { Games };
