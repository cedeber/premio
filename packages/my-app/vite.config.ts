import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	base: `${process.env.PUBLIC_URL ?? ""}/`,
	css: { modules: { localsConvention: "camelCaseOnly" } },
	plugins: [
		solidPlugin(),
		{
			name: "configure-response-headers",
			configureServer: (server) => {
				server.middlewares.use((_req, res, next) => {
					// Needed to activate SharedArrayBuffer and Wasm Threads
					res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
					res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
					next();
				});
			},
		},
	],
	build: {
		target: "esnext",
		polyfillDynamicImport: false,
	},
	worker: {
		format: "es",
	},
});
