import { Link, Route, Router, Routes } from "@solidjs/router";
import { createSignal, lazy, onCleanup, Suspense } from "solid-js";
import { render } from "solid-js/web";
import { ActionButton, ActionButtonIconPlacement, ActionButtonIntent } from "widgets";

const root = document.getElementById("app") as HTMLDivElement;
const Games = lazy(() => import("@premio/games"));

const App = () => {
	const [count, setCount] = createSignal(0);
	const timer = setInterval(() => setCount(count() + 1), 1000);

	onCleanup(() => clearInterval(timer));

	return (
		<div class={"hello"}>
			{count}
			<nav>
				<Link href="/about">About</Link>
				<Link href="/">Home</Link>
				<Link href="/games/cedeber">Games</Link>
			</nav>
			<Routes>
				<Route
					path="/"
					element={
						<div
							style={{
								display: "flex",
								gap: "10px",
								margin: "10px",
								"align-items": "center",
							}}
						>
							<ActionButton
								label={"Filled"}
								onPress={() => {
									console.log("click");
								}}
							/>
							<ActionButton label={"Filled"} onPress={() => {}} progress={-1} />
							<ActionButton
								label={"Tinted"}
								intent={ActionButtonIntent.Tinted}
								onPress={() => {}}
							/>
							<ActionButton
								label={"Gray"}
								intent={ActionButtonIntent.Gray}
								onPress={() => {}}
							/>
							<ActionButton
								label={"Outlined"}
								intent={ActionButtonIntent.Outlined}
								onPress={() => {}}
								icon={"arrow_right_alt"}
								iconPlacement={ActionButtonIconPlacement.Right}
							/>
							<ActionButton
								label={"Plain"}
								intent={ActionButtonIntent.Plain}
								onPress={() => {}}
							/>
							|
							<ActionButton
								label={"Danger"}
								intent={ActionButtonIntent.Danger}
								onPress={() => {}}
								icon="delete"
							/>
							|
							<ActionButton label={"Disabled"} onPress={() => {}} isDisabled />
						</div>
					}
				/>
				<Route path="/about" element={<div>about</div>} />
				<Route
					path="/games/:username"
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<Games />
						</Suspense>
					}
				/>
			</Routes>
		</div>
	);
};

render(
	() => (
		<Router>
			<App />
		</Router>
	),
	root,
);
