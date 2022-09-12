import { Route, Router, Routes, useMatch, useNavigate } from "@solidjs/router";
import { lazy, Suspense } from "solid-js";
import { render } from "solid-js/web";
import { ActionButton, ActionButtonIntent } from "widgets";
import { OverlayProvider } from "@solid-aria/primitives";

const root = document.getElementById("app") as HTMLDivElement;
const Games = lazy(() => import("@premio/games"));
const Components = lazy(() => import("./pages/Components"));

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
				<Route path="/" component={Components} />
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
			<OverlayProvider>
				<App />
			</OverlayProvider>
		</Router>
	),
	root,
);
