import { GraphQLClient } from "graphql-request";
import { getSdk } from "./games.gql.js";
import { Accessor, createSignal } from "solid-js";
import { useParams } from "@solidjs/router";
import style from "./games.module.scss";

const client = new GraphQLClient("http://localhost:4000/graphql", { headers: {} });
const { Games } = getSdk(client);

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

	query
		.then(setData)
		.catch(setError)
		.then(() => setLoading(false));

	return { loading, data, error };
};

const GamesPage = () => {
	const { username } = useParams<{ username: string }>();

	const { loading, data, error } = loadGraphql(Games({ username }));

	return (
		<main>
			<h1>Games for {username}</h1>
			{loading() && <div>Loading...</div>}
			{error() && <div>{error}</div>}
			<div>
				{data()?.games?.map((game) => (
					<div class={style.game}>{game.name}</div>
				))}
			</div>
		</main>
	);
};

export { GamesPage };
