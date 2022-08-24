module.exports = {
	client: {
		service: {
			name: "premio",
			url: "http://localhost:4000/graphql",
			// optional headers
			headers: {},
			// optional disable SSL validation check
			skipSSLValidation: true,
		},
		includes: ["./packages/**/*.graphql"],
		excludes: ["**/__tests__/**"],
	},
};
