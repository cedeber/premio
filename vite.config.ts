import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [reactRefresh()],
    base: "./",
    css: { modules: { localsConvention: "camelCase" } },
});
