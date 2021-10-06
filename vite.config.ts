import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [reactRefresh()],
    esbuild: {
        jsxInject: 'import React from "react";',
    },
    base: `${process.env.PUBLIC_URL ?? ""}/`,
    css: { modules: { localsConvention: "camelCaseOnly" } },
});
