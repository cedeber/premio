import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";

const root = document.getElementById("app") as HTMLDivElement;

const App = () => {
	const [count, setCount] = createSignal(0);
	const timer = setInterval(() => setCount(count() + 1), 1000);

	onCleanup(() => clearInterval(timer));

	return <div>{count}</div>;
};

render(App, root);
