import { defineConfig, UserConfig } from "vite";
// import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
    const config: UserConfig = {
        base: `${process.env.PUBLIC_URL ?? ""}/`,
        css: { modules: { localsConvention: "camelCaseOnly" } },
    };

    if (command === "build") {
        return {
            ...config,
            esbuild: { jsxInject: 'import React from "react";' },
        };
    } else {
        return { ...config, plugins: [react()] };
    }
});
