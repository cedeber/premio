module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,html}", "../easy-wasm/src/**/*.{js,ts,jsx,tsx,html}"],
	theme: {
		fontFamily: {
			sans: [
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
