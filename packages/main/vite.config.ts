import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import { fileURLToPath, URL } from "node:url";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		headers: {
			"Cross-Origin-Embedder-Policy": " require-corp",
			"Cross-Origin-Opener-Policy": "same-origin",
		},
	},
	build: {
		outDir: "../../dist",
		emptyOutDir: true,
		target: ["es2021", "safari16"],
	},
	esbuild: {
		legalComments: "none",
	},
	worker: {
		format: "es",
	},
	css: {
		postcss: {
			plugins: [
				autoprefixer({
					overrideBrowserslist:
						"> 0.2% and supports es6-module and last 5 versions and not dead",
				}),
				tailwindcss(),
			],
		},
	},
});
