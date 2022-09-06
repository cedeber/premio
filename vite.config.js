import { defineConfig } from "vite";
// import basicSsl from "@vitejs/plugin-basic-ssl";
import solid from "vite-plugin-solid";

export default defineConfig({
	clearScreen: false,
	server: {
		port: 3000,
		strictPort: true,
		headers: {
			"Cross-Origin-Embedder-Policy": " require-corp",
			"Cross-Origin-Opener-Policy": "same-origin",
		},
	},
	root: "./packages/main/src",
	build: {
		outDir: "../../../dist",
		emptyOutDir: true,
		cssCodeSplit: false,
		target: ["es2021", "chrome97", "safari13"],
	},
	css: { modules: { localsConvention: "camelCase" } },
	esbuild: {
		legalComments: "none",
		// target: "esnext",
	},
	optimizeDeps: {
		esbuildOptions: {
			// target: "esnext",
		},
	},
	plugins: [solid()],
});
