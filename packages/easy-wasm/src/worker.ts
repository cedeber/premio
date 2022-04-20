import init, { fib } from "wasm_async";
import * as extern from "./extern";

// Declare ctx as Worker and not as Window
const ctx = self as unknown as Worker;

/* --- Extern --- */
// These functions will be called from Rust/Wasm
ctx.__extern__ = extern;

/* --- Worker --- */
ctx.addEventListener("message", async (event) => {
	const { a } = event.data;

	// Unfortunately we need to instanciate the WASM module every time.
	// TODO: Can we do it differently?
	await init();

	const result = fib(a);
	ctx.postMessage(result);
});
