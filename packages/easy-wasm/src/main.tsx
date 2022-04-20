import cx from "clsx";
import type { FC } from "react";
import { createRoot } from "react-dom/client";
import {
	BrowserRouter,
	Link,
	LinkProps,
	Route,
	Routes,
	useMatch,
	useResolvedPath,
} from "react-router-dom";
import * as extern from "./extern";
import "./index.css";
import { Async } from "./pages/Async";
import { ErrorPage } from "./pages/Error";
import { Regular } from "./pages/Regular";
import { Thread } from "./pages/Thread";

/* --- Extern --- */
// These functions will be called from Rust/Wasm
window.__extern__ = extern;

function CustomLink(props: LinkProps) {
	let resolved = useResolvedPath(props.to);
	let match = useMatch({ path: resolved.pathname, end: true });

	return (
		<Link
			to={props.to}
			className={cx("rounded-full", "px-3", "py-1", {
				"hover:bg-violet-200": !match,
				"bg-violet-600": match,
				"text-white": match,
			})}
		>
			{props.children}
		</Link>
	);
}

const App: FC = () => {
	return (
		<BrowserRouter>
			<h1 className="text-3xl mb-3 font-semibold">Easy WebAssembly</h1>
			<nav className="inline-flex gap-1 bg-violet-50 rounded-full p-1 mb-4 border-2 border-violet-200">
				<CustomLink to={"/"}>Regular</CustomLink>
				<CustomLink to={"/async"}>Async</CustomLink>
				<CustomLink to={"/error"}>Error</CustomLink>
				<CustomLink to={"/thread"}>Thread</CustomLink>
			</nav>
			<Routes>
				<Route path="/" element={<Regular />} />
				<Route path="/async" element={<Async />} />
				<Route path="/error" element={<ErrorPage />} />
				<Route path="/thread" element={<Thread />} />
			</Routes>
		</BrowserRouter>
	);
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
