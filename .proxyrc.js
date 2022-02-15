module.exports = function (app) {
	app.use((_req, res, next) => {
		// These headers are mandatory to activate Shared Array Buffer, WebAssembly Threads
		// because it was deactivated after the Spectre/Meltdown issue discovery.
		res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
		res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
		// res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
		next();
	});
};
