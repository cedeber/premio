import { useParams } from "@solidjs/router";
import { GraphQLClient } from "graphql-request";
import { Accessor, createSignal } from "solid-js";

import { getSdk } from "./games.gql.js";
import style from "./games.module.scss";

const { hostname } = window.location;
// const client = new GraphQLClient(`//${hostname}:${import.meta.env.VITE_PORT}/graphql`, {
const client = new GraphQLClient(`//${hostname}/graphql`, {
	// headers: {},
});
const sdk = getSdk(client);

const loadGraphql = <T extends object>(
	query: Promise<T>,
): {
	loading: Accessor<boolean>;
	data: Accessor<T | undefined>;
	error: Accessor<any>;
} => {
	const [loading, setLoading] = createSignal<boolean>(true);
	const [data, setData] = createSignal<T>();
	const [error, setError] = createSignal<any>();

	void query
		.then(setData)
		.catch(setError)
		.then(() => setLoading(false));

	return { loading, data, error };
};

const GamesPage = () => {
	const { username } = useParams<{ username: string }>();
	const { loading, data, error } = loadGraphql(sdk.Games({ username }));

	return (
		<main>
			<h1>Games for {username}</h1>
			{loading() && <div>Loading...</div>}
			{error() && <div>{error}</div>}
			<div>
				{data()?.games?.map((game) => (
					<div class={style.gameLine}>{game.name}</div>
				))}
			</div>
		</main>
	);
};

export { GamesPage };
