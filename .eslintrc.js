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
		"plugin:jsx-a11y/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
		extraFileExtensions: [".jpg", ".png", ".svg", ".css", ".scss", ".woff", ".woff2"],
	},
	plugins: ["@typescript-eslint", "jsx-a11y"],
	rules: {
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				varsIgnorePattern: "^_",
				argsIgnorePattern: "^_",
			},
		],
	},
};
