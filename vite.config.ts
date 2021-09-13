import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [reactRefresh()],
    base: "./",
    css: { modules: { localsConvention: "camelCase" } },
});
