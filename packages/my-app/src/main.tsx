import type { VFC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import * as extern from "./extern";
import { Basic } from "./pages/Basic";
import { Failures } from "./pages/Failures";
import { threads, simd } from "wasm-feature-detect";
import "./reset.scss";
import MyThreadsWorker from "./worker_threads?worker";

/* --- Extern --- */
// These functions will be called from Rust/Wasm
window.__extern__ = extern;

const App: VFC = () => {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Menu />
			<Routes>
				<Route path="/failures" element={<Failures />} />
				<Route path="/" element={<Basic />} />
			</Routes>
		</BrowserRouter>
	);
};

// Service Worker
if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("./service_worker.js").then(
		function (registration) {
			// Registration was successful
			console.log("ServiceWorker registration successful with scope: ", registration.scope);

			fetch("/.ping/whatever")
				.then((response) => response.text())
				.then((data) => console.log("sw", data));
		},
		function (err) {
			// registration failed :(
			console.warn("ServiceWorker registration failed: ", err);
		},
	);
}

ReactDOM.render(<App />, document.getElementById("app"));

async function main() {
	// no SharedArrayBuffer -> no Threads
	console.log("SharedArrayBuffer", !!window.SharedArrayBuffer);

	const hasThreads = await threads();
	const hasSimd = await simd();

	console.log("Threads", hasThreads, navigator.hardwareConcurrency ?? 4);
	console.log("SIMD", hasSimd);

	new MyThreadsWorker();
}

main();
