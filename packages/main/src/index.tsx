import { Link, Route, Router, Routes, useMatch, useNavigate } from "@solidjs/router";
import { lazy, Suspense } from "solid-js";
import { render } from "solid-js/web";
import { ActionButton, ActionButtonIconPlacement, ActionButtonIntent } from "widgets";

const root = document.getElementById("app") as HTMLDivElement;
const Games = lazy(() => import("@premio/games"));

const ButtonLink = (props: { href: string; label: string }) => {
	const match = useMatch(() => props.href);
	const navigate = useNavigate();

	return (
		<ActionButton
			label={props.label}
			onPress={() => {
				navigate(props.href);
			}}
			intent={Boolean(match()) ? ActionButtonIntent.Tinted : ActionButtonIntent.Gray}
		/>
	);
};

const App = () => {
	return (
		<div class={"hello"}>
			<nav
				style={{
					display: "flex",
					gap: "10px",
					margin: "20px 10px",
					"justify-content": "center",
				}}
			>
				<ButtonLink href="/" label="Components" />
				<ButtonLink href="/games/cedeber" label="Games (GraphQL)" />
			</nav>
			<Routes base={import.meta.env.BASE_URL}>
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

if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register(new URL("./service_worker.ts", import.meta.url), { type: "module" })
		.then(
			function (registration) {
				// Registration was successful
				console.log(
					"ServiceWorker registration successful with scope: ",
					registration.scope,
				);
				// setSwRegistration(registration);
				void fetch("/.ping/whatever")
					.then((response) => response.text())
					.then((data) => console.log("sw", data));
			},
			function (err) {
				// registration failed :(
				console.warn("ServiceWorker registration failed: ", err);
			},
		);
}

render(
	() => (
		<Router>
			<App />
		</Router>
	),
	root,
);
