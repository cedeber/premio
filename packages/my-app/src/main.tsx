import { locale } from "@cedeber/frontafino";
import { FC, StrictMode, useEffect, useMemo, useState } from "react";
import { I18nProvider } from "react-aria";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context";
import "./index.scss";
import { Basic } from "./pages/Basic";

const App: FC = () => {
	const lang = useMemo(() => locale(["en", "fr"]), []);
	const [swRegistration, setSwRegistration] = useState<GlobalContext["swRegistration"]>(null);

	useEffect(() => {
		// Service Worker
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

						setSwRegistration(registration);

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
	}, []);

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
			});
	}, []);

	return (
		<StrictMode>
			<GlobalContext.Provider value={{ swRegistration, lang }}>
				<I18nProvider locale={lang}>
					<BrowserRouter basename={process.env.BASE_URL}>
						-- {hello} --
						<Routes>
							<Route path="/" element={<Basic />} />
						</Routes>
					</BrowserRouter>
				</I18nProvider>
			</GlobalContext.Provider>
		</StrictMode>
	);
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
