import init, { fib } from "@/wasm/async/async";
import * as extern from "@/utils/extern";

// Declare ctx as Worker and not as Window
const ctx = self as unknown as Worker;

/* --- Extern --- */
// These functions will be called from Rust/Wasm
ctx.__extern__ = extern;

/* --- Worker --- */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
ctx.addEventListener("message", async (event: MessageEvent<{ a: number }>) => {
	const { a } = event.data;

	// Unfortunately we need to instantiate the WASM module every time.
	await init();

	const result = fib(a);
	ctx.postMessage(result);
});
