import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";
import { Router, Routes, Route, Link } from "@solidjs/router";
import { Games } from "bgg";

const root = document.getElementById("app") as HTMLDivElement;

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
				<Route path="/games/:username" component={Games} />
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
