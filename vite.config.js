import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	clearScreen: false,
	server: {
		port: 3000,
		strictPort: true,
	},
	envPrefix: ["VITE_", "TAURI_"],
	root: "./packages/my-app/src",
	build: {
		// sourcemap: false,
		// minify: "esbuild",
		outDir: "../../../dist",
		emptyOutDir: true,
		cssCodeSplit: false,
		// target: "esnext",
		target: ["es2021", "chrome97", "safari13"],
		minify: !process.env.TAURI_DEBUG && "esbuild",
		sourcemap: !!process.env.TAURI_DEBUG,
	},
	esbuild: {
		legalComments: "none",
		target: "esnext",
	},
	optimizeDeps: {
		esbuildOptions: {
			target: "esnext",
		},
	},
	plugins: [
		react(),
		svgr({ icon: true }),
		{
			name: "configure-response-headers",
			configureServer: (server) => {
				server.middlewares.use((_req, res, next) => {
					res.setHeader("Cross-Origin-Embedder-Policy", " require-corp");
					res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
					next();
				});
			},
		},
	],
});
