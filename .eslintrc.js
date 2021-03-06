module.exports = {
	env: {
		browser: true,
		worker: true,
		serviceworker: true,
		node: true,
		es6: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/jsx-runtime",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
		extraFileExtensions: [".jpg", ".png", ".svg", ".css", ".scss", ".woff", ".woff2"],
	},
	plugins: ["@typescript-eslint", "react", "react-hooks", "prettier", "jsx-a11y"],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"prettier/prettier": "off",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				varsIgnorePattern: "^_",
				argsIgnorePattern: "^_",
			},
		],
		"react/prop-types": "off",
		// Replaced by TypeScript
		"react/jsx-uses-react": "off",
		// New JSX runtime @see https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#how-to-upgrade-to-the-new-jsx-transform
		"react/react-in-jsx-scope": "off",
		// Managed by "react-jsx" in tsconfig
	},
};
