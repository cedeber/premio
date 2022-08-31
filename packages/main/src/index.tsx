import { createSignal, lazy, onCleanup, Suspense } from "solid-js";
import { render } from "solid-js/web";
import { Link, Route, Router, Routes } from "@solidjs/router";

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
				<Route path="/" element={<div>home</div>} />
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
