import { locale } from "@cedeber/frontafino";
import { AsyncPage, CustomLink, ErrorPage, extern, RegularPage, ThreadPage } from "easy-wasm";
import { FC, StrictMode, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context.js";
import "./index.scss";

/* --- Extern --- */
// These functions will be called from Rust/Wasm
window.__extern__ = extern;

const App: FC = () => {
	const lang = useMemo<string>(() => locale(["en", "fr"]), []);
	const [swRegistration, setSwRegistration] = useState<GlobalContext["swRegistration"]>(null);

	// useEffect(() => {
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
	// 				setSwRegistration(registration);
	// 				void fetch("/.ping/whatever")
	// 					.then((response) => response.text())
	// 					.then((data) => console.log("sw", data));
	// 			},
	// 			function (err) {
	// 				// registration failed :(
	// 				console.warn("ServiceWorker registration failed: ", err);
	// 			},
	// 		);
	// }
	// }, []);

	useEffect(() => {
		document.documentElement.setAttribute("lang", lang);
	}, [lang]);

	// Simple test of the axum web server
	const [hello, setHello] = useState<string>();

	useEffect(() => {
		fetch("http://localhost:4000/hello")
			.then((response) => response.text())
			.then((data) => {
				setHello(data);
			})
			.catch(() => {
				/* nothing to do */
			});
	}, []);

	return (
		<StrictMode>
			<GlobalContext.Provider value={{ swRegistration, lang }}>
				{/* process.env.BASE_URL */}
				<BrowserRouter basename={import.meta.env.BASE_URL}>
					{hello}
					<h1 className="mb-3 text-3xl font-semibold">Easy WebAssembly</h1>
					<nav className="mb-4 inline-flex gap-1 rounded-full border-2 border-violet-200 bg-violet-50 p-1">
						<CustomLink to={"/"}>Regular</CustomLink>
						<CustomLink to={"/async"}>Async</CustomLink>
						<CustomLink to={"/error"}>Error</CustomLink>
						<CustomLink to={"/thread"}>Thread</CustomLink>
					</nav>
					<Routes>
						<Route path="/" element={<RegularPage />} />
						<Route path="/async" element={<AsyncPage />} />
						<Route path="/error" element={<ErrorPage />} />
						<Route path="/thread" element={<ThreadPage />} />
					</Routes>
				</BrowserRouter>
			</GlobalContext.Provider>
		</StrictMode>
	);
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
