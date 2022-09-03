import { Link, Route, Router, Routes } from "@solidjs/router";
import { createSignal, lazy, onCleanup, Suspense } from "solid-js";
import { render } from "solid-js/web";
import { Button, ButtonIconPlacement, ButtonIntent } from "widgets";

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
							<Button
								label={"Filled"}
								onPress={() => {
									console.log("click");
								}}
							/>
							<Button label={"Filled"} onPress={() => {}} progress={-1} />
							<Button
								label={"Tinted"}
								intent={ButtonIntent.Tinted}
								onPress={() => {}}
							/>
							<Button label={"Gray"} intent={ButtonIntent.Gray} onPress={() => {}} />
							<Button
								label={"Outlined"}
								intent={ButtonIntent.Outlined}
								onPress={() => {}}
								icon={"arrow_right_alt"}
								iconPlacement={ButtonIconPlacement.Right}
							/>
							<Button
								label={"Plain"}
								intent={ButtonIntent.Plain}
								onPress={() => {}}
							/>
							|
							<Button
								label={"Danger"}
								intent={ButtonIntent.Danger}
								onPress={() => {}}
								icon="delete"
							/>
							|
							<Button label={"Disabled"} onPress={() => {}} isDisabled />
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
