import { GraphQLClient } from "graphql-request";
import { GamesQuery, getSdk } from "./games.gql.js";
import { createSignal } from "solid-js";
import { useParams } from "@solidjs/router";

const client = new GraphQLClient("http://localhost:4000/graphql", { headers: {} });
const sdk = getSdk(client);

const Games = () => {
	const { username } = useParams<{ username: string }>();
	const [data, setData] = createSignal<GamesQuery>();

	sdk.Games({ username }).then(setData);

	return (
		<main>
			<h1 class="text-3xl font-bold underline">Games for {username}</h1>
			<div>
				{data()?.games?.map((game) => (
					<p>{game.name}</p>
				))}
			</div>
		</main>
	);
};

export { Games };
