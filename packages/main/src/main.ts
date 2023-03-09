import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// if ("serviceWorker" in navigator) {
// 	navigator.serviceWorker
// 		.register(new URL("../service_worker.ts", import.meta.url), { type: "module", scope: "/" })
// 		.then(
// 			function (registration) {
// 				// Registration was successful
// 				console.log(
// 					"ServiceWorker registration successful with scope: ",
// 					registration.scope,
// 				);
// 				// setSwRegistration(registration);
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

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
