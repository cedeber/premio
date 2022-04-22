import init, { initThreadPool, par_sum, sum } from "wasm_sum";

// Declare ctx as Worker and not as Window
const ctx = self as unknown as Worker;

// eslint-disable-next-line @typescript-eslint/no-misused-promises
ctx.addEventListener("message", async (event) => {
	const multi: boolean = event.data as boolean;

	try {
		await init();
		await initThreadPool(navigator.hardwareConcurrency ?? 4);

		if (multi) {
			const result = await par_sum();
			ctx.postMessage({ result, multi });
		} else {
			const result = sum();
			ctx.postMessage({ result, multi });
		}
	} catch (e) {
		ctx.postMessage({ error: (e as Error).message });
	}
});
