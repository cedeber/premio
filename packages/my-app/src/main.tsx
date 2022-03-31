import { locale } from "@cedeber/frontafino";
import { StrictMode, useEffect, useMemo, useState, VFC } from "react";
import { I18nProvider } from "react-aria";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { simd, threads } from "wasm-feature-detect";
import { Menu } from "widgets";
import * as extern from "./extern";
import "./index.scss";
import { Basic } from "./pages/Basic";
import { Failures } from "./pages/Failures";

/* --- Extern --- */
// These functions will be called from Rust/Wasm
window.__extern__ = extern;

const App: VFC = () => {
	const lang = useMemo(() => locale(["en", "fr"]), []);

	useEffect(() => {
		document.documentElement.setAttribute("lang", lang);
	}, [lang]);

	const [hello, setHello] = useState<string>();

	useEffect(() => {
		fetch("http://localhost:4000/hello")
			.then((response) => response.text())
			.then((data) => {
				setHello(data);
			});
	}, []);

	return (
		<StrictMode>
			<I18nProvider locale={lang}>
				<BrowserRouter basename={process.env.BASE_URL}>
					-- {hello} --
					<Menu />
					<Routes>
						<Route path="/failures" element={<Failures />} />
						<Route path="/" element={<Basic />} />
					</Routes>
				</BrowserRouter>
			</I18nProvider>
		</StrictMode>
	);
};

// Service Worker
// if ("serviceWorker" in navigator) {
// 	navigator.serviceWorker
// 		.register(new URL("./service_worker.ts", import.meta.url), { type: "module" })
// 		.then(
// 			function (registration) {
// 				// Registration was successful
// 				console.log(
// 					"ServiceWorker registration successful with scope: ",
// 					registration.scope,
// 				);

// 				fetch("/.ping/whatever")
// 					.then((response) => response.text())
// 					.then((data) => console.log("sw", data));
// 			},
// 			function (err) {
// 				// registration failed :(
// 				console.warn("ServiceWorker registration failed: ", err);
// 			},
// 		);
// }

const root = createRoot(document.getElementById("app")!);
root.render(<App />);

async function main() {
	// no SharedArrayBuffer -> no Threads
	console.log("SharedArrayBuffer", !!window.SharedArrayBuffer);

	const hasThreads = await threads();
	const hasSimd = await simd();

	console.log("Threads", hasThreads, navigator.hardwareConcurrency ?? 4);
	console.log("SIMD", hasSimd);

	new Worker(new URL("./workers/worker_threads.ts", import.meta.url), { type: "module" });
}

main();
