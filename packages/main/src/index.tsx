import { OverlayProvider } from "@solid-aria/primitives";
import { Route, Router, Routes, useMatch, useNavigate } from "@solidjs/router";
import { lazy, Suspense } from "solid-js";
import { render } from "solid-js/web";
import { ActionButton, ActionButtonIntent } from "widgets";

const root = document.getElementById("app") as HTMLDivElement;
const Games = lazy(() => import("@premio/games"));
const Components = lazy(() => import("./pages/Components"));

const ButtonLink = (props: { href: string; label: string; icon?: string }) => {
	const match = useMatch(() => props.href);
	const navigate = useNavigate();

	return (
		<ActionButton
			icon={props.icon}
			label={props.label}
			onPress={() => {
				navigate(props.href);
			}}
			intent={match() ? ActionButtonIntent.Tinted : ActionButtonIntent.Gray}
		/>
	);
};

const App = () => (
	<div class={"hello"}>
		<nav
			style={{
				display: "flex",
				gap: "10px",
				margin: "20px 10px",
				"justify-content": "center",
			}}
		>
			<ButtonLink href="/" label="Design System (SolidJS)" />
			<ButtonLink href="/games/cedeber" label="Board Game Geek (GraphQL)" />
		</nav>
		<Routes>
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
		<Router base={import.meta.env.VITE_BASE_URL}>
			<OverlayProvider>
				<App />
			</OverlayProvider>
		</Router>
	),
	root,
);
