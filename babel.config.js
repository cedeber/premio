module.exports = {
    presets: [
        "@docusaurus/core/lib/babel/preset",
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
        /**
         * Force the usage of the new JSX Runtime.
         * Will be the default for Babel 8
         * @see https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
         * @see https://www.typescriptlang.org/tsconfig#jsx
         */
        ["@babel/preset-react", { runtime: "automatic" }],
        "babel-preset-vite",
    ],
};
