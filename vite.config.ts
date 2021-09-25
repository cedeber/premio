import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";

console.log(process.env.PUBLIC_URL);

export default defineConfig({
    plugins: [reactRefresh()],
    base: `${process.env.PUBLIC_URL ?? ""}/`,
    css: { modules: { localsConvention: "camelCase" } },
});
